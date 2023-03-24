import { Copc } from 'copc';
import * as THREE from 'three';
import CopcNode from 'Core/CopcNode';
import PointCloudLayer from 'Layer/PointCloudLayer';
import Extent from 'Core/Geographic/Extent';

class CopcLayer extends PointCloudLayer {
    /**
     * @param {string} id
     * @param {Object} config
     * @param {string} [config.crs]
     */
    constructor(id, config) {
        super(id, config);
        this.isCopcLayer = true;

        const resolve = this.addInitializationStep();
        this.whenReady = this.source.whenReady.then((source) => {
            this.scale = new THREE.Vector3().addScalar(1);

            /** @type {Copc} */
            const copc = source.copc;
            const { pageOffset, pageLength } = copc.info.rootHierarchyPage;
            const boundsConforming = copc.info.cube;

            this.root = new CopcNode(0, 0, 0, 0, pageOffset, pageLength, this, -1);
            this.root.bbox.min.fromArray(boundsConforming, 0);
            this.root.bbox.max.fromArray(boundsConforming, 3);
            console.log('Layer whenReady');
            console.log(copc);
            console.log(copc.info.cube);
            console.log(this.root.bbox);
            console.log();

            this.extent = Extent.fromBox3(config.crs || 'EPSG:4326', this.root.bbox);
            return this.root.loadOctree().then(resolve);
        });
    }
}

export default CopcLayer;
