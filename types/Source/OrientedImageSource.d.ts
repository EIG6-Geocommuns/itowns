export default OrientedImageSource;
/**
 * @classdesc OrientedImageSource is a specific source used to load oriented images.
 * @extends Source
 */
declare class OrientedImageSource extends Source {
    /**
     * @constructor
     * @param { Object } source - Configuration object
     * @param { string } source.url - Url for all the textures.
     * @param { string } source.orientationsUrl - Json Url, using GeoJSon format to represent points,
     * it's a set of panoramic position and orientation.
     * @param { string } source.calibrationUrl - Json url, representing a set of camera. see [CameraCalibrationParser]{@link module:CameraCalibrationParser}
     * This Url must contains {sensorId} and {cameraId}, and these pattern will be replaced to build the Url,
     * to find the good texture for each camera for each panoramic.
     */
    constructor(source: {
        url: string;
        orientationsUrl: string;
        calibrationUrl: string;
    });
    isOrientedImageSource: boolean;
    whenReady: Promise<{
        orientation: any;
        calibration: any;
    }>;
    /**
     * Build the url of the texture, but not from extent.
     *
     * @param      {Object}  imageInfo - Information about the texture
     * @param      {string}  imageInfo.camera - Id of the camera
     * @param      {string}  imageInfo.pano - Id of the panoramic
     * @return     {string}  Url of the image
     */
    urlFromExtent(imageInfo: {
        camera: string;
        pano: string;
    }): string;
    /**
     * Build the url of the image, for a given panoramic id, and a given camera id.
     *
     * @param      {string}  cameraId  Id of the camera
     * @param      {string}  panoId   Id of the panoramic
     * @return     {string}  Url of the image
     */
    imageUrl(cameraId: string, panoId: string): string;
}
import Source from "Source/Source";
//# sourceMappingURL=OrientedImageSource.d.ts.map