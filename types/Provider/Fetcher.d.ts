declare namespace _default {
    /**
     * Wrapper over fetch to get some text.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {RequestInit} options - Fetch options (passed directly to
     * `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<string>} Promise containing the text.
     */
    export function text(url: string, options?: RequestInit): Promise<string>;
    /**
     * Wrapper over fetch to get some text.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {RequestInit} options - Fetch options (passed directly to
     * `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<string>} Promise containing the text.
     */
    export function text(url: string, options?: RequestInit): Promise<string>;
    /**
     * Little wrapper over fetch to get some JSON.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {RequestInit} options - Fetch options (passed directly to
     * `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<Object>} Promise containing the JSON object.
     */
    export function json(url: string, options?: RequestInit): Promise<any>;
    /**
     * Little wrapper over fetch to get some JSON.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {RequestInit} options - Fetch options (passed directly to
     * `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<Object>} Promise containing the JSON object.
     */
    export function json(url: string, options?: RequestInit): Promise<any>;
    /**
     * Wrapper over fetch to get some XML.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {RequestInit} options - Fetch options (passed directly to
     * `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<Document>} Promise containing the XML Document.
     */
    export function xml(url: string, options?: RequestInit): Promise<Document>;
    /**
     * Wrapper over fetch to get some XML.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {RequestInit} options - Fetch options (passed directly to
     * `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<Document>} Promise containing the XML Document.
     */
    export function xml(url: string, options?: RequestInit): Promise<Document>;
    /**
     * Wrapper around {@link THREE.TextureLoader}.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {Object} options - Fetch options (passed directly to `fetch()`),
     * see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     * Note that THREE.js docs mentions `withCredentials`, but it is not
     * actually used in {@link THREE.TextureLoader}.
     *
     * @return {Promise<THREE.Texture>} Promise containing the {@link
     * THREE.Texture}.
     */
    export function texture(url: string, options?: any): Promise<import("three").Texture>;
    /**
     * Wrapper around {@link THREE.TextureLoader}.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {Object} options - Fetch options (passed directly to `fetch()`),
     * see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     * Note that THREE.js docs mentions `withCredentials`, but it is not
     * actually used in {@link THREE.TextureLoader}.
     *
     * @return {Promise<THREE.Texture>} Promise containing the {@link
     * THREE.Texture}.
     */
    export function texture(url: string, options?: any): Promise<import("three").Texture>;
    export { arrayBuffer };
    /**
     * Wrapper over fetch to get some {@link THREE.DataTexture}.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {Object} options - Fetch options (passed directly to `fetch()`),
     * see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<THREE.DataTexture>} Promise containing the DataTexture.
     */
    export function textureFloat(url: string, options?: any): Promise<DataTexture>;
    /**
     * Wrapper over fetch to get some {@link THREE.DataTexture}.
     *
     * @param {string} url - The URL of the resources to fetch.
     * @param {Object} options - Fetch options (passed directly to `fetch()`),
     * see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise<THREE.DataTexture>} Promise containing the DataTexture.
     */
    export function textureFloat(url: string, options?: any): Promise<DataTexture>;
    /**
     * Wrapper over fetch to get a bunch of files sharing the same name, but
     * different extensions.
     *
     * @param {string} baseUrl - The shared URL of the resources to fetch.
     * @param {Object} extensions - An object containing arrays. The keys of
     * each of this array are available fetch type, such as `text`, `json` or
     * even `arrayBuffer`. The arrays contains the extensions to append after
     * the `baseUrl` (see example below).
     * @param {Object} options - Fetch options (passed directly to `fetch()`),
     * see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise[]} An array of promises, containing all the files,
     * organized by their extensions (see the example below).
     *
     * @example
     * itowns.Fetcher.multiple('http://geo.server/shapefile', {
     *     // will fetch:
     *     // - http://geo.server/shapefile.shp
     *     // - http://geo.server/shapefile.dbf
     *     // - http://geo.server/shapefile.shx
     *     // - http://geo.server/shapefile.prj
     *     arrayBuffer: ['shp', 'dbf', 'shx'],
     *     text: ['prj'],
     * }).then(function _(result) {
     *     // result looks like:
     *     result = {
     *         shp: ArrayBuffer
     *         dbf: ArrayBuffer
     *         shx: ArrayBuffer
     *         prj: string
     *     };
     * });
     */
    export function multiple(baseUrl: string, extensions: any, options?: any): Promise<any>[];
    /**
     * Wrapper over fetch to get a bunch of files sharing the same name, but
     * different extensions.
     *
     * @param {string} baseUrl - The shared URL of the resources to fetch.
     * @param {Object} extensions - An object containing arrays. The keys of
     * each of this array are available fetch type, such as `text`, `json` or
     * even `arrayBuffer`. The arrays contains the extensions to append after
     * the `baseUrl` (see example below).
     * @param {Object} options - Fetch options (passed directly to `fetch()`),
     * see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     *
     * @return {Promise[]} An array of promises, containing all the files,
     * organized by their extensions (see the example below).
     *
     * @example
     * itowns.Fetcher.multiple('http://geo.server/shapefile', {
     *     // will fetch:
     *     // - http://geo.server/shapefile.shp
     *     // - http://geo.server/shapefile.dbf
     *     // - http://geo.server/shapefile.shx
     *     // - http://geo.server/shapefile.prj
     *     arrayBuffer: ['shp', 'dbf', 'shx'],
     *     text: ['prj'],
     * }).then(function _(result) {
     *     // result looks like:
     *     result = {
     *         shp: ArrayBuffer
     *         dbf: ArrayBuffer
     *         shx: ArrayBuffer
     *         prj: string
     *     };
     * });
     */
    export function multiple(baseUrl: string, extensions: any, options?: any): Promise<any>[];
}
export default _default;
declare function arrayBuffer(url: any, options?: {}): Promise<ArrayBuffer>;
import { DataTexture } from "three/src/textures/DataTexture";
//# sourceMappingURL=Fetcher.d.ts.map