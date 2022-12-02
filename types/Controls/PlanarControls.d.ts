export namespace keys {
    const CTRL: number;
    const SPACE: number;
    const T: number;
    const Y: number;
}
export namespace STATE {
    const NONE: number;
    const DRAG: number;
    const PAN: number;
    const ROTATE: number;
    const TRAVEL: number;
    const ORTHO_ZOOM: number;
}
export namespace PLANAR_CONTROL_EVENT {
    const MOVED: string;
}
export default PlanarControls;
/**
 * Planar controls is a camera controller adapted for a planar view, with animated movements.
 * Usage is as follow :
 * <ul>
 *     <li><b>Left mouse button:</b> drag the camera (translation on the (xy) world plane).</li>
 *     <li><b>Right mouse button:</b> pan the camera (translation on the vertical (z) axis of the world plane).</li>
 *     <li><b>CTRL + Left mouse button:</b> rotate the camera around the focus point.</li>
 *     <li><b>Wheel scrolling:</b> zoom toward the cursor position.</li>
 *     <li><b>Wheel clicking:</b> smart zoom toward the cursor position (animated).</li>
 *     <li><b>Y key:</b> go to the starting view (animated).</li>
 *     <li><b>T key:</b> go to the top view (animated).</li>
 * </ul>
 *
 * @class   PlanarControls
 * @param   {PlanarView}    view                                the view where the controls will be used
 * @param   {object}        options
 * @param   {boolean}       [options.enableRotation=true]       Enable the rotation with the `CTRL + Left mouse button`
 * and in animations, like the smart zoom.
 * @param   {boolean}       [options.enableSmartTravel=true]    Enable smart travel with the `wheel-click / space-bar`.
 * @param   {boolean}       [options.enablePan=true]            Enable pan movements with the `right-click`.
 * @param   {number}        [options.rotateSpeed=2.0]           Rotate speed.
 * @param   {number}        [options.maxPanSpeed=15]            Pan speed when close to maxAltitude.
 * @param   {number}        [options.minPanSpeed=0.05]          Pan speed when close to the ground.
 * @param   {number}        [options.zoomTravelTime=0.2]        Animation time when zooming.
 * @param   {number}        [options.zoomFactor=2]              The factor the scale is multiplied by when zooming
 * in and divided by when zooming out. This factor can't be null.
 * @param   {number}        [options.maxResolution=0]           The smallest size in meters a pixel at the center of the
 * view can represent.
 * @param   {number}        [options.minResolution=Infinity]    The biggest size in meters a pixel at the center of the
 * view can represent.
 * @param   {number}        [options.maxAltitude=12000]         Maximum altitude reachable when panning or zooming out.
 * @param   {number}        [options.groundLevel=200]           Minimum altitude reachable when panning.
 * @param   {number}        [options.autoTravelTimeMin=1.5]     Minimum duration for animated travels with the `auto`
 * parameter.
 * @param   {number}        [options.autoTravelTimeMax=4]       Maximum duration for animated travels with the `auto`
 * parameter.
 * @param   {number}        [options.autoTravelTimeDist=20000]  Maximum travel distance for animated travel with the
 * `auto` parameter.
 * @param   {number}        [options.smartTravelHeightMin=75]     Minimum height above ground reachable after a smart
 * travel.
 * @param   {number}        [options.smartTravelHeightMax=500]    Maximum height above ground reachable after a smart
 * travel.
 * @param   {boolean}       [options.instantTravel=false]       If set to true, animated travels will have no duration.
 * @param   {number}        [options.minZenithAngle=0]          The minimum reachable zenith angle for a camera
 * rotation, in degrees.
 * @param   {number}        [options.maxZenithAngle=82.5]       The maximum reachable zenith angle for a camera
 * rotation, in degrees.
 * @param   {boolean}       [options.handleCollision=true]
 */
