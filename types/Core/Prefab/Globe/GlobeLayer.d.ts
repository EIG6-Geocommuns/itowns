export default GlobeLayer;
/**
 * @property {boolean} isGlobeLayer - Used to checkout whether this layer is a
 * GlobeLayer. Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @extends TiledGeometryLayer
 */
declare class GlobeLayer extends TiledGeometryLayer {
    /**
     * A {@link TiledGeometryLayer} to use with a {@link GlobeView}. It has
     * specific method for updating and subdivising its grid.
     *
     * @constructor
     *
     * @param {string} id - The id of the layer, that should be unique. It is
     * not mandatory, but an error will be emitted if this layer is added a
     * {@link View} that already has a layer going by that id.
     * @param {THREE.Object3d} [object3d=THREE.Group] - The object3d used to
     * contain the geometry of the TiledGeometryLayer. It is usually a
     * `THREE.Group`, but it can be anything inheriting from a `THREE.Object3d`.
     * @param {Object} [config] - Optional configuration, all elements in it
     * will be merged as is in the layer. For example, if the configuration
     * contains three elements `name, protocol, extent`, these elements will be
     * available using `layer.name` or something else depending on the property
     * name.
     * @param {number} [config.minSubdivisionLevel=2] - Minimum subdivision
     * level for this tiled layer.
     * @param {number} [config.maxSubdivisionLevel=18] - Maximum subdivision
     * level for this tiled layer.
     * @param {number} [config.sseSubdivisionThreshold=1] - Threshold level for
     * the SSE.
     * @param {number} [config.maxDeltaElevationLevel=4] - Maximum delta between
     * two elevations tile.
     *
     * @throws {Error} `object3d` must be a valid `THREE.Object3d`.
     */
    constructor(id: string, object3d?: THREE.Object3d, config?: {
        minSubdivisionLevel?: number;
        maxSubdivisionLevel?: number;
        sseSubdivisionThreshold?: number;
        maxDeltaElevationLevel?: number;
    });
    isGlobeLayer: boolean;
    minSubdivisionLevel: number;
    maxSubdivisionLevel: number;
    maxDeltaElevation: number;
    extent: any;
    preUpdate(context: any, changeSources: any): TileMesh[];
    subdivision(context: any, layer: any, node: any): boolean;
    horizonCulling(point: any): boolean;
    computeTileZoomFromDistanceCamera(distance: any, camera: any): number;
    computeDistanceCameraFromTileZoom(zoom: any, camera: any): number;
}
import TiledGeometryLayer from "Layer/TiledGeometryLayer";
//# sourceMappingURL=GlobeLayer.d.ts.map