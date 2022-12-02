export namespace FEATURE_TYPES {
    const POINT: number;
    const LINE: number;
    const POLYGON: number;
}
/**
 * @property {string} crs - The CRS to convert the input coordinates to.
 * @property {string} [structure='2d'] - data structure type : 2d or 3d.
 * If the structure is 3d, the feature have 3 dimensions by vertices positions and
 * a normal for each vertices.
 * @property {Extent|boolean} [filteringExtent=undefined] - Optional filter to reject
 * features outside of extent. Extent filtering is file extent if filteringExtent is true.
 * @property {boolean} [buildExtent] - If true the geometry will
 * have an extent property containing the area covered by the geometry.
 * Default value is false if `structure` parameter is set to '3d', and true otherwise.
 * True if the layer does not inherit from {@link GeometryLayer}.
 * @property {string} forcedExtentCrs - force feature extent crs if buildExtent is true.
 * @property {function} [filter] - Filter function to remove features
 * @property {boolean} [mergeFeatures=true] - If true all geometries are merged by type and multi-type.
 * @property {Style} style - The style to inherit when creating
 * style for all new features.
 *
*/
export class FeatureBuildingOptions {
}
/**
 * @property {Extent} extent - The 2D extent containing all the points
 * composing the geometry.
 * @property {Object[]} indices - Contains the indices that define the geometry.
 * Objects stored in this array have two properties, an `offset` and a `count`.
 * The offset is related to the overall number of vertices in the Feature.
 *
 * @property {Object} properties - Properties of the geometry. It can be
 * anything specified in the GeoJSON under the `properties` property.
 */
export class FeatureGeometry {
    /**
     * @param {Feature} feature geometry
     */
    constructor(feature: Feature);
    indices: any[];
    properties: {};
    size: number;
    extent: Extent;
    altitude: {
        min: number;
        max: number;
    };
    /**
     * Add a new marker to indicate the starting of sub geometry and extends the vertices buffer.
     * Then you have to push new the coordinates of sub geometry.
     * The sub geometry stored in indices, see constructor for more information.
     * @param {number} count - count of vertices
     * @param {Feature} feature - the feature containing the geometry
     */
    startSubGeometry(count: number, feature: Feature): void;
    /**
     * After you have pushed new the coordinates of sub geometry without
     * `startSubGeometry`, this function close sub geometry. The sub geometry
     * stored in indices, see constructor for more information.
     * @param {number} count count of vertices
     * @param {Feature} feature - the feature containing the geometry
     */
    closeSubGeometry(count: number, feature: Feature): void;
    getLastSubGeometry(): any;
    baseAltitude(feature: any, coordinates: any): any;
    /**
     * Push new coordinates in vertices buffer.
     * @param {Coordinates} coordIn The coordinates to push.
     * @param {Feature} feature - the feature containing the geometry
     */
    pushCoordinates(coordIn: Coordinates, feature: Feature): void;
    /**
     * Push new values coordinates in vertices buffer.
     * No geographical conversion is made or the normal doesn't stored.
     * No local transformation is made on coordinates.
     *
     * @param {Feature} feature - the feature containing the geometry
     * @param {number} long The longitude coordinate.
     * @param {number} lat The latitude coordinate.
     * @param {THREE.Vector3} [normal] the normal on coordinates (only for `EPSG:4978` projection).
     */
    pushCoordinatesValues(feature: Feature, long: number, lat: number, normal?: THREE.Vector3): void;
    /**
     * update geometry extent with the last sub geometry extent.
     */
    updateExtent(): void;
    #private;
}
export default Feature;
/**
 * An object regrouping a list of [features]{@link Feature} and the extent of this collection.
 * **Warning**, the data (`extent` or `Coordinates`) can be stored in a local system.
 * The local system center is the `center` property.
 * To use `Feature` vertices or `FeatureCollection/Feature` extent in FeatureCollection.crs projection,
 * it's necessary to transform `Coordinates` or `Extent` by `FeatureCollection.matrixWorld`.
 *
 * ```js
 * // To have featureCollection extent in featureCollection.crs projection:
 * featureCollection.extent.applyMatrix4(featureCollection.matrixWorld);
 *
 * // To have feature vertex in featureCollection.crs projection:
 * const vertices = featureCollection.features[0].vertices;
 * coord.crs = featureCollection.crs;
 * coord.setFromArray(vertices)
 * coord.applyMatrix4(featureCollection.matrixWorld);
 *```
 *
 * @extends THREE.Object3D
 *
 * @property {Feature[]} features - The array of features composing the
 * collection.
 * @property {Extent?} extent - The 2D extent containing all the features
 * composing the collection. The extent projection is the same local projection `FeatureCollection`.
 * To transform `FeatureCollection.extent` to `FeatureCollection.crs` projection, the transformation matrix must be applied.
 *
 * **WARNING** if crs is `EPSG:4978` because the 3d geocentric system doesn't work with 2D `Extent`,
 * The FeatureCollection.extent projection is the original projection.
 * In this case, there isn't need to transform the extent.
 *
 * @property {string} crs - Geographic or Geocentric coordinates system.
 * @property {boolean} isFeatureCollection - Used to check whether this is FeatureCollection.
 * @property {number} size - The size structure, it's 3 for 3d and 2 for 2d.
 * @property {Style} style - The collection style used to display the feature collection.
 * @property {boolean} isInverted - This option is to be set to the
 * correct value, true or false (default being false), if the computation of
 * the coordinates needs to be inverted to same scheme as OSM, Google Maps
 * or other system. See [this link]{@link
 * https://alastaira.wordpress.com/2011/07/06/converting-tms-tile-coordinates-to-googlebingosm-tile-coordinates}
 * for more informations.
 * @property {THREE.Matrix4} matrixWorldInverse - The matrix world inverse.
 * @property {Coordinates} center - The local center coordinates in `EPSG:4326`.
 * The local system is centred in this center.
 *
 */
