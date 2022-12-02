declare namespace _default {
    /**
     * Parse a bunch of Shapefile files and return a [FeatureCollection]{@link
     * module:GeoJsonParser~FeatureCollection}.
     *
     * @param {Object} data - All the data that can be specified in a shapefile.
     * @param {ArrayBuffer} data.shp - Data from the shapefile itself,
     * containing the feature geometry itself.
     * @param {ArrayBuffer} data.shx - A positional index of the feature
     * geometry.
     * @param {ArrayBuffer} data.dbf - Columnar attributes for each shape, in
     * [dBase]{@link https://en.wikipedia.org/wiki/DBase} IV format.
     * @param {string} [data.prj] - The coordinate system and crs projection
     * information.
     * @param {ParsingOptions} [options]
     *
     * @return {Promise} A promise resolving with a {@link FeatureCollection}.
     */
    function parse(data: {
        shp: ArrayBuffer;
        shx: ArrayBuffer;
        dbf: ArrayBuffer;
        prj?: string;
    }, options?: ParsingOptions): Promise<any>;
    /**
     * Parse a bunch of Shapefile files and return a [FeatureCollection]{@link
     * module:GeoJsonParser~FeatureCollection}.
     *
     * @param {Object} data - All the data that can be specified in a shapefile.
     * @param {ArrayBuffer} data.shp - Data from the shapefile itself,
     * containing the feature geometry itself.
     * @param {ArrayBuffer} data.shx - A positional index of the feature
     * geometry.
     * @param {ArrayBuffer} data.dbf - Columnar attributes for each shape, in
     * [dBase]{@link https://en.wikipedia.org/wiki/DBase} IV format.
     * @param {string} [data.prj] - The coordinate system and crs projection
     * information.
     * @param {ParsingOptions} [options]
     *
     * @return {Promise} A promise resolving with a {@link FeatureCollection}.
     */
    function parse(data: {
        shp: ArrayBuffer;
        shx: ArrayBuffer;
        dbf: ArrayBuffer;
        prj?: string;
    }, options?: ParsingOptions): Promise<any>;
}
export default _default;
//# sourceMappingURL=ShapefileParser.d.ts.map