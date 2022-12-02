export default OBB;
declare class OBB extends THREE.Object3D<THREE.Event> {
    /**
     * Oriented bounding box
     * @constructor
     * @extends THREE.Object3D
     * @param {THREE.Vector3}  min representing the lower (x, y, z) boundary of the box. Default is ( + Infinity, + Infinity, + Infinity ).
     * @param {THREE.Vector3}  max representing the lower upper (x, y, z) boundary of the box. Default is ( - Infinity, - Infinity, - Infinity ).
     */
    constructor(min?: THREE.Vector3, max?: THREE.Vector3);
    box3D: THREE.Box3;
    natBox: THREE.Box3;
    z: {
        min: number;
        max: number;
        scale: number;
    };
    /**
     * Creates a new instance of the object with same properties than original.
     *
     * @return     {OBB}  Copy of this object.
     */
    clone(): OBB;
    /**
     * Copy the property of OBB
     *
     * @param      {OBB}  cOBB OBB to copy
     * @return     {OBB}  the copy
     */
    copy(cOBB: OBB): OBB;
    /**
     * Update the top point world
     *
     */
    update(): void;
    /**
     * Update z min, z max and z scale of oriented bounding box
     *
     * @param {Object}  [elevation={}]
     * @param {number}  [elevation.min]             The minimum of oriented bounding box
     * @param {number}  [elevation.max]             The maximum of oriented bounding box
     * @param {number}  [elevation.scale]           The scale of oriented bounding box Z axis
     * @param {number}  [elevation.geoidHeight]     The geoid height added to ellipsoid.
     */
    updateZ(elevation?: {
        min?: number;
        max?: number;
        scale?: number;
        geoidHeight?: number;
    }): void;
    /**
     * Determines if the sphere is above the XY space of the box
     *
     * @param      {Sphere}   sphere  The sphere
     * @return     {boolean}  True if sphere is above the XY space of the box, False otherwise.
     */
    isSphereAboveXYBox(sphere: Sphere): boolean;
    /**
     * Compute OBB from extent.
     * The OBB resulted can be only in the system 'EPSG:3946'.
     *
     * @param      {Extent}        extent     The extent (with crs 'EPSG:4326') to compute oriented bounding box
     * @param      {number}        minHeight  The minimum height of OBB
     * @param      {number}        maxHeight  The maximum height of OBB
     * @return     {OBB}           return this object
     */
    setFromExtent(extent: Extent, minHeight?: number, maxHeight?: number): OBB;
}
import * as THREE from "three";
//# sourceMappingURL=OBB.d.ts.map