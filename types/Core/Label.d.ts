export default Label;
/**
 * An object that handles the display of a text and/or an icon, linked to a 3D
 * position. The content of the `Label` is managed through a DOM object, in a
 * `<div>` handled by the `Label2DRenderer`.
 *
 * @property {boolean} isLabel - Used to checkout whether this object is a
 * Label. Default is true. You should not change this, as it is used internally
 * for optimisation.
 * @property {Element} content - The DOM object that contains the content of the
 * label. The style and the position are applied on this object. All labels
 * contain the `itowns-label` class, as well as a specific class related to the
 * layer linked to it: `itowns-label-[layer-id]` (replace `[layer-id]` by the
 * correct string).
 * @property {THREE.Vector3} position - The position in the 3D world of the
 * label.
 * @property {number} padding - sets the padding area on all four sides of an element at once.
 * @property {Coordinates} coordinates - The coordinates of the label.
 * @property {number} order - Order of the label that will be read from the
 * style. It helps sorting and prioritizing a Label during render.
 */
declare class Label extends THREE.Object3D<THREE.Event> {
    /**
     * @param {Element|string} content - The content; can be a
     * string, with or without HTML tags in it, or it can be an Element.
     * @param {Coordinates} coordinates - The world coordinates, where to place
     * the Label.
     * @param {Style} style - The style to apply to the content. Once the style
     * is applied, it cannot be changed directly. However, if it really needed,
     * it can be accessed through `label.content.style`, but it is highly
     * discouraged to do so.
     * @param {Object} [sprites] the sprites.
     */
    constructor(content: Element | string, coordinates: Coordinates, style?: Style, sprites?: any);
    isLabel: boolean;
    coordinates: Coordinates;
    projectedPosition: {
        x: number;
        y: number;
    };
    boundaries: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    content: Node;
    baseContent: string | Element;
    anchor: any;
    styleOffset: any;
    icon: any;
    iconOffset: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    zoom: {
        min: any;
        max: any;
    };
    order: any;
    padding: number;
    /**
     * Moves a label on the screen, using screen coordinates. It updates the
     * boundaries as it moves it.
     *
     * @param {number} x - X coordinates in pixels, from left.
     * @param {number} y - Y coordinates in pixels, from top.
     */
    updateProjectedPosition(x: number, y: number): void;
    updateCSSPosition(): void;
    /**
     * Updates the screen dimensions of the label, using
     * `getBoundingClientRect`.  It updates `width` and `height` property of the
     * label, and the boundaries.
     */
    initDimensions(): void;
    offset: {
        left: any;
        top: any;
    };
    update3dPosition(crs: any): void;
    updateElevationFromLayer(layer: any): boolean;
    updateHorizonCullingPoint(): void;
}
import * as THREE from "three";
import Coordinates from "Core/Geographic/Coordinates";
//# sourceMappingURL=Label.d.ts.map