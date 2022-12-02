export default Coordinates;
/**
 * A Coordinates object, defined by a [crs]{@link http://inspire.ec.europa.eu/theme/rs}
 * and three values. These values are accessible through `x`, `y` and `z`,
 * although it can also be accessible through `latitude`, `longitude` and
 * `altitude`. To change a value, prefer the `set()` method below.
 *
 * @property {boolean} isCoordinates - Used to checkout whether this coordinates
 * is a Coordinates. Default is true. You should not change this, as it is used
 * internally for optimisation.
 * @property {string} crs - A supported crs by default in
 * [`proj4js`](https://github.com/proj4js/proj4js#named-projections), or an
 * added crs to `proj4js` (using `proj4.defs`). Note that `EPSG:4978` is also
 * supported by default in itowns.
 * @property {number} x - The first value of the coordinate.
 * @property {number} y - The second value of the coordinate.
 * @property {number} z - The third value of the coordinate.
 * @property {number} latitude - The first value of the coordinate.
 * @property {number} longitude - The second value of the coordinate.
 * @property {number} altitude - The third value of the coordinate.
 * @property {THREE.Vector3} geodesicNormal - The geodesic normal of the
 * coordinate.
 *
 * @example
 * new Coordinates('EPSG:4978', 20885167, 849862, 23385912); //Geocentric coordinates
 *
 * @example
 * new Coordinates('EPSG:4326', 2.33, 48.24, 24999549); //Geographic coordinates
 */
declare class Coordinates {
    /**
     * @constructor
     *
     * @param {string} crs - A supported crs (see the `crs` property below).
     * @param {number|Array<number>|Coordinates|THREE.Vector3} [v0=0] -
     * x or longitude value, or a more complex one: it can be an array of three
     * numbers, being x/lon, x/lat, z/alt, or it can be `THREE.Vector3`. It can
     * also simply be a Coordinates.
     * @param {number} [v1=0] - y or latitude value.
     * @param {number} [v2=0] - z or altitude value.
     */
    constructor(crs: string, v0?: number | Array<number> | Coordinates | THREE.Vector3, v1?: number, v2?: number);
    isCoordinates: boolean;
    crs: string;
    x: number;
    y: number;
    z: number;
    _normal: THREE.Vector3;
    _normalNeedsUpdate: boolean;
    /**
     * Set the values of this Coordinates.
     *
     * @param {number} [v0=0] - x or longitude value.
     * @param {number} [v1=0] - y or latitude value.
     * @param {number} [v2=0] - z or altitude value.
     *
     * @return {Coordinates} This Coordinates.
     */
    setFromValues(v0?: number, v1?: number, v2?: number): Coordinates;
    /**
     * Set the values of this Coordinates from an array.
     *
     * @param {Array<number>} array - An array of number to assign to the
     * Coordinates.
     * @param {number} [offset] - Optional offset into the array.
     *
     * @return {Coordinates} This Coordinates.
     */
    setFromArray(array: Array<number>, offset?: number): Coordinates;
    /**
     * Set the values of this Coordinates from a `THREE.Vector3` or an `Object`
     * having `x/y/z` properties, like a `Coordinates`.
     *
     * @param {THREE.Vector3|Coordinates} v0 - The object to read the values
     * from.
     *
     * @return {Coordinates} This Coordinates.
     */
    setFromVector3(v0: THREE.Vector3 | Coordinates): Coordinates;
    /**
     * Returns a new Coordinates with the same values as this one. It will
     * instantiate a new Coordinates with the same CRS as this one.
     *
     * @return {Coordinates} The target with its new coordinates.
     */
    clone(): Coordinates;
    /**
     * Copies the values of the passed Coordinates to this one. The CRS is
     * however not copied.
     *
     * @param {Coordinates} src - The source to copy from.
     *
     * @return {Coordinates} This Coordinates.
     */
    copy(src: Coordinates): Coordinates;
    get longitude(): number;
    get latitude(): number;
    set altitude(arg: number);
    get altitude(): number;
    get geodesicNormal(): THREE.Vector3;
    /**
     * Return this Coordinates values into a `THREE.Vector3`.
     *
     * @param {THREE.Vector3} [target] - The target to put the values in. If not
     * specified, a new vector will be created.
     *
     * @return {THREE.Vector3}
     */
    toVector3(target?: THREE.Vector3): THREE.Vector3;
    /**
     * Calculate planar distance between this coordinates and `coord`.
     * Planar distance is the straight-line euclidean distance calculated in a 2D cartesian coordinate system.
     *
     * @param  {Coordinates}  coord  The coordinate
     * @return {number} planar distance
     *
     */
    planarDistanceTo(coord: Coordinates): number;
    /**
     * Calculate geodetic distance between this coordinates and `coord`.
     * **Geodetic distance** is calculated in an ellispoid space as the shortest distance
     * across the curved surface of the world.
     *
     * => As the crow flies/ Orthodromy
     *
     * @param  {Coordinates}  coord  The coordinate
     * @return {number} geodetic distance
     *
     */
    geodeticDistanceTo(coord: Coordinates): number;
    /**
     * Calculate earth euclidean distance between this coordinates and `coord`.
     *
     * @param  {Coordinates}  coord  The coordinate
     * @return {number} earth euclidean distance
     *
     */
    spatialEuclideanDistanceTo(coord: Coordinates): number;
    /**
     * Multiplies this `coordinates` (with an implicit 1 in the 4th dimension) and `mat`.
     *
     * @param      {THREE.Matrix4}  mat The matrix.
     * @return     {Coordinates}  return this object.
     */
    applyMatrix4(mat: THREE.Matrix4): Coordinates;
    /**
     * Returns coordinates in the wanted [CRS]{@link http://inspire.ec.europa.eu/theme/rs}.
     *
     * @param {string} crs - The CRS to convert the Coordinates into.
     * @param {Coordinates} [target] - The target to put the converted
     * Coordinates into. If not specified a new one will be created.
     *
     * @return {Coordinates} - The resulting Coordinates after the conversion.
     *
     * @example
     * const position = { longitude: 2.33, latitude: 48.24, altitude: 24999549 };
     * const coords = new Coordinates('EPSG:4326', position.longitude, position.latitude, position.altitude); // Geographic system
     * const coordinates = coords.as('EPSG:4978'); // Geocentric system
     *
     * @example
     * const position = { x: 20885167, y: 849862, z: 23385912 };
     * const coords = new Coordinates('EPSG:4978', position.x, position.y, position.z);  // Geocentric system
     * const coordinates = coords.as('EPSG:4326');  // Geographic system
     *
     * @example
     * new Coordinates('EPSG:4326', longitude: 2.33, latitude: 48.24, altitude: 24999549).as('EPSG:4978'); // Geocentric system
     *
     * @example
     * new Coordinates('EPSG:4978', x: 20885167, y: 849862, z: 23385912).as('EPSG:4326'); // Geographic system
     */
    as(crs: string, target?: Coordinates): Coordinates;
}
import * as THREE from "three";
//# sourceMappingURL=Coordinates.d.ts.map