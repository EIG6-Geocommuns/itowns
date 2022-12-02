declare namespace _default {
    /**
     * Parses an ISG file content and returns a corresponding `{@link GeoidGrid}`.
     *
     * @param   {string}    isg                             The content of the ISG file to parse.
     * @param   {Object}    options                         An object gathering the optional parameters to pass to
                                                            * the parser.
     * @param   {Object}    [options.in={}]                 Information on the ISG data.
     * @param   {string}    [options.in.crs='EPSG:4326']    The Coordinates Reference System (CRS) of the ISG data.
                                                            * It must be a geographic CRS, and must be given as an EPSG
                                                            * code.
     *
     * @returns {Promise<GeoidGrid>}    A promise resolving with a `{@link GeoidGrid}`, which contains all the necessary
                                        * attributes and methods to access ISG file data.
     */
    function parse(isg: string, options?: {
        in?: {
            crs?: string;
        };
    }): Promise<GeoidGrid>;
    /**
     * Parses an ISG file content and returns a corresponding `{@link GeoidGrid}`.
     *
     * @param   {string}    isg                             The content of the ISG file to parse.
     * @param   {Object}    options                         An object gathering the optional parameters to pass to
                                                            * the parser.
     * @param   {Object}    [options.in={}]                 Information on the ISG data.
     * @param   {string}    [options.in.crs='EPSG:4326']    The Coordinates Reference System (CRS) of the ISG data.
                                                            * It must be a geographic CRS, and must be given as an EPSG
                                                            * code.
     *
     * @returns {Promise<GeoidGrid>}    A promise resolving with a `{@link GeoidGrid}`, which contains all the necessary
                                        * attributes and methods to access ISG file data.
     */
    function parse(isg: string, options?: {
        in?: {
            crs?: string;
        };
    }): Promise<GeoidGrid>;
}
export default _default;
import GeoidGrid from "Core/Geographic/GeoidGrid";
//# sourceMappingURL=ISGParser.d.ts.map