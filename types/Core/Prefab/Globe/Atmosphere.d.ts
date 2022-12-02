export default Atmosphere;
declare class Atmosphere extends GeometryLayer {
    /**
    * It's layer to simulate Globe atmosphere.
    * There's 2 modes : simple and realistic (atmospheric-scattering).
     *
    * The atmospheric-scattering it is taken from :
    * * [Atmosphere Shader From Space (Atmospheric scattering)](http://stainlessbeer.weebly.com/planets-9-atmospheric-scattering.html)
    * * [Accurate Atmospheric Scattering (NVIDIA GPU Gems 2)]{@link https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-16-accurate-atmospheric-scattering}.
    *
    * @constructor
    * @extends GeometryLayer
    *
    * @param {string} id - The id of the layer Atmosphere.
    * @param {Object} [options] - options layer.
    * @param {number} [options.Kr] - `Kr` is the rayleigh scattering constant.
    * @param {number} [options.Km] - `Km` is the Mie scattering constant.
    * @param {number} [options.ESun] - `ESun` is the brightness of the sun.
    * @param {number} [options.g] - constant `g` that affects the symmetry of the scattering.
    * @param {number} [options.innerRadius] - The inner (planetary) radius
    * @param {number} [options.outerRadius] - The outer (Atmosphere) radius
    * @param {number[]} [options.wavelength] - The constant is the `wavelength` (or color) of light.
    * @param {number} [options.scaleDepth] - The `scale depth` (i.e. the altitude at which the atmosphere's average density is found).
    * @param {number} [options.mieScaleDepth] - not used.
    */
    constructor(id?: string, options?: {
        Kr?: number;
        Km?: number;
        ESun?: number;
        g?: number;
        innerRadius?: number;
        outerRadius?: number;
        wavelength?: number[];
        scaleDepth?: number;
        mieScaleDepth?: number;
    });
    isAtmosphere: boolean;
    basicAtmosphere: THREE.Object3D<THREE.Event>;
    realisticAtmosphere: THREE.Object3D<THREE.Event>;
    realisticLightingPosition: {
        x: number;
        y: number;
        z: number;
    };
    fog: {
        enable: boolean;
        distance: number;
    };
    realisticAtmosphereInitParams: {
        Kr?: number;
        Km?: number;
        ESun?: number;
        g?: number;
        innerRadius?: number;
        outerRadius?: number;
        wavelength?: number[];
        scaleDepth?: number;
        mieScaleDepth?: number;
    };
    update(context: any, layer: any, node: any): void;
    preUpdate(context: any, srcs: any): void;
    _initRealisticLighning(): void;
    setRealisticOn(bool: any): void;
}
import GeometryLayer from "Layer/GeometryLayer";
import * as THREE from "three";
//# sourceMappingURL=Atmosphere.d.ts.map