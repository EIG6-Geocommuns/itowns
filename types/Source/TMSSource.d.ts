export default TMSSource;
/**
 * @classdesc
 * An object defining the source of resources to get from a [TMS]{@link
 * https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification} server. It
 * inherits from {@link Source}.
 *
 * @extends Source
 *
 * @property {boolean} isTMSSource - Used to checkout whether this source is a
 * TMSSource. Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @property {boolean} isInverted - The isInverted property is to be set to the
 * correct value, true or false (default being false) if the computation of the
 * coordinates needs to be inverted to match the same scheme as OSM, Google Maps
 * or other system. See [this link]{@link
 * https://alastaira.wordpress.com/2011/07/06/converting-tms-tile-coordinates-to-googlebingosm-tile-coordinates/}
 * for more information.
 * @property {Object} tileMatrixSetLimits - it describes the available tile for this layer
 * @property {Object} extentSetlimits - these are the extents of the set of identical zoom tiles.
 * @property {Object} zoom - Object containing the minimum and maximum values of
 * the level, to zoom in the source.
 * @property {number} zoom.min - The minimum level of the source. Default value
 * is 0.
 * @property {number} zoom.max - The maximum level of the source. Default value
 * is 20.
 * @property {function} tileMatrixCallback - a method that create a TileMatrix
 * identifier from the zoom level. For example, if set to `(zoomLevel) => 'EPSG:4326:' + zoomLevel`,
 * the TileMatrix that will be fetched at zoom level 5 will be the one with identifier `EPSG:4326:5`.
 * By default, the method returns the input zoom level.
 *
 * @example <caption><b>Source from OpenStreetMap server :</b></caption>
 * // Create the source
 * const tmsSource = new itowns.TMSSource({
 *     format: 'image/png',
 *     url: 'http://osm.io/styles/${z}/${x}/${y}.png',
 *     attribution: {
 *         name: 'OpenStreetMap',
 *         url: 'http://www.openstreetmap.org/',
 *     },
 *     crs: 'EPSG:3857',
 * });
 *
 * // Create the layer
 * const colorLayer = new itowns.ColorLayer('OPENSM', {
 *     source: tmsSource,
 * });
 *
 * // Add the layer
 * view.addLayer(colorLayer);
 *
 * @example <caption><b>Source from Mapbox server :</b></caption>
 * // Create the source
 * const orthoSource = new itowns.TMSSource({
 *     url: 'https://api.mapbox.com/v4/mapbox.satellite/${z}/${x}/${y}.jpg?access_token=' + accessToken,
 *     crs: 'EPSG:3857',
 * };
 *
 * // Create the layer
 * const imageryLayer = new itowns.ColorLayer("Ortho", {
 *     source: orthoSource,
 * };
 *
 * // Add the layer to the view
 * view.addLayer(imageryLayer);
 */
declare class TMSSource extends Source {
    /**
     * @param {Object} source - An object that can contain all properties of a
     * TMSSource and {@link Source}. Only `url` is mandatory.
     *
     * @constructor
     */
    constructor(source: any);
    isTMSSource: boolean;
    zoom: any;
    isInverted: any;
    url: any;
    crs: any;
    tileMatrixSetLimits: any;
    extentSetlimits: {};
    tileMatrixCallback: any;
    urlFromExtent(extent: any): string;
    onLayerAdded(options: any): void;
    extentInsideLimit(extent: any, zoom: any): any;
}
import Source from "Source/Source";
//# sourceMappingURL=TMSSource.d.ts.map