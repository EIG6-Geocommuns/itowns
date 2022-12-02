export function readExpression(property: any, ctx: any): any;
export const cacheStyle: Cache;
export default Style;
import Cache from "Core/Scheduler/Cache";
/**
 * A Style is an object that defines the visual appearance of {@link
 * FeatureCollection} and {@link Feature}. It is taken into account when drawing
 * them in textures that will be placed onto tiles.
 *
 * As there are four basic elements present in `Features`, there are also four
 * main components in a `Style` object:
 * - `fill` is for all fillings and polygons
 * - `stroke` is for all lines and polygons edges
 * - `point` is for all points
 * - `text` contains all {@link Label} related things
 *
 * Many style property can be set to functions. When that is the case, the function's
 * return type must necessarily be the same as the types (other than function) of the property.
 * For instance, if the `fill.pattern` property is set to a function, this function must return
 * an `Image`, a `Canvas`, or `String`.
 * The first parameter of functions used to set `Style` properties is always an object containing
 * the properties of the features displayed with the current `Style` instance.
 *
 * @property {number} order - Order of the features that will be associated to
 * the style. It can helps sorting and prioritizing features if needed.
 * @property {Object} fill - Polygons and fillings style.
 * @property {string|function} fill.color - Defines the main color of the filling. Can be
 * any [valid color
 * string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
 * Default is no value, indicating that no filling needs to be done.
 * If the `Layer` is a `GeometryLayer` you could use `THREE.Color`.
 * @property {Image|Canvas|string|function} fill.pattern - Defines a pattern to fill the
 * surface with. It can be an `Image` to use directly, or an url to fetch the
 * pattern from. See [this
 * example](http://www.itowns-project.org/itowns/examples/#source_file_geojson_raster)
 * for how to use.
 * @property {number|function} fill.opacity - The opacity of the color or the
 * pattern. Can be between `0.0` and `1.0`. Default is `1.0`.
 * For a `GeometryLayer`, this opacity property isn't used.
 * @property {number|function} fill.base_altitude - `GeometryLayer` Style, defines altitude
 * for each Coordinates.
 * If `base_altitude` is `undefined`, the original altitude is kept, and if it doesn't exist
 * then the altitude value is set to 0.
 * @property {number|function} fill.extrusion_height - `GeometryLayer` Style, if defined,
 * polygons will be extruded by the specified amount
 * @property {Object} stroke - Lines and polygon edges.
 * @property {string|function} stroke.color The color of the line. Can be any [valid
 * color string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
 * Default is no value, indicating that no stroke needs to be done.
 * If the `Layer` is a `GeometryLayer` you could use `THREE.Color`.
 * @property {number|function} stroke.opacity - The opacity of the line. Can be between
 * `0.0` and `1.0`. Default is `1.0`.
 * For a `GeometryLayer`, this opacity property isn't used.
 * @property {number|function} stroke.width - The width of the line. Default is `1.0`.
 * @property {number|function} stroke.base_altitude - `GeometryLayer` Style, defines altitude
 * for each Coordinates.
 * If `base_altitude` is `undefined`, the original altitude is kept, and if it doesn't exist
 * then the altitude value is set to 0.
 *
 * @property {Object} point - Point style.
 * @property {string|function} point.color - The color of the point. Can be any [valid
 * color string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
 * Default is no value, indicating that no point will be shown.
 * @property {number|function} point.radius - The radius of the point, in pixel. Default
 * is `2.0`.
 * @property {string|function} point.line - The color of the border of the point. Can be
 * any [valid color
 * string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
 * It's not supported with a `GeometryLayer`.
 * @property {number|function} point.width - The width of the border, in pixel. Default
 * is `0.0` (no border).
 * @property {number|function} point.opacity - The opacity of the point. Can be between
 * `0.0` and `1.0`. Default is `1.0`.
 * It's not supported with a `GeometryLayer`.
 * @property {number|function} point.base_altitude - `GeometryLayer` Style, defines altitude
 * for each Coordinates.
 * If `base_altitude` is `undefined`, the original altitude is kept, and if it doesn't exist
 * then the altitude value is set to 0.
 *
 * @property {Object} text - All things {@link Label} related.
 * @property {string|function} text.field - A string to help read the text field from
 * properties of a `FeatureGeometry`, with the key of the property enclosed by
 * brackets. For example, if each geometry contains a `name` property,
 * `text.field` can be set as `{name}`. Default is no value, indicating that no
 * text will be shown.
 *
 * The brackets allows the use of complex fields. For
 * example, if a static string `foo` is attached to the changing property `bar`,
 * you can specify `foo {bar}`, and `foo` will stay everytime, while `{bar}`
 * will change into the value of the property of the geometry. You can also have
 * multiple properties in one field, like if you want the latin name and the
 * local name of a location. Specifying `{name_latin} - {name_local}` can result
 * in `Marrakesh - مراكش` for example.
 * @property {string|function} text.color - The color of the text. Can be any [valid
 * color string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
 * Default is `#000000`.
 * @property {string|number[]|function} text.anchor - The anchor of the text compared to its
 * position (see {@link Label} for the position). Can be a few value: `top`,
 * `left`, `bottom`, `right`, `center`, `top-left`, `top-right`, `bottom-left`
 * or `bottom-right`. Default is `center`.
 *
 * It can also be defined as an Array of two numbers. Each number defines an offset (in
 * fraction of the label width and height) between the label position and the top-left
 * corner of the text. The first value is the horizontal offset, and the second is the
 * vertical offset. For example, `[-0.5, -0.5]` will be equivalent to `center`.
 * @property {Array|function} text.offset - The offset of the text, depending on its
 * anchor, in pixels. First value is from `left`, second is from `top`. Default
 * is `[0, 0]`.
 * @property {number|function} text.padding - The padding outside the text, in pixels.
 * Default is `2`.
 * @property {number|function} text.size - The size of the font, in pixels. Default is
 * `16`.
 * @property {number|function} text.wrap - The maximum width, in pixels, before the text
 * is wrapped, because the string is too long. Default is `10`.
 * @property {number|function} text.spacing - The spacing between the letters, in `em`.
 * Default is `0`.
 * @property {string|function} text.transform - A value corresponding to the [CSS
 * property
 * `text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform).
 * Default is `none`.
 * @property {string|function} text.justify - A value corresponding to the [CSS property
 * `text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).
 * Default is `center`.
 * @property {number|function} text.opacity - The opacity of the text. Can be between
 * `0.0` and `1.0`. Default is `1.0`.
 * @property {Array|function} text.font - A list (as an array of string) of font family
 * names, prioritized in the order it is set. Default is `Open Sans Regular,
 * Arial Unicode MS Regular, sans-serif`.
 * @property {string|function} text.haloColor - The color of the halo. Can be any [valid
 * color string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
 * Default is `#000000`.
 * @property {number|function} text.haloWidth - The width of the halo, in pixels.
 * Default is `0`.
 * @property {number|function} text.haloBlur - The blur value of the halo, in pixels.
 * Default is `0`.
 *
 * @property {Object} icon - Defines the appearance of icons attached to label.
 * @property {String} icon.source - The url of the icons' image file.
 * @property {String} icon.key - The key of the icons' image in a vector tile data set.
 * @property {string} [icon.anchor='center'] - The anchor of the icon compared to the label position.
 * Can be `left`, `bottom`, `right`, `center`, `top-left`, `top-right`, `bottom-left`
 * or `bottom-right`.
 * @property {number} icon.size - If the icon's image is passed with `icon.source` or
 * `icon.key`, it size when displayed on screen is multiplied by `icon.size`. Default is `1`.
 *
 * @example
 * const style = new itowns.Style({
 *      stroke: { color: 'red' },
 *      point: { color: 'white', line: 'red' },
 * });
 *
 * const source = new itowns.FileSource(...);
 *
 * const layer = new itowns.ColorLayer('foo', {
 *      source: source,
 *      style: style,
 * });
 *
 * view.addLayer(layer);
 */
