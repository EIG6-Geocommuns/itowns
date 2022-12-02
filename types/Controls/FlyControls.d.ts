export default FlyControls;
/**
 * First-Person controls (at least a possible declination of it).
 *
 * Bindings:
 * - up + down keys: forward/backward
 * - left + right keys: strafing movements
 * - PageUp + PageDown: roll movement
 * - mouse click+drag: pitch and yaw movements (as looking at a panorama, not as in FPS games for instance)
 */
declare class FlyControls extends THREE.EventDispatcher<THREE.Event> {
    /**
     * @Constructor
     * @param {View} view
     * @param {object} options
     * @param {boolean} options.focusOnClick - whether or not to focus the renderer domElement on click
     * @param {boolean} options.focusOnMouseOver - whether or not to focus when the mouse is over the domElement
     */
    constructor(view: View, options?: {
        focusOnClick: boolean;
        focusOnMouseOver: boolean;
    });
    view: View;
    options: {
        focusOnClick: boolean;
        focusOnMouseOver: boolean;
    };
    _camera3D: any;
    moves: Set<any>;
    moveSpeed: number;
    _onMouseDownMouseX: number;
    _onMouseDownMouseY: number;
    _isMouseDown: boolean;
    isUserInteracting(): boolean;
    update(dt: any, updateLoopRestarted: any): void;
}
import * as THREE from "three";
//# sourceMappingURL=FlyControls.d.ts.map