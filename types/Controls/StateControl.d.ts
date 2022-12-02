export default StateControl;
/**
 * ~State
 */
export type StateControl = {
    /**
     * =true Indicate whether the state is enabled or not.
     */
    enable: boolean;
    /**
     * The mouse button bound to this state.
     */
    mouseButton?: number;
    /**
     * The keyCode of the keyboard input bound to this state.
     */
    keyboard?: number;
    /**
     * The number of fingers on the pad bound to this state.
     */
    finger?: number;
    /**
     * True if the mouse button bound to this state must be pressed twice. For
     *   example, if `double` is set to true with a `mouseButton` set to left click,
     *   the State will be bound to a double click mouse button.
     */
    double?: boolean;
};
/**
 * @typedef {Object} StateControl~State
 * @property {boolean} enable=true Indicate whether the state is enabled or not.
 * @property {Number} [mouseButton] The mouse button bound to this state.
 * @property {Number} [keyboard] The keyCode of the keyboard input bound to this state.
 * @property {Number} [finger] The number of fingers on the pad bound to this state.
 * @property {boolean} [double] True if the mouse button bound to this state must be pressed twice. For
                                * example, if `double` is set to true with a `mouseButton` set to left click,
                                * the State will be bound to a double click mouse button.
 */
/**
 * It represents the control's states.
 * Each {@link State} is a control mode of the camera and how to interact with
 * the interface to activate this mode.
 * @class StateControl
 *
 * @property {State}    NONE        {@link State} when camera is idle.
 * @property {State}    ORBIT       {@link State} describing camera orbiting movement : the camera moves around its
                                    * target at a constant distance from it.
 * @property {State}    DOLLY       {@link State} describing camera dolly movement : the camera moves forward or
                                    * backward from its target.
 * @property {State}    PAN         {@link State} describing camera pan movement : the camera moves parallel to the
                                    * current view plane.
 * @property {State}    MOVE_GLOBE  {@link State} describing camera drag movement : the camera is moved around the view
                                    * to give the feeling that the view is dragged under a static camera.
 * @property {State}    PANORAMIC   {@link State} describing camera panoramic movement : the camera is rotated around
                                    * its own position.
 * @property {State}    TRAVEL_IN   {@link State} describing camera travel in movement : the camera is zoomed in toward
                                    * a given position. The target position depends on the key/mouse binding of this
                                    * state. If bound to a mouse button, the target position is the mouse position.
                                    * Otherwise, it is the center of the screen.
 * @property {State}    TRAVEL_OUT  {@link State} describing camera travel out movement : the camera is zoomed out from
                                    * a given position. The target position depends on the key/mouse binding of this
                                    * state. If bound to a mouse button, the target position is the mouse position.
                                    * Otherwise, it is the center of the screen. It is disabled by default.
 * @property {State}    ZOOM        {@link State} describing camera zoom in and out movement.
 * @property {boolean}  enable      Defines whether all input will be communicated to the associated `Controls` or not.
                                    * Default is true.
 * @property {boolean}  enableKeys  Defines whether keyboard input will be communicated to the associated `Controls` or
                                    * not. Default is true.
 */
declare class StateControl extends THREE.EventDispatcher<THREE.Event> {
    constructor(view: any, options?: {});
    _view: any;
    _domElement: any;
    NONE: {};
    _clickTimeStamp: number;
    _lastMousePressed: {
        viewCoords: THREE.Vector2;
    };
    _currentMousePressed: any;
    _currentKeyPressed: any;
    _onPointerDown: any;
    _onPointerMove: any;
    _onPointerUp: any;
    _onMouseWheel: any;
    _onKeyDown: any;
    _onKeyUp: any;
    _onBlur: any;
    _onContextMenu: any;
    /**
     * get the state corresponding to the mouse button and the keyboard key. If the input relates to a trigger - a
     * single event which triggers movement, without the move of the mouse for instance -, dispatch a relevant event.
     * @param      {Number}  mouseButton  The mouse button
     * @param      {Number}  keyboard     The keyboard
     * @param      {Boolean} [double]     Value of the searched state `double` property
     * @return     {State}  the state corresponding
     */
    inputToState(mouseButton: number, keyboard: number, double?: boolean): State;
    /**
     * get the state corresponding to the number of finger on the pad
     *
     * @param      {Number}  finger  The number of finger
     * @return     {state}  the state corresponding
     */
    touchToState(finger: number): state;
    /**
     * Set the current StateControl {@link State} properties to given values.
     * @param {Object}  options     Object containing the `State` values to set current `StateControl` properties to.
                                    * The `enable` property do not necessarily need to be specified. In that case, the
                                    * previous value of this property will be kept for the new {@link State}.
     *
     * @example
     * // Switch bindings for PAN and MOVE_GLOBE actions, and disabling PANORAMIC movement :
     * view.controls.states.setFromOptions({
     *     PAN: {
     *         mouseButton: itowns.THREE.MOUSE.LEFT,
     *     },
     *     MOVE_GLOBE: {
     *         mouseButton: itowns.THREE.MOUSE.RIGHT,
     *     },
     *     PANORAMIC: {
     *         enable: false,
     *     },
     * };
     */
    setFromOptions(options: any): void;
    onPointerDown(event: any): void;
    currentState: any;
    onPointerMove(event: any): void;
    onPointerUp(): void;
    onMouseWheel(event: any): void;
    onKeyDown(event: any): void;
    onKeyUp(): void;
    onBlur(): void;
    onContextMenu(event: any): void;
    /**
     * Remove all event listeners created within this instance of `StateControl`
     */
    dispose(): void;
}
import * as THREE from "three";
//# sourceMappingURL=StateControl.d.ts.map