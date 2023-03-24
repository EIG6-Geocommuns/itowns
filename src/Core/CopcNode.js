import * as THREE from 'three';
import { Hierarchy } from 'copc';
import PointCloudNode from 'Core/PointCloudNode';

const size = new THREE.Vector3();
const position = new THREE.Vector3();
const translation = new THREE.Vector3();

class CopcNode extends PointCloudNode {
    /**
     * Constructs a new instance of a COPC Octree node
     *
     * @param {number} depth - TODO
     * @param {number} x - TODO
     * @param {number} y - TODO
     * @param {number} z - TODO
     * @param {number} entryOffset - TODO
     * @param {number} entryLength - TODO
     * @param {*} layer - TODO
     * @param {number} [numPoints=0] - TODO
     */
    constructor(depth, x, y, z, entryOffset, entryLength, layer, numPoints = 0) {
        super(numPoints, layer);
        this.isCopcNode = true;

        this.entryOffset = entryOffset;
        this.entryLength = entryLength;
        this.layer = layer;
        this.depth = depth;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get id() {
        return `${this.depth}-${this.x}-${this.y}-${this.z}`;
    }

    get octreeIsLoaded() {
        return this.numPoints >= 0;
    }

    /**
     * @param {number} offset
     * @param {number} size
     */
    async fetch(offset, size) {
        return this.layer.source.fetcher(this.layer.source.url, {
            ...this.layer.source.networkOptions,
            headers: {
                ...this.layer.source.networkOptions.headers,
                range: `bytes=${offset}-${offset + size - 1}`,
            },
        });
    }

    createChildAABB(node) {
        // factor to apply, based on the depth difference (can be > 1)
        const f = 2 ** (node.depth - this.depth);

        // size of the child node bbox (Vector3), based on the size of the
        // parent node, and divided by the factor
        this.bbox.getSize(size).divideScalar(f);

        // initialize the child node bbox at the location of the parent node bbox
        node.bbox.min.copy(this.bbox.min);

        // position of the parent node, if it was at the same depth than the
        // child, found by multiplying the tree position by the factor
        position.copy(this).multiplyScalar(f);

        // difference in position between the two nodes, at child depth, and
        // scale it using the size
        translation.subVectors(node, position).multiply(size);

        // apply the translation to the child node bbox
        node.bbox.min.add(translation);

        // use the size computed above to set the max
        node.bbox.max.copy(node.bbox.min).add(size);
    }

    async loadOctree() {
        const buffer = await this.fetch(this.entryOffset, this.entryLength);
        const hierarchy = await Hierarchy.parse(new Uint8Array(buffer));

        const node = hierarchy.nodes[this.id];
        if (!node) {
            return Promise.reject('[CopcNode]: entry not found in hierarchy');
        }

        this.numPoints = node.pointCount;
        this.entryOffset = node.pointDataOffset;
        this.entryLength = node.pointDataLength;

        const stack = [];
        stack.push(this);

        while (stack.length) {
            const node = stack.shift();
            const depth = node.depth + 1;
            const x = node.x * 2;
            const y = node.y * 2;
            const z = node.z * 2;

            node.findAndCreateChild(depth, x,     y,     z,     hierarchy, stack);
            node.findAndCreateChild(depth, x + 1, y,     z,     hierarchy, stack);
            node.findAndCreateChild(depth, x,     y + 1, z,     hierarchy, stack);
            node.findAndCreateChild(depth, x + 1, y + 1, z,     hierarchy, stack);
            node.findAndCreateChild(depth, x,     y,     z + 1, hierarchy, stack);
            node.findAndCreateChild(depth, x + 1, y,     z + 1, hierarchy, stack);
            node.findAndCreateChild(depth, x,     y + 1, z + 1, hierarchy, stack);
            node.findAndCreateChild(depth, x + 1, y + 1, z + 1, hierarchy, stack);
        }
    }

    /**
     * TODO
     * @param {number} depth - TODO
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {Hierarchy.Subtree} hierarchy
     * @param {CopcNode[]} stack
     */
    findAndCreateChild(depth, x, y, z, hierarchy, stack) {
        const id = `${this.depth}-${this.x}-${this.y}-${this.z}`;

        let pointCount;
        let offset;
        let byteSize;

        const node = hierarchy.nodes[id];
        if (node) {
            pointCount = node.pointCount;
            offset = node.pointDataOffset;
            byteSize = node.pointDataLength;
        } else {
            const page = hierarchy.pages[id];
            if (!page) { return; }
            pointCount = -1;
            offset = page.pageOffset;
            byteSize = page.pageLength;
        }

        const child = new CopcNode(
            depth,
            x,
            y,
            z,
            offset,
            byteSize,
            this.layer,
            pointCount,
        );
        this.add(child);
        stack.push(child);
    }

    async load() {
        if (!this.octreeIsLoaded) {
            await this.loadOctree();
        }

        const buffer = await this.fetch(this.entryOffset, this.entryLength);
        const geometry = await this.layer.source.parse(buffer, {
            out: this.layer,
            in: {
                ...this.layer.source,
                pointCount: this.numPoints,
            },
        });

        return geometry;
    }
}

export default CopcNode;
