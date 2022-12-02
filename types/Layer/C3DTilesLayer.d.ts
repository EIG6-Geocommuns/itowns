export default C3DTilesLayer;
declare class C3DTilesLayer extends GeometryLayer {
    /**
     * Constructs a new instance of 3d tiles layer.
     * @constructor
     * @extends GeometryLayer
     *
     * @example
     * // Create a new Layer 3d-tiles For DiscreteLOD
     * const l3dt = new C3DTilesLayer('3dtiles', {
     *      name: '3dtl',
     *      source: new C3DTilesSource({
     *           url: 'https://tileset.json'
     *      })
     * }, view);
     * View.prototype.addLayer.call(view, l3dt);
     *
     * @param      {string}  id - The id of the layer, that should be unique.
     *     It is not mandatory, but an error will be emitted if this layer is
     *     added a
     * {@link View} that already has a layer going by that id.
     * @param      {object}  config   configuration, all elements in it
     * will be merged as is in the layer.
     * @param {C3TilesSource} config.source The source of 3d Tiles.
     *
     * name.
     * @param  {View}  view  The view
     */
    constructor(id: string, config: {
        source: C3TilesSource;
    }, view: View);
    isC3DTilesLayer: boolean;
    sseThreshold: any;
    cleanupDelay: any;
    onTileContentLoaded: any;
    protocol: string;
    overrideMaterials: any;
    name: any;
    registeredExtensions: any;
    _cleanableTiles: any[];
    tileset: C3DTileset;
    preUpdate(): any;
    update(context: any, layer: any, node: any): any;
    getObjectToUpdateForAttachedLayers(meta: any): {
        elements: any[];
        parent: any;
    } | {
        elements: any[];
        parent?: undefined;
    };
    /**
     * Finds the batch table of an object in a 3D Tiles layer. This is
     * for instance needed when picking because we pick the geometric
     * object which is not at the same level in the layer structure as
     * the batch table. More details here on itowns internal
     * organization of 3DTiles:
     *  https://github.com/MEPP-team/RICT/blob/master/Doc/iTowns/Doc.md#itowns-internal-organisation-of-3d-tiles-data
     * @param {THREE.Object3D} object - a 3D geometric object
     * @returns {C3DTBatchTable} - the batch table of the object
     */
    findBatchTable(object: THREE.Object3D): C3DTBatchTable;
    /**
     * Gets semantic information from batch table and batch table extensions
     * of an intersected feature.
     * @param {Array} intersects - @return An array containing all
     * targets picked under specified coordinates. Intersects can be
     * computed with view.pickObjectsAt(..). See fillHTMLWithPickingInfo()
     * in 3dTilesHelper.js for an example.
     * @returns {Object} - an object containing the batch id, the
     * information from the batch table and from the extension of the batch
     * table for an intersected feature.
     */
    getInfoFromIntersectObject(intersects: any[]): {
        batchID: number;
    };
}
import GeometryLayer from "Layer/GeometryLayer";
import C3DTileset from "Core/3DTiles/C3DTileset";
import * as THREE from "three";
//# sourceMappingURL=C3DTilesLayer.d.ts.map