export class FeatureCollection extends THREE.Object3D<THREE.Event> {
    /**
     * @param      {FeatureBuildingOptions|Layer}  options  The building options .
     */
    constructor(options: FeatureBuildingOptions | Layer);
    isFeatureCollection: boolean;
    crs: any;
    features: any[];
    mergeFeatures: any;
    size: number;
    filterExtent: any;
    style: any;
    isInverted: boolean;
    matrixWorldInverse: THREE.Matrix4;
    center: Coordinates;
    extent: Extent;
    normalMatrixInverse: THREE.Matrix3;
    altitude: {
        min: number;
        max: number;
    };
    /**
     * Apply the matrix World inverse on the coordinates.
     * This method is used when the coordinates is pushed
     * to transform it in local system.
     *
     * @param   {Coordinates}  coordinates  The coordinates
     * @returns {Coordinates} The coordinates in local system
     */
    transformToLocalSystem(coordinates: Coordinates): Coordinates;
    /**
     * Update FeatureCollection extent with `extent` or all features extent if
     * `extent` is `undefined`.
     * @param {Extent} extent
     */
    updateExtent(extent: Extent): void;
    /**
     * Updates the global transform of the object and its descendants.
     *
     * @param {booolean}  force   The force
     */
    updateMatrixWorld(force: booolean): void;
    /**
     * Remove features that don't have [FeatureGeometry]{@link FeatureGeometry}.
     */
    removeEmptyFeature(): void;
    /**
     * Push the `feature` in FeatureCollection.
     * @param {Feature} feature
     */
    pushFeature(feature: Feature): void;
    requestFeature(type: any, callback: any): any;
    /**
     * Returns the Feature by type if `mergeFeatures` is `true` or returns the
     * new instance of typed Feature.
     *
     * @param {string} type the type requested
     * @returns {Feature}
     */
    requestFeatureByType(type: string): Feature;
    /**
     * Returns the Feature by type if `mergeFeatures` is `true` or returns the
     * new instance of typed Feature.
     *
     * @param {string} id the id requested
     * @param {string} type the type requested
     * @returns {Feature}
     */
    requestFeatureById(id: string, type: string): Feature;
    /**
     * Add a new feature with references to all properties.
     * It allows to have features with different styles
     * without having to duplicate the geometry.
     * @param      {Feature}   feature  The feature to reference.
     * @return     {Feature}  The new referenced feature
     */
    newFeatureByReference(feature: Feature): Feature;
    setParentStyle(style: any): void;
    #private;
}
import Extent from "Core/Geographic/Extent";
/**
 *
 * This class improves and simplifies the construction and conversion of geographic data structures.
 * It's an intermediary structure between geomatic formats and THREE objects.
 *
 * **Warning**, the data (`extent` or `Coordinates`) can be stored in a local system.
 * To use vertices or extent in `Feature.crs` projection,
 * it's necessary to transform `Coordinates` or `Extent` by `FeatureCollection.matrixWorld`.
 *
 * ```js
 * // To have feature extent in featureCollection.crs projection:
 * feature.extent.applyMatrix4(featureCollection.matrixWorld);
 *
 * // To have feature vertex in feature.crs projection:
 * coord.crs = feature.crs;
 * coord.setFromArray(feature.vertices)
 * coord.applyMatrix4(featureCollection.matrixWorld);
 *```
 *
 * @property {string} type - Geometry type, can be `point`, `line`, or
 * `polygon`.
 * @property {number[]} vertices - All the vertices of the Feature.
 * @property {number[]} normals - All the normals of the Feature.
 * @property {number} size - the number of values of the array that should be associated with a coordinates.
 * The size is 3 with altitude and 2 without altitude.
 * @property {string} crs - Geographic or Geocentric coordinates system.
 * @property {FeatureGeometry[]} geometries - An array containing all {@link
 * FeatureGeometry}.
 * @property {Extent?} extent - The extent containing all the geometries
 * composing the feature.
 */
declare class Feature {
    /**
     *
     * @param {string} type type of Feature. It can be 'point', 'line' or 'polygon'.
     * @param {FeatureCollection} collection Parent feature collection.
     */
    constructor(type: string, collection: FeatureCollection);
    type: string;
    geometries: any[];
    vertices: any[];
    crs: any;
    size: number;
    normals: any[];
    transformToLocalSystem: any;
    extent: Extent;
    useCrsOut: boolean;
    _pos: number;
    _pushValues: any;
    style: Style;
    altitude: {
        min: number;
        max: number;
    };
    /**
     * Instance a new {@link FeatureGeometry}  and push in {@link Feature}.
     * @returns {FeatureGeometry} the instancied geometry.
     */
    bindNewGeometry(): FeatureGeometry;
    /**
     * Update {@link Extent} feature with {@link Extent} geometry
     * @param {FeatureGeometry} geometry used to update Feature {@link Extent}
     */
    updateExtent(geometry: FeatureGeometry): void;
    /**
     * @returns {number} the count of geometry.
     */
    get geometryCount(): number;
}
import Coordinates from "Core/Geographic/Coordinates";
import * as THREE from "three";
import Style from "Core/Style";
//# sourceMappingURL=Feature.d.ts.map