/** @type {Map<string, Extent>} */
export const globalExtentTMS: Map<string, Extent>;
export const schemeTiles: Map<any, any>;
export default Extent;
declare class Extent {
    /**
     * Instance Extent with THREE.Box3.
     *
     * If crs is a geocentric projection, the `box3.min` and `box3.max`
     * should be the geocentric coordinates of `min` and `max` of a `box3`
     * in local tangent plane.
     *
     * @param {string} crs Projection of extent to instancied.
     * @param {THREE.Box3} box
     * @return {Extent}
     */
    static fromBox3(crs: string, box: THREE.Box3): Extent;
    /**
     * Extent is geographical bounding rectangle defined by 4 limits: west, east, south and north.
     * If crs is tiled projection (WMTS or TMS), the extent is defined by zoom, row and column.
     *
     * Warning, using geocentric projection isn't consistent with geographical extent.
     *
     * @param {String} crs projection of limit values.
     * @param {number|Array.<number>|Coordinates|Object} v0 west value, zoom
     * value, Array of values [west, east, south and north], Coordinates of
     * west-south corner or object {west, east, south and north}
     * @param {number|Coordinates} [v1] east value, row value or Coordinates of
     * east-north corner
     * @param {number} [v2] south value or column value
     * @param {number} [v3] north value
     */
    constructor(crs: string, v0: number | Array<number> | Coordinates | any, v1?: number | Coordinates, v2?: number, v3?: number);
    isExtent: boolean;
    crs: string;
    zoom: number;
    row: number;
    col: number;
    west: number;
    east: number;
    south: number;
    north: number;
    /**
     * Clone this extent
     * @return {Extent} cloned extent
     */
    clone(): Extent;
    /**
     * get tiled extents convering this extent
     *
     * @param      {string}  crs WMTS, TMS crs
     * @return     {Array<Extent>}   array of extents covering
     */
    tiledCovering(crs: string): Array<Extent>;
    /**
     * Convert Extent to the specified projection.
     * @param {string} crs the projection of destination.
     * @param {Extent} target copy the destination to target.
     * @return {Extent}
     */
    as(crs: string, target: Extent): Extent;
    /**
     * Return the center of Extent
     * @param {Coordinates} target copy the center to the target.
     * @return {Coordinates}
     */
    center(target?: Coordinates): Coordinates;
    /**
    * Returns the dimension of the extent, in a `THREE.Vector2`.
    *
    * @param {THREE.Vector2} [target] - The target to assign the result in.
    *
    * @return {THREE.Vector2}
    */
    dimensions(target?: THREE.Vector2): THREE.Vector2;
    /**
     *  Planar dimensions are two planar distances west/east and south/north.
     *  Planar distance straight-line Euclidean distance calculated in a 2D Cartesian coordinate system.
     *
     * @param      {THREE.Vector2}  [target=new THREE.Vector2()]  The target
     * @return     {THREE.Vector2}  Planar dimensions
     */
    planarDimensions(target?: THREE.Vector2): THREE.Vector2;
    /**
     *  Geodetic dimensions are two planar distances west/east and south/north.
     *  Geodetic distance is calculated in an ellispoid space as the distance
     *  across the curved surface of the world.
     *
     * @param      {THREE.Vector2}  [target=new THREE.Vector2()]  The target
     * @return     {THREE.Vector2}  geodetic dimensions
     */
    geodeticDimensions(target?: THREE.Vector2): THREE.Vector2;
    /**
     *  Spatial euclidean dimensions are two spatial euclidean distances between west/east corner and south/north corner.
     *  Spatial euclidean distance chord is calculated in a ellispoid space.
     *
     * @param      {THREE.Vector2}  [target=new THREE.Vector2()]  The target
     * @return     {THREE.Vector2}  spatial euclidean dimensions
     */
    spatialEuclideanDimensions(target?: THREE.Vector2): THREE.Vector2;
    /**
     * Return true if `coord` is inside the bounding box.
     *
     * @param {Coordinates} coord
     * @param {number} [epsilon=0] - to take into account when comparing to the
     * point.
     *
     * @return {boolean}
     */
    isPointInside(coord: Coordinates, epsilon?: number): boolean;
    /**
     * Return true if `extent` is inside this extent.
     *
     * @param {Extent} extent the extent to check
     * @param {number} epsilon to take into account when comparing to the
     * point.
     *
     * @return {boolean}
     */
    isInside(extent: Extent, epsilon: number): boolean;
    /**
     * Return the translation and scale to transform this extent to input extent.
     *
     * @param {Extent} extent input extent
     * @param {THREE.Vector4} target copy the result to target.
     * @return {THREE.Vector4} {x: translation on west-east, y: translation on south-north, z: scale on west-east, w: scale on south-north}
     */
    offsetToParent(extent: Extent, target?: THREE.Vector4): THREE.Vector4;
    /**
     * Return parent tiled extent with input level
     *
     * @param {number} levelParent level of parent.
     * @return {Extent}
     */
    tiledExtentParent(levelParent: number): Extent;
    /**
     * Return true if this bounding box intersect with the bouding box parameter
     * @param {Extent} extent
     * @returns {Boolean}
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Return the intersection of this extent with another one
     * @param {Extent} extent
     * @returns {Boolean}
     */
    intersect(extent: Extent): boolean;
    /**
     * Set west, east, south and north values.
     * Or if tiled extent, set zoom, row and column values
     *
     * @param {number|Array.<number>|Coordinates|Object|Extent} v0 west value,
     * zoom value, Array of values [west, east, south and north], Extent of same
     * type (tiled or not), Coordinates of west-south corner or object {west,
     * east, south and north}
     * @param {number|Coordinates} [v1] east value, row value or Coordinates of
     * east-north corner
     * @param {number} [v2] south value or column value
     * @param {number} [v3] north value
     *
     * @return {Extent}
     */
    set(v0: number | Array<number> | Coordinates | any | Extent, v1?: number | Coordinates, v2?: number, v3?: number): Extent;
    /**
     * Copy to this extent to input extent.
     * @param {Extent} extent
     * @return {Extent} copied extent
     */
    copy(extent: Extent): Extent;
    /**
     * Union this extent with the input extent.
     * @param {Extent} extent the extent to union.
     */
    union(extent: Extent): void;
    /**
     * expandByCoordinates perfoms the minimal extension
     * for the coordinates to belong to this Extent object
     * @param {Coordinates} coordinates  The coordinates to belong
     */
    expandByCoordinates(coordinates: Coordinates): void;
    /**
    * expandByValuesCoordinates perfoms the minimal extension
    * for the coordinates values to belong to this Extent object
    * @param {number} we  The coordinate on west-east
    * @param {number} sn  The coordinate on south-north
    *
    */
    expandByValuesCoordinates(we: number, sn: number): void;
    /**
     * Return values of extent in string, separated by the separator input.
     * @param {string} separator
     * @return {string}
     */
    toString(separator?: string): string;
    /**
     * Subdivide equally an extent from its center to return four extents:
     * north-west, north-east, south-west and south-east.
     *
     * @returns {Extent[]} An array containing the four sections of the extent. The
     * order of the sections is [NW, NE, SW, SE].
     */
    subdivision(): Extent[];
    /**
     * subdivise extent by scheme.x on west-east and scheme.y on south-north.
     *
     * @param      {Vector2}  [scheme=Vector2(2,2)]  The scheme to subdivise.
     * @return     {Array<Extent>}   subdivised extents.
     */
    subdivisionByScheme(scheme?: Vector2): Array<Extent>;
    /**
     * Multiplies all extent `coordinates` (with an implicit 1 in the 4th dimension) and `matrix`.
     *
     * @param      {THREE.Matrix4}  matrix  The matrix
     * @return     {Extent}  return this extent instance.
     */
    applyMatrix4(matrix: THREE.Matrix4): Extent;
    /**
     * clamp south and north values
     *
     * @param      {number}  [south=this.south]  The min south
     * @param      {number}  [north=this.north]  The max north
     * @return     {Extent}  this extent
     */
    clampSouthNorth(south?: number, north?: number): Extent;
    /**
     * clamp west and east values
     *
     * @param      {number}  [west=this.west]  The min west
     * @param      {number}  [east=this.east]  The max east
     * @return     {Extent}  this extent
     */
    clampWestEast(west?: number, east?: number): Extent;
    /**
     * clamp this extent by passed extent
     *
     * @param      {Extent}  extent  The maximum extent.
     * @return     {Extent}  this extent.
     */
    clampByExtent(extent: Extent): Extent;
}
import Coordinates from "Core/Geographic/Coordinates";
import * as THREE from "three";
//# sourceMappingURL=Extent.d.ts.map