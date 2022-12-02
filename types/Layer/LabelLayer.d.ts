export default LabelLayer;
/**
 * A layer to handle a bunch of `Label`. This layer can be created on its own,
 * but it is better to use the option `addLabelLayer` on another `Layer` to let
 * it work with it (see the `vector_tile_raster_2d` example).
 *
 * @property {boolean} isLabelLayer - Used to checkout whether this layer is a
 * LabelLayer.  Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @extends Layer
 */
declare class LabelLayer extends Layer {
    /**
     * @constructor
     *
     * @param {string} id - The id of the layer, that should be unique. It is
     * not mandatory, but an error will be emitted if this layer is added a
     * {@link View} that already has a layer going by that id.
     * @param {Object} [config] - Optional configuration, all elements in it
     * will be merged as is in the layer. For example, if the configuration
     * contains three elements `name, protocol, extent`, these elements will be
     * available using `layer.name` or something else depending on the property
     * name.
     * @param {domElement|function} config.domElement - An HTML domElement.
     * If set, all `Label` displayed within the current instance `LabelLayer`
     * will be this domElement.
     *
     * It can be set to a method. The single parameter of this method gives the
     * properties of each feature on which a `Label` is created.
     *
     * If set, all the parameters set in the `LabelLayer` `Style.text` will be overridden,
     * except for the `Style.text.anchor` parameter which can help place the label.
     */
    constructor(id: string, config?: {
        domElement: domElement | Function;
    });
    isLabelLayer: boolean;
    domElement: HTMLDivElement;
    buildExtent: boolean;
    labelDomelement: any;
    margin: any;
    /**
     * Reads each {@link FeatureGeometry} that contains label configuration, and
     * creates the corresponding {@link Label}. To create a `Label`, a geometry
     * needs to have a `label` object with at least a few properties:
     * - `content`, which refers to `Label#content`
     * - `position`, which refers to `Label#position`
     * - (optional) `config`, containing miscellaneous configuration for the
     *   label
     *
     * The geometry (or its parent Feature) needs to have a Style set.
     *
     * @param {FeatureCollection} data - The FeatureCollection to read the
     * labels from.
     * @param {Extent} extent
     *
     * @return {Label[]} An array containing all the created labels.
     */
    convert(data: FeatureCollection, extent: Extent): Label[];
    preUpdate(): void;
    update(context: any, layer: any, node: any, parent: any): any;
    removeLabelsFromNodeRecursive(node: any): void;
    removeNodeDomElement(node: any): void;
}
import Layer from "Layer/Layer";
import Extent from "Core/Geographic/Extent";
import Label from "Core/Label";
//# sourceMappingURL=LabelLayer.d.ts.map