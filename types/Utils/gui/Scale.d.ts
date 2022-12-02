export default Scale;
/**
 * A widget for scale
 *
 * To use it, you need to link the widgets' stylesheet to your html webpage. This stylesheet is included in
 * [itowns bundles](https://github.com/iTowns/itowns/releases) if you downloaded them, or it can be found in
 * `node_modules/itowns/examples/css` if you installed iTowns with npm. Otherwise, it can be found at
 * [this link](https://raw.githubusercontent.com/iTowns/itowns/master/examples/css/widgets.css). See
 * [this example](http://www.itowns-project.org/itowns/examples/#widgets_scale) for more details.
 *
 * @extends Widget
 *
 * @property    {HTMLElement}   domElement      An html div containing the scale.
 * @property    {HTMLElement}   parentElement   The parent HTML container of `this.domElement`.
 */
declare class Scale extends Widget {
    /**
     * @param   {View}                  view                                    The iTowns view the scale should be
                                                                                * linked to. If it is a
                                                                                * {@link PlanarView} or a
                                                                                * {@link GlobeView}, the scale will be
                                                                                * automatically updated. Otherwise, user
                                                                                * will need to implement the update
                                                                                * automation using the `Scale.update`
                                                                                * method.
     * @param   {Object}                [options]                               The scale optional configuration.
     * @param   {HTMLElement}           [options.parentElement=view.domElement] The parent HTML container of the div
                                                                                * which contains scale widgets.
     * @param   {number}                [options.width=200]                     The width in pixels of the scale.
     * @param   {number}                [options.height=30]                     The height in pixels of the scale.
     * @param   {string}                [options.position='bottom-left']        Defines which position within the
                                                                                * `parentElement` the scale should be
                                                                                * displayed to. Possible values are
                                                                                * `top`, `bottom`, `left`, `right`,
                                                                                * `top-left`, `top-right`, `bottom-left`
                                                                                * and `bottom-right`. If the input value
                                                                                * does not match one of these, it will
                                                                                * be defaulted to `bottom-left`.
     * @param   {Object}                [options.translate]                     An optional translation of the scale.
     * @param   {number}                [options.translate.x=0]                 The scale translation along the page
                                                                                * x-axis.
     * @param   {number}                [options.translate.y=0]                 The scale translation along the page
                                                                                * y-axis.
     */
    constructor(view: View, options?: {
        parentElement?: HTMLElement;
        width?: number;
        height?: number;
        position?: string;
        translate?: {
            x?: number;
            y?: number;
        };
    });
    view: View;
    width: number;
    addEventListeners(): void;
    /**
     * Update the scale size and content according to view camera position.
     */
    update(): void;
}
import Widget from "./Widget";
//# sourceMappingURL=Scale.d.ts.map