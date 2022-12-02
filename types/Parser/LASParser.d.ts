declare namespace _default {
    /**
     * Parses a LAS file or a LAZ (LASZip) file and return the corresponding
     * `THREE.BufferGeometry`.
     *
     * @param {ArrayBuffer} data - The file content to parse.
     * @param {Object} [options] - Options to give to the parser.
     * @param {number|string} [options.in.colorDepth='auto'] - Does the color
     * encoding is known ? Is it `8` or `16` bits ? By default it is to
     * `'auto'`, but it will be more performant if a specific value is set.
     * @param {number} [options.out.skip=1] - Read one point from every `skip`
     * points.
     *
     * @return {Promise} A promise resolving with a `THREE.BufferGeometry`. The
     * header of the file is contained in `userData`.
     */
    function parse(data: ArrayBuffer, options?: any): Promise<any>;
    /**
     * Parses a LAS file or a LAZ (LASZip) file and return the corresponding
     * `THREE.BufferGeometry`.
     *
     * @param {ArrayBuffer} data - The file content to parse.
     * @param {Object} [options] - Options to give to the parser.
     * @param {number|string} [options.in.colorDepth='auto'] - Does the color
     * encoding is known ? Is it `8` or `16` bits ? By default it is to
     * `'auto'`, but it will be more performant if a specific value is set.
     * @param {number} [options.out.skip=1] - Read one point from every `skip`
     * points.
     *
     * @return {Promise} A promise resolving with a `THREE.BufferGeometry`. The
     * header of the file is contained in `userData`.
     */
    function parse(data: ArrayBuffer, options?: any): Promise<any>;
}
export default _default;
//# sourceMappingURL=LASParser.d.ts.map