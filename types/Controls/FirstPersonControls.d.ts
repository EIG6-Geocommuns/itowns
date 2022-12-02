export default FirstPersonControls;
declare class FirstPersonControls extends THREE.EventDispatcher<THREE.Event> {
    /**
     * @Constructor
     * @param {View} view
     * @param {object} options
     * @param {boolean} options.focusOnClick - whether or not to focus the renderer domElement on click
     * @param {boolean} options.focusOnMouseOver - whether or not to focus when the mouse is over the domElement
     * @param {boolean} options.moveSpeed - if > 0, pressing the arrow keys will move the camera
     * @param {number} options.verticalFOV - define the max visible vertical angle of the scene in degrees (default 180)
     * @param {number} options.panoramaRatio - alternative way to specify the max vertical angle when using a panorama.
     * You can specify the panorama width/height ratio and the verticalFOV will be computed automatically
     * @param {boolean} options.disableEventListeners - if true, the controls will not self listen to mouse/key events.
     * You'll have to manually forward the events to the appropriate functions: onMouseDown, onMouseMove, onMouseUp,
     * onKeyUp, onKeyDown and onMouseWheel.
     */
    constructor(view: View, options?: {
        focusOnClick: boolean;
        focusOnMouseOver: boolean;
        moveSpeed: boolean;
        verticalFOV: number;
        panoramaRatio: number;
        disableEventListeners: boolean;
    });
    isFirstPersonControls: boolean;
    camera: any;
    view: View;
    moves: Set<any>;
    options: {
        focusOnClick: boolean;
        focusOnMouseOver: boolean;
        moveSpeed: boolean;
        verticalFOV: number;
        panoramaRatio: number;
        disableEventListeners: boolean;
    };
    _isMouseDown: boolean;
    _onMouseDownMouseX: number;
    _onMouseDownMouseY: number;
    _state: {
        rotateX: number;
        rotateY: number;
        snapshot(): {
            rotateX: number;
            rotateY: number;
        };
    };
    eventListeners: boolean;
    _onMouseDown: any;
    _onMouseMove: any;
    _onMouseUp: any;
    _onMouseWheel: any;
    _onKeyUp: any;
    _onKeyDown: any;
    _onContextMenu: any;
    _onFocus: () => any;
    focusOnMouseOver: boolean;
    focusOnClick: boolean;
    moveCameraVertical: typeof moveCameraVerticalGlobe;
    isUserInteracting(): boolean;
    /**
     * Resets the controls internal state to match the camera' state.
     * This must be called when manually modifying the camera's position or rotation.
     * @param {boolean} preserveRotationOnX - if true, the look up/down rotation will
     * not be copied from the camera
     */
    reset(preserveRotationOnX?: boolean): void;
    /**
     * Updates the camera position / rotation based on occured input events.
     * This is done automatically when needed but can also be done if needed.
     * @param {number} dt - ellpased time since last update in seconds
     * @param {boolean} updateLoopRestarted - true if itowns' update loop just restarted
     * @param {boolean} force - set to true if you want to force the update, even if it
     * appears unneeded.
     */
    update(dt: number, updateLoopRestarted: boolean, force: boolean): void;
    onMouseDown(event: any): void;
    _stateOnMouseDown: {
        rotateX: number;
        rotateY: number;
    };
    onMouseUp(): void;
    onMouseMove(event: any): void;
    onMouseWheel(event: any): void;
    onKeyUp(e: any): void;
    onKeyDown(e: any): void;
    onContextMenu(event: any): void;
    dispose(): void;
}
import * as THREE from "three";
declare function moveCameraVerticalGlobe(value: any): void;
//# sourceMappingURL=FirstPersonControls.d.ts.map