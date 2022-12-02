export default OrientedImageMaterial;
/**
 * @classdesc OrientedImageMaterial is a custom shader material used to do projective texture mapping.<br/>
 *
 * This Material is designed to project many textures simultaneously.
 * Each projected texture setting is stored as an {@link OrientedImageCamera}.<br/>
 * <br/>
 * All cameras settings, like distorsion, can be specified in a configuration file.
 * See [CameraCalibrationParser]{@link module:CameraCalibrationParser.parse}
 * used to parse a configuration file and create an array of camera.<br/>
 * <br/>
 * The current implementation supports the following distortion models : <br/>
 *  - no distortion (polynom==vec3(0),l1l2==vec2(0))<br/>
 *  - radial distortion (polynom!=vec3(0),l1l2==vec2(0)) (see <b>15.2.2 Radial Model</b> in [MicMac doc]{@link https://github.com/micmacIGN/Documentation/blob/master/DocMicMac.pdf}) </br>
 *  - equilinear fish eye distortion (polynom!=vec3(0),l1l2 != vec2(0)) (see <b>15.3.4 Fish eye models</b> in [MicMac doc]{@link https://github.com/micmacIGN/Documentation/blob/master/DocMicMac.pdf}) </br>
 * (Note: radial decentric parameters P1 are P2 not supported and assumed to be 0).<br/>
 * <br/>
 * To get a more comprehensive support of camera Micmac models, you can consider using [three-photogrammetric-camera]{@link https://github.com/mbredif/three-photogrammetric-camera} instead.
 */
declare class OrientedImageMaterial extends THREE.RawShaderMaterial {
    /**
     * @constructor
     * @param { OrientedImageCamera[]} cameras - Array of {@link OrientedImageCamera}. Each camera will project a texture.
     * [CameraCalibrationParser]{@link module:CameraCalibrationParser.parse} can used to create this array of camera from a configuration file.
     * @param {Object} [options={}] - Object with one or more properties defining the material's appearance.
     * Any property of the material (including any property inherited from
     * [THREE.Material]{@link https://threejs.org/docs/#api/en/materials/Material} and
     * [THREE.ShaderMaterial]{@link https://threejs.org/docs/#api/en/materials/ShaderMaterial}) can be passed in here.
     * @param {Number} [options.side=THREE.DoubleSide] - We override default
     * [THREE.Material.side]{@link https://threejs.org/docs/#api/en/materials/Material.side} from FrontSide to DoubleSide.
     * @param {Boolean} [options.transparent=true] - We override default
     * [THREE.Material.transparent]{@link https://threejs.org/docs/#api/en/materials/Material.transparent} from false to true.
     * @param {Number} [options.opacity=0.1] - We override default
     * [THREE.Material.opacity]{@link https://threejs.org/docs/#api/en/materials/Material.opacity} from 1 to 0.1.
     * @param {Number} [options.alphaBorder=20] - Part of the texture that is blended, when texture crosses each other.
     * For example, 10 means a border as large as 1 / 10 of the size of the texture is used to blend colors.
     * @param {Number} [options.debugAlphaBorder=0] - Set this option to 1 to see influence of alphaBorder option.
     */
    constructor(cameras: OrientedImageCamera[], options?: {
        side?: number;
        transparent?: boolean;
        opacity?: number;
        alphaBorder?: number;
        debugAlphaBorder?: number;
    });
    alphaBorder: number;
    cameras: OrientedImageCamera[];
    group: THREE.Group;
    vertexShader: any;
    fragmentShader: any;
    onBeforeCompile(shader: any, renderer: any): void;
    /**
     * Set new textures and new position/orientation of the camera set.
     * @param {THREE.Texture} textures - Array of [THREE.Texture]{@link https://threejs.org/docs/#api/en/textures/Texture}.
     * @param {Object} feature - New position / orientation of the set of cameras
     * @param {Array} camerasNames - camera names of panoramic feature
     * @param {THREE.Vector3} feature.position - New position.
     * @param {THREE.Quaternion} feature.quaternion - New orientation.
     */
    setTextures(textures: THREE.Texture, feature: any, camerasNames: any[]): void;
    /**
     * Udate the uniforms using the current value of camera.matrixWorld.
     * Need to be called when the camera of the scene has changed.
     * @param {THREE.Camera} viewCamera - Camera of the scene.
     */
    updateUniforms(viewCamera: THREE.Camera): void;
}
import * as THREE from "three";
//# sourceMappingURL=OrientedImageMaterial.d.ts.map