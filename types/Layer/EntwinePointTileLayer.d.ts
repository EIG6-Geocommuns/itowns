export default EntwinePointTileLayer;
/**
 * @property {boolean} isEntwinePointTileLayer - Used to checkout whether this
 * layer is a EntwinePointTileLayer. Default is `true`. You should not change
 * this, as it is used internally for optimisation.
 */
declare class EntwinePointTileLayer extends PointCloudLayer {
    /**
     * Constructs a new instance of Entwine Point Tile layer.
     *
     * @constructor
     * @extends PointCloudLayer
     *
     * @example
     * // Create a new point cloud layer
     * const points = new EntwinePointTileLayer('EPT',
     *  {
     *      source: new EntwinePointTileSource({
     *          url: 'https://server.geo/ept-dataset',
     *      }
     *  });
     *
     * View.prototype.addLayer.call(view, points);
     *
     * @param {string} id - The id of the layer, that should be unique. It is
     * not mandatory, but an error will be emitted if this layer is added a
     * {@link View} that already has a layer going by that id.
     * @param {Object} config - Configuration, all elements in it
     * will be merged as is in the layer. For example, if the configuration
     * contains three elements `name, protocol, extent`, these elements will be
     * available using `layer.name` or something else depending on the property
     * name. See the list of properties to know which one can be specified.
     * @param {string} [config.crs=ESPG:4326] - The CRS of the {@link View} this
     * layer will be attached to. This is used to determine the extent of this
     * layer. Default to `EPSG:4326`.
     * @param {number} [config.skip=1] - Read one point from every `skip` points
     * - see {@link LASParser}.
     */
    constructor(id: string, config: {
        crs?: string;
        skip?: number;
    });
    isEntwinePointTileLayer: boolean;
    whenReady: Promise<void>;
    root: EntwinePointTileNode;
    extent: Extent;
    get spacing(): any;
}
import PointCloudLayer from "Layer/PointCloudLayer";
import EntwinePointTileNode from "Core/EntwinePointTileNode";
import Extent from "Core/Geographic/Extent";
//# sourceMappingURL=EntwinePointTileLayer.d.ts.map