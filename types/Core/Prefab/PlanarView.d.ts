export default PlanarView;
/**
 * @extends View
 */
declare class PlanarView extends View {
    /**
     * @constructor
     *
     * @example <caption><b>Enable WebGl 1.0 instead of WebGl 2.0.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * const extent = new Extent('EPSG:3946', 1837816.94334, 1847692.32501, 5170036.4587, 5178412.82698);
     * var view = new itowns.PlanarView(viewerDiv, extent, {  renderer: { isWebGL2: false } });
     *
     * @example <caption><b>Instance with placement on the ground.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * const extent = new Extent('EPSG:3946', 1837816.94334, 1847692.32501, 5170036.4587, 5178412.82698);
     * var view = new itowns.PlanarView(viewerDiv, extent, { placement: { heading: -49.6, range: 6200, tilt: 17 } });
     *
     * @param {HTMLDivElement} viewerDiv - Where to attach the view and display it
     * in the DOM.
     * @param {Extent} extent - The ground extent.
     * @param {object=} options - See options of {@link View}.
     * @param {boolean} [options.noControls=false] - If true, no controls are associated to the view.
     * @param {object=} [options.controls] - options for the {@link PlanarControls} associated to the view, if
     * `options.noControls` is false.
     * @param {CameraUtils~CameraTransformOptions|Extent} [options.placement] - The
     * {@link CameraUtils~CameraTransformOptions} to apply to view's camera or the extent it must display at
     * initialization. By default, camera will display the view's extent (given in `extent` parameter).
     */
    constructor(viewerDiv: HTMLDivElement, extent: Extent, options?: object | undefined);
    isPlanarView: boolean;
    controls: PlanarControls;
    tileLayer: PlanarLayer;
    addLayer(layer: any): Promise<any>;
}
import View from "../View";
import PlanarControls from "Controls/PlanarControls";
import PlanarLayer from "./Planar/PlanarLayer";
//# sourceMappingURL=PlanarView.d.ts.map