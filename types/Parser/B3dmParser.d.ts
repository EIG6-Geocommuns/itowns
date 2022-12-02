/**
 * @module B3dmParser
 */
/**
 * Enable Draco decoding for gltf.
 * @param {string} path to draco library folder.
 * This library is mandatory to load b3dm with Draco compression.
 * @param {object} config optional configuration for Draco compression.
 *
 * The Draco library files are in folder itowns/examples/libs/draco/.
 * You are obliged to indicate this path when you want enable the Draco Decoding.
 *
 * For more information on Draco, read file in /itowns/examples/libs/draco/README.md.
 *
 * @example <caption>Enable draco decoder</caption>
 * // if you copied the folder from /itowns/examples/libs/draco/ to your root project,
 * // You could set path with './'.
 * itowns.enableDracoLoader('./');
 */
export function enableDracoLoader(path: string, config: object): void;
export const glTFLoader: GLTFLoader;
export const legacyGLTFLoader: {
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(data: any, path: any, callback: any): void;
    crossOrigin: string;
    withCredentials: boolean;
    path: string;
    resourcePath: string;
    manager: THREE.LoadingManager;
    requestHeader: {
        [header: string]: string;
    };
    loadAsync(url: string, onProgress?: (event: ProgressEvent<EventTarget>) => void): Promise<any>;
    setCrossOrigin(crossOrigin: string): any;
    setWithCredentials(value: boolean): any;
    setPath(path: string): any;
    setResourcePath(resourcePath: string): any;
    setRequestHeader(requestHeader: {
        [header: string]: string;
    }): any;
};
declare namespace _default {
    /** Parse b3dm buffer and extract THREE.Scene and batch table
     * @param {ArrayBuffer} buffer - the b3dm buffer.
     * @param {Object} options - additional properties.
     * @param {string=} [options.gltfUpAxis='Y'] - embedded glTF model up axis.
     * @param {string} options.urlBase - the base url of the b3dm file (used to fetch textures for the embedded glTF model).
     * @param {boolean=} [options.doNotPatchMaterial='false'] - disable patching material with logarithmic depth buffer support.
     * @param {float} [options.opacity=1.0] - the b3dm opacity.
     * @param {boolean|Material=} [options.overrideMaterials='false'] - override b3dm's embedded glTF materials. If overrideMaterials is a three.js material, it will be the material used to override.
     * @return {Promise} - a promise that resolves with an object containig a THREE.Scene (gltf) and a batch table (batchTable).
     *
     */
    function parse(buffer: ArrayBuffer, options: {
        gltfUpAxis?: string;
        urlBase: string;
        doNotPatchMaterial?: boolean;
        opacity?: float;
        overrideMaterials?: any;
    }): Promise<any>;
    /** Parse b3dm buffer and extract THREE.Scene and batch table
     * @param {ArrayBuffer} buffer - the b3dm buffer.
     * @param {Object} options - additional properties.
     * @param {string=} [options.gltfUpAxis='Y'] - embedded glTF model up axis.
     * @param {string} options.urlBase - the base url of the b3dm file (used to fetch textures for the embedded glTF model).
     * @param {boolean=} [options.doNotPatchMaterial='false'] - disable patching material with logarithmic depth buffer support.
     * @param {float} [options.opacity=1.0] - the b3dm opacity.
     * @param {boolean|Material=} [options.overrideMaterials='false'] - override b3dm's embedded glTF materials. If overrideMaterials is a three.js material, it will be the material used to override.
     * @return {Promise} - a promise that resolves with an object containig a THREE.Scene (gltf) and a batch table (batchTable).
     *
     */
    function parse(buffer: ArrayBuffer, options: {
        gltfUpAxis?: string;
        urlBase: string;
        doNotPatchMaterial?: boolean;
        opacity?: float;
        overrideMaterials?: any;
    }): Promise<any>;
}
export default _default;
import { GLTFLoader } from "ThreeExtended/loaders/GLTFLoader";
import * as THREE from "three";
//# sourceMappingURL=B3dmParser.d.ts.map