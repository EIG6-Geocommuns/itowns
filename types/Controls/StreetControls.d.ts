export default StreetControls;
/**
 * @classdesc Camera controls that can follow a path.
 * It is used to simulate a street view.
 * It stores a currentPosition and nextPosition, and do a camera traveling to go to next position.
 * It also manages picking on the ground and on other object, like building.
 * <ul> It manages 2 surfaces, used as helpers for the end user :
 * <li> a circle is shown when mouse is moving on the ground </li>
 * <li> a rectangle is shown when mouse is moving on other 3d object </li>
 * </ul>
 * <ul>
 * This controls is designed
 * <li> to move forward when user click on the ground (click and go) </li>
 * <li> to rotate the camera when user click on other object (click to look at) </li>
 * </ul>
 * <ul> Bindings inherited from FirstPersonControls
 * <li><b> up + down keys : </b> forward/backward </li>
 * <li><b> left + right keys: </b> strafing movements </li>
 * <li><b> pageUp + pageDown: </b> vertical movements </li>
 * <li><b> mouse click+drag: </b> pitch and yaw movements (as looking at a panorama) </li>
 * </ul>
 * <ul> Bindings added
 * <li><b> keys Z : </b> Move camera to the next position </li>
 * <li><b> keys S : </b> Move camera to the previous position </li>
 * <li><b> keys A : </b> Set camera to current position and look at next position</li>
 * <li><b> keys Q : </b> Set camera to current position and look at previous position</li>
 * </ul>
 * Note that it only works in globe view.
 * @property {number} keyGoToNextPosition key code to go to next position, default to 90 for key Z
 * @property {number} keyGoToPreviousPosition key code to go to previous position, default to 83 for key S
 * @property {number} keySetCameraToCurrentPositionAndLookAtNext key code set camera to current position, default to 65 for key  A
 * @property {number} keySetCameraToCurrentPositionAndLookAtPrevious key code set camera to current position, default to 81 for key  Q
 * @extends FirstPersonControls
 */
declare class StreetControls extends FirstPersonControls {
    /**
     * @constructor
     * @param { View } view - View where this control will be used
     * @param { Object } options - Configuration of this controls
     * @param { number } [options.wallMaxDistance=1000] - Maximum distance to click on a wall, in meter.
     * @param { number } [options.animationDurationWall=200] - Time in millis for the animation when clicking on a wall.
     * @param { THREE.Mesh } [options.surfaceGround] - Surface helper to see when mouse is on the ground, default is a transparent circle.
     * @param { THREE.Mesh } [options.surfaceWall] - Surface helper to see when mouse is on a wall, default is a transparent rectangle.
     * @param { string } [options.buildingsLayer='Buildings'] - Name of the building layer (used to pick on wall).
     * @param { function } [options.computeTime] - Function to compute time (in millis), used for the animation to move to a distance (in meter)
     * @param { number } [options.offset=4] - Altitude in meter up to the ground to move to when click on a target on the ground.
     */
    constructor(view: View, options?: {
        wallMaxDistance?: number;
        animationDurationWall?: number;
        surfaceGround?: THREE.Mesh;
        surfaceWall?: THREE.Mesh;
        buildingsLayer?: string;
        computeTime?: Function;
        offset?: number;
    });
    isStreetControls: boolean;
    _onMouseOut: any;
    previousPosition: any;
    currentPosition: any;
    nextPosition: any;
    keyGoToNextPosition: number;
    keyGoToPreviousPosition: number;
    keySetCameraToCurrentPositionAndLookAtNext: number;
    keySetCameraToCurrentPositionAndLookAtPrevious: number;
    tweenGroup: any;
    surfaceGround: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
    surfaceWall: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> | THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    surfaces: THREE.Object3D<THREE.Event>;
    wallMaxDistance: number;
    animationDurationWall: number;
    buildingsLayer: string;
    computeTime: Function;
    offset: number;
    transformationPositionPickOnTheGround: any;
    end: any;
    setCurrentPosition(newCurrentPosition: any): void;
    setNextPosition(newNextPosition: any): void;
    setPreviousPosition(newPreviousPosition: any): void;
    onMouseUp(event: any): void;
    _stateOnMouseDrag: boolean;
    /**
     * Sets the camera to the current position (stored in this controls), looking at the next position (also stored in this controls).
     *
     * @param      { boolean }  lookAtPrevious   look at the previous position rather than the next one
     */
    setCameraToCurrentPosition(lookAtPrevious: boolean): void;
    /**
     * Set the camera on a position, looking at another position.
     *
     * @param      { THREE.Vector3 }  position   The position to set the camera
     * @param      { THREE.Vector3 }  lookAt      The position where the camera look at.
     */
    setCameraOnPosition(position: THREE.Vector3, lookAt: THREE.Vector3): void;
    /**
     * Method called when user click on the ground.</br>
     * Note that this funtion contains default values that can be overrided, by overriding this class.
     *
     * @param {THREE.Vector3} position - The position
     */
    onClickOnGround(position: THREE.Vector3): void;
    /**
     * Method called when user click on oject that is not the ground.</br>
     * Note that this function contains default values that can be overrided, by overriding this class.
     *
     * @param {THREE.Vector3} position - The position
     */
    onClickOnWall(position: THREE.Vector3): void;
    /**
     * Animate the camera to make it look at a position, in a given time
     *
     * @param { THREE.Vector3 }  position - Position to look at
     * @param { number } time - Time in millisecond
     */
    animateCameraLookAt(position: THREE.Vector3, time: number): void;
    tween: any;
    animationFrameRequester: (() => void) | (() => void);
    /**
     * Move the camera smoothly to the position, in a given time.
     *
     * @param { THREE.Vector3 }  position - Destination of the movement.
     * @param { number } time - Time in millisecond
     * @return { Promise }
     */
    moveCameraTo(position: THREE.Vector3, time?: number): Promise<any>;
    stopAnimations(): void;
    /**
     * Move the camera to the 'currentPosition' stored in this control.
     */
    moveCameraToCurrentPosition(): void;
}
import FirstPersonControls from "Controls/FirstPersonControls";
import * as THREE from "three";
//# sourceMappingURL=StreetControls.d.ts.map