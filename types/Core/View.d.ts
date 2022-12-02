export namespace VIEW_EVENTS {
    export const LAYERS_INITIALIZED: string;
    export const LAYER_REMOVED: string;
    export const LAYER_ADDED: string;
    export const INITIALIZED: string;
    export { COLOR_LAYERS_ORDER_CHANGED };
    export const CAMERA_MOVED: string;
}
export default View;
import { COLOR_LAYERS_ORDER_CHANGED } from "Renderer/ColorLayersOrdering";
declare class View extends THREE.EventDispatcher<THREE.Event> {
    /**
     * Constructs an Itowns View instance
     *
     * @example <caption><b>Create a view with a custom Three.js camera.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * var customCamera = itowns.THREE.PerspectiveCamera();
     * var view = itowns.View('EPSG:4326', viewerDiv, { camera: { cameraThree: customCamera } });
     *
     * @example <caption><b>Create a view with an orthographic camera, and grant it with Three.js custom controls.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * var view = itowns.View('EPSG:4326', viewerDiv, { camera: { type: itowns.CAMERA_TYPE.ORTHOGRAPHIC } });
     * var customControls = itowns.THREE.OrbitControls(view.camera.camera3D, viewerDiv);
     *
     * @example <caption><b>Enable WebGl 1.0 instead of WebGl 2.0.</b></caption>
     * var viewerDiv = document.getElementById('viewerDiv');
     * const extent = new Extent('EPSG:3946', 1837816.94334, 1847692.32501, 5170036.4587, 5178412.82698);
     * var view = new itowns.View('EPSG:4326', viewerDiv, {  renderer: { isWebGL2: false } });
     *
     * @param {string} crs - The default CRS of Three.js coordinates. Should be a cartesian CRS.
     * @param {HTMLElement} viewerDiv - Where to instanciate the Three.js scene in the DOM
     * @param {Object=} options - Optional properties.
     * @param {object} [options.camera] - Options for the camera associated to the view. See {@link Camera} options.
     * @param {?MainLoop} options.mainLoop - {@link MainLoop} instance to use, otherwise a default one will be constructed
     * @param {?(WebGLRenderer|object)} options.renderer - {@link WebGLRenderer} instance to use, otherwise
     * a default one will be constructed. In this case, if options.renderer is an object, it will be used to
     * configure the renderer (see {@link c3DEngine}.  If not present, a new &lt;canvas> will be created and
     * added to viewerDiv (mutually exclusive with mainLoop)
     * @param {boolean} [options.renderer.isWebGL2=true] - enable webgl 2.0 for THREE.js.
     * @param {?Scene} [options.scene3D] - [THREE.Scene](https://threejs.org/docs/#api/en/scenes/Scene) instance to use, otherwise a default one will be constructed
     * @param {?Color} options.diffuse - [THREE.Color](https://threejs.org/docs/?q=color#api/en/math/Color) Diffuse color terrain material.
     * This color is applied to terrain if there isn't color layer on terrain extent (by example on pole).
     * @param {boolean} [options.enableFocusOnStart=true] - enable focus on dom element on start.
     *
     * @constructor
     */
    constructor(crs: string, viewerDiv: HTMLElement, options?: any | undefined);
    domElement: HTMLElement;
    referenceCrs: string;
    mainLoop: any;
    scene: any;
    camera: Camera;
    _frameRequesters: {};
    _changeSources: Set<any>;
    isDebugMode: boolean;
    _delayedFrameRequesterRemoval: any[];
    _allLayersAreReadyCallback: () => void;
    /**
     * Dispose viewer before delete it.
     *
     * Method dispose all viewer objects
     * - remove control
     * - remove all layers
     * - remove all frame requester
     * - remove all events
     */
    dispose(): void;
    /**
     * Add layer in viewer.
     * The layer id must be unique.
     *
     * The `layer.whenReady` is a promise that resolves when
     * the layer is done. This promise is also returned by
     * `addLayer` allowing to chain call.
     *
     * @param {LayerOptions|Layer|GeometryLayer} layer The layer to add in view.
     * @param {Layer=} parentLayer it's the layer to which the layer will be attached.
     * @return {Promise} a promise resolved with the new layer object when it is fully initialized or rejected if any error occurred.
     */
    addLayer(layer: LayerOptions | Layer | GeometryLayer, parentLayer?: Layer): Promise<any>;
    /**
     * Removes a specific imagery layer from the current layer list. This removes layers inserted with attach().
     * @example
     * view.removeLayer('layerId');
     * @param      {string}   layerId      The identifier
     * @return     {boolean}
     */
    removeLayer(layerId: string): boolean;
    /**
     * Notifies the scene it needs to be updated due to changes exterior to the
     * scene itself (e.g. camera movement).
     * non-interactive events (e.g: texture loaded)
     * @param {*} changeSource
     * @param {boolean} needsRedraw - indicates if notified change requires a full scene redraw.
     */
    notifyChange(changeSource?: any, needsRedraw?: boolean): void;
    /**
     * Get all layers, with an optionnal filter applied.
     * The filter method will be called with 2 args:
     *   - 1st: current layer
     *   - 2nd: (optional) the geometry layer to which the current layer is attached
     * @example
     * // get all layers
     * view.getLayers();
     * // get all color layers
     * view.getLayers(layer => layer.isColorLayer);
     * // get all elevation layers
     * view.getLayers(layer => layer.isElevationLayer);
     * // get all geometry layers
     * view.getLayers(layer => layer.isGeometryLayer);
     * // get one layer with id
     * view.getLayers(layer => layer.id === 'itt');
     * @param {function(Layer):boolean} filter
     * @returns {Array<Layer>}
     */
    getLayers(filter: (arg0: Layer) => boolean): Array<Layer>;
    /**
     * Gets the layer by identifier.
     *
     * @param {String}  layerId  The layer identifier
     * @return {Layer}  The layer by identifier.
     */
    getLayerById(layerId: string): Layer;
    /**
     * @name FrameRequester
     * @function
     *
     * @description
     * Method that will be called each time the `MainLoop` updates. This function
     * will be given as parameter the delta (in ms) between this update and the
     * previous one, and whether or not we just started to render again. This update
     * is considered as the "next" update if `view.notifyChange` was called during a
     * precedent update. If `view.notifyChange` has been called by something else
     * (other micro/macrotask, UI events etc...), then this update is considered as
     * being the "first". It can also receive optional arguments, depending on the
     * attach point of this function. Currently only `BEFORE_LAYER_UPDATE /
     * AFTER_LAYER_UPDATE` attach points provide an additional argument: the layer
     * being updated.
     * <br><br>
     *
     * This means that if a `frameRequester` function wants to animate something, it
     * should keep on calling `view.notifyChange` until its task is done.
     * <br><br>
     *
     * Implementors of `frameRequester` should keep in mind that this function will
     * be potentially called at each frame, thus care should be given about
     * performance.
     * <br><br>
     *
     * Typical frameRequesters are controls, module wanting to animate moves or UI
     * elements etc... Basically anything that would want to call
     * requestAnimationFrame.
     *
     * @param {number} dt
     * @param {boolean} updateLoopRestarted
     * @param {...*} args
     */
    /**
     * Add a frame requester to this view.
     *
     * FrameRequesters can activate the MainLoop update by calling view.notifyChange.
     *
     * @param {String} when - decide when the frameRequester should be called during
     * the update cycle. Can be any of {@link MAIN_LOOP_EVENTS}.
     * @param {FrameRequester} frameRequester - this function will be called at each
     * MainLoop update with the time delta between last update, or 0 if the MainLoop
     * has just been relaunched.
     */
    addFrameRequester(when: string, frameRequester: FrameRequester): void;
    /**
     * Remove a frameRequester.
     * The effective removal will happen either later; at worst it'll be at
     * the beginning of the next frame.
     *
     * @param {String} when - attach point of this requester. Can be any of
     * {@link MAIN_LOOP_EVENTS}.
     * @param {FrameRequester} frameRequester
     */
    removeFrameRequester(when: string, frameRequester: FrameRequester): void;
    /**
     * Removes all frame requesters.
     */
    removeAllFrameRequesters(): void;
    /**
     * Removes all viewer events.
     */
    removeAllEvents(): void;
    _listeners: any;
    _executeFrameRequestersRemovals(): void;
    /**
     * Execute a frameRequester.
     *
     * @param {String} when - attach point of this (these) requester(s). Can be any
     * of {@link MAIN_LOOP_EVENTS}.
     * @param {Number} dt - delta between this update and the previous one
     * @param {boolean} updateLoopRestarted
     * @param {...*} args - optional arguments
     */
    execFrameRequesters(when: string, dt: number, updateLoopRestarted: boolean, ...args: any[]): void;
    /**
     * Extract view coordinates from a mouse-event / touch-event
     * @param {event} event - event can be a MouseEvent or a TouchEvent
     * @param {THREE.Vector2} target - the target to set the view coords in
     * @param {number} [touchIdx=0] - finger index when using a TouchEvent
     * @return {THREE.Vector2|undefined} - view coordinates (in pixels, 0-0 = top-left of the View).
     * If the event is neither a `MouseEvent` nor a `TouchEvent`, the return is `undefined`.
     */
    eventToViewCoords(event: Event, target?: THREE.Vector2, touchIdx?: number): THREE.Vector2 | undefined;
    /**
     * Extract normalized coordinates (NDC) from a mouse-event / touch-event
     * @param {event} event - event can be a MouseEvent or a TouchEvent
     * @param {number} touchIdx - finger index when using a TouchEvent (default: 0)
     * @return {THREE.Vector2} - NDC coordinates (x and y are [-1, 1])
     */
    eventToNormalizedCoords(event: Event, touchIdx?: number): THREE.Vector2;
    /**
     * Convert view coordinates to normalized coordinates (NDC)
     * @param {THREE.Vector2} viewCoords (in pixels, 0-0 = top-left of the View)
     * @param {THREE.Vector2} target
     * @return {THREE.Vector2} - NDC coordinates (x and y are [-1, 1])
     */
    viewToNormalizedCoords(viewCoords: THREE.Vector2, target?: THREE.Vector2): THREE.Vector2;
    /**
     * Convert NDC coordinates to view coordinates
     * @param {THREE.Vector2} ndcCoords
     * @return {THREE.Vector2} - view coordinates (in pixels, 0-0 = top-left of the View)
     */
    normalizedToViewCoords(ndcCoords: THREE.Vector2): THREE.Vector2;
    /**
     * Searches for objects in {@link GeometryLayer} and specified
     * `THREE.Object3D`, under the mouse or at a specified coordinates, in this
     * view.
     *
     * @param {Object} mouseOrEvt - Mouse position in window coordinates (from
     * the top left corner of the window) or `MouseEvent` or `TouchEvent`.
     * @param {number} [radius=0] - The picking will happen in a circle centered
     * on mouseOrEvt. This is the radius of this circle, in pixels.
     * @param {...GeometryLayer|string|Object3D} [where] - Where to look for
     * objects. It can be anything of {@link GeometryLayer}, IDs of layers, or
     * `THREE.Object3D`. If no location is specified, it will query on all
     * {@link GeometryLayer} present in this `View`.
     *
     * @return {Object[]} - An array of objects. Each element contains at least
     * an object property which is the `THREE.Object3D` under the cursor. Then
     * depending on the queried layer/source, there may be additionnal
     * properties (coming from `THREE.Raycaster` for instance).
     *
     * @example
     * view.pickObjectsAt({ x, y })
     * view.pickObjectsAt({ x, y }, 1, 'wfsBuilding')
     * view.pickObjectsAt({ x, y }, 3, 'wfsBuilding', myLayer)
     */
    pickObjectsAt(mouseOrEvt: any, radius?: number, ...where?: (GeometryLayer | string | Object3D)[]): any[];
    /**
     * Return the current zoom scale at the central point of the view. This
     * function compute the scale of a map.
     *
     * @param {number} pitch - Screen pitch, in millimeters ; 0.28 by default
     *
     * @return {number} The zoom scale.
     */
    getScale(pitch?: number): number;
    getScaleFromDistance(pitch?: number, distance?: number): number;
    /**
     * Given a screen coordinates, get the distance between the projected
     * coordinates and the camera associated to this view.
     *
     * @param {THREE.Vector2} [screenCoord] - The screen coordinate to get the
     * distance at. By default this is the middle of the screen.
     *
     * @return {number} The distance in meters.
     */
    getDistanceFromCamera(screenCoord?: THREE.Vector2): number;
    /**
     * Get, for a specific screen coordinate, the projected distance on the
     * surface of the main layer of the view.
     *
     * @param {number} [pixels=1] - The size, in pixels, to get in meters.
     * @param {THREE.Vector2} [screenCoord] - The screen coordinate to get the
     * projected distance at. By default, this is the middle of the screen.
     *
     * @return {number} The projected distance in meters.
     */
    getPixelsToMeters(pixels?: number, screenCoord?: THREE.Vector2): number;
    getPixelsToMetersFromDistance(pixels?: number, distance?: number): number;
    /**
     * Get, for a specific screen coordinate, the size in pixels of a projected
     * distance on the surface of the main layer of the view.
     *
     * @param {number} [meters=1] - The size, in meters, to get in pixels.
     * @param {THREE.Vector2} [screenCoord] - The screen coordinate to get the
     * projected distance at. By default, this is the middle of the screen.
     *
     * @return {number} The projected distance in pixels.
     */
    getMetersToPixels(meters?: number, screenCoord?: THREE.Vector2): number;
    getMetersToPixelsFromDistance(meters?: number, distance?: number): number;
    /**
     * Searches for {@link Feature} in {@link ColorLayer}, under the mouse of at
     * a specified coordinates, in this view.
     *
     * @param {Object} mouseOrEvt - Mouse position in window coordinates (from
     * the top left corner of the window) or `MouseEvent` or `TouchEvent`.
     * @param {number} [radius=3] - The picking will happen in a circle centered
     * on mouseOrEvt. This is the radius of this circle, in pixels.
     * @param {...ColorLayer|GeometryLayer|string} [where] - The layers to look
     * into. If not specified, all {@link ColorLayer} and {@link GeometryLayer}
     * layers of this view will be looked in.
     *
     * @return {Object} - An object, with a property per layer. For example,
     * looking for features on layers `wfsBuilding` and `wfsRoads` will give an
     * object like `{ wfsBuilding: [...], wfsRoads: [] }`. Each property is made
     * of an array, that can be empty or filled with found features.
     *
     * @example
     * view.pickFeaturesAt({ x, y });
     * view.pickFeaturesAt({ x, y }, 1, 'wfsBuilding');
     * view.pickFeaturesAt({ x, y }, 3, 'wfsBuilding', myLayer);
     */
    pickFeaturesAt(mouseOrEvt: any, radius?: number, ...where?: (ColorLayer | GeometryLayer | string)[]): any;
    readDepthBuffer(x: any, y: any, width: any, height: any, buffer: any): any;
    /**
     * Returns the world position (view's crs: referenceCrs) under view coordinates.
     * This position is computed with depth buffer.
     *
     * @param      {THREE.Vector2}  mouse  position in view coordinates (in pixel), if it's null so it's view's center.
     * @param      {THREE.Vector3}  [target=THREE.Vector3()] target. the result will be copied into this Vector3. If not present a new one will be created.
     * @return     {THREE.Vector3}  the world position in view's crs: referenceCrs.
     */
    getPickingPositionFromDepth(mouse: THREE.Vector2, target?: THREE.Vector3): THREE.Vector3;
    /**
     * Returns the world {@link Coordinates} at given view coordinates.
     *
     * @param   {THREE.Vector2|event}   [mouse]     The view coordinates at which the world coordinates must be
                                                    * returned. This parameter can also be set to a mouse event from
                                                    * which the view coordinates will be deducted. If not specified, it
                                                    * will be defaulted to the view's center coordinates.
     * @param   {Coordinates}           [target]    The result will be copied into this {@link Coordinates}. If not
                                                    * specified, a new {@link Coordinates} instance will be created.
     *
     * @returns {Coordinates}   The world {@link Coordinates} at the given view coordinates.
     */
    pickCoordinates(mouse?: THREE.Vector2 | Event, target?: Coordinates): Coordinates;
    /**
     * Resize the viewer.
     *
     * @param {number} [width=viewerDiv.clientWidth] - The width to resize the
     * viewer with. By default it is the `clientWidth` of the `viewerDiv`.
     * @param {number} [height=viewerDiv.clientHeight] - The height to resize
     * the viewer with. By default it is the `clientHeight` of the `viewerDiv`.
     */
    resize(width?: number, height?: number): void;
    #private;
}
import * as THREE from "three";
import Camera from "Renderer/Camera";
import Coordinates from "Core/Geographic/Coordinates";
//# sourceMappingURL=View.d.ts.map