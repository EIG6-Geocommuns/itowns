export function getLookAtFromMath(view: any, camera: any): false | THREE.Vector3;
export function getRig(camera: any): any;
declare namespace _default {
    const defaultStopPlaceOnGroundAtEnd: boolean;
    const Easing: any;
    /**
     * Stop camera's animation
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to stop animation
     */
    function stop(view: View, camera: Camera): void;
    /**
     * Stop camera's animation
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to stop animation
     */
    function stop(view: View, camera: Camera): void;
    /**
     * Gets the current parameters transform camera looking at target.
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to get transform
     * @param      {THREE.Vector3} [target] - The optional target
     * @return     {CameraTransformOptions}  The transform camera looking at target
     */
    function getTransformCameraLookingAtTarget(view: View, camera: Camera, target?: THREE.Vector3): {
        /**
         * Camera look at geographic coordinate
         */
        coord?: Coordinate;
        /**
         * camera's tilt, in degree
         */
        tilt?: number;
        /**
         * camera's heading, in degree
         */
        heading?: number;
        /**
         * camera distance to target coordinate, in meter
         */
        range?: number;
        /**
         * duration of the animation, in ms
         */
        time?: number;
        /**
         * use proxy to handling camera's transformation. if proxy == true, other camera's transformation stops rig's transformation
         */
        proxy?: boolean;
        /**
         * in and out easing animation
         */
        easing?: number;
        /**
         * callback call each animation's frame (params are current cameraTransform and worldTargetPosition)
         */
        callback?: Function;
        /**
         * stop place target on the ground at animation ending
         */
        stopPlaceOnGroundAtEnd?: boolean;
    };
    /**
     * Gets the current parameters transform camera looking at target.
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to get transform
     * @param      {THREE.Vector3} [target] - The optional target
     * @return     {CameraTransformOptions}  The transform camera looking at target
     */
    function getTransformCameraLookingAtTarget(view: View, camera: Camera, target?: THREE.Vector3): {
        /**
         * Camera look at geographic coordinate
         */
        coord?: Coordinate;
        /**
         * camera's tilt, in degree
         */
        tilt?: number;
        /**
         * camera's heading, in degree
         */
        heading?: number;
        /**
         * camera distance to target coordinate, in meter
         */
        range?: number;
        /**
         * duration of the animation, in ms
         */
        time?: number;
        /**
         * use proxy to handling camera's transformation. if proxy == true, other camera's transformation stops rig's transformation
         */
        proxy?: boolean;
        /**
         * in and out easing animation
         */
        easing?: number;
        /**
         * callback call each animation's frame (params are current cameraTransform and worldTargetPosition)
         */
        callback?: Function;
        /**
         * stop place target on the ground at animation ending
         */
        stopPlaceOnGroundAtEnd?: boolean;
    };
    /**
     * Apply transform to camera
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to transform
     * @param      {CameraTransformOptions|Extent}  params  The parameters
     * @return     {Promise} promise with resolve final CameraUtils~CameraTransformOptions
     */
    function transformCameraToLookAtTarget(view: View, camera: Camera, params?: any): Promise<any>;
    /**
     * Apply transform to camera
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to transform
     * @param      {CameraTransformOptions|Extent}  params  The parameters
     * @return     {Promise} promise with resolve final CameraUtils~CameraTransformOptions
     */
    function transformCameraToLookAtTarget(view: View, camera: Camera, params?: any): Promise<any>;
    /**
     * Compute the CameraTransformOptions that allow a given camera to display a given extent in its entirety.
     *
     * @param   {View}    view    The camera view
     * @param   {Camera}  camera  The camera to get the CameraTransformOptions from
     * @param   {Extent}  extent  The extent the camera must display
     *
     * @return  {CameraUtils~CameraTransformOptions}   The CameraTransformOptions allowing camera to display the extent.
     */
    function getCameraTransformOptionsFromExtent(view: View, camera: Camera, extent: Extent): CameraUtils;
    /**
     * Compute the CameraTransformOptions that allow a given camera to display a given extent in its entirety.
     *
     * @param   {View}    view    The camera view
     * @param   {Camera}  camera  The camera to get the CameraTransformOptions from
     * @param   {Extent}  extent  The extent the camera must display
     *
     * @return  {CameraUtils~CameraTransformOptions}   The CameraTransformOptions allowing camera to display the extent.
     */
    function getCameraTransformOptionsFromExtent(view: View, camera: Camera, extent: Extent): CameraUtils;
    /**
     * Apply transform to camera with animation
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to animate
     * @param      {CameraUtils~CameraTransformOptions}  params  The parameters
     * @return     {Promise} promise with resolve final CameraUtils~CameraTransformOptions
     */
    function animateCameraToLookAtTarget(view: View, camera: Camera, params?: {}): Promise<any>;
    /**
     * Apply transform to camera with animation
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to animate
     * @param      {CameraUtils~CameraTransformOptions}  params  The parameters
     * @return     {Promise} promise with resolve final CameraUtils~CameraTransformOptions
     */
    function animateCameraToLookAtTarget(view: View, camera: Camera, params?: {}): Promise<any>;
    /**
     * chain animation transform to camera
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to animate
     * @param      {CameraUtils~CameraTransformOptions[]}  params  array parameters, each parameters transforms are apply to camera, in serial
     * @return     {Promise} promise with resolve final CameraUtils~CameraTransformOptions
     */
    function sequenceAnimationsToLookAtTarget(view: View, camera: Camera, params?: {}[]): Promise<any>;
    /**
     * chain animation transform to camera
     *
     * @param      {View}  view    The camera view
     * @param      {Camera}  camera  The camera to animate
     * @param      {CameraUtils~CameraTransformOptions[]}  params  array parameters, each parameters transforms are apply to camera, in serial
     * @return     {Promise} promise with resolve final CameraUtils~CameraTransformOptions
     */
    function sequenceAnimationsToLookAtTarget(view: View, camera: Camera, params?: {}[]): Promise<any>;
    /**
     * Gets the difference camera transformation
     *
     * @param      {CameraUtils~CameraTransformOptions}  first  param to compare with the second
     * @param      {CameraUtils~CameraTransformOptions}  second param to compare with the first
     * @return     {object} The difference parameters
     */
    function getDiffParams(first: any, second: any): any;
    /**
     * Gets the difference camera transformation
     *
     * @param      {CameraUtils~CameraTransformOptions}  first  param to compare with the second
     * @param      {CameraUtils~CameraTransformOptions}  second param to compare with the first
     * @return     {object} The difference parameters
     */
    function getDiffParams(first: any, second: any): any;
}
export default _default;
import * as THREE from "three";
//# sourceMappingURL=CameraUtils.d.ts.map