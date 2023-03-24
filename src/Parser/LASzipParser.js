import { Las } from 'copc';
import * as THREE from 'three';

/**
 * @typedef {Object} LASZipAttributes
 * @property {Float32Array} position
 * @property {Uint8Array} color
 * @property {Uint16Array} intensity
 * @property {Uint8Array} classification
 */

/**
 * @param {Object} view
 * @param {number} view.pointCount
 * @param {function(string):function(number):number} view.getter
 * @param {Las.Header} header
 * @returns {LASZipAttributes}
 */
function parseView(view, header) {
    const getPosition = ['X', 'Y', 'Z'].map(view.getter);
    const getClassification = ['Classification'].map(view.getter);
    const getIntensity = ['Intensity'].map(view.getter);
    // const getColor = ['Red', 'Green', 'Blue'].map(view.getter);

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
        // const [r, g, b] = getColor.map(f => f(i));

        positions[i * 3] = x; //* scaleX + offsetX;
        positions[i * 3 + 1] = y; //* scaleY + offsetY;
        positions[i * 3 + 2] = z; // * scaleZ + offsetZ;

        // TODO: Color encoding
        // colors[i * 4] = r;
        // colors[i * 4 + 1] = g;
        // colors[i * 4 + 2] = b;

        // colors[i * 4] = r / 256;
        // colors[i * 4 + 1] = g / 256;
        // colors[i * 4 + 2] = b / 256;

        colors[i * 4] = 0;
        colors[i * 4 + 1] = 0;
        colors[i * 4 + 2] = 0;

        colors[i * 4 + 3] = 255;

        intensities[i] = intensity;
        classifications[i] = classication;
    }

    return {
        position: positions,
        color: colors,
        intensity: intensities,
        classification: classifications,
    };
}


// TODO: options.in and options.out for input options and output options
/**
 * Parse a LASzip compressed chunk and return the corresponding
 * `THREE.BufferGeometry`.
 *
 * @param {ArrayBuffer} data - The chunk of compressed point data to parse
 * @param {Object} options - Options to give to the parser
 * @param {Object} options.in - Options to the input of the parser
 * @param {Las.Header} options.in.header - TODO: Header
 * @param {Las.ExtraBytes[]} [options.in.eb] - TODO: ExtraBytes
 * @param {number} options.in.pointCount - TODO
 * record
 */
async function parseChunk(data, options) {
    const { header, pointCount, eb } = options.in;
    const { pointDataRecordFormat, pointDataRecordLength } = header;

    const bytes = new Uint8Array(data);
    const buffer = await Las.PointData.decompressChunk(bytes, {
        pointCount,
        pointDataRecordFormat,
        pointDataRecordLength,
    });
    // TODO: Filter included fields
    const view = Las.View.create(buffer, header, eb);
    const attrs = parseView(view, header);

    const geometry = new THREE.BufferGeometry();
    geometry.userData = header;
    // TODO: Generic pointCount for compressed buffer *and* file
    geometry.userData.vertexCount = view.pointCount;

    const positionBuffer = new THREE.BufferAttribute(attrs.position, 3, false);
    geometry.setAttribute('position', positionBuffer);

    const intensityBuffer = new THREE.BufferAttribute(attrs.intensity, 1, true);
    geometry.setAttribute('intensity', intensityBuffer);

    // TODO: Shall it be normalized?
    const classificationBuffer = new THREE.BufferAttribute(attrs.classification, 1, true);
    geometry.setAttribute('classification', classificationBuffer);

    if (attrs.color) {
        const colorBuffer = new THREE.BufferAttribute(attrs.color, 4, true);
        geometry.setAttribute('color', colorBuffer);
    }

    geometry.computeBoundingBox();
    return geometry;
}

/**
 * @module LASzipParser
 *
 */
export default {
    /**
     * @typedef {Las.Header} Header
     * @property {number} lol
     */

    /**
     * Parse a LASzip compressed chunk and return the corresponding
     * `THREE.BufferGeometry`.
     *
     * @param {ArrayBuffer} data - The chunk of compressed point data to parse
     * @param {Object} options - Options to give to the parser
     * @param {Object} options.in - Options to the input of the parser
     * @param {Header} options.in.header - TODO: Header
     * @param {Las.ExtraBytes[]} [options.in.eb] - TODO: ExtraBytes
     * @param {number} options.in.pointCount - TODO
     * record
     */
    async parseChunk(data, options) {
        const { header, pointCount, eb } = options.in;
        const { pointDataRecordFormat, pointDataRecordLength } = header;

        const bytes = new Uint8Array(data);
        const buffer = await Las.PointData.decompressChunk(bytes, {
            pointCount,
            pointDataRecordFormat,
            pointDataRecordLength,
        });
        // TODO: Filter included fields
        const view = Las.View.create(buffer, header, eb);
        const attrs = parseView(view, header);

        const geometry = new THREE.BufferGeometry();
        geometry.userData = header;
        // TODO: Generic pointCount for compressed buffer *and* file
        geometry.userData.vertexCount = view.pointCount;

        const positionBuffer = new THREE.BufferAttribute(attrs.position, 3, false);
        geometry.setAttribute('position', positionBuffer);

        const intensityBuffer = new THREE.BufferAttribute(attrs.intensity, 1, true);
        geometry.setAttribute('intensity', intensityBuffer);

        // TODO: Shall it be normalized?
        const classificationBuffer = new THREE.BufferAttribute(attrs.classification, 1, true);
        geometry.setAttribute('classification', classificationBuffer);

        if (attrs.color) {
            const colorBuffer = new THREE.BufferAttribute(attrs.color, 4, true);
            geometry.setAttribute('color', colorBuffer);
        }

        geometry.computeBoundingBox();
        return geometry;
    },
};
