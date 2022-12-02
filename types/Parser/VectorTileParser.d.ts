declare namespace _default {
    /**
     * Parse a vector tile file and return a [Feature]{@link module:GeoJsonParser.Feature}
     * or an array of Features. While multiple formats of vector tile are
     * available, the only one supported for the moment is the
     * [Mapbox Vector Tile]{@link https://www.mapbox.com/vector-tiles/specification/}.
     *
     * @param {ArrayBuffer} file - The vector tile file to parse.
     *
     * @param {ParsingOptions} options - Options controlling the parsing {@link ParsingOptions}.
     *
     * @param {InformationsData} options.in - Object containing all styles,
     * layers and informations data, see {@link InformationsData}.
     *
     * @param {Object} options.in.Styles - Object containing subobject with
     * informations on a specific style layer. Styles available is by `layer.id` and by zoom.
     *
     * @param {Object} options.in.layers - Object containing subobject with
     *
     * @param {FeatureBuildingOptions} options.out - options indicates how the features should be built,
     * see {@link FeatureBuildingOptions}.
     *
     * @return {Promise} A Promise resolving with a Feature or an array a
     * Features.
     */
    function parse(file: ArrayBuffer, options: ParsingOptions): Promise<any>;
    /**
     * Parse a vector tile file and return a [Feature]{@link module:GeoJsonParser.Feature}
     * or an array of Features. While multiple formats of vector tile are
     * available, the only one supported for the moment is the
     * [Mapbox Vector Tile]{@link https://www.mapbox.com/vector-tiles/specification/}.
     *
     * @param {ArrayBuffer} file - The vector tile file to parse.
     *
     * @param {ParsingOptions} options - Options controlling the parsing {@link ParsingOptions}.
     *
     * @param {InformationsData} options.in - Object containing all styles,
     * layers and informations data, see {@link InformationsData}.
     *
     * @param {Object} options.in.Styles - Object containing subobject with
     * informations on a specific style layer. Styles available is by `layer.id` and by zoom.
     *
     * @param {Object} options.in.layers - Object containing subobject with
     *
     * @param {FeatureBuildingOptions} options.out - options indicates how the features should be built,
     * see {@link FeatureBuildingOptions}.
     *
     * @return {Promise} A Promise resolving with a Feature or an array a
     * Features.
     */
    function parse(file: ArrayBuffer, options: ParsingOptions): Promise<any>;
}
export default _default;
//# sourceMappingURL=VectorTileParser.d.ts.map