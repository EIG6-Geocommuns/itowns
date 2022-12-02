export default PotreeSource;
/**
 * @classdesc
 * PotreeSource are object containing informations on how to fetch points cloud resources.
 *
 *
 */
declare class PotreeSource extends Source {
    /**
     * @param {Object} source - An object that can contain all properties of a
     * PotreeSource
     * @param {string} source.url - folder url.
     * @param {string} source.file - cloud file name.
     *
     * This `cloud` file stores information about the potree cloud in JSON format. the structure is :
     *
     * * __`version`__ - The cloud.js format may change over time. The version number is
     * necessary so that parsers know how to interpret the data.
     * * __`octreeDir`__ - Directory or URL where node data is stored. Usually points to
     * "data".
     * * __`boundingBox`__ - Contains the minimum and maximum of the axis aligned bounding box. This bounding box is cubic and aligned to fit to the octree root.
     * * __`tightBoundingBox`__ - This bounding box thightly fits the point data.
     * * __`pointAttributes`__ - Declares the point data format. May be 'LAS', 'LAZ' or in case if the BINARY format an array of attributes like
     * `['POSITION_CARTESIAN', 'COLOR_PACKED', 'INTENSITY']`
     * * __`POSITION_CARTESIAN`__ - 3 x 32bit signed integers for x/y/z coordinates
     * * __`COLOR_PACKED`__ - 4 x unsigned byte for r,g,b,a colors.
     * * __`spacing`__ - The minimum distance between points at root level.
     * ```
     * {
     *     version: '1.6',
     *     octreeDir: 'data',
     *     boundingBox: {
     *         lx: -4.9854,
     *         ly: 1.0366,
     *         lz: -3.4494,
     *         ux: 0.702300000000001,
     *         uy: 6.7243,
     *         uz: 2.2383
     *     },
     *     tightBoundingBox: {
     *         lx: -4.9854,
     *         ly: 1.0375,
     *         lz: -3.4494,
     *         ux: -0.7889,
     *         uy: 6.7243,
     *         uz: 1.1245
     *     },
     *     pointAttributes: [
     *         'POSITION_CARTESIAN',
     *         'COLOR_PACKED'
     *     ],
     *     spacing: 0.03,
     *     scale: 0.001,
     *     hierarchyStepSize: 5
     * }
     * ```
     *
     * @extends Source
     *
     * @constructor
     */
    constructor(source: {
        url: string;
        file: string;
    });
    file: string;
    fetcher: (url: any, options?: {}) => Promise<ArrayBuffer>;
    extensionOctree: string;
    whenReady: Promise<any>;
    pointAttributes: any;
    baseurl: string;
    extension: string;
    parse: (buffer: ArrayBuffer, options: any) => Promise<any>;
}
import Source from "Source/Source";
//# sourceMappingURL=PotreeSource.d.ts.map