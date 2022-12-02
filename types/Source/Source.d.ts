/**
 * @callback fetcher
 * @param {string} url - TODO
 * @param {RequestInit} [options={}] - TODO
 * @returns {Promise<any>} - TODO
 */
export const supportedFetchers: Map<string, (url: string, options?: RequestInit) => Promise<any>>;
export const supportedParsers: Map<string, (json: string, options?: ParsingOptions) => Promise<any>>;
export default Source;
export type fetcher = (url: string, options?: RequestInit) => Promise<any>;
/**
 * @classdesc
 * Sources are object containing informations on how to fetch resources, from a
 * set source.
 *
 * To extend a Source, it is necessary to implement two functions:
 * `urlFromExtent` and `extentInsideLimit`.
 *
 * @extends InformationsData
 * @property {boolean} isSource - Used to checkout whether this source is a
 * Source. Default is true. You should not change this, as it is used internally
 * for optimisation.
 * @property {number} uid - Unique uid mainly used to store data linked to this
 * source into Cache.
 * @property {string} url - The url of the resources that are fetched.
 * @property {string} format - The format of the resources that are fetched.
 * @property {function} fetcher - The method used to fetch the resources from
 * the source. iTowns provides some methods in {@link Fetcher}, but it can be
 * specified a custom one. This method should return a `Promise` containing the
 * fetched resource. If this property is set, it overrides the chosen fetcher
 * method with `format`.
 * @property {Object} networkOptions - Fetch options (passed directly to
 * `fetch()`), see [the syntax for more information]{@link
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
 * By default, set to `{ crossOrigin: 'anonymous' }`.
 * @property {string} crs - The crs projection of the resources.
 * @property {string} attribution - The intellectual property rights for the
 * resources.
 * @property {Extent} extent - The extent of the resources.
 * @property {function} parser - The method used to parse the resources attached
 * to the layer. iTowns provides some parsers, visible in the `Parser/` folder.
 * If the method is custom, it should return a `Promise` containing the parsed
 * resource. If this property is set, it overrides the default selected parser
 * method with `source.format`. If `source.format` is also empty, no parsing
 * action is done.
 * <br><br>
 * When calling this method, two parameters are passed:
 * <ul>
 *  <li>the fetched data, i.e. the data to parse</li>
 *  <li>an {@link ParsingOptions}  containing severals properties, set when this method is
 *  called: it is specific to each call, so the value of each property can vary
 *  depending on the current fetched tile for example</li>
 * </ul>
 */
declare class Source extends InformationsData {
    /**
     * @param {Object} source - An object that can contain all properties of a
     * Source. Only the `url` property is mandatory.
     * @param {string} source.crs - TODO
     * @param {string} source.url - TODO
     * @param {string=} source.format - TODO
     * @param {fetcher} source.fetcher - TODO
     *
     * @constructor
     */
    constructor(source: {
        crs: string;
        url: string;
        format?: string | undefined;
        fetcher: fetcher;
    });
    isSource: boolean;
    uid: number;
    url: string;
    format: string;
    fetcher: (url: string, options?: RequestInit) => Promise<any>;
    parser: any;
    isVectorSource: boolean;
    networkOptions: any;
    attribution: any;
    whenReady: Promise<void>;
    _featuresCaches: {};
    extent: any;
    handlingError(err: any): void;
    /**
     * Generates an url from an extent. This url is a link to fetch the
     * resources inside the extent.
     *
     * @param {Extent} extent - Extent to convert in url.

     * @return {string} The URL constructed from the extent.
     */
    urlFromExtent(extent: Extent): string;
    requestToKey(extent: any): any[];
    /**
     * Load  data from cache or Fetch/Parse data.
     * The loaded data is a Feature or Texture.
     *
     * @param      {Extent}  extent   extent requested parsed data.
     * @param      {FeatureBuildingOptions|Layer}  out     The feature returned options
     * @return     {FeatureCollection|Texture}  The parsed data.
     */
    loadData(extent: Extent, out: FeatureBuildingOptions | Layer): FeatureCollection | Texture;
    /**
     * Called when layer added.
     *
     * @param {object} options
     */
    onLayerAdded(options: object): void;
    /**
     * Called when layer removed.
     *
     * @param {options}  [options={}] options
     */
    onLayerRemoved(options?: any): void;
    /**
     * Tests if an extent is inside the source limits.
     *
     * @param {Extent} extent - Extent to test.

     * @return {boolean} True if the extent is inside the limit, false otherwise.
     */
    extentInsideLimit(extent: Extent): boolean;
}
/**
 * @property {string} crs - data crs projection.
 * @property {boolean} isInverted - This option is to be set to the
 * correct value, true or false (default being false), if the computation of
 * the coordinates needs to be inverted to same scheme as OSM, Google Maps
 * or other system. See [this link]{@link
 * https://alastaira.wordpress.com/2011/07/06/converting-tms-tile-coordinates-to-googlebingosm-tile-coordinates}
 * for more informations.
 *
 */
declare class InformationsData {
    /**
     * @param {{crs: string}} options
     */
    constructor(options: {
        crs: string;
    });
    crs: string;
}
import Extent from "Core/Geographic/Extent";
//# sourceMappingURL=Source.d.ts.map