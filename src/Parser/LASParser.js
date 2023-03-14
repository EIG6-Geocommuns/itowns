import * as THREE from 'three';
import { LASLoader } from '@loaders.gl/las';
import { getMeshBoundingBox } from '@loaders.gl/schema';
import { Binary, Las } from 'copc';

import * as LazPerf from 'laz-perf';

/** @type{LazPerf.LazPerf|null} */
let lazPerf = null;

/**
 * @param {function(number, number):Promise.<Uint8Array>} get
 */
async function create(get) {
    const header = Las.Header.parse(await get(0, Las.Constants.minHeaderLength));
    const vlrs = await Las.Vlr.walk(get, header);

    let wkt;
    const wktVlr = Las.Vlr.find(vlrs, 'LASF_Projection', 2112);
    if (wktVlr) {
        wkt = Binary.toCString(await Las.Vlr.fetch(get, wktVlr));
    }

    let eb;
    const ebVlr = Las.Vlr.find(vlrs, 'LASF_Spec', 4);
    if (ebVlr) {
        eb = Las.ExtraBytes.parse(await Las.Vlr.fetch(get, ebVlr));
    }

    return { header, vlrs, wkt, eb };
}

/**
 * @param {function(number, number):Promise.<Uint8Array>} get
 * @param {Las.Header} header - TODO: Minimize
 * @param {Object} chunk
 * @param {number} chunk.pointCount
 * @param {number} chunk.pointDataOffset
 * @param {number} chunk.pointDataLength
 * @param {LazPerf.LazPerf} [lazPerf]
 */
async function loadPointDataBuffer(
    get,
    { pointDataRecordFormat, pointDataRecordLength },
    { pointCount, pointDataOffset, pointDataLength },
    lazPerf,
) {
    const compressed =
        await get(pointDataOffset, pointDataOffset + pointDataLength);

    return Las.PointData.decompressChunk(
        compressed,
        { pointCount, pointDataRecordFormat, pointDataRecordLength },
        lazPerf,
    );
}

/**
 * @param {function(number, number):Promise.<Uint8Array>} get
 * @param {Object} las
 * @param {Las.Header} las.header
 * @param {Las.ExtraBytes[]=} las.eb
 * @param {Object} chunk
 * @param {number} chunk.pointCount
 * @param {number} chunk.pointDataOffset
 * @param {number} chunk.pointDataLength
 * @param {Object} [options]
 * @param {LazPerf.LazPerf} [options.lazPerf]
 */
async function loadPointXYZ(get, las, chunk, options = {}) {
    const buffer = await loadPointDataBuffer(get, las.header, chunk, options.lazPerf);
    return Las.Extractor.create(las.header, las.eb);
}

/**
 * @param {function(number, number):Promise.<Uint8Array>} get
 * @param {Object} las
 * @param {Las.Header} las.header
 * @param {Las.ExtraBytes[]=} las.eb
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
 * @param {function(number, number):Promise.<Uint8Array>} get
 * @param {Object} [options]
 * @param {boolean} [options.fp64]
 * @param {number|'auto'} [options.colorDepth]
 */
async function parseLAS(get, options = {}) {
    const las = await create(get);
    const dataView = await loadPointDataView(get, las, {
        pointCount: las.header.pointCount,
        pointDataOffset: las.header.pointDataOffset,
        pointDataLength: las.header.pointDataRecordFormat,
    });
    const getters = Object.fromEntries(
        Object.keys(dataView.dimensions).map(k => [k, dataView.getter(k)]),
    );

    // Initialize all
    const total = las.header.pointCount;
    const positions = new Float32Array(total * 3);
    const colors = getters.Red ? new Uint8Array(total * 4) : null;
    const intensities = new Uint16Array(total);
    const classifications = new Uint8Array(total);

    const loaderData = las.header;
    const attributes = {
        POSITION: { value: positions, size: 3 },
        COLOR_0: { value: colors, size: 4 },
        intensity: { value: intensities, size: 1 },
        classification: { value: classifications, size: 1 },
    };

    const {
        scale: [scaleX, scaleY, scaleZ],
        offset: [offsetX, offsetY, offsetZ],
    } = las.header;

    for (let i = 0; i < dataView.pointCount; ++i) {
        // TODO: Scale things
        positions[i * 3] = getters.X(i) * scaleX + offsetX;
        positions[i * 3 + 1] = getters.Y(i) * scaleY + offsetY;
        positions[i * 3 + 2] = getters.Z(i) * scaleZ + offsetZ;

        if (colors) {
            // TODO: Two bytes color
            colors[i * 4] = getters.Red(i) / 256;
            colors[i * 4 + 1] = getters.Green(i) / 256;
            colors[i * 4 + 2] = getters.Blue(i) / 256;

            colors[i * 4 + 3] = 255;
        }

        intensities[i] = getters.Intensity(i);
        classifications[i] = getters.Classification(i);
    }

    return {
        loader: 'las',
        loaderData,
        header: {
            vertexCount: las.header.pointCount,
            boundingBox: getMeshBoundingBox(attributes),
        },
        attributes,
        topology: 'point-list',
        mode: 0, // GL.POINTS
    };
}

