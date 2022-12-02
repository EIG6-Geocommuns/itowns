export function getHeaderAttribute(header: any, attributeName: any): number;
declare namespace _default {
    /**
     * Parses a GDF file content and returns a corresponding `{@link GeoidGrid}`.
     *
     * @param   {string}    gdf                             The content of the GDF file to parse.
     * @param   {Object}    options                         An object gathering the optional parameters to pass to
                                                            * the parser.
     * @param   {Object}    [options.in={}]                 Information on the GDF data.
     * @param   {string}    [options.in.crs='EPSG:4326']    The Coordinates Reference System (CRS) of the GDF data.
                                                            * It must be a geographic CRS, and must be given as an EPSG
                                                            * code.
     *
     * @returns {Promise<GeoidGrid>}    A promise resolving with a `{@link GeoidGrid}`, which contains all the necessary
                                        * attributes and methods to access GDF file data.
     */
    function parse(gdf: string, options?: {
        in?: {
            crs?: string;
        };
    }): Promise<GeoidGrid>;
    /**
     * Parses a GDF file content and returns a corresponding `{@link GeoidGrid}`.
     *
     * @param   {string}    gdf                             The content of the GDF file to parse.
     * @param   {Object}    options                         An object gathering the optional parameters to pass to
                                                            * the parser.
     * @param   {Object}    [options.in={}]                 Information on the GDF data.
     * @param   {string}    [options.in.crs='EPSG:4326']    The Coordinates Reference System (CRS) of the GDF data.
                                                            * It must be a geographic CRS, and must be given as an EPSG
                                                            * code.
     *
     * @returns {Promise<GeoidGrid>}    A promise resolving with a `{@link GeoidGrid}`, which contains all the necessary
                                        * attributes and methods to access GDF file data.
     */
    function parse(gdf: string, options?: {
        in?: {
            crs?: string;
        };
    }): Promise<GeoidGrid>;
}
export default _default;
import GeoidGrid from "Core/Geographic/GeoidGrid";
//# sourceMappingURL=GDFParser.d.ts.map