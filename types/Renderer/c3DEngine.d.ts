export default c3DEngine;
declare class c3DEngine {
    constructor(rendererOrDiv: any, options?: {});
    width: any;
    height: any;
    positionBuffer: any;
    _nextThreejsLayer: number;
    fullSizeRenderTarget: THREE.WebGLRenderTarget;
    renderView: any;
    onWindowResize: any;
    label2dRenderer: Label2DRenderer;
    renderer: any;
    getWindowSize(): THREE.Vector2;
    /**
     * return renderer THREE.js
     * @returns {undefined|THREE.WebGLRenderer}
     */
    getRenderer(): undefined | THREE.WebGLRenderer;
    /**
     * Render view to a Uint8Array.
     *
     * @param {View} view - The view to render
     * @param {object} [zone] - partial zone to render
     * @param {number} zone.x - x (in view coordinate)
     * @param {number} zone.y - y (in view coordinate)
     * @param {number} zone.width - width of area to render (in pixels)
     * @param {number} zone.height - height of area to render (in pixels)
     * @return {THREE.RenderTarget} - Uint8Array, 4 bytes per pixel. The first pixel in
     * the array is the bottom-left pixel.
     */
    renderViewToBuffer(view: View, zone?: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): THREE.RenderTarget;
    /**
     * Render view to a THREE.RenderTarget.
     *
     * @param {View} view - The view to render
     * @param {THREE.RenderTarget} [target] - destination render target. Default value: full size render target owned by c3DEngine.
     * @param {object} [zone] - partial zone to render (zone x/y uses view coordinates) Note: target must contain complete zone
     * @return {THREE.RenderTarget} - the destination render target
     */
    renderViewToRenderTarget(view: View, target?: THREE.RenderTarget, zone?: object): THREE.RenderTarget;
    bufferToImage(pixelBuffer: any, width: any, height: any): HTMLImageElement;
    getUniqueThreejsLayer(): number;
    depthBufferRGBAValueToOrthoZ(depthBufferRGBA: any, camera: any): number;
}
import * as THREE from "three";
import Label2DRenderer from "Renderer/Label2DRenderer";
//# sourceMappingURL=c3DEngine.d.ts.map