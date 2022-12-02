export namespace CAMERA_TYPE {
    const PERSPECTIVE: number;
    const ORTHOGRAPHIC: number;
}
export default Camera;
/**
 * ~CAMERA_TYPE
 * Stores the different types of camera usable in iTowns.
 */
export type Camera = {
    /**
     * Perspective type of camera
     */
    PERSPECTIVE: number;
    /**
     * Orthographic type of camera
     */
    ORTHOGRAPHIC: number;
};
/**
 * Wrapper around Three.js camera to expose some geographic helpers.
 *
 * @property    {string}    crs             The camera's coordinate projection system.
 * @property    {object}    camera3D        The Three.js camera that is wrapped around.
 * @property    {number}    width           The width of the camera.
 * @property    {number}    height          The height of the camera.
 * @property    {number}    _preSSE         The precomputed constant part of the screen space error.
 */
declare class Camera {
    /**
     * @param   {string}                crs                                     The camera's coordinate projection system.
     * @param   {number}                width                                   The width (in pixels) of the view the
        * camera is associated to.
     * @param   {number}                height                                  The height (in pixels) of the view the
        * camera is associated to.
     * @param   {object}                [options]                               Options for the camera.
     * @param   {THREE.Camera}          [options.cameraThree]                   A custom Three.js camera object to wrap
        * around.
     * @param   {Camera~CAMERA_TYPE}    [options.type=CAMERA_TYPE.PERSPECTIVE]  The type of the camera. See {@link
        * CAMERA_TYPE}.
     * @constructor
     */
    constructor(crs: string, width: number, height: number, options?: {
        cameraThree?: THREE.Camera;
    });
    crs: string;
    camera3D: THREE.Camera | {
        cameraThree?: THREE.Camera;
    } | THREE.OrthographicCamera | THREE.PerspectiveCamera;
    width: number;
    height: number;
    _preSSE: number;
    /**
     * Resize the camera to a given width and height
     *
     * @param   {number}    width               The width to resize the camera to.
     * @param   {number}    height              The height to resize the camera to.
     */
    resize(width: number, height: number): void;
    update(): void;
    /**
     * Return the position in the requested CRS, or in camera's CRS if undefined.
     *
     * @param   {string}        [crs]   If defined (e.g 'EPSG:4326'), the camera position will be returned in this CRS.
     *
     * @return  {Coordinates}   Coordinates object holding camera's position.
     */
    position(crs?: string): Coordinates;
    /**
     * Set the position of the camera using a Coordinates object.
     * If you want to modify the position directly using x,y,z values then use `camera.camera3D.position.set(x, y, z)`
     *
     * @param   {Coordinates}   position    The new position of the camera.
     */
    setPosition(position: Coordinates): void;
    isBox3Visible(box3: any, matrixWorld: any): boolean;
    isSphereVisible(sphere: any, matrixWorld: any): boolean;
    box3SizeOnScreen(box3: any, matrixWorld: any): THREE.Box3;
    /**
     * Test for collision between camera and a geometry layer (DTM/DSM) to adjust camera position.
     * It could be modified later to handle an array of geometry layers.
     * TODO Improve Coordinates class to handle altitude for any coordinate system (even projected one)
     *
     * @param   {View}              view                    The view where we test the collision between geometry layers
     * and the camera
     * @param   {ElevationLayer}    elevationLayer          The elevation layer (DTM/DSM) used to test the collision
     * with the camera. Could be another geometry layer.
     * @param   {number}            minDistanceCollision    The minimum distance allowed between the camera and the
     * surface.
     */
    adjustAltitudeToAvoidCollisionWithLayer(view: View, elevationLayer: ElevationLayer, minDistanceCollision: number): void;
    #private;
}
import * as THREE from "three";
import Coordinates from "Core/Geographic/Coordinates";
//# sourceMappingURL=Camera.d.ts.map