export namespace CONTROL_EVENTS {
    const PAN_CHANGED: string;
    const ORIENTATION_CHANGED: string;
    const RANGE_CHANGED: string;
    const CAMERA_TARGET_CHANGED: string;
}
export default GlobeControls;
/**
 * GlobeControls is a camera controller
 *
 * @class      GlobeControls
 * @param      {GlobeView}  view the view where the control will be used
 * @param      {CameraTransformOptions|Extent} placement   the {@link CameraTransformOptions} to apply to view's camera
 * or the extent it must display at initialisation, see {@link CameraTransformOptions} in {@link CameraUtils}.
 * @param      {object}  [options] An object with one or more configuration properties. Any property of GlobeControls
 * can be passed in this object.
 * @property      {number}  zoomFactor The factor the scale is multiplied by when dollying (zooming) in or
 * divided by when dollying out. Default is 2.
 * @property      {number}  rotateSpeed Speed camera rotation in orbit and panoramic mode. Default is 0.25.
 * @property      {number}  minDistance Minimum distance between ground and camera in meters (Perspective Camera only).
 * Default is 250.
 * @property      {number}  maxDistance Maximum distance between ground and camera in meters
 * (Perspective Camera only). Default is ellipsoid radius * 8.
 * @property      {number}  minZoom How far you can zoom in, in meters (Orthographic Camera only). Default is 0.
 * @property      {number}  maxZoom How far you can zoom out, in meters (Orthographic Camera only). Default
 * is Infinity.
 * @property      {number}  keyPanSpeed Number of pixels moved per push on array key. Default is 7.
 * @property      {number}  minPolarAngle Minimum vertical orbit angle (in degrees). Default is 0.5.
 * @property      {number}  maxPolarAngle Maximum vertical orbit angle (in degrees). Default is 86.
 * @property      {number}  minAzimuthAngle Minimum horizontal orbit angle (in degrees). If modified,
 * should be in [-180,0]. Default is -Infinity.
 * @property      {number}  maxAzimuthAngle Maximum horizontal orbit angle (in degrees). If modified,
 * should be in [0,180]. Default is Infinity.
 * @property      {boolean} handleCollision Handle collision between camera and ground or not, i.e. whether
 * you can zoom underground or not. Default is true.
 * @property      {boolean} enableDamping Enable damping or not (simulates the lag that a real camera
 * operator introduces while operating a heavy physical camera). Default is true.
 * @property      {boolean} dampingMoveFactor the damping move factor. Default is 0.25.
 */
