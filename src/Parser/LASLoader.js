import * as LazPerf from 'laz-perf';
import { Binary, Las } from 'copc';

/**
 * @typedef {Object} LasLoaderOptions
 */

/**
 * @typedef {Object} LASStruct
 * @property {Las.Header} header
 * @property {Las.Vlr[]} vlrs
 * @property {Las.ExtraBytes[]} eb
 * @property {string} [wkt]
 */

/**
 * @param {function(number, number):Promise.<Uint8Array>} get - Buffer
 * @returns {Promise<LASStruct>}
 */
async function create(get) {
    const header = Las.Header.parse(await get(0, Las.Constants.minHeaderLength));
    const vlrs = await Las.Vlr.walk(get, header);

    // Required: LAS 1.4
    const wktVlr = Las.Vlr.find(vlrs, 'LASF_Projection', 2112);
    const wkt = wktVlr && Binary.toCString(await Las.Vlr.fetch(get, wktVlr));

    // Optional: LAS 1.4
    const ebVlr = Las.Vlr.find(vlrs, 'LASF_Spec', 4);
    const eb = ebVlr ?
        Las.ExtraBytes.parse(await Las.Vlr.fetch(get, ebVlr)) : [];

    // Optional: LAS 1.4 (classification lookup)
    // const clVlr = Las.Vlr.find(vlrs, 'LASF_Spec', 0);
    // const truc = await Las.Vlr.fetch(get, clVlr);
    // function parseClassification(buffer) {
    //     if (buffer.byteLength % 16) { throw ('Invalid length'); }
    //     // uchar ClassNumber,
    //     // char Description[15];
    // String.fromCharCode(dv.get16Bytes);
    // }

    return { header, vlrs, eb, wkt };
}

/**
 * Load the memory chunk of compressed point data from [pointDataOffset] to
 * [pointDataOffset] + [pointDataLength].
 * @param {function(number, number):Promise<Uint8Array>} get - Buffer
 * @param {Object} chunk
 * @param {number} chunk.pointDataOffset - Offset from the beginning of the
 * buffer
 * @param {number} chunk.pointDataLength - Length of the compressed point data
 * @returns {Promise<Uint8Array>}
 */
async function loadCompressedPointDataBuffer(
    get,
    { pointDataOffset, pointDataLength },
) {
    return get(pointDataOffset, pointDataOffset + pointDataLength);
}

/**
 * @param {function(number, number):Promise.<Uint8Array>} get
 * @param {Las.Header} header
 * @param {Object} chunk
 * @param {number} chunk.pointCount
 * @param {number} chunk.pointDataOffset
 * @param {number} chunk.pointDataLength
 * @param {LazPerf.LazPerf} [lazPerf]
 */
async function loadPointDataBuffer(
    get,
    { pointDataRecordFormat, pointDataRecordLength },
    chunk,
    lazPerf,
) {
    const compressed = await loadCompressedPointDataBuffer(get, chunk);

    const { pointCount } = chunk;
    return Las.PointData.decompressChunk(
        compressed,
        { pointCount, pointDataRecordFormat, pointDataRecordLength },
        lazPerf,
    );
}

/**
 * @param {function(number, number):Promise.<Uint8Array>} get
 * @param {LASStruct} las
 * @param {Object} chunk
 * @param {number} chunk.pointCount
 * @param {number} chunk.pointDataOffset
 * @param {number} chunk.pointDataLength
 * @param {Object} [options]
 * @param {LazPerf.LazPerf} [options.lazPerf]
 */
async function loadPointDataView(get, las, chunk, options = {}) {
    const buffer = await loadPointDataBuffer(get, las.header, chunk, options.lazPerf);
    return Las.View.create(buffer, las.header, las.eb);
}

/**
 * @param {ArrayBuffer} arrayBuffer
 * @param {LasLoaderOptions} [options]
 * @returns {Promise<Object>}
 */
async function parseLAS(arrayBuffer, options = {}) {
    console.log('Starting parsing');

    const bytes = new Uint8Array(arrayBuffer);
    const header = Las.Header.parse(bytes);
    const pointData = await Las.PointData.decompressFile(bytes);

    const get = async (/** @type{number} */ begin, /** @type{number} */ end) =>
        bytes.slice(begin, end);
    const vlrs = await Las.Vlr.walk(get, header);
    const ebVlr = Las.Vlr.find(vlrs, 'LASF_Spec', 4);
    const eb = ebVlr ?
        Las.ExtraBytes.parse(await Las.Vlr.fetch(get, ebVlr)) : [];

    const view = Las.View.create(pointData, header, eb);
    const getPosition = ['X', 'Y', 'Z'].map(view.getter);
    const getClassification = ['Classification'].map(view.getter);
    const getIntensity = ['Intensity'].map(view.getter);
    const getColor = ['Red', 'Green', 'Blue'].map(view.getter);

    const positions = new Float32Array(view.pointCount * 3);
    const colors = new Uint8Array(view.pointCount * 4);
    const intensities = new Uint16Array(view.pointCount);
    const classifications = new Uint8Array(view.pointCount);

    const {
        scale: [scaleX, scaleY, scaleZ],
        offset: [offsetX, offsetY, offsetZ],
    } = header;

    for (let i = 0; i < view.pointCount; i++) {
        const [x, y, z] = getPosition.map(f => f(i)); // TODO
        const [classication] = getClassification.map(f => f(i));
        const [intensity] = getIntensity.map(f => f(i));
        const [r, g, b] = getColor.map(f => f(i));

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        colors[i * 4] = r;
        colors[i * 4 + 1] = g;
        colors[i * 4 + 2] = b;

        // colors[i * 4] = r / 256;
        // colors[i * 4 + 1] = g / 256;
        // colors[i * 4 + 2] = b / 256;

        colors[i * 4 + 3] = 255;

        intensities[i] = intensity;
        classifications[i] = classication;
    }

    return {
        loader: 'las',
        loaderData: header,
        header: {
            vertexCount: header.pointCount,
        },
        attributes: {
            POSITION: { value: positions, size: 3 },
            COLOR_0: { value: colors, size: 4 },
            intensity: { value: intensities, size: 1 },
            classification: { value: classifications, size: 1 },
        },
        topology: 'point-list',
        mode: 0,
    };
}

const Loader = {
    /**
     * @param {ArrayBuffer} arrayBuffer
     * @param {LasLoaderOptions} [options]
     * @returns {Promise<Object>}
     */
    parse: async (arrayBuffer, options) => parseLAS(arrayBuffer, options),
    /**
     * @param {ArrayBuffer} arrayBuffer
     * @param {LasLoaderOptions} [options]
     * @returns {Promise<Object>}
     */
    parseSync: (arrayBuffer, options) => parseLAS(arrayBuffer, options),
};

export default {
    LASLoader: Loader,
};
