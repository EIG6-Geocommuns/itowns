export default EntwinePointTileSource;
/**
 * @classdesc
 * An object defining the source of Entwine Point Tile data. It fetches and
 * parses the main configuration file of Entwine Point Tile format,
 * [`ept.json`](https://entwine.io/entwine-point-tile.html#ept-json).
 *
 * @extends Source
 *
 * @property {boolean} isEntwinePointTileSource - Used to checkout whether this
 * source is a EntwinePointTileSource. Default is true. You should not change
 * this, as it is used internally for optimisation.
 * @property {string} url - The URL of the directory containing the whole
 * Entwine Point Tile structure.
 */
declare class EntwinePointTileSource extends Source {
    /**
     * @constructor
     *
     * @param {Object} config - The configuration, see {@link Source} for
     * available values.
     * @param {number|string} [config.colorDepth='auto'] - Does the color
     * encoding is known ? Is it `8` or `16` bits ? By default it is to
     * `'auto'`, but it will be more performant if a specific value is set.
     */
    constructor(config: {
        colorDepth?: number | string;
    });
    isEntwinePointTileSource: boolean;
    colorDepth: string | number;
    whenReady: Promise<EntwinePointTileSource>;
    parse: (data: ArrayBuffer, options?: any) => Promise<any>;
    extension: string;
    spacing: number;
    boundsConforming: any;
    span: any;
    fetcher: (url: any, options?: {}) => Promise<ArrayBuffer>;
}
import Source from "Source/Source";
//# sourceMappingURL=EntwinePointTileSource.d.ts.map