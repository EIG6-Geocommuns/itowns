import * as THREE from 'three';
import { Hierarchy } from 'copc';
import PointCloudNode from 'Core/PointCloudNode';

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

    async loadOctree() {
        const buffer = await this.fetch(this.entryOffset, this.entryLength);
        const subtree = await Hierarchy.parse(new Uint8Array(buffer));

        const node = subtree.nodes[this.id];
        if (!node) {
            return Promise.reject('[CopcNode]: entry not found in hierarchy');
        }

        this.numPoints = node.pointCount;
        this.entryOffset = node.pointDataOffset;
        this.entryLength = node.pointDataLength;
    }

    /**
     * TODO
     * @param {number} depth - TODO
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {Hierarchy.Subtree} hierarchy
     * @returns {CopcNode | undefined}
     */
    findAndCreateChild(depth, x, y, z, hierarchy) {
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

        return new CopcNode(
            depth,
            x,
            y,
            z,
            offset,
            byteSize,
            this.layer,
            pointCount,
        );
    }

    async load() {
        console.log('[load]: check if octree loaded');
        if (!this.octreeIsLoaded) {
            await this.loadOctree();
        }

        console.log('[load]: octree is loaded');
        const buffer = await this.fetch(this.entryOffset, this.entryLength);
        console.log('[load]: buffer is fetched');
        console.log(buffer);
        const geometry = await this.layer.source.parse(buffer, {
            out: this.layer,
            in: {
                ...this.layer.source,
                pointCount: this.numPoints,
            },
        });
        console.log('[load]: geometry is parsed');
        console.log(geometry);

        return geometry;
    }
}

export default CopcNode;
