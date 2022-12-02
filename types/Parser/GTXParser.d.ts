export const BYTES_PER_DOUBLE: 8;
export const BYTES_PER_FLOAT: 4;
declare namespace _default {
    /**
     * Parses a GTX file content and returns a corresponding `{@link GeoidGrid}`.
     *
     * @param   {ArrayBuffer}   gtx                             The content of the GTX file to parse.
     * @param   {Object}        options                         An object gathering the optional parameters to pass to
                                                                * the parser.
     * @param   {Object}        [options.in={}]                 Information on the GTX data.
     * @param   {string}        [options.in.crs='EPSG:4326']    The Coordinates Reference System (CRS) of the GTX data.
                                                                * It must be a geographic CRS, and must be given as an
                                                                * EPSG code.
     * @param   {string}        [options.in.dataType='float']   The encoding of geoid height data within the GTX file.
                                                                * Must be `'float'` or `'double'`.
     *
     * @returns {Promise<GeoidGrid>}    A promise resolving with a `{@link GeoidGrid}`, which contains all the necessary
                                        * attributes and methods to access GTX file data.
     */
    function parse(gtx: ArrayBuffer, options?: {
        in?: {
            crs?: string;
            dataType?: string;
        };
    }): Promise<GeoidGrid>;
    /**
     * Parses a GTX file content and returns a corresponding `{@link GeoidGrid}`.
     *
     * @param   {ArrayBuffer}   gtx                             The content of the GTX file to parse.
     * @param   {Object}        options                         An object gathering the optional parameters to pass to
                                                                * the parser.
     * @param   {Object}        [options.in={}]                 Information on the GTX data.
     * @param   {string}        [options.in.crs='EPSG:4326']    The Coordinates Reference System (CRS) of the GTX data.
                                                                * It must be a geographic CRS, and must be given as an
                                                                * EPSG code.
     * @param   {string}        [options.in.dataType='float']   The encoding of geoid height data within the GTX file.
                                                                * Must be `'float'` or `'double'`.
     *
     * @returns {Promise<GeoidGrid>}    A promise resolving with a `{@link GeoidGrid}`, which contains all the necessary
                                        * attributes and methods to access GTX file data.
     */
    function parse(gtx: ArrayBuffer, options?: {
        in?: {
            crs?: string;
            dataType?: string;
        };
    }): Promise<GeoidGrid>;
}
export default _default;
import GeoidGrid from "Core/Geographic/GeoidGrid";
//# sourceMappingURL=GTXParser.d.ts.map