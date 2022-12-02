export default GeometryLayer;
/**
 * Fires when the opacity of the layer has changed.
 * @event GeometryLayer#opacity-property-changed
 */
/**
 * @property {boolean} isGeometryLayer - Used to checkout whether this layer is
 * a GeometryLayer. Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @property {number} [zoom.max=Infinity] - this is the maximum zoom beyond which it'll be hidden.
 * The `max` is constant and the value is `Infinity` because there's no maximum display level after which it is hidden.
 * This property is used only if the layer is attached to [TiledGeometryLayer]{@link TiledGeometryLayer}.
 * @property {number} [zoom.min=0] - this is the minimum zoom from which it'll be visible.
 * This property is used only if the layer is attached to [TiledGeometryLayer]{@link TiledGeometryLayer}.
 * @extends Layer
 */
declare class GeometryLayer extends Layer {
    /**
     * A layer usually managing a geometry to display on a view. For example, it
     * can be a layer of buildings extruded from a a WFS stream.
     *
     * @constructor
     *
     * @param {string} id - The id of the layer, that should be unique. It is
     * not mandatory, but an error will be emitted if this layer is added a
     * {@link View} that already has a layer going by that id.
     * @param {THREE.Object3D} object3d - The object3D used to contain the
     * geometry of the GeometryLayer. It is usually a `THREE.Group`, but it can
     * be anything inheriting from a `THREE.Object3D`.
     * @param {Object} [config] - Optional configuration, all elements in it
     * will be merged as is in the layer. For example, if the configuration
     * contains three elements `name, protocol, extent`, these elements will be
     * available using `layer.name` or something else depending on the property
     * name.
     * @param {Source} [config.source] - Description and options of the source.
     *
     * @throws {Error} `object3d` must be a valid `THREE.Object3d`.
     *
     * @example
     * // Create a GeometryLayer
     * const geometry = new GeometryLayer('buildings', new THREE.Object3D(), {
     *      source: {
     *          url: 'http://server.geo/wfs?',
     *          protocol: 'wfs',
     *          format: 'application/json'
     *      },
     * });
     *
     * // Add the layer
     * view.addLayer(geometry);
     */
    constructor(id: string, object3d: THREE.Object3D, config?: {
        source?: Source;
    });
    isGeometryLayer: boolean;
    opacity: number;
    wireframe: boolean;
    attachedLayers: any[];
    visible: any;
    filteringExtent: boolean;
    structure: string;
    getObjectToUpdateForAttachedLayers(obj: any): {
        element: any;
        parent: any;
    };
    postUpdate(): void;
    culling(): boolean;
    /**
     * Attach another layer to this one. Layers attached to a GeometryLayer will
     * be available in `geometryLayer.attachedLayers`.
     *
     * @param {Layer} layer - The layer to attach, that must have an `update`
     * method.
     */
    attach(layer: Layer): void;
    /**
     * Detach a layer attached to this one. See {@link attach} to learn how to
     * attach a layer.
     *
     * @param {Layer} layer - The layer to detach.
     *
     * @return {boolean} Confirmation of the detachment of the layer.
     */
    detach(layer: Layer): boolean;
    /**
     * Picking method for this layer. It uses the {@link Picking#pickObjectsAt}
     * method.
     *
     * @param {View} view - The view instance.
     * @param {Object} coordinates - The coordinates to pick in the view. It
     * should have at least `x` and `y` properties.
     * @param {number} radius - Radius of the picking circle.
     * @param {Array} target - target to push result.
     *
     * @return {Array} An array containing all targets picked under the
     * specified coordinates.
     */
    pickObjectsAt(view: View, coordinates: any, radius?: number, target?: any[]): any[];
}
import Layer from "Layer/Layer";
//# sourceMappingURL=GeometryLayer.d.ts.map