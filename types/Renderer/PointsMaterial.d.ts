export namespace MODE {
    const COLOR: number;
    const INTENSITY: number;
    const CLASSIFICATION: number;
    const NORMAL: number;
}
export namespace ClassificationScheme {
    const DEFAULT: {
        0: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        1: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        2: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        3: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        4: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        5: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        6: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        7: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        8: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        9: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        10: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        11: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        12: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
        DEFAULT: {
            visible: boolean;
            name: string;
            color: THREE.Color;
            opacity: number;
        };
    };
}
export default PointsMaterial;
import * as THREE from "three";
declare class PointsMaterial extends THREE.RawShaderMaterial {
    /**
     * @class      PointsMaterial
     * @param      {object}  [options={}]  The options
     * @param      {number}  [options.size=0]  size point
     * @param      {number}  [options.mode=MODE.COLOR]  display mode.
     * @param      {THREE.Vector4}  [options.overlayColor=new THREE.Vector4(0, 0, 0, 0)]  overlay color.
     * @param      {THREE.Vector2}  [options.intensityRange=new THREE.Vector2(0, 1)]  intensity range.
     * @param      {boolean}  [options.applyOpacityClassication=false]  apply opacity classification on all display mode.
     * @param      {Classification}  [options.classification] -  define points classification.
     * @property {Classification}  classification - points classification.
     *
     * @example
     * // change color category classification
     * const pointMaterial = new PointsMaterial();
     * pointMaterial.classification[3].color.setStyle('red');
     * pointMaterial.recomputeClassification();
     */
    constructor(options?: {
        size?: number;
        mode?: number;
        overlayColor?: THREE.Vector4;
        intensityRange?: THREE.Vector2;
        applyOpacityClassication?: boolean;
        classification?: Classification;
    });
    vertexShader: any;
    scale: any;
    classification: Classification;
    fragmentShader: any;
    recomputeClassification(): void;
    onBeforeCompile(shader: any, renderer: any): void;
    copy(source: any): PointsMaterial;
    enablePicking(picking: any): void;
    picking: any;
    update(source: any): PointsMaterial;
    size: any;
    mode: any;
}
/**
 * Every lidar point can have a classification assigned to it that defines
 * the type of object that has reflected the laser pulse. Lidar points can be
 * classified into a number of categories including bare earth or ground,
 * top of canopy, and water. The different classes are defined using numeric
 * integer codes in the files.
 *
 * @property {object} category - category classification,
 * @property {boolean} category.visible - category visibility,
 * @property {string} category.name - category name,
 * @property {THREE.Color} category.color - category color,
 * @property {number} category.opacity - category opacity,
 */
declare class Classification {
}
//# sourceMappingURL=PointsMaterial.d.ts.map