export default TileMesh;
/**
 * A TileMesh is a THREE.Mesh with a geometricError and an OBB
 * The objectId property of the material is the with the id of the TileMesh
 * @constructor
 * @param {TileGeometry} geometry - the tile geometry
 * @param {THREE.Material} material - a THREE.Material compatible with THREE.Mesh
 * @param {Layer} layer - the layer the tile is added to
 * @param {Extent} extent - the tile extent
 * @param {?number} level - the tile level (default = 0)
 */
declare class TileMesh extends THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> {
    constructor(geometry: any, material: any, layer: any, extent: any, level?: number);
    layer: any;
    extent: any;
    level: number;
    obb: any;
    boundingSphere: THREE.Sphere;
    rotationAutoUpdate: boolean;
    layerUpdateState: {};
    isTileMesh: boolean;
    domElements: {};
    geoidHeight: number;
    link: any[];
    /**
     * If specified, update the min and max elevation of the OBB
     * and updates accordingly the bounding sphere and the geometric error
     *
     * @param {Object}  elevation
     * @param {number}  [elevation.min]
     * @param {number}  [elevation.max]
     * @param {number}  [elevation.scale]
     */
    setBBoxZ(elevation: {
        min?: number;
        max?: number;
        scale?: number;
    }): void;
    getExtentsByProjection(crs: any): any;
    /**
     * Search for a common ancestor between this tile and another one. It goes
     * through parents on each side until one is found.
     *
     * @param {TileMesh} tile
     *
     * @return {TileMesh} the resulting common ancestor
     */
    findCommonAncestor(tile: TileMesh): TileMesh;
    onBeforeRender(): void;
    findClosestDomElement(id: any): any;
    #private;
}
import * as THREE from "three";
//# sourceMappingURL=TileMesh.d.ts.map