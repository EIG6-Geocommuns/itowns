export default Navigation;
/**
 * A widget menu manager for navigation.
 *
 * To use it, you need to link the widgets' stylesheet to your html webpage. This stylesheet is included in
 * [itowns bundles](https://github.com/iTowns/itowns/releases) if you downloaded them, or it can be found in
 * `node_modules/itowns/examples/css` if you installed iTowns with npm. Otherwise, it can be found at
 * [this link](https://raw.githubusercontent.com/iTowns/itowns/master/examples/css/widgets.css). See
 * [this example](http://www.itowns-project.org/itowns/examples/#widgets_navigation) for more details.
 *
 * @extends Widget
 *
 * @property {HTMLElement}          domElement      An html div containing all navigation widgets.
 * @property {HTMLElement}          parentElement   The parent HTML container of `this.domElement`.
 * @property {HTMLButtonElement}    compass         The HTML button for the compass.
 * @property {HTMLButtonElement}    toggle3D        The HTML button for the 3D/2D toggle button.
 * @property {HTMLButtonElement}    zoomIn          The HTML button for the zoom-in button.
 * @property {HTMLButtonElement}    zoomOut         The HTML button for the zoom-out button.
 *
 * @example
 * // Create a Navigation widget in the bottom-right corner of an iTowns view domElement
 * const navigation = new Navigation(view, { position: 'bottom-right' };
 *
 * // Change the tooltip for the compass :
 * navigation.compass.title = 'new tooltip';
 *
 * // Change the method ran when clicking zoom-in button :
 * function newMethod() {
 *     // do something
 * }
 * navigation.zoomIn.onclick = newMethod;
 */
declare class Navigation extends Widget {
    /**
     * @param   {GlobeView~GlobeView}     view                                    The iTowns view the navigation should be linked
                                                                        * to. For the moment, only `{@link GlobeView}`
                                                                        * is supported.
     * @param   {Object}        options                                 The navigation menu optional configuration.
     * @param   {HTMLElement}   [options.parentElement=view.domElement] The parent HTML container of the div which
                                                                        * contains navigation widgets.
     * @param   {boolean}       [options.displayCompass=true]           Whether the compass widget should be displayed.
     * @param   {boolean}       [options.display3DToggle=true]          Whether the navigation should include a widget
                                                                        * to toggle between top and oblique view.
     * @param   {boolean}       [options.displayZoomIn=true]            Whether the zoom-in widget should be displayed.
     * @param   {boolean}       [options.displayZoomOut=true]           Whether the zoom-out widget should be displayed.
     * @param   {number}        [options.animationDuration=500]         The duration of travel animations, when clicking
                                                                        * navigation widgets.
     * @param   {string}        [options.position='bottom-left']        Defines which corner of the `parentElement` the
                                                                        * navigation menu should be displayed to.
                                                                        * Possible values are `top-left`, `top-right`,
                                                                        * `bottom-left` and `bottom-right`. If the input
                                                                        * value does not match one of these, it will be
                                                                        * defaulted to `bottom-left`.
     * @param   {string}        [options.direction='column']            Whether the navigation menu should expand
                                                                        * horizontally or vertically. Possible values
                                                                        * are `column` and `row`. If the input value
                                                                        * does not match one of these, it will be
                                                                        * defaulted to `column`.
     * @param   {Object}        [options.translate]                     An optional translation of the navigation menu.
     * @param   {number}        [options.translate.x=0]                 The navigation menu translation along the page
                                                                        * x-axis.
     * @param   {number}        [options.translate.y=0]                 The navigation menu translation along the page
                                                                        * y-axis.
     */
    constructor(view: any, options?: {
        parentElement?: HTMLElement;
        displayCompass?: boolean;
        display3DToggle?: boolean;
        displayZoomIn?: boolean;
        displayZoomOut?: boolean;
        animationDuration?: number;
        position?: string;
        direction?: string;
        translate?: {
            x?: number;
            y?: number;
        };
    });
    direction: string;
    animationDuration: number;
    compass: HTMLButtonElement;
    toggle3D: HTMLButtonElement;
    zoomIn: HTMLButtonElement;
    zoomOut: HTMLButtonElement;
    /**
     *
     * @param   {string}    id              The unique id the created button should be given.
     * @param   {string}    [content='']    An HTML string defining the content of the button.
     * @param   {string}    [title='']      An HTML string defining information on the button. This string will be
                                            * displayed in a tooltip when hovering the button.
     * @param   {function}  [onclick] The method that should be executed when the button is clicked on.
     * @param   {string}    [parentId]      The unique id of a button bar in which the created button should be added.
                                            * A button bar is a group which contains one or several buttons. All
                                            * buttons created with Navigation are in a button bar. If the given id does
                                            * not match an already existing button bar, a new button bar will be created
                                            * with this id. If no id is given, a button bar will be created with no id.
                                            * The later case can be useful for creating isolated buttons.
     *
     * @returns {HTMLButtonElement}     The created button.
     */
    addButton(id: string, content?: string, title?: string, onclick?: Function, parentId?: string): HTMLButtonElement;
    /**
     *
     * @param   {string}    id              The unique id the created div should be given.
     */
    addButtonBar(id: string): HTMLDivElement;
    #private;
}
import Widget from "./Widget";
//# sourceMappingURL=Navigation.d.ts.map