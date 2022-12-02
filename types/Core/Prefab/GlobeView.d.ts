export namespace GLOBE_VIEW_EVENTS {
    const GLOBE_INITIALIZED: string;
    const LAYER_ADDED: string;
    const LAYER_REMOVED: string;
    const COLOR_LAYERS_ORDER_CHANGED: string;
}
export default GlobeView;
/**
 * @extends View
 */
declare class GlobeView extends View {
    /**
     * Creates a view of a globe.
     *
     * @constructor
     *
     * @example <caption><b>Instance GlobeView.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * const placement = {
     *     coord: new itowns.Coordinates('EPSG:4326', 2.351323, 48.856712),
     *     range: 25000000,
     * }
     * var view = new itowns.GlobeView(viewerDiv, placement);
     *
     * @example <caption><b>Enable WebGl 1.0 instead of WebGl 2.0.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * const placement = {
     *     coord: new itowns.Coordinates('EPSG:4326', 2.351323, 48.856712),
     *     range: 25000000,
     * }
     * var view = new itowns.GlobeView(viewerDiv, placement, {  renderer: { isWebGL2: false } });
     *
     * @param {HTMLDivElement} viewerDiv - Where to attach the view and display it
     * in the DOM.
     * @param {CameraUtils~CameraTransformOptions|Extent} placement - An object to place view
     * @param {object} options - See options of {@link View}.
     * @param {Object=} options.controls - See options of {@link GlobeControls}
     * @param {module:CameraUtils~CameraTransformOptions} options.test -
     */
    constructor(viewerDiv: HTMLDivElement, placement?: {}, options?: {
        controls?: any | undefined;
        test: any;
    });
    isGlobeView: boolean;
    tileLayer: GlobeLayer;
    controls: GlobeControls;
    /**
     * Add layer in viewer.
     * The layer id must be unique.
     *
     * The `layer.whenReady` is a promise that resolves when
     * the layer is done. This promise is also returned by
     * `addLayer` allowing to chain call.
     *
     * The layer added is attached, by default to `GlobeLayer` (`GlobeView.tileLayer`).
     * If you want add a unattached layer use `View#addLayer` parent method.
     *
     * @param {LayerOptions|Layer|GeometryLayer} layer The layer to add in view.
     * @return {Promise} a promise resolved with the new layer object when it is fully initialized or rejected if any error occurred.
     */
    addLayer(layer: LayerOptions | Layer | GeometryLayer): Promise<any>;
    getPixelsToDegrees(pixels: number, screenCoord: any): number;
    getPixelsToDegreesFromDistance(pixels?: number, distance?: number): number;
    getMetersToDegrees(meters?: number): number;
}
import View from "../View";
import GlobeLayer from "Core/Prefab/Globe/GlobeLayer";
import GlobeControls from "Controls/GlobeControls";
//# sourceMappingURL=GlobeView.d.ts.map