declare class PlanarControls extends THREE.EventDispatcher<THREE.Event> {
    constructor(view: any, options?: {});
    view: any;
    camera: any;
    enableRotation: any;
    enablePan: any;
    maxAltitude: any;
    zoomTravelTime: any;
    rotateSpeed: any;
    minPanSpeed: any;
    maxPanSpeed: any;
    zoomInFactor: any;
    zoomOutFactor: number;
    maxResolution: any;
    minResolution: any;
    groundLevel: any;
    autoTravelTimeMin: any;
    autoTravelTimeMax: any;
    autoTravelTimeDist: any;
    smartTravelHeightMin: any;
    smartTravelHeightMax: any;
    instantTravel: any;
    minZenithAngle: number;
    maxZenithAngle: number;
    handleCollision: any;
    minDistanceCollision: number;
    enableSmartTravel: any;
    state: number;
    cursor: {
        default: string;
        drag: string;
        pan: string;
        travel: string;
        rotate: string;
        ortho_zoom: string;
    };
    _handlerOnKeyDown: any;
    _handlerOnMouseDown: any;
    _handlerOnMouseUp: any;
    _handlerOnMouseMove: any;
    _handlerOnMouseWheel: any;
    _handlerContextMenu: any;
    _handlerUpdate: any;
    dispose(): void;
    /**
     * update the view and camera if needed, and handles the animated travel
     * @param   {number}    dt                  the delta time between two updates in millisecond
     * @param   {boolean}   updateLoopRestarted true if we just started rendering
     * @ignore
     */
    update(dt: number, updateLoopRestarted: boolean): void;
    /**
     * Initiate a drag movement (translation on (xy) plane). The movement value is derived from the actual world
     * point under the mouse cursor. This allows user to 'grab' a world point and drag it to move.
     *
     * @ignore
     */
    initiateDrag(): void;
    /**
     * Handle the drag movement (translation on (xy) plane) when user moves the mouse while in STATE.DRAG. The
     * drag movement is previously initiated by [initiateDrag]{@link PlanarControls#initiateDrag}. Compute the
     * drag value and update the camera controls. The movement value is derived from the actual world point under
     * the mouse cursor. This allows the user to 'grab' a world point and drag it to move.
     *
     * @ignore
     */
    handleDragMovement(): void;
    /**
     * Initiate a pan movement (local translation on (xz) plane).
     *
     * @ignore
     */
    initiatePan(): void;
    /**
     * Handle the pan movement (translation on local x / world z plane) when user moves the mouse while
     * STATE.PAN. The drag movement is previously initiated by [initiatePan]{@link PlanarControls#initiatePan}.
     * Compute the pan value and update the camera controls.
     *
     * @ignore
     */
    handlePanMovement(): void;
    /**
     * Initiate a rotate (orbit) movement.
     *
     * @ignore
     */
    initiateRotation(): void;
    /**
     * Handle the rotate movement (orbit) when user moves the mouse while in STATE.ROTATE. The movement is an
     * orbit around `centerPoint`, the camera focus point (ground point at screen center). The rotate movement
     * is previously initiated in [initiateRotation]{@link PlanarControls#initiateRotation}.
     * Compute the new position value and update the camera controls.
     *
     * @ignore
     */
    handleRotation(): void;
    /**
     * Triggers a Zoom animated movement (travel) toward / away from the world point under the mouse cursor. The
     * zoom intensity varies according to the distance between the camera and the point. The closer to the ground,
     * the lower the intensity. Orientation will not change (null parameter in the call to
     * [initiateTravel]{@link PlanarControls#initiateTravel} function).
     *
     * @param   {Event} event   the mouse wheel event.
     * @ignore
     */
    initiateZoom(event: Event): void;
    /**
     * Handle the animated zoom change for an orthographic camera, when state is `ZOOM`.
     *
     * @param   {number}    dt  the delta time between two updates in milliseconds
     * @ignore
     */
    handleZoomOrtho(dt: number): void;
    /**
     * Triggers a 'smart zoom' animated movement (travel) toward the point under mouse cursor. The camera will be
     * smoothly moved and oriented close to the target, at a determined height and distance.
     *
     * @ignore
     */
    initiateSmartTravel(): void;
    /**
     * Triggers an animated movement and rotation for the camera.
     *
     * @param   {THREE.Vector3} targetPos   The target position of the camera (reached at the end).
     * @param   {number|string}        travelTime  Set to `auto` or set to a duration in seconds. If set to `auto`,
     * travel time will be set to a duration between `autoTravelTimeMin` and `autoTravelTimeMax` according to
     * the distance and the angular difference between start and finish.
     * @param   {(string|THREE.Vector3|THREE.Quaternion)}   targetOrientation   define the target rotation of
     * the camera :
     * <ul>
     *     <li>if targetOrientation is a world point (Vector3) : the camera will lookAt() this point</li>
     *     <li>if targetOrientation is a quaternion : this quaternion will define the final camera orientation </li>
     *     <li>if targetOrientation is neither a world point nor a quaternion : the camera will keep its starting
     *     orientation</li>
     * </ul>
     * @param   {boolean}       useSmooth   animation is smoothed using the `smooth(value)` function (slower
     * at start and finish).
     *
     * @ignore
     */
    initiateTravel(targetPos: THREE.Vector3, travelTime: number | string, targetOrientation: (string | THREE.Vector3 | THREE.Quaternion), useSmooth: boolean): void;
    /**
     * Handle the animated movement and rotation of the camera in `travel` state.
     *
     * @param   {number}    dt  the delta time between two updates in milliseconds
     * @ignore
     */
    handleTravel(dt: number): void;
    /**
     * Test if the currently running animation is finished (travelAlpha reached 1).
     * If it is, reset controls to state NONE.
     *
     * @ignore
     */
    testAnimationEnd(): void;
    /**
     * Triggers an animated movement (travel) to set the camera to top view, above the focus point,
     * at altitude = distanceToFocusPoint.
     *
     * @ignore
     */
    goToTopView(): void;
    /**
     * Triggers an animated movement (travel) to set the camera to starting view
     *
     * @ignore
     */
    goToStartView(): void;
    /**
     * Returns the world point (xyz) under the posXY screen point. The point belong to an abstract mathematical
     * plane of specified altitude (does not us actual geometry).
     *
     * @param   {THREE.Vector2} posXY       the mouse position in screen space (unit : pixel)
     * @param   {number}        altitude    the altitude (z) of the mathematical plane
     * @param   {THREE.Vector3} target      the target vector3
     * @return  {THREE.Vector3}
     * @ignore
     */
    getWorldPointFromMathPlaneAtScreenXY(posXY: THREE.Vector2, altitude: number, target?: THREE.Vector3): THREE.Vector3;
    /**
     * Returns the world point (xyz) under the posXY screen point. If geometry is under the cursor, the point is
     * obtained with getPickingPositionFromDepth. If no geometry is under the cursor, the point is obtained with
     * [getWorldPointFromMathPlaneAtScreenXY]{@link PlanarControls#getWorldPointFromMathPlaneAtScreenXY}.
     *
     * @param   {THREE.Vector2} posXY   the mouse position in screen space (unit : pixel)
     * @param   {THREE.Vector3} target  the target World coordinates.
     * @return  {THREE.Vector3}
     * @ignore
     */
    getWorldPointAtScreenXY(posXY: THREE.Vector2, target?: THREE.Vector3): THREE.Vector3;
    /**
     * Add all the input event listeners (activate the controls).
     *
     * @ignore
     */
    addInputListeners(): void;
    /**
     * Removes all the input listeners (deactivate the controls).
     *
     * @ignore
     */
    removeInputListeners(): void;
    /**
     * Update the cursor image according to the control state.
     *
     * @ignore
     */
    updateMouseCursorType(): void;
    updateMousePositionAndDelta(event: any): void;
    /**
     * cursor modification for a specifique state.
     *
     * @param   {string} state   the state in which we want to change the cursor ('default', 'drag', 'pan', 'travel', 'rotate').
     * @param   {string} newCursor   the css cursor we want to have for the specified state.
     * @ignore
     */
    setCursor(state: string, newCursor: string): void;
    /**
     * Catch and manage the event when a touch on the mouse is downs.
     *
     * @param   {Event} event   the current event (mouse left or right button clicked, mouse wheel button actioned).
     * @ignore
     */
    onMouseDown(event: Event): void;
    /**
     * Catch and manage the event when a touch on the mouse is released.
     *
     * @param   {Event} event   the current event
     * @ignore
     */
    onMouseUp(event: Event): void;
    /**
     * Catch and manage the event when the mouse is moved.
     *
     * @param   {Event} event   the current event.
     * @ignore
     */
    onMouseMove(event: Event): void;
    /**
     * Catch and manage the event when a key is down.
     *
     * @param   {Event} event   the current event
     * @ignore
     */
    onKeyDown(event: Event): void;
    /**
     * Catch and manage the event when the mouse wheel is rolled.
     *
     * @param   {Event} event   the current event
     * @ignore
     */
    onMouseWheel(event: Event): void;
    /**
     * Catch and manage the event when the context menu is called (by a right-click on the window). We use this
     * to prevent the context menu from appearing so we can use right click for other inputs.
     *
     * @param   {Event} event   the current event
     * @ignore
     */
    onContextMenu(event: Event): void;
    /**
     * Smoothing function (sigmoid) : based on h01 Hermite function.
     *
     * @param   {number}    value   the value to be smoothed, between 0 and 1.
     * @return  {number}            a value between 0 and 1.
     * @ignore
     */
    smooth(value: number): number;
}
import * as THREE from "three";
//# sourceMappingURL=PlanarControls.d.ts.map