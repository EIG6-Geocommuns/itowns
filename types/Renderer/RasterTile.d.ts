export const EMPTY_TEXTURE_ZOOM: -1;
export default RasterTile;
export class RasterColorTile extends RasterTile {
    get effect_type(): any;
    get effect_parameter(): any;
    get transparent(): any;
}
export class RasterElevationTile extends RasterTile {
    scaleFactor: number;
    min: any;
    max: any;
    bias: any;
    mode: any;
    zmin: any;
    zmax: any;
    get scale(): number;
    updateMinMaxElevation(): void;
    replaceNoDataValueFromTexture(texture: any): void;
}
/**
 * A `RasterTile` is part of raster [`Layer`]{@link Layer} data.
 * This part is a spatial subdivision of the extent of a layer.
 * In the `RasterTile`, The data are converted on three.js textures.
 * This `RasterTile` textures are assigned to a `LayeredMaterial`.
 * This material is applied on terrain (TileMesh).
 * The color textures are mapped to color the terrain.
 * The elevation textures are used to displace vertex terrain.
 *
 * @class RasterTile
 */
declare class RasterTile extends THREE.EventDispatcher<THREE.Event> {
    constructor(material: any, layer: any);
    layer: any;
    crs: any;
    textures: any[];
    offsetScales: any[];
    level: number;
    material: any;
    _handlerCBEvent: () => void;
    get id(): any;
    get opacity(): any;
    get visible(): any;
    initFromParent(parent: any, extents: any): void;
    dispose(removeEvent: any): void;
    _listeners: {};
    setTexture(index: any, texture: any, offsetScale: any): void;
    setTextures(textures: any, pitchs: any): void;
}
import * as THREE from "three";
//# sourceMappingURL=RasterTile.d.ts.map