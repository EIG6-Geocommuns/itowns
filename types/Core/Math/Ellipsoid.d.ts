export const ellipsoidSizes: THREE.Vector3;
export default Ellipsoid;
import * as THREE from "three";
declare class Ellipsoid {
    constructor(size?: THREE.Vector3);
    size: THREE.Vector3;
    _radiiSquared: THREE.Vector3;
    _invRadiiSquared: THREE.Vector3;
    eccentricity: number;
    geodeticSurfaceNormal(cartesian: any, target?: THREE.Vector3): any;
    geodeticSurfaceNormalCartographic(coordCarto: any, target?: THREE.Vector3): THREE.Vector3;
    setSize(size: any): void;
    cartographicToCartesian(coordCarto: any, target?: THREE.Vector3): THREE.Vector3;
    /**
     * Convert cartesian coordinates to geographic according to the current ellipsoid of revolution.
     * @param {Object} position - The coordinate to convert
     * @param {number} position.x
     * @param {number} position.y
     * @param {number} position.z
     * @param {Coordinates} [target] coordinate to copy result
     * @returns {Coordinates} an object describing the coordinates on the reference ellipsoid, angles are in degree
     */
    cartesianToCartographic(position: {
        x: number;
        y: number;
        z: number;
    }, target?: Coordinates): Coordinates;
    cartographicToCartesianArray(coordCartoArray: any): THREE.Vector3[];
    intersection(ray: any): false | THREE.Vector3;
    computeDistance(coordCarto1: any, coordCarto2: any): void;
    /**
     * Calculate the geodesic distance, between coordCarto1 and coordCarto2.
     * It's most short distance on ellipsoid surface between coordCarto1 and coordCarto2.
     * It's called orthodromy.
     *
     * @param      {Coordinates}  coordCarto1  The coordinate carto 1
     * @param      {Coordinates}  coordCarto2  The coordinate carto 2
     * @return     {number}  The orthodromic distance between the two given coordinates.
     */
    geodesicDistance(coordCarto1: Coordinates, coordCarto2: Coordinates): number;
}
import Coordinates from "Core/Geographic/Coordinates";
//# sourceMappingURL=Ellipsoid.d.ts.map