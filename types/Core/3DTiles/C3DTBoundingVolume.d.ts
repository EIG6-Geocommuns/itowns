export default C3DTBoundingVolume;
/**
 * @classdesc 3D Tiles
 * [bounding volume](https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/schema/boundingVolume.schema.json)
 * @property {C3DTilesTypes} type - Used by 3D Tiles extensions
 * (e.g. {@link C3DTBatchTableHierarchyExtension}) to know in which context
 * (i.e. for which 3D Tiles class) the parsing of the extension should be done.
 * @property {THREE.Box3} box - Bounding box, defined only if the Bounding Volume
 * is a box.
 * @property {OBB} region - Bounding region, defined only if the Bounding
 * Volume is a region.
 * @property {THREE.Sphere} sphere - Bounding sphere, defined only if the
 * Bounding Volume is a sphere.
 * @property {object} extensions - 3D Tiles extensions of the bounding volume
 * stored in the following format:
 * {extensioName1: extensionObject1, extensioName2: extensionObject2, ...}
 */
declare class C3DTBoundingVolume {
    constructor(json: any, inverseTileTransform: any, registeredExtensions: any);
    type: string;
    extensions: any;
    initBoundingRegion(region: any, inverseTileTransform: any): void;
    region: OBB;
    initBoundingBox(box: any): void;
    box: THREE.Box3;
    initBoundingSphere(sphere: any): void;
    sphere: THREE.Sphere;
    boundingVolumeCulling(camera: any, tileMatrixWorld: any): boolean;
    viewerRequestVolumeCulling(camera: any, tileMatrixWorld: any): boolean;
}
import OBB from "../../Renderer/OBB";
import * as THREE from "three";
//# sourceMappingURL=C3DTBoundingVolume.d.ts.map