export const COLOR_LAYERS_ORDER_CHANGED: "layers-order-changed";
declare namespace _default {
    /**
     * Moves up in the layer list. This function has no effect if the layer is
     * moved to its current index.
     *
     * @param {View} view - The view in which the layer is moved up.
     * @param {string} layerId - The ID of the layer to move.
     *
     * @example
     * itowns.ColorLayersOrdering.moveLayerUp(viewer, 'idLayerToUp');
     */
    function moveLayerUp(view: View, layerId: string): void;
    /**
     * Moves up in the layer list. This function has no effect if the layer is
     * moved to its current index.
     *
     * @param {View} view - The view in which the layer is moved up.
     * @param {string} layerId - The ID of the layer to move.
     *
     * @example
     * itowns.ColorLayersOrdering.moveLayerUp(viewer, 'idLayerToUp');
     */
    function moveLayerUp(view: View, layerId: string): void;
    /**
     * Moves down in the layer list. This function has no effect if the layer is
     * moved to its current index.
     *
     * @param {View} view - The view in which the layer is moved down.
     * @param {string} layerId - The ID of the layer to move.
     *
     * @example
     * itowns.ColorLayersOrdering.moveLayerDown(viewer, 'idLayerToDown');
     */
    function moveLayerDown(view: View, layerId: string): void;
    /**
     * Moves down in the layer list. This function has no effect if the layer is
     * moved to its current index.
     *
     * @param {View} view - The view in which the layer is moved down.
     * @param {string} layerId - The ID of the layer to move.
     *
     * @example
     * itowns.ColorLayersOrdering.moveLayerDown(viewer, 'idLayerToDown');
     */
    function moveLayerDown(view: View, layerId: string): void;
    /**
     * Moves a specific layer to a specific index in the layer list. This
     * function has no effect if the layer is moved to its current index.
     *
     * @param {View} view - The view in which the layer is moved.
     * @param {string} layerId - The ID of the layer to move.
     * @param {number} index - The index to move the layer to.
     *
     * @example
     * itowns.ColorLayersOrdering.moveLayerToIndex(viewer, 'idLayerToChangeIndex', 2);
     */
    function moveLayerToIndex(view: View, layerId: string, index: number): void;
    /**
     * Moves a specific layer to a specific index in the layer list. This
     * function has no effect if the layer is moved to its current index.
     *
     * @param {View} view - The view in which the layer is moved.
     * @param {string} layerId - The ID of the layer to move.
     * @param {number} index - The index to move the layer to.
     *
     * @example
     * itowns.ColorLayersOrdering.moveLayerToIndex(viewer, 'idLayerToChangeIndex', 2);
     */
    function moveLayerToIndex(view: View, layerId: string, index: number): void;
}
export default _default;
//# sourceMappingURL=ColorLayersOrdering.d.ts.map