export default FileSource;
/**
 * @classdesc
 * An object defining the source of a single resource to get from a direct
 * access. It inherits from {@link Source}. There is multiple ways of adding a
 * resource here:
 * <ul>
 *  <li>add the file like any other sources, using the `url` property.</li>
 *  <li>fetch the file, and give the data to the source using the `fetchedData`
 *  property.</li>
 *  <li>fetch the file, parse it and git the parsed data to the source using the
 *  `features` property.</li>
 * </ul>
 * See the examples below for real use cases.
 *
 * @extends Source
 *
 * @property {boolean} isFileSource - Used to checkout whether this source is a
 * FileSource. Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @property {*} fetchedData - Once the file has been loaded, the resulting data
 * is stored in this property.
 * @property {*} features - Once the file has been loaded and parsed, the
 * resulting data is stored in this property.
 *
 * @example <caption>Simple: create a source, a layer, and let iTowns taking
 * care of everything.</caption>
 * const kmlSource = new itowns.FileSource({
 *     url: 'https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/croquis.kml',
 *     crs: 'EPSG:4326',
 *     fetcher: itowns.Fetcher.xml,
 *     parser: itowns.KMLParser.parse,
 * });
 *
 * const kmlLayer = new itowns.ColorLayer('Kml', {
 *     name: 'kml',
 *     transparent: true,
 *     crs: view.tileLayer.extent.crs,
 *     source: kmlSource,
 * });
 *
 * view.addLayer(kmlLayer);
 *
 * @example <caption>Advanced: fetch some data, create a source, a layer, and
 * let iTowns do the parsing and converting.</caption>
 * // Parse and Convert by iTowns
 * itowns.Fetcher.xml('https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/ULTRA2009.gpx')
 *     .then(function _(gpx) {
 *         const gpxSource = new itowns.FileSource({
 *             data: gpx,
 *             crs: 'EPSG:4326',
 *             parser: itowns.GpxParser.parse,
 *         });
 *
 *         const gpxLayer = new itowns.ColorLayer('Gpx', {
 *             name: 'Ultra 2009',
 *             transparent: true,
 *             source: gpxSource,
 *         });
 *
 *         return view.addLayer(gpxLayer);
 *     });
 *
 * @example <caption>More advanced: create a layer, fetch some data, parse the
 * data, append a source to the layer and add the layer to iTowns.</caption>
 * // Create a layer
 * const ariege = new itowns.GeometryLayer('ariege', new itowns.THREE.Group());
 *
 * // Specify update method and conversion
 * ariege.update = itowns.FeatureProcessing.update;
 * ariege.convert = itowns.Feature2Mesh.convert({
 *     color: () => new itowns.THREE.Color(0xffcc00),
 *     extrude: () => 5000,
 * });
 *
 * itowns.Fetcher.json('https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/09-ariege/departement-09-ariege.geojson')
 *     .then(function _(geojson) {
 *         return itowns.GeoJsonParser.parse(geojson, {
 *             in: { crs: 'EPSG:4326' },
 *             out: { crs: view.tileLayer.extent.crs,
 *                      style: new itowns.Style({
 *                          fill: {
 *                              color: new itowns.THREE.Color(0xffcc00),
 *                              extrusion_height: () => 5000,
 *                      }),
 *                  },
 *             },
 *         });
 *     }).then(function _(features) {
 *         ariege.source = new itowns.FileSource({
 *             crs: 'EPSG:4326',
 *             features,
 *         });
 *
 *         return view.addLayer(ariegeLayer);
 *     });
 */
declare class FileSource extends Source {
    /**
     * @param {Object} source - An object that can contain all properties of a
     * FileSource and {@link Source}. Only `crs` is mandatory, but if it
     * presents in `features` under the property `crs`, it is fine.
     *
     * @constructor
     */
    constructor(source: any);
    isFileSource: boolean;
    fetchedData: any;
    zoom: {
        min: number;
        max: number;
    };
    urlFromExtent(): string;
    onLayerAdded(options: any): void;
    /**
     * load  data from cache or Fetch/Parse data.
     * The loaded data is a Feature or Texture.
     *
     * @param      {Extent}  extent   extent requested parsed data.
     * @param      {FeatureBuildingOptions|Layer}  out  The feature returned options
     * @return     {FeatureCollection|Texture}  The parsed data.
     */
    loadData(extent: Extent, out: FeatureBuildingOptions | Layer): FeatureCollection | Texture;
    extentInsideLimit(extent: any): any;
}
import Source from "Source/Source";
//# sourceMappingURL=FileSource.d.ts.map