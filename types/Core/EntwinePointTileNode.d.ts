export default EntwinePointTileNode;
/**
 * @extends PointCloudNode
 *
 * @property {boolean} isEntwinePointTileNode - Used to checkout whether this
 * node is a EntwinePointTileNode. Default is `true`. You should not change
 * this, as it is used internally for optimisation.
 * @property {number} depth - The depth of the node in the tree - see the
 * [Entwine
 * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
 * @property {number} x - The x coordinate of the node in the tree - see the
 * [Entwine
 * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
 * @property {number} y - The x coordinate of the node in the tree - see the
 * [Entwine
 * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
 * @property {number} z - The x coordinate of the node in the tree - see the
 * [Entwine
 * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
 * @property {string} id - The id of the node, constituted of the four
 * components: `depth-x-y-z`.
 */
declare class EntwinePointTileNode extends PointCloudNode {
    /**
     * Constructs a new instance of EntwinePointTileNode.
     *
     * @constructor
     *
     * @param {number} depth - The depth of the node in the tree - see the
     * [Entwine
     * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
     * @param {number} x - The x coordinate of the node in the tree - see the
     * [Entwine
     * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
     * @param {number} y - The x coordinate of the node in the tree - see the
     * [Entwine
     * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
     * @param {number} z - The x coordinate of the node in the tree - see the
     * [Entwine
     * documentation](https://entwine.io/entwine-point-tile.html#ept-data)
     * @param {EntwinePointTileLayer} layer - The layer the node is attached to.
     * @param {number} [numPoints=0] - The number of points in this node. If
     * `-1`, it means that the octree hierarchy associated to this node needs to
     * be loaded.
     */
    constructor(depth: number, x: number, y: number, z: number, layer: EntwinePointTileLayer, numPoints?: number);
    isEntwinePointTileNode: boolean;
    depth: number;
    x: number;
    y: number;
    z: number;
    id: string;
    url: string;
    createChildAABB(node: any): void;
    get octreeIsLoaded(): boolean;
    loadOctree(): Promise<void>;
    findAndCreateChild(depth: any, x: any, y: any, z: any, hierarchy: any, stack: any): void;
}
import PointCloudNode from "Core/PointCloudNode";
//# sourceMappingURL=EntwinePointTileNode.d.ts.map