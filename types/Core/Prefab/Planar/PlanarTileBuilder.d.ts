export default PlanarTileBuilder;
declare class PlanarTileBuilder {
    constructor(options?: {});
    crs: any;
    tmp: {
        coords: Coordinates;
        position: THREE.Vector3;
        normal: THREE.Vector3;
    };
    uvCount: any;
    prepare(params: any): void;
    center(extent: any): THREE.Vector3;
    vertexPosition(params: any): THREE.Vector3;
    vertexNormal(): THREE.Vector3;
    uProjecte(u: any, params: any): void;
    vProjecte(v: any, params: any): void;
    computeSharableExtent(extent: any): {
        sharableExtent: Extent;
        quaternion: THREE.Quaternion;
        position: THREE.Vector3;
    };
}
import Coordinates from "Core/Geographic/Coordinates";
import * as THREE from "three";
import Extent from "Core/Geographic/Extent";
//# sourceMappingURL=PlanarTileBuilder.d.ts.map