/**
 * @param {ArrayBuffer} data
 */
async function parse2(data) {
    if (!lazPerf) {
        // /** @type{Partial<LazPerf.LazPerf>} */
        // const lazPerfConfig = {
        //     locateFile(_url, _scriptDirectory) {
        //         console.log(`url: ${lazPerfURL}`);
        //         return lazPerfURL;
        //     },
        // };

        // lazPerf = await LazPerf.createLazPerf(lazPerfConfig);
        lazPerf = await LazPerf.createLazPerf();
    }

    const view = new Uint8Array(data);
    const get = (/** @type {number} */begin, /** @type {number} */ end) =>
        Promise.resolve(view.subarray(begin, end));

    return parseLAS(get);
}

// See this document for LAS format specification
// https://www.asprs.org/wp-content/uploads/2010/12/LAS_1_4_r13.pdf
// http://www.cs.unc.edu/~isenburg/lastools/download/laszip.pdf

/**
 * The LASParser module provides a [parse]{@link module:LASParser.parse} method
 * that takes a LAS file or a LAZ (LASZip) file in, and gives a
 * `THREE.BufferGeometry` containing all the necessary attributes to be
 * displayed in iTowns. It uses the
 * [LASLoader](https://loaders.gl/modules/las/docs/api-reference/las-loader)
 * from `loaders.gl`.
 *
 * @module LASParser
 */
export default {
    /**
     * Parses a LAS file or a LAZ (LASZip) file and return the corresponding
     * `THREE.BufferGeometry`.
     *
     * @param {ArrayBuffer} data - The file content to parse.
     * @param {Object} [options] - Options to give to the parser.
     * @param {number|string} [options.in.colorDepth='auto'] - Does the color
     * encoding is known ? Is it `8` or `16` bits ? By default it is to
     * `'auto'`, but it will be more performant if a specific value is set.
     * @param {number} [options.out.skip=1] - Read one point from every `skip`
     * points.
     *
     * @return {Promise} A promise resolving with a `THREE.BufferGeometry`. The
     * header of the file is contained in `userData`.
     */
    parse(data, options = {}) {
        options.in = options.in || {};
        options.out = options.out || {};
        // return LASLoader.parse(data, {
        //     las: {
        //         colorDepth: options.in.colorDepth || 'auto',
        //         skip: options.out.skip || 1,
        //     },
        //     worker: true,
        //     reuseWorkers: false,
        //     maxConcurrency: navigator.hardwareConcurrency - 1,
        // }).then((parsedData) => {
        return parse2(data).then((parsedData) => {
            // attributes
            // attributes.COLOR_0: { value: Uint8Array() } // size: 4
            // attributes.POSITION: { value: Float32Array() } // size: 3
            // attributes.classification: { value: Uint8Array() } // size: 1
            // attributes.intensity: { value: Uint16Array(192) } // size: 1
            // header
            // header.vertexCount = nb of points = loaderData.nbPoint
            // header.boundingBox = Array[2][3] = loaderData.boudingBox
            // loaderData = Header LAS obtenu avec las-perf
            console.log(parsedData.attributes.POSITION.value[0]);
            const geometry = new THREE.BufferGeometry();
            geometry.userData = parsedData.loaderData;
            geometry.userData.vertexCount = parsedData.header.vertexCount;
            geometry.userData.boundingBox = parsedData.header.boundingBox;

            const positionBuffer = new THREE.BufferAttribute(parsedData.attributes.POSITION.value, 3, false);
            geometry.setAttribute('position', positionBuffer);

            const intensityBuffer = new THREE.BufferAttribute(parsedData.attributes.intensity.value, 1, true);
            geometry.setAttribute('intensity', intensityBuffer);

            const classificationBuffer = new THREE.BufferAttribute(parsedData.attributes.classification.value, 1, true);
            geometry.setAttribute('classification', classificationBuffer);

            if (parsedData.attributes.COLOR_0) {
                const colorBuffer = new THREE.BufferAttribute(parsedData.attributes.COLOR_0.value, 4, true);
                geometry.setAttribute('color', colorBuffer);
            }

            geometry.computeBoundingBox();

            return geometry;
        });
    },
};
