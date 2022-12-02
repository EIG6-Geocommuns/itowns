export default C3DTBatchTable;
/** @classdesc
 * A 3D Tiles
 * [batch
 * table](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification/TileFormats/BatchTable).
 * @property {C3DTilesTypes} type - Used by 3D Tiles extensions
 * (e.g. {@link C3DTBatchTableHierarchyExtension}) to know in which context
 * (i.e. for which 3D Tiles class) the parsing of the extension should be done.
 * @property {number} batchLength - the length of the batch.
 * @property {object} content - the content of the batch table in the form:
 * {property1: values[], property2: values[], ...}.
 * @property {object} extensions - 3D Tiles extensions of the batch table
 * stored in the following format:
 * {extensioName1: extensionObject1, extensioName2: extensionObject2, ...}
 */
declare class C3DTBatchTable {
    /**
     * @param {ArrayBuffer} buffer - batch table buffer to parse.
     * @param {ArrayBuffer} binaryLength - the length of the binary part of
     * the batch table (not supported yet)
     * @param {number} batchLength - the length of the batch.
     * @param {Object} registeredExtensions - extensions registered to the layer
     */
    constructor(buffer: ArrayBuffer, binaryLength: ArrayBuffer, batchLength: number, registeredExtensions: any);
    type: string;
    batchLength: number;
    extensions: any;
    content: any;
    /**
     * Creates and returns a javascript object holding the displayable
     * information from the batch table and from extensions of the batch table,
     * for a given feature (identified with its batchID).
     * @param {integer} batchID - id of the feature
     * @returns {Object} - displayable information relative to the batch
     * table and its extensions. Object is formatted as follow:
     * {batchTable:
     *      {property1: value1
     *       property2: value2
     *       ...}
     *  extensions:
     *      {extension1:
     *          {property1: value1
     *           ...}
     *        extension2: {...}
     *        ...}
     * }
     */
    getInfoById(batchID: integer): any;
}
//# sourceMappingURL=C3DTBatchTable.d.ts.map