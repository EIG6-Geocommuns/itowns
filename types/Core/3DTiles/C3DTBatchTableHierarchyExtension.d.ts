export default C3DTBatchTableHierarchyExtension;
/**
 * @classdesc
 * Batch Table part of the 3D Tiles
 * [Batch Table Hierarchy Extension](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions/3DTILES_batch_table_hierarchy)
 * @property {object} classes - The classes as defined in the specification.
 * @property {object} inverseHierarchy - InverseHierarchy contains for each
 * instance (i.e. georgraphic feature e.g. building, roof, etc.) an array of the
 * indexes of its parents. For example, the parents of the instance 0 can be
 * found using inverseHierarchy[0].
 * @property {number[]} instancesIdxs - For each instance of the extension,
 * contains a javascript object with classId and instanceIdx. classId is the id
 * of the class (from this.classes) of the instance. instanceIdx is the index of
 * the instance in this class. Goal: Ease the retrieval of the properties of an
 * instance.
 */
declare class C3DTBatchTableHierarchyExtension {
    /**
     * Constructor of the C3DTBatchTableHierarchyExtension class.
     * @param {Object} json - The parsed json of the batch table part of the 3D
     * Tiles [Batch Table Hierarchy Extension](https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/extensions/3DTILES_batch_table_hierarchy)
     */
    constructor(json: any);
    classes: any;
    inverseHierarchy: {};
    instancesIdxs: {
        classId: any;
        instanceIdx: any;
    }[];
    /**
     * Creates and returns a javascript object holding the displayable
     * information relative to this extension for a given feature.
     * @param {integer} featureId - id of the feature
     * @returns {Object} - displayable information relative to this
     * extension, for the feature with id=featureId and for its parents
     */
    getInfoById(featureId: integer): any;
}
//# sourceMappingURL=C3DTBatchTableHierarchyExtension.d.ts.map