export function geoidLayerIsVisible(tilelayer: any): any;
export default GeoidLayer;
/**
 * `GeoidLayer` is a specific `{@link Layer}` which supports geoid height data. When added to a `{@link View}`, it
 * vertically translates each of the view's tiles by a proper geoid height value. For a given tile, the geoid height
 * value used for translation is the geoid height computed at the center of the tile.
 *
 * @example
 * // Create a GeoidLayer from a GTX geoid heights file.
 * const geoidLayer = new GeoidLayer('geoid', {
 *     source: new FileSource({
 *         url: 'url-to-some-GTX-geoid-heights-file.gtx',
 *         crs: 'EPSG:4326',
 *         format: 'application/gtx',
 *     }),
 * });
 */
declare class GeoidLayer extends Layer {
    /**
     * Creates a new instance of `GeoidLayer`.
     *
     * @param   {string}    id              An unique identifier for the layer.
     * @param   {Object}    config          The layer configuration. All elements in it will be merged as is in the
                                            * layer. For example, if the configuration contains three elements `name,
                                            * protocol, extent`, these elements will be available using `layer.name` or
                                            * something else depending on the property name. Only `config.source`
                                            * parameter is mandatory.
     * @param   {Object}    config.source   The source of the geoid data displayed by the `GeoidLayer`. It is mandatory
                                            * that the source data for a `GeoidLayer` be parsed into a
                                            * `{@link GeoidGrid}`. You can refer to `{@link GTXParser}`,
                                            * `{@link GDFParser}` and `{@link ISGParser}` to see how three standard
                                            * geoid height grid file formats are parsed into `{@link GeoidGrid}`.
     */
    constructor(id: string, config?: {
        source: any;
    });
    isGeoidLayer: boolean;
    updateNodeZ(node: any): void;
    update(context: any, layer: any, node: any, parent: any): any;
}
import Layer from "Layer/Layer";
//# sourceMappingURL=GeoidLayer.d.ts.map