export default Searchbar;
/**
 * A widget for searchbar
 *
 * To use it, you need to link the widgets' stylesheet to your html webpage. This stylesheet is included in
 * [itowns bundles](https://github.com/iTowns/itowns/releases) if you downloaded them, or it can be found in
 * `node_modules/itowns/examples/css` if you installed iTowns with npm. Otherwise, it can be found at
 * [this link](https://raw.githubusercontent.com/iTowns/itowns/master/examples/css/widgets.css). See
 * [this example](http://www.itowns-project.org/itowns/examples/#widgets_searchbar) for more details.
 *
 * @extends Widget
 *
 * @property    {HTMLElement}   domElement      An html div containing the searchbar.
 * @property    {HTMLElement}   parentElement   The parent HTML container of `this.domElement`.
 */
declare class Searchbar extends Widget {
    /**
     * @param   {View}          view                                    The iTowns view the searchbar should be linked
                                                                        * to.
     *
     * @param   {Object}        geocodingOptions                        Configuration for geocoding.
     * @param   {URL}           geocodingOptions.url                    The URL of a geocoding service that should be
                                                                        * used to build suggestions.
     * @param   {function}      geocodingOptions.parser                 A method to parse fetched results from geocoding
                                                                        * url into a Map object. For each entry of this
                                                                        * Map, the key must be a string that will be
                                                                        * displayed as the html content of each
                                                                        * suggestion bellow the searchbar. The value
                                                                        * associated to the key is whatever the user
                                                                        * wants. The value is the parameter that is
                                                                        * passed to the `onSelected` method (specified
                                                                        * in another `geocodingOptions` parameter).
     * @param   {function}      [geocodingOptions.onSelected]           A method which describes what should be done
                                                                        * when user selects a location (by clicking or
                                                                        * hitting enter on a suggestion). The only
                                                                        * parameter of this method is the value mapped
                                                                        * with `geocodingOptions.parser` method.
     *
     * @param   {Object}        [options]                               The searchbar optional configuration.
     * @param   {HTMLElement}   [options.parentElement=view.domElement] The parent HTML container of the div which
                                                                        * contains searchbar widgets.
     * @param   {number}        [options.size]                          The size of the searchbar. It is a number that
                                                                        * describes both width and height in pixels of
                                                                        * the searchbar.
     * @param   {number}        [options.width=300]                     The width in pixels of the searchbar.
     * @param   {number}        [options.height=38]                     The height in pixels of the searchbar.
     * @param   {string}        [options.position='top']                Defines which position within the
                                                                        * `parentElement` the searchbar should be
                                                                        * displayed to. Possible values are `top`,
                                                                        * `bottom`, `left`, `right`, `top-left`,
                                                                        * `top-right`, `bottom-left` and `bottom-right`.
                                                                        * If the input value does not match one of
                                                                        * these, it will be defaulted to `top`.
     * @param   {Object}        [options.translate]                     An optional translation of the searchbar.
     * @param   {number}        [options.translate.x=0]                 The searchbar translation along the page x-axis.
     * @param   {number}        [options.translate.y=0]                 The searchbar translation along the page y-axis.
     * @param   {number}        [options.fontSize=16]                   The font size in pixel of the searchbar content.
     * @param   {number}        [options.maxSuggestionNumber=10]        The maximum number of suggestions that should
                                                                        * appear under the searchbar.
     * @param   {string}        [options.placeholder='Search location'] The placeholder that appears in the searchbar
                                                                        * when nothing has yet been typed.
     */
    constructor(view: View, geocodingOptions: {
        url: URL;
        parser: Function;
        onSelected?: Function;
    }, options?: {
        parentElement?: HTMLElement;
        size?: number;
        width?: number;
        height?: number;
        position?: string;
        translate?: {
            x?: number;
            y?: number;
        };
        fontSize?: number;
        maxSuggestionNumber?: number;
        placeholder?: string;
    });
    #private;
}
import Widget from "./Widget";
//# sourceMappingURL=Searchbar.d.ts.map