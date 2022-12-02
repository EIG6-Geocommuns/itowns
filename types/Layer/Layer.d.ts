export default Layer;
export namespace ImageryLayers {
    function moveLayerToIndex(layer: any, newIndex: any, imageryLayers: any): void;
    function moveLayerDown(layer: any, imageryLayers: any): void;
    function moveLayerUp(layer: any, imageryLayers: any): void;
    function getColorLayersIdOrderedBySequence(imageryLayers: any): any[];
}
/**
 * @property {boolean} isLayer - Used to checkout whether this layer is a Layer.
 * Default is true. You should not change this, as it is used internally for
 * optimisation.
 * @property {boolean} ready - This property is false when the layer isn't added.
 * It's true when the layer is added and all initializations are done.
 * @property {Source} source - This source determines the datas to be displayed with the layer.
 * The layer determines how this data are displayed.
 * By example:
 * * For ColorLayer/ElevationLayer, the source datas are rasterised (if it's necessary).
 * * For GeometryLayer, the source datas are converted to meshes (not possible for the raster data sources).
 * @property {Promise} whenReady - this promise is resolved when the layer is added and all initializations are done.
 * This promise is resolved with this layer.
 * This promise is returned by [View#addLayer]{@link View}.
 * @property {boolean} [addLabelLayer=false] - Used to tell if this layer has
 * labels to display from its data. For example, it needs to be set to `true`
 * for a layer with vector tiles. If it's `true` a new `LabelLayer` is added and attached to this `Layer`.
 * @property {object} [zoom] - This property is used only the layer is attached to [TiledGeometryLayer]{@link TiledGeometryLayer}.
 * By example,
 * The layer checks the tile zoom level to determine if the layer is visible in this tile.
 *
 * ![tiled geometry](/docs/static/images/wfszoommaxmin.jpeg)
 * _In `GlobeView`, **red lines** represents the **WGS84 grid** and **orange lines** the Pseudo-mercator grid_
 * _In this example [WFS to 3D objects](http://www.itowns-project.org/itowns/examples/index.html#source_stream_wfs_3d), the building layer zoom min is 14._
 * _In the lower part of the picture, the zoom tiles 14 have buildings, while in the upper part of the picture, the level 13 tiles have no buildings._
 *
 * @property {number} [zoom.max=Infinity] - this is the maximum zoom beyond which it'll be hidden.
 * @property {number} [zoom.min=0] - this is the minimum zoom from which it'll be visible.
 *
 */
declare class Layer extends THREE.EventDispatcher<THREE.Event> {
    /**
     * Don't use directly constructor to instance a new Layer. Instead, use
     * another available type of Layer, implement a new one inheriting from this
     * one or use [View#addLayer]{@link View}.
     *
     * @constructor
     * @protected
     *
     * @param {string} id - The id of the layer, that should be unique. It is
     * not mandatory, but an error will be emitted if this layer is added a
     * {@link View} that already has a layer going by that id.
     * @param {Object} config - configuration, all elements in it
     * will be merged as is in the layer. For example, if the configuration
     * contains three elements `name, extent`, these elements will be
     * available using `layer.name` or something else depending on the property
     * name.
     * @param {Source|boolean} config.source - instantiated Source specifies data source to display.
     * if config.source is a boolean, it can only be false. if config.source is false,
     * the layer doesn't need Source (like debug Layer or procedural layer).
     * @param {number} [config.cacheLifeTime=Infinity] - set life time value in cache.
     * This value is used for [Cache]{@link Cache} expiration mechanism.
     *
     * @example
     * // Add and create a new Layer
     * const newLayer = new Layer('id', options);
     * view.addLayer(newLayer);
     *
     * // Change layer's visibility
     * const layerToChange = view.getLayerById('idLayerToChange');
     * layerToChange.visible = false;
     * view.notifyChange(); // update viewer
     *
     * // Change layer's opacity
     * const layerToChange = view.getLayerById('idLayerToChange');
     * layerToChange.opacity = 0.5;
     * view.notifyChange(); // update viewer
     *
     * // Listen properties
     * const layerToListen = view.getLayerById('idLayerToListen');
     * layerToListen.addEventListener('visible-property-changed', (event) => console.log(event));
     * layerToListen.addEventListener('opacity-property-changed', (event) => console.log(event));
     */
    protected constructor();
    isLayer: boolean;
    options: any;
    updateStrategy: {
        type: number;
        options: {};
    };
    zoom: {
        max: any;
        min: any;
    };
    info: InfoLayer;
    source: Source;
    ready: boolean;
    _promises: Promise<void>[];
    whenReady: Promise<Layer>;
    _resolve: (value: any) => void;
    _reject: (reason?: any) => void;
    cache: Cache;
    mergeFeatures: any;
    filter: any;
    addInitializationStep(): undefined;
    /**
     * Defines a property for this layer, with a default value and a callback
     * executed when the property changes.
     * <br><br>
     * When changing the property, it also emits an event, named following this
     * convention: `${propertyName}-property-changed`, with `${propertyName}`
     * being replaced by the name of the property.  For example, if the added
     * property name is `frozen`, it will emit a `frozen-property-changed`.
     * <br><br>
     * @example <caption>The emitted event has some properties assigned to it</caption>
     * event = {
     *     new: {
     *         ${propertyName}: * // the new value of the property
     *     },
     *     previous: {
     *         ${propertyName}: * // the previous value of the property
     *     },
     *     target: Layer // the layer it has been dispatched from
     *     type: string // the name of the emitted event
     * }
     *
     * @param {string} propertyName - The name of the property, also used in
     * the emitted event name.
     * @param {*} defaultValue - The default set value.
     * @param {function} [onChange] - The function executed when the property is
     * changed. Parameters are the layer the property is defined on, and the
     * name of the property.
     */
    defineLayerProperty(propertyName: string, defaultValue: any, onChange?: Function): void;
    convert(data: any): any;
    getData(from: any, to: any): any;
    /**
     * Determines whether the specified feature is valid data.
     *
     * @param      {Feature}  feature  The feature
     * @returns {Feature} the feature is returned if it's valided
     */
    isValidData(feature: Feature): Feature;
    /**
     * Remove and dispose all objects from layer.
     */
    delete(): void;
}
import * as THREE from "three";
import InfoLayer from "Layer/InfoLayer";
import Source from "Source/Source";
import Cache from "Core/Scheduler/Cache";
//# sourceMappingURL=Layer.d.ts.map