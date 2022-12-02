export default ShaderChunk;
declare const ShaderChunk: ShaderChunkManager;
/**
 * The ShaderChunkManager manages the itowns chunks shader.
 * It adds chunks to THREE.ShaderChunk to compile shaders
 *
 * In itowns, if you want access to `ShaderChunkManager` instance :
 *
 * ```js
 * import ShaderChunk from 'Renderer/Shader/ShaderChunk';
 * ```
 * or
 * ```js
 * const ShaderChunk = itowns.ShaderChunk';
 * ```
 *
 * @property {Object} target - The target to install the chunks into.
 * @property {string} [path] - A path to add before a chunk name as a prefix.
 *
 */
declare class ShaderChunkManager {
    /**
     * Constructs a new instance ShaderChunkManager.
     *
     * @constructor
     *
     * @param {Object} target - The target to install the chunks into.
     * @param {string} [path] - A path to add before a chunk name as a prefix.
     *
     */
    constructor(target: any, path?: string);
    path: string;
    target: any;
    /**
     * Set the header ColorLayer shader.
     *
     * @param  {string}  header  The glsl header
     */
    customHeaderColorLayer(header: string): void;
    /**
     * Set the body ColorLayer shader.
     * You could define you color terrain shader, with a header and a body.
     * the header defines yours fonctions and the body defines the process on ColorLayer.
     * @example <caption>Custom shader chunk</caption>
     *  itowns.ShaderChunk.customHeaderColorLayer(`
     *  // define yours methods
     *  vec4 myColor(vec4 color, float a) {
     *      return color * a;
     *  }
     * `);
     * itowns.ShaderChunk.customBodyColorLayer(`
     *  // the body set final color layer.
     *  // layer.amount_effect is variable, it could be change in Layer instance.
     *  color = myColor(color, layer.amount_effect)
     * `);
     *
     *  var colorLayer = new itowns.ColorLayer('OPENSM', {
     *    source,
     *    type_effect: itowns.colorLayerEffects.customEffect,
     *    amount_effect: 0.5,
     *  });
     *
     * @param  {string}  body  The glsl body
     */
    customBodyColorLayer(body: string): void;
    /**
     * Install chunks in a target, for example THREE.ShaderChunk, with adding an
     * optional path.
     *
     * @param {Object} target - The target to install the chunks into.
     * @param {Object} chunks - The chunks to install. The key of each chunk will be
     * the name of installation of the chunk in the target (plus an optional path).
     * @param {string} [path] - A path to add before a chunk name as a prefix.
     *
     * @return {Object} The target with installed chunks.
     */
    install(target?: any, chunks?: any, path?: string): any;
}
//# sourceMappingURL=ShaderChunk.d.ts.map