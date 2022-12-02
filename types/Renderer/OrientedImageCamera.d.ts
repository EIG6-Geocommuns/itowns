export default OrientedImageCamera;
/**
 * @classdesc OrientedImageCamera is a ThreeJs camera adapted to photogrammetric description.
 * So we can build a ThreeJs perspective camera from size and focal information.
 */
declare class OrientedImageCamera extends THREE.PerspectiveCamera {
    /**
     * @constructor
     * @param {number|Vector2} size - image size in pixels (default: x=1024, y=x)
     * @param {number|Vector2} focal - focal length in pixels (default: x=1024, y=x)
     * @param {Vector2} center - principal point in pixels (default: size/2)
     * @param {number} near - Camera frustum near plane (default: see THREE.PerspectiveCamera).
     * @param {number} far - Camera frustum far plane (default: see THREE.PerspectiveCamera).
     * @param {number} skew - shear transform parameter (default: 0)
     * @param {number} aspect - aspect ratio of the camera (default: size.x/size.y).
     */
    constructor(size: number | Vector2, focal: number | Vector2, center: Vector2, near: number, far: number, skew: number, aspect: number);
    size: any;
    focal: any;
    center: any;
    skew: number;
    textureMatrixWorldInverse: THREE.Matrix4;
    distortion: Distortion;
    maskPath: any;
    mask: any;
    copy(source: any, recursive: any): OrientedImageCamera;
}
import * as THREE from "three";
declare class Distortion {
    constructor(size: any);
    size: any;
    pps: THREE.Vector2;
    polynom: THREE.Vector4;
    l1l2: THREE.Vector3;
    setFromMicmacCalibration(distortion: any, imageYDown?: boolean): void;
    clone(): Distortion;
}
//# sourceMappingURL=OrientedImageCamera.d.ts.map