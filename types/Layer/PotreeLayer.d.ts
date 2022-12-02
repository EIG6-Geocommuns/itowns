export default PotreeLayer;
/**
 * @property {boolean} isPotreeLayer - Used to checkout whether this layer
 * is a PotreeLayer. Default is `true`. You should not change this, as it is
 * used internally for optimisation.
 */
declare class PotreeLayer extends PointCloudLayer {
    /**
     * Constructs a new instance of Potree layer.
     *
     * @constructor
     * @extends PointCloudLayer
     *
     * @example
     * // Create a new point cloud layer
     * const points = new PotreeLayer('points',
     *  {
     *      source: new PotreeLayer({
     *          url: 'https://pointsClouds/',
     *          file: 'points.js',
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
     * layer.  Default to `EPSG:4326`.
     */
    constructor(id: string, config: {
        crs?: string;
    });
    isPotreeLayer: boolean;
    scale: THREE.Vector3;
    spacing: any;
    hierarchyStepSize: any;
    supportsProgressiveDisplay: boolean;
    root: PotreeNode;
    extent: Extent;
}
import PointCloudLayer from "Layer/PointCloudLayer";
import * as THREE from "three";
import PotreeNode from "Core/PotreeNode";
import Extent from "Core/Geographic/Extent";
//# sourceMappingURL=PotreeLayer.d.ts.map