export function unpack1K(color: any, factor: any): number;
export function getMaxColorSamplerUnitsCount(): number;
export namespace colorLayerEffects {
    const noEffect: number;
    const removeLightColor: number;
    const removeWhiteColor: number;
    const customEffect: number;
}
export namespace ELEVATION_MODES {
    const RGBA: number;
    const COLOR: number;
    const DATA: number;
}
export default LayeredMaterial;
declare class LayeredMaterial extends THREE.RawShaderMaterial {
    constructor(options: {}, crsCount: any);
    vertexShader: any;
    fragmentShader: any;
    layers: any[];
    elevationLayerIds: any[];
    colorLayerIds: any[];
    onBeforeCompile(shader: any, renderer: any): void;
    getUniformByType(type: any): {
        layers: THREE.IUniform<any>;
        textures: THREE.IUniform<any>;
        offsetScales: THREE.IUniform<any>;
        textureCount: THREE.IUniform<any>;
    };
    updateLayersUniforms(): void;
    layersNeedUpdate: boolean;
    setSequence(sequenceLayer: any): void;
    setSequenceElevation(layerId: any): void;
    removeLayer(layerId: any): void;
    addLayer(rasterNode: any): void;
    getLayer(id: any): any;
    getLayers(ids: any): any[];
    getElevationLayer(): any;
    setElevationScale(scale: any): void;
    #private;
}
import * as THREE from "three";
//# sourceMappingURL=LayeredMaterial.d.ts.map