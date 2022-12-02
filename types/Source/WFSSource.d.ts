export default WFSSource;
/**
 * @classdesc
 * An object defining the source of resources to get from a
 * [WFS]{@link http://www.opengeospatial.org/standards/wfs} server. It inherits
 * from {@link Source}.
 *
 * @extends Source
 *
 * @property {boolean} isWFSSource - Used to checkout whether this source is a
 * WFSSource. Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @property {string} typeName - The name of the feature to get, used in the
 * generation of the url.
 * @property {string} version - The version of the WFS server to request on.
 * Default value is '2.0.2'.
 * @property {Object} zoom - Object containing the minimum and maximum values of
 * the level, to zoom in the source.
 * @property {number} zoom.min - The minimum level of the source. Default value
 * is 0.
 * @property {number} zoom.max - The maximum level of the source. Default value
 * is 21.
 * @property {Object} vendorSpecific - An object containing vendor specific
 * parameters. See for example a [list of these parameters for GeoServer]{@link
 * https://docs.geoserver.org/latest/en/user/services/wfs/vendor.html}. This
 * object is read simply with the `key` being the name of the parameter and
 * `value` being the value of the parameter. If used, this property should be
 * set in the constructor parameters.
 *
 * @example
 * // Add color layer with WFS source
 * // Create the source
 * const wfsSource = new itowns.WFSSource({
 *     url: 'http://wxs.fr/wfs',
 *     version: '2.0.0',
 *     typeName: 'BDTOPO_BDD_WLD_WGS84G:bati_remarquable',
 *     crs: 'EPSG:4326',
 *     extent: {
 *         west: 4.568,
 *         east: 5.18,
 *         south: 45.437,
 *         north: 46.03,
 *     },
 *     zoom: { min: 14, max: 14 },
 *     format: 'application/json',
 * });
 *
 * // Create the layer
 * const colorlayer = new itowns.ColorLayer('color_build', {
 *     style: {
 *         fill: 'red',
 *         fillOpacity: 0.5,
 *         stroke: 'white',
 *     },
 *     source: wfsSource,
 * });
 *
 * // Add the layer
 * view.addLayer(colorlayer);
 *
 * @example
 * // Add geometry layer with WFS source
 * // Create the source
 * const wfsSource = new itowns.WFSSource({
 *     url: 'http://wxs.fr/wfs',
 *     version: '2.0.0',
 *     typeName: 'BDTOPO_BDD_WLD_WGS84G:bati_remarquable',
 *     crs: 'EPSG:4326',
 *     extent: {
 *         west: 4.568,
 *         east: 5.18,
 *         south: 45.437,
 *         north: 46.03,
 *     },
 *     zoom: { min: 14, max: 14 },
 *     format: 'application/json',
 * });
 *
 * // Create the layer
 * const geometryLayer = new itowns.FeatureGeometryLayer('mesh_build', {
 *     style: new itowns.Style({
 *         fill: {
 *             color: new itowns.THREE.Color(0xffcc00),
 *             base_altitude: (p) => p.altitude,
 *             extrusion_height: (p) => p.height,
 *         }
 *     },
 *     source: wfsSource,
 *     zoom: { min: 14 },
 * });
 *
 * // Add the layer
 * view.addLayer(geometryLayer);
 */
declare class WFSSource extends Source {
    /**
     * @param {Object} source - An object that can contain all properties of a
     * WFSSource and {@link Source}. `url`, `typeName` and `crs` are
     * mandatory.
     *
     * @constructor
     */
    constructor(source: any);
    isWFSSource: boolean;
    typeName: any;
    version: any;
    zoom: {
        min: number;
        max: number;
    };
    vendorSpecific: any;
    handlingError(err: any): any;
    urlFromExtent(extent: any): string;
    extentInsideLimit(extent: any): any;
}
import Source from "Source/Source";
//# sourceMappingURL=WFSSource.d.ts.map