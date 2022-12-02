export default OrientedImageLayer;
/**
 * @classdesc OrientedImageLayer loads oriented images, and project these textures on the scene.
 * It is design to create an immersive view. </br>
 * It loads a set of panoramic position and orientation,
 * a set of camera calibration file (it's the same set of camera for each panoramic),
 * and a set of texture (each image for each camera for each panoramic), all organised in an {@link OrientedImageSource}. </br>
 * It creates an {@link OrientedImageMaterial} used to do projective texture mapping on the scene.
 * @extends GeometryLayer
 */
declare class OrientedImageLayer extends GeometryLayer {
    /**
     * @constructor
     * @param { string } id - The id of the layer, a unique name.
     * @param { Object } config - configuration of the layer
     * @param { number } config.backgroundDistance - Radius in meter of the sphere used as a background
     * @param { function } config.onPanoChanged - callback fired when current panoramic changes
     * @param { string } config.crs - crs projection of the view
     * @param { string } config.orientation - Json object, using GeoJSon format to represent points,
     * it's a set of panoramic position and orientation.
     * @param { string } config.calibrations - Json object, representing a set of camera. see [CameraCalibrationParser]{@link module:CameraCalibrationParser}
     * @param { OrientedImageSource } config.source - Source used to build url of texture for each oriented image,
     * a tecture is need for each camera, for each panoramic.
     */
    constructor(id: string, config?: {
        backgroundDistance: number;
        onPanoChanged: Function;
        crs: string;
        orientation: string;
        calibrations: string;
        source: OrientedImageSource;
    });
    background: any;
    isOrientedImageLayer: boolean;
    currentPano: any;
    onPanoChanged: Function;
    getCamerasNameFromFeature: any;
    mergeFeatures: boolean;
    accurate: boolean;
    panos: any;
    cameras: any;
    material: OrientedImageMaterial;
    update(): void;
    set boostLight(arg: any);
    get boostLight(): any;
    preUpdate(context: any): void;
    getNextPano(): any;
    getCurrentPano(): any;
    getPreviousPano(): any;
    mostNearPano(position: any): any;
}
import GeometryLayer from "Layer/GeometryLayer";
import OrientedImageMaterial from "Renderer/OrientedImageMaterial";
//# sourceMappingURL=OrientedImageLayer.d.ts.map