declare class Style {
    /**
     * @param {Object} [params={}] An object that can contain all properties of
     * a Style.
     * @param {Style} [parent] The parent style, that is looked onto if a value
     * is missing.
     *
     * @constructor
     */
    constructor(params?: any, parent?: Style);
    isStyle: boolean;
    order: number;
    parent: any;
    zoom: {};
    fill: {};
    stroke: {};
    point: {};
    text: {};
    icon: {};
    /**
     * Map drawing properties style (fill, stroke and point) from context to object.
     * Only the necessary properties are mapped to object.
     * if a property is expression, the mapped value will be the expression result depending on context.
     * @param      {Object}  context  The context
     * @return     {Object}  mapped style depending on context.
     */
    drawingStylefromContext(context: any): any;
    /**
     * Map symbol properties style (symbol and icon) from context to object.
     * Only the necessary properties are mapped to object.
     * if a property is expression, the mapped value will be the expression result depending on context.
     * @param      {Object}  context  The context
     * @return     {Object}  mapped style depending on context.
     */
    symbolStylefromContext(context: any): any;
    /**
     * Copies the content of the target style into this style.
     *
     * @param {Style} style - The style to copy.
     *
     * @return {Style} This style.
     */
    copy(style: Style): Style;
    /**
     * Clones this style.
     *
     * @return {Style} The new style, cloned from this one.
     */
    clone(): Style;
    /**
     * set Style from geojson properties.
     * @param {object} properties geojson properties.
     * @param {number} type
     * @returns {Style}
     */
    setFromGeojsonProperties(properties: object, type: number): Style;
    /**
     * set Style from vector tile layer properties.
     * @param {object} layer vector tile layer.
     * @param {Object} sprites vector tile layer.
     * @param {number} [order=0]
     * @param {boolean} [symbolToCircle=false]
     * @returns {Style}
     */
    setFromVectorTileLayer(layer: object, sprites: any, order?: number, symbolToCircle?: boolean): Style;
    /**
     * Applies this style to a DOM element. Limited to the `text` and `icon`
     * properties of this style.
     *
     * @param {Element} domElement - The element to set the style to.
     * @param {Object} sprites - the sprites.
     */
    applyToHTML(domElement: Element, sprites: any): void;
    /**
     * Gets the values corresponding to the anchor of the text. It is
     * proportions, to use with a `translate()` and a `transform` property.
     *
     * @return {number[]} Two percentage values, for x and y respectively.
     */
    getTextAnchorPosition(): number[];
    /**
     * Returns a string, associating `style.text.field` and properties to use to
     * replace the keys in `style.text.field`.
     *
     * @param {Object} ctx - An object containing the feature context.
     *
     * @return {string|undefined} The formatted string if `style.text.field` is defined, nothing otherwise.
     */
    getTextFromProperties(ctx: any): string | undefined;
}
//# sourceMappingURL=Style.d.ts.map