declare class GlobeControls extends THREE.EventDispatcher<THREE.Event> {
    constructor(view: any, placement: any, options?: {});
    player: AnimationPlayer;
    view: any;
    camera: any;
    states: StateControl;
    zoomFactor: any;
    minDistance: any;
    maxDistance: any;
    minZoom: any;
    maxZoom: any;
    rotateSpeed: any;
    keyPanSpeed: any;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    handleCollision: any;
    minDistanceCollision: number;
    enableDamping: boolean;
    dampingMoveFactor: any;
    startEvent: {
        type: string;
    };
    endEvent: {
        type: string;
    };
    updateHelper: (position: any, helper: any) => void;
    _onEndingMove: (() => void) | (() => void);
    _onTravel: any;
    _onTouchStart: any;
    _onTouchEnd: any;
    _onTouchMove: any;
    _onStateChange: any;
    _onRotation: any;
    _onDrag: any;
    _onDolly: any;
    _onPan: any;
    _onPanoramic: any;
    _onZoom: any;
    get dollyInScale(): any;
    get dollyOutScale(): number;
    get isPaused(): boolean;
    onEndingMove(current: any): void;
    rotateLeft(angle?: number): void;
    rotateUp(angle?: number): void;
    panLeft(distance: any): void;
    panUp(distance: any): void;
    mouseToPan(deltaX: any, deltaY: any): void;
    dolly(delta: any): void;
    getMinDistanceCameraBoundingSphereObbsUp(tile: any): void;
    update(state?: any): void;
    onStateChange(event: any): void;
    handleRotation(event: any): void;
    handleDrag(event: any): void;
    handleDolly(event: any): void;
    handlePan(event: any): void;
    handlePanoramic(event: any): void;
    handleEndMovement(event?: {}): void;
    updateTarget(): void;
    handlingEvent(current: any): void;
    travel(event: any): Promise<any>;
    handleZoom(event: any): void;
    onTouchStart(event: any): void;
    state: any;
    onTouchMove(event: any): void;
    onTouchEnd(): void;
    dispose(): void;
    /**
     * Changes the tilt of the current camera, in degrees.
     * @param {number}  tilt
     * @param {boolean} isAnimated
     * @return {Promise<void>}
     */
    setTilt(tilt: number, isAnimated: boolean): Promise<void>;
    /**
     * Changes the heading of the current camera, in degrees.
     * @param {number} heading
     * @param {boolean} isAnimated
     * @return {Promise<void>}
     */
    setHeading(heading: number, isAnimated: boolean): Promise<void>;
    /**
     * Sets the "range": the distance in meters between the camera and the current central point on the screen.
     * @param {number} range
     * @param {boolean} isAnimated
     * @return {Promise<void>}
     */
    setRange(range: number, isAnimated: boolean): Promise<void>;
    /**
     * Returns the {@linkcode Coordinates} of the globe point targeted by the camera in EPSG:4978 projection. See {@linkcode Coordinates} for conversion
     * @return {THREE.Vector3} position
     */
    getCameraTargetPosition(): THREE.Vector3;
    /**
     * Returns the "range": the distance in meters between the camera and the current central point on the screen.
     * @param {THREE.Vector3} [position] - The position to consider as picked on
     * the ground.
     * @return {number} number
     */
    getRange(position?: THREE.Vector3): number;
    /**
     * Returns the tilt of the current camera in degrees.
     * @param {THREE.Vector3} [position] - The position to consider as picked on
     * the ground.
     * @return {number} The angle of the rotation in degrees.
     */
    getTilt(position?: THREE.Vector3): number;
    /**
     * Returns the heading of the current camera in degrees.
     * @param {THREE.Vector3} [position] - The position to consider as picked on
     * the ground.
     * @return {number} The angle of the rotation in degrees.
     */
    getHeading(position?: THREE.Vector3): number;
    /**
     * Displaces the central point to a specific amount of pixels from its current position.
     * The view flies to the desired coordinate, i.e.is not teleported instantly. Note : The results can be strange in some cases, if ever possible, when e.g.the camera looks horizontally or if the displaced center would not pick the ground once displaced.
     * @param      {vector}  pVector  The vector
     * @return {Promise}
     */
    pan(pVector: vector): Promise<any>;
    /**
     * Returns the orientation angles of the current camera, in degrees.
     * @return {Array<number>}
     */
    getCameraOrientation(): Array<number>;
    /**
     * Returns the camera location projected on the ground in lat,lon. See {@linkcode Coordinates} for conversion.
     * @return {Coordinates} position
     */
    getCameraCoordinate(): Coordinates;
    /**
     * Returns the {@linkcode Coordinates} of the central point on screen in lat,lon. See {@linkcode Coordinates} for conversion.
     * @return {Coordinates} coordinate
     */
    getLookAtCoordinate(): Coordinates;
    /**
     * Sets the animation enabled.
     * @param      {boolean}  enable  enable
     */
    setAnimationEnabled(enable: boolean): void;
    /**
     * Determines if animation enabled.
     * @return     {boolean}  True if animation enabled, False otherwise.
     */
    isAnimationEnabled(): boolean;
    /**
     * Returns the actual zoom. The zoom will always be between the [getMinZoom(), getMaxZoom()].
     * @return     {number}  The zoom .
     */
    getZoom(): number;
    /**
     * Sets the current zoom, which is an index in the logical scales predefined for the application.
     * The higher the zoom, the closer to the ground.
     * The zoom is always in the [getMinZoom(), getMaxZoom()] range.
     * @param      {number}  zoom    The zoom
     * @param      {boolean}  isAnimated  Indicates if animated
     * @return     {Promise}
     */
    setZoom(zoom: number, isAnimated: boolean): Promise<any>;
    /**
     * Return the current zoom scale at the central point of the view.
     * This function compute the scale of a map
     * @param      {number}  pitch   Screen pitch, in millimeters ; 0.28 by default
     * @return     {number}  The zoom scale.
     *
     * @deprecated Use View#getScale instead.
     */
    getScale(pitch: number): number;
    /**
     * To convert the projection in meters on the globe of a number of pixels of screen
     * @param      {number} pixels count pixels to project
     * @param      {number} pixelPitch Screen pixel pitch, in millimeters (default = 0.28 mm / standard pixel size of 0.28 millimeters as defined by the OGC)
     * @return     {number} projection in meters on globe
     *
     * @deprecated Use `View#getPixelsToMeters` instead.
     */
    pixelsToMeters(pixels: number, pixelPitch?: number): number;
    /**
     * To convert the projection a number of horizontal pixels of screen to longitude degree WGS84 on the globe
     * @param      {number} pixels count pixels to project
     * @param      {number} pixelPitch Screen pixel pitch, in millimeters (default = 0.28 mm / standard pixel size of 0.28 millimeters as defined by the OGC)
     * @return     {number} projection in degree on globe
     *
     * @deprecated Use `View#getPixelsToMeters` and `GlobeControls#metersToDegrees`
     * instead.
     */
    pixelsToDegrees(pixels: number, pixelPitch?: number): number;
    /**
     * Projection on screen in pixels of length in meter on globe
     * @param      {number}  value Length in meter on globe
     * @param      {number}  pixelPitch Screen pixel pitch, in millimeters (default = 0.28 mm / standard pixel size of 0.28 millimeters as defined by the OGC)
     * @return     {number}  projection in pixels on screen
     *
     * @deprecated Use `View#getMetersToPixels` instead.
     */
    metersToPixels(value: number, pixelPitch?: number): number;
    /**
     * Changes the zoom of the central point of screen so that screen acts as a map with a specified scale.
     *  The view flies to the desired zoom scale;
     * @param      {number}  scale  The scale
     * @param      {number}  pitch  The pitch
     * @param      {boolean}  isAnimated  Indicates if animated
     * @return     {Promise}
     */
    setScale(scale: number, pitch: number, isAnimated: boolean): Promise<any>;
    /**
     * Changes the center of the scene on screen to the specified in lat, lon. See {@linkcode Coordinates} for conversion.
     * This function allows to change the central position, the zoom, the range, the scale and the camera orientation at the same time.
     * The zoom has to be between the [getMinZoom(), getMaxZoom()].
     * Zoom parameter is ignored if range is set
     * The tilt's interval is between 4 and 89.5 degree
     *
     * @param      {CameraUtils~CameraTransformOptions|Extent}   params camera transformation to apply
     * @param      {number}   [params.zoom]   zoom
     * @param      {number}   [params.scale]   scale
     * @param      {boolean}  isAnimated  Indicates if animated
     * @return     {Promise}  A promise that resolves when transformation is complete
     */
    lookAtCoordinate(params?: {}, isAnimated?: boolean): Promise<any>;
    /**
     * Pick a position on the globe at the given position in lat,lon. See {@linkcode Coordinates} for conversion.
     * @param {Vector2} windowCoords - window coordinates
     * @param {number=} y - The y-position inside the Globe element.
     * @return {Coordinates} position
     */
    pickGeoPosition(windowCoords: Vector2): Coordinates;
}
import * as THREE from "three";
import AnimationPlayer from "Core/AnimationPlayer";
import StateControl from "Controls/StateControl";
import Coordinates from "Core/Geographic/Coordinates";
//# sourceMappingURL=GlobeControls.d.ts.map