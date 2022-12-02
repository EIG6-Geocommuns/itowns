export default BuilderEllipsoidTile;
declare class BuilderEllipsoidTile {
    constructor(options?: {});
    tmp: {
        coords: Coordinates[];
        position: THREE.Vector3;
        dimension: THREE.Vector2;
    };
    crs: any;
    uvCount: any;
    computeUvs: ((() => void) | ((params: any) => number))[];
    prepare(params: any): void;
    center(extent: any): any;
    vertexPosition(params: any): THREE.Vector3;
    vertexNormal(): THREE.Vector3;
    uProjecte(u: any, params: any): void;
    vProjecte(v: any, params: any): void;
    computeSharableExtent(extent: any): {
        sharableExtent: Extent;
        quaternion: THREE.Quaternion;
        position: any;
    };
}
import Coordinates from "Core/Geographic/Coordinates";
import * as THREE from "three";
import Extent from "Core/Geographic/Extent";
//# sourceMappingURL=BuilderEllipsoidTile.d.ts.map