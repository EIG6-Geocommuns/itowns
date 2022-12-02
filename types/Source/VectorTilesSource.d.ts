export default VectorTilesSource;
/**
 * @classdesc
 * VectorTilesSource are object containing informations on how to fetch vector
 * tiles resources.
 *
 * @property {function} filter - function to filter vector tiles layers, the
 * parameter function is a layer.
 * @property {boolean} [symbolToCircle=false] - If true, all symbols from a tile
 * will be considered as circle, and render as circles.
 */
declare class VectorTilesSource extends TMSSource {
    /**
     * @param {Object} source - An object that can contain all properties of a
     * VectorTilesSource and {@link Source}.
     * @param {string|Object} source.style - The URL of the JSON style, of the
     * JSON style directly.
     * @param {string} [source.sprite] - The base URL to load informations about
     * the sprite of the style. If this is set, it overrides the `sprite` value
     * of the `source.style`. A style's sprite property supplies a URL template
     * for loading small images.
     * ```js
     * {
     *      sprite: 'http//:xxxxx/maps/sprites/'
     * }
     * ```
     * A valid sprite source must supply two types of files:
     * * An index file, which is a JSON document containing a description of each image contained in the sprite.
     * * Image files, which are PNG images containing the sprite data.
     *
     * For more specification : [the Mapbox sprite Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/sprite/)
     *
     * @param {string} [source.url] - The base URL to load the tiles. If no url
     * is specified, it reads it from the loaded style. Read [the Mapbox Style
     * Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/)
     * for more informations.
     * @param {string} [source.accessToken] - Mapbox access token
     * @param {function} [source.filter] - TODO
     * @constructor
     */
    constructor(source: {
        style: string | any;
        sprite?: string;
        url?: string;
        accessToken?: string;
        filter?: Function;
    });
    layers: {};
    styles: {};
    accessToken: string;
    jsonStyle: any;
    sprites: any;
    backgroundLayer: any;
}
import TMSSource from "Source/TMSSource";
//# sourceMappingURL=VectorTilesSource.d.ts.map