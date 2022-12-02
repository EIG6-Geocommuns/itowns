export default TiledGeometryLayer;
/**
 * @property {InfoTiledGeometryLayer} info - Status information of layer
 * @property {boolean} isTiledGeometryLayer - Used to checkout whether this
 * layer is a TiledGeometryLayer. Default is true. You should not change this,
 * as it is used internally for optimisation.
 *
 * @extends GeometryLayer
 */
declare class TiledGeometryLayer extends GeometryLayer {
    /**
     * Tell if a node has enough elevation or color textures to subdivide.
     * Subdivision is prevented if:
     * <ul>
     *  <li>the node is covered by at least one elevation layer and if the node
     *  doesn't have an elevation texture yet</li>
     *  <li>a color texture is missing</li>
     * </ul>
     *
     * @param {Object} context - The context of the update; see the {@link
     * MainLoop} for more informations.
     * @param {TileMesh} node - The node to subdivide.
     *
     * @returns {boolean} False if the node can not be subdivided, true
     * otherwise.
     */
    static hasEnoughTexturesToSubdivide(context: any, node: TileMesh): boolean;
    /**
     * A layer extending the {@link GeometryLayer}, but with a tiling notion.
     *
     * `TiledGeometryLayer` is the ground where `ColorLayer` and `ElevationLayer` are attached.
     * `TiledGeometryLayer` is a quadtree data structure. At zoom 0,
     * there is a single tile for the whole earth. At zoom level 1,
     * the single tile splits into 4 tiles (2x2 tile square).
     * Each zoom level quadtree divides the geometry tiles of the one before it.
     * The camera distance determines how the tiles are subdivided for optimal data display.
     *
     * Some `GeometryLayer` can also be attached to the `TiledGeometryLayer` if they want to take advantage of the quadtree.
     *
     * ![tiled geometry](/docs/static/images/tiledGeometry.jpeg)
     * _In `GlobeView`, **red lines** represents the **WGS84 grid** and **orange lines** the **Pseudo-mercator grid**._
     * _In this picture, there are tiles with 3 different zoom/levels._
     *
     * The zoom/level is based on [tiled web map](https://en.wikipedia.org/wiki/Tiled_web_map).
     * It corresponds at meters by pixel. If the projection tile exceeds a certain pixel size (on screen)
     * then it is subdivided into 4 tiles with a zoom greater than 1.
     *
     * @constructor
     *
     * @param {string} id - The id of the layer, that should be unique. It is
     * not mandatory, but an error will be emitted if this layer is added a
     * {@link View} that already has a layer going by that id.
     * @param {THREE.Object3d} object3d - The object3d used to contain the
     * geometry of the TiledGeometryLayer. It is usually a `THREE.Group`, but it
     * can be anything inheriting from a `THREE.Object3d`.
     * @param {Array} schemeTile - extents Array of root tiles
     * @param {Object} builder - builder geometry object
     * @param {Object} [config] - Optional configuration, all elements in it
     * will be merged as is in the layer. For example, if the configuration
     * contains three elements `name, protocol, extent`, these elements will be
     * available using `layer.name` or something else depending on the property
     * name.
     * @param {Source} [config.source] - Description and options of the source.
     *
     * @throws {Error} `object3d` must be a valid `THREE.Object3d`.
     */
    constructor(id: string, object3d: THREE.Object3d, schemeTile: any[], builder: any, config?: {
        source?: Source;
    });
    isTiledGeometryLayer: boolean;
    protocol: string;
    sseSubdivisionThreshold: number;
    schemeTile: any[];
    builder: any;
    info: InfoTiledGeometryLayer;
    level0Nodes: any[];
    /**
     * Does pre-update work on the context:
     * <ul>
     *  <li>update the `colorLayers` and `elevationLayers`</li>
     *  <li>update the `maxElevationLevel`</li>
     * </ul>
     *
     * Once this work is done, it returns a list of nodes to update. Depending
     * on the origin of `sources`, it can return a few things:
     * <ul>
     *  <li>if `sources` is empty, it returns the first node of the layer
     *  (stored as `level0Nodes`), which will trigger the update of the whole
     *  tree</li>
     *  <li>if the update is triggered by a camera move, the whole tree is
     *  returned too</li>
     *  <li>if `source.layer` is this layer, it means that `source` is a node; a
     *  common ancestor will be found if there are multiple sources, with the
     *  default common ancestor being the first source itself</li>
     *  <li>else it returns the whole tree</li>
     * </ul>
     *
     * @param {Object} context - The context of the update; see the {@link
     * MainLoop} for more informations.
     * @param {Set<GeometryLayer|TileMesh>} sources - A list of sources to
     * generate a list of nodes to update.
     *
     * @return {TileMesh[]} The array of nodes to update.
     */
    preUpdate(context: any, sources: Set<GeometryLayer | TileMesh>): TileMesh[];
    _latestUpdateStartingLevel: any;
    colorLayersOrder: any[];
    /**
     * Update a node of this layer. The node will not be updated if:
     * <ul>
     *  <li>it does not have a parent, then it is removed</li>
     *  <li>its parent is being subdivided</li>
     *  <li>is not visible in the camera</li>
     * </ul>
     *
     * @param {Object} context - The context of the update; see the {@link
     * MainLoop} for more informations.
     * @param {Layer} layer - Parameter to be removed once all update methods
     * have been aligned.
     * @param {TileMesh} node - The node to update.
     *
     * @returns {Object}
     */
    update(context: any, layer: Layer, node: TileMesh): any;
    convert(requester: any, extent: any): any;
    countColorLayersTextures(...layers: any[]): number;
    culling(node: any, camera: any): boolean;
    /**
     * Subdivides a node of this layer. If the node is currently in the process
     * of subdivision, it will not do anything here. The subdivision of a node
     * will occur in four part, to create a quadtree. The extent of the node
     * will be divided in four parts: north-west, north-east, south-west and
     * south-east. Once all four nodes are created, they will be added to the
     * current node and the view of the context will be notified of this change.
     *
     * @param {Object} context - The context of the update; see the {@link
     * MainLoop} for more informations.
     * @param {TileMesh} node - The node to subdivide.
     * @return {Promise}  { description_of_the_return_value }
     */
    subdivideNode(context: any, node: TileMesh): Promise<any>;
    /**
     * Test the subdvision of a node, compared to this layer.
     *
     * @param {Object} context - The context of the update; see the {@link
     * MainLoop} for more informations.
     * @param {PlanarLayer} layer - This layer, parameter to be removed.
     * @param {TileMesh} node - The node to test.
     *
     * @return {boolean} - True if the node is subdivisable, otherwise false.
     */
    subdivision(context: any, layer: PlanarLayer, node: TileMesh): boolean;
}
import GeometryLayer from "Layer/GeometryLayer";
import { InfoTiledGeometryLayer } from "Layer/InfoLayer";
//# sourceMappingURL=TiledGeometryLayer.d.ts.map