declare namespace _default {
    /**
     * Cleanup obj to release three.js allocated resources
     * @param {Object3D} obj object to release
     */
    function cleanup(obj: Object3D): void;
    /**
     * Cleanup obj to release three.js allocated resources
     * @param {Object3D} obj object to release
     */
    function cleanup(obj: Object3D): void;
    /**
     * Remove obj's children belonging to a layer.
     * Neither obj nor its children will be disposed!
     * @param {Layer} layer The layer that objects must belong to. Other object are ignored
     * @param {Object3D} obj The Object3D we want to clean
     * @return {Array} an array of removed Object3D from obj (not including the recursive removals)
     */
    function removeChildren(layer: Layer, obj: Object3D): any[];
    /**
     * Remove obj's children belonging to a layer.
     * Neither obj nor its children will be disposed!
     * @param {Layer} layer The layer that objects must belong to. Other object are ignored
     * @param {Object3D} obj The Object3D we want to clean
     * @return {Array} an array of removed Object3D from obj (not including the recursive removals)
     */
    function removeChildren(layer: Layer, obj: Object3D): any[];
    /**
     * Remove obj's children belonging to a layer and cleanup objexts.
     * obj will be disposed but its children **won't**!
     * @param {Layer} layer The layer that objects must belong to. Other object are ignored
     * @param {Object3D} obj The Object3D we want to clean
     * @return {Array} an array of removed Object3D from obj (not including the recursive removals)
     */
    function removeChildrenAndCleanup(layer: Layer, obj: Object3D): any[];
    /**
     * Remove obj's children belonging to a layer and cleanup objexts.
     * obj will be disposed but its children **won't**!
     * @param {Layer} layer The layer that objects must belong to. Other object are ignored
     * @param {Object3D} obj The Object3D we want to clean
     * @return {Array} an array of removed Object3D from obj (not including the recursive removals)
     */
    function removeChildrenAndCleanup(layer: Layer, obj: Object3D): any[];
    /**
     * Recursively remove obj's children belonging to a layer.
     * All removed obj will have their geometry/material disposed.
     * @param {Layer} layer The layer that objects must belong to. Other object are ignored
     * @param {Object3D} obj The Object3D we want to clean
     * @return {Array} an array of removed Object3D from obj (not including the recursive removals)
     */
    function removeChildrenAndCleanupRecursively(layer: Layer, obj: Object3D): any[];
    /**
     * Recursively remove obj's children belonging to a layer.
     * All removed obj will have their geometry/material disposed.
     * @param {Layer} layer The layer that objects must belong to. Other object are ignored
     * @param {Object3D} obj The Object3D we want to clean
     * @return {Array} an array of removed Object3D from obj (not including the recursive removals)
     */
    function removeChildrenAndCleanupRecursively(layer: Layer, obj: Object3D): any[];
}
export default _default;
//# sourceMappingURL=ObjectRemovalHelper.d.ts.map