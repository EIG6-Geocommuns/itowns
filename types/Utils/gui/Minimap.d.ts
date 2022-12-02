export default Minimap;
/**
 * A widget for minimap
 *
 * To use it, you need to link the widgets' stylesheet to your html webpage. This stylesheet is included in
 * [itowns bundles](https://github.com/iTowns/itowns/releases) if you downloaded them, or it can be found in
 * `node_modules/itowns/examples/css` if you installed iTowns with npm. Otherwise, it can be found at
 * [this link](https://raw.githubusercontent.com/iTowns/itowns/master/examples/css/widgets.css). See
 * [this example](http://www.itowns-project.org/itowns/examples/#widgets_minimap) for more details.
 *
 * @extends Widget
 *
 * @property    {HTMLElement}   domElement      An html div containing the minimap.
 * @property    {HTMLElement}   parentElement   The parent HTML container of `this.domElement`.
 */
declare class Minimap extends Widget {
    /**
     * @param   {GlobeView}             view                                    The iTowns view the minimap should be
                                                                                * linked to. Only {@link GlobeView} is
                                                                                * supported at the moment.
     * @param   {ColorLayer}            layer                                   The {@link ColorLayer} that should be
                                                                                * displayed on the minimap.
     * @param   {Object}                [options]                               The minimap optional configuration.
     * @param   {HTMLElement}           [options.parentElement=view.domElement] The parent HTML container of the div
                                                                                * which contains minimap widgets.
     * @param   {number}                [options.size]                          The size of the minimap. It is a number
                                                                                * that describes both width and height
                                                                                * in pixels of the minimap.
     * @param   {number}                [options.width=150]                     The width in pixels of the minimap.
     * @param   {number}                [options.height=150]                    The height in pixels of the minimap.
     * @param   {string}                [options.position='bottom-left']        Defines which position within the
                                                                                * `parentElement` the minimap should be
                                                                                * displayed to. Possible values are
                                                                                * `top`, `bottom`, `left`, `right`,
                                                                                * `top-left`, `top-right`, `bottom-left`
                                                                                * and `bottom-right`. If the input value
                                                                                * does not match one of these, it will
                                                                                * be defaulted to `bottom-left`.
     * @param   {Object}                [options.translate]                     An optional translation of the minimap.
     * @param   {number}                [options.translate.x=0]                 The minimap translation along the page
                                                                                * x-axis.
     * @param   {number}                [options.translate.y=0]                 The minimap translation along the page
                                                                                * y-axis.
     * @param   {HTMLElement|string}    [options.cursor]                        An html element or an HTML string
                                                                                * describing a cursor showing minimap
                                                                                * view camera target position at the
                                                                                * center of the minimap.
     * @param   {number}                [options.minScale=1/2000]               The minimal scale the minimap can reach.
     * @param   {number}                [options.maxScale=1/1_250_000]          The maximal scale the minimap can reach.
     * @param   {number}                [options.zoomRatio=1/30]                The ratio between minimap camera zoom
                                                                                * and view camera zoom.
     * @param   {number}                [options.pitch=0.28]                    The screen pixel pitch, used to compute
                                                                                * view and minimap scale.
     */
    constructor(view: GlobeView, layer: ColorLayer, options?: {
        parentElement?: HTMLElement;
        size?: number;
        width?: number;
        height?: number;
        position?: string;
        translate?: {
            x?: number;
            y?: number;
        };
        cursor?: HTMLElement | string;
        minScale?: number;
        maxScale?: number;
        zoomRatio?: number;
        pitch?: number;
    });
    minScale: number;
    maxScale: number;
    zoomRatio: number;
    view: PlanarView;
}
import Widget from "./Widget";
import PlanarView from "Core/Prefab/PlanarView";
//# sourceMappingURL=Minimap.d.ts.map