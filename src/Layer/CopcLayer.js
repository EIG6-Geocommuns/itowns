import CopcNode from 'Core/CopcNode';
import PointCloudLayer from 'Layer/PointCloudLayer';
import Extent from 'Core/Geographic/Extent';

class CopcLayer extends PointCloudLayer {
    /**
     * @param {string} id
     * @param {Object} config
     */
    constructor(id, config) {
        super(id, config);
        this.isCopcLayer = true;

        const resolve = this.addInitializationStep();
        this.whenReady = this.source.whenReady.then(() => {
            const { cube, rootHierarchyPage } = this.source.info;
            const { pageOffset, pageLength } = rootHierarchyPage;

            this.root = new CopcNode(0, 0, 0, 0, pageOffset, pageLength, this, -1);
            this.root.bbox.min.fromArray(cube, 0);
            this.root.bbox.max.fromArray(cube, 3);

            this.extent = Extent.fromBox3(config.crs || 'EPSG:4326', this.root.bbox);
            return this.root.loadOctree().then(resolve);
        });
    }

    get spacing() {
        return this.source.info.spacing;
    }
}

export default CopcLayer;
