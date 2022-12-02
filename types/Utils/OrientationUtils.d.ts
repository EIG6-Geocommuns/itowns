declare namespace _default {
    /**
     * @typedef {Object} Attitude
     * Properties are either defined as (omega, phi, kappa) or as (roll, pitch,
     * heading) or all `undefined`.
     *
     * @property {number} omega - angle in degrees
     * @property {number} phi - angle in degrees
     * @property {number} kappa - angle in degrees
     * @property {number} roll - angle in degrees
     * @property {number} pitch - angle in degrees
     * @property {number} heading - angle in degrees
     */
    /**
     * The transform from the platform frame to the local East, North, Up (ENU)
     * frame is `RotationZ(heading).RotationX(pitch).RotationY(roll)`
     *
     * @param {number} [roll=0] - angle in degrees
     * @param {number} [pitch=0] - angle in degrees
     * @param {number} [heading=0] - angle in degrees
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] - output Quaternion
     *
     * @return {THREE.Quaternion} target quaternion
     */
    function quaternionFromRollPitchHeading(roll?: number, pitch?: number, heading?: number, target?: THREE.Quaternion): THREE.Quaternion;
    /**
     * @typedef {Object} Attitude
     * Properties are either defined as (omega, phi, kappa) or as (roll, pitch,
     * heading) or all `undefined`.
     *
     * @property {number} omega - angle in degrees
     * @property {number} phi - angle in degrees
     * @property {number} kappa - angle in degrees
     * @property {number} roll - angle in degrees
     * @property {number} pitch - angle in degrees
     * @property {number} heading - angle in degrees
     */
    /**
     * The transform from the platform frame to the local East, North, Up (ENU)
     * frame is `RotationZ(heading).RotationX(pitch).RotationY(roll)`
     *
     * @param {number} [roll=0] - angle in degrees
     * @param {number} [pitch=0] - angle in degrees
     * @param {number} [heading=0] - angle in degrees
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] - output Quaternion
     *
     * @return {THREE.Quaternion} target quaternion
     */
    function quaternionFromRollPitchHeading(roll?: number, pitch?: number, heading?: number, target?: THREE.Quaternion): THREE.Quaternion;
    /**
     * From
     * [DocMicMac](https://github.com/micmacIGN/Documentation/raw/master/DocMicMac.pdf),
     * the transform from the platform frame to the local East, North, Up (ENU)
     * frame is:
     *
     * ```
     * RotationX(omega).RotationY(phi).RotationZ(kappa).RotationX(PI)
     * RotationX(PI) <=> Quaternion(1,0,0,0) : converts between the 2 conventions for the camera local frame:
     * X right, Y bottom, Z front : convention in photogrammetry and computer vision
     * X right, Y top,    Z back  : convention in webGL, threejs
     * ```
     *
     * @param {number} [omega=0] - angle in degrees
     * @param {number} [phi=0] - angle in degrees
     * @param {number} [kappa=0] - angle in degrees
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     *
     * @return {THREE.Quaternion} target quaternion
     */
    function quaternionFromOmegaPhiKappa(omega?: number, phi?: number, kappa?: number, target?: THREE.Quaternion): THREE.Quaternion;
    /**
     * From
     * [DocMicMac](https://github.com/micmacIGN/Documentation/raw/master/DocMicMac.pdf),
     * the transform from the platform frame to the local East, North, Up (ENU)
     * frame is:
     *
     * ```
     * RotationX(omega).RotationY(phi).RotationZ(kappa).RotationX(PI)
     * RotationX(PI) <=> Quaternion(1,0,0,0) : converts between the 2 conventions for the camera local frame:
     * X right, Y bottom, Z front : convention in photogrammetry and computer vision
     * X right, Y top,    Z back  : convention in webGL, threejs
     * ```
     *
     * @param {number} [omega=0] - angle in degrees
     * @param {number} [phi=0] - angle in degrees
     * @param {number} [kappa=0] - angle in degrees
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     *
     * @return {THREE.Quaternion} target quaternion
     */
    function quaternionFromOmegaPhiKappa(omega?: number, phi?: number, kappa?: number, target?: THREE.Quaternion): THREE.Quaternion;
    /**
     * Set the quaternion according to the rotation from the platform frame to
     * the local frame.
     *
     * @param {Attitude} attitude - Attitude
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     *
     * @return {THREE.Quaternion} target quaternion
     */
    function quaternionFromAttitude(attitude: {
        /**
         * - angle in degrees
         */
        omega: number;
        /**
         * - angle in degrees
         */
        phi: number;
        /**
         * - angle in degrees
         */
        kappa: number;
        /**
         * - angle in degrees
         */
        roll: number;
        /**
         * - angle in degrees
         */
        pitch: number;
        /**
         * - angle in degrees
         */
        heading: number;
    }, target?: THREE.Quaternion): THREE.Quaternion;
    /**
     * Set the quaternion according to the rotation from the platform frame to
     * the local frame.
     *
     * @param {Attitude} attitude - Attitude
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     *
     * @return {THREE.Quaternion} target quaternion
     */
    function quaternionFromAttitude(attitude: {
        /**
         * - angle in degrees
         */
        omega: number;
        /**
         * - angle in degrees
         */
        phi: number;
        /**
         * - angle in degrees
         */
        kappa: number;
        /**
         * - angle in degrees
         */
        roll: number;
        /**
         * - angle in degrees
         */
        pitch: number;
        /**
         * - angle in degrees
         */
        heading: number;
    }, target?: THREE.Quaternion): THREE.Quaternion;
    /**
     * FunctionOrQuaternion is either a THREE.Quaternion or a function that accepts
     * arguments `(coordinates, target)` and returns the quaternion that models a rotation
     * around the point of origin. If target is not provided, a new quaternion is
     * created and returned instead.
     *
     * @typedef {function|THREE.Quaternion} FunctionOrQuaternion
     *
     * @property {Coordinates} coordinates the origin of the local East North Up
     * (ENU) frame
     * @property {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion.
    */
    /**
     * A Projection object models a Coordinate Reference System (CRS).
     * Such an object is usually created with proj4 using `proj4.defs(crs);`
     *
     * @typedef {Object} Projection
     *
     * @property {string} projName
     */
    /**
     * Set the quaternion according to the rotation from the local East North Up (ENU)
     * frame to the geocentric frame. The up direction of the ENU frame is
     * provided by the normalized geodetic normal of the provided coordinates
     * (geodeticNormal property).
     *
     * @param {Coordinates} [coordinates] the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromEnuToGeocent(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * FunctionOrQuaternion is either a THREE.Quaternion or a function that accepts
     * arguments `(coordinates, target)` and returns the quaternion that models a rotation
     * around the point of origin. If target is not provided, a new quaternion is
     * created and returned instead.
     *
     * @typedef {function|THREE.Quaternion} FunctionOrQuaternion
     *
     * @property {Coordinates} coordinates the origin of the local East North Up
     * (ENU) frame
     * @property {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion.
    */
    /**
     * A Projection object models a Coordinate Reference System (CRS).
     * Such an object is usually created with proj4 using `proj4.defs(crs);`
     *
     * @typedef {Object} Projection
     *
     * @property {string} projName
     */
    /**
     * Set the quaternion according to the rotation from the local East North Up (ENU)
     * frame to the geocentric frame. The up direction of the ENU frame is
     * provided by the normalized geodetic normal of the provided coordinates
     * (geodeticNormal property).
     *
     * @param {Coordinates} [coordinates] the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromEnuToGeocent(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Set the quaternion according to the rotation from a geocentric frame
     * to the local East North Up (ENU) frame. The up direction of the ENU frame is
     * provided by the normalized geodetic normal of the provided coordinates
     * (geodeticNormal property).
     *
     * @param {Coordinates} [coordinates] the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromGeocentToEnu(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Set the quaternion according to the rotation from a geocentric frame
     * to the local East North Up (ENU) frame. The up direction of the ENU frame is
     * provided by the normalized geodetic normal of the provided coordinates
     * (geodeticNormal property).
     *
     * @param {Coordinates} [coordinates] the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromGeocentToEnu(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from a Lambert Conformal Conic (LCC) frame to the local East North Up (ENU) frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0060.pdf">meridian convergence</a>
     * between the ENU and LCC frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the lcc projection (may be parsed using proj4)
     * @param {number} proj.lat0 - the latitude of origin
     * @param {number} proj.long0 - the longitude of the central meridian
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromLCCToEnu(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from a Lambert Conformal Conic (LCC) frame to the local East North Up (ENU) frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0060.pdf">meridian convergence</a>
     * between the ENU and LCC frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the lcc projection (may be parsed using proj4)
     * @param {number} proj.lat0 - the latitude of origin
     * @param {number} proj.long0 - the longitude of the central meridian
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromLCCToEnu(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from the local East North Up (ENU) frame to a Lambert Conformal Conic (LCC) frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0060.pdf">meridian convergence</a>
     * between the ENU and LCC frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the lcc projection (may be parsed using proj4)
     * @param {number} proj.lat0 - the latitude of origin
     * @param {number} proj.long0 - the longitude of the central meridian
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromEnuToLCC(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from the local East North Up (ENU) frame to a Lambert Conformal Conic (LCC) frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0060.pdf">meridian convergence</a>
     * between the ENU and LCC frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the lcc projection (may be parsed using proj4)
     * @param {number} proj.lat0 - the latitude of origin
     * @param {number} proj.long0 - the longitude of the central meridian
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromEnuToLCC(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from a Transverse Mercator frame (TMerc) to the local East North Up (ENU) frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0061.pdf">meridian convergence</a>
     * between the ENU and TMerc frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the tmerc projection (may be parsed using proj4)
     * @param {number} proj.e - the excentricity of the ellipsoid (supersedes {proj.a} and {proj.b})
     * @param {number} proj.a - the semimajor radius of the ellipsoid axis
     * @param {number} proj.b - the semiminor radius of the ellipsoid axis
     * @param {number} proj.long0 - the longitude of the central meridian
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromTMercToEnu(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from a Transverse Mercator frame (TMerc) to the local East North Up (ENU) frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0061.pdf">meridian convergence</a>
     * between the ENU and TMerc frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the tmerc projection (may be parsed using proj4)
     * @param {number} proj.e - the excentricity of the ellipsoid (supersedes {proj.a} and {proj.b})
     * @param {number} proj.a - the semimajor radius of the ellipsoid axis
     * @param {number} proj.b - the semiminor radius of the ellipsoid axis
     * @param {number} proj.long0 - the longitude of the central meridian
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromTMercToEnu(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from the local East North Up (ENU) to a Transverse Mercator frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0061.pdf">meridian convergence</a>
     * between the ENU and TMerc frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the tmerc projection (may be parsed using proj4)
     * @param {number} proj.e - the excentricity of the ellipsoid (supersedes
     * {proj.a} and {proj.b})
     * @param {number} proj.a - the semimajor radius of the ellipsoid axis
     * @param {number} proj.b - the semiminor radius of the ellipsoid axis
     * @param {number} proj.long0 - the longitude of the central meridian
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromEnuToTMerc(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from the local East North Up (ENU) to a Transverse Mercator frame.
     * The quaternion accounts for the
     * <a href="https://geodesie.ign.fr/contenu/fichiers/documentation/algorithmes/alg0061.pdf">meridian convergence</a>
     * between the ENU and TMerc frames.
     * This is a generally small rotation around Z.
     *
     * @param {Projection} proj the tmerc projection (may be parsed using proj4)
     * @param {number} proj.e - the excentricity of the ellipsoid (supersedes
     * {proj.a} and {proj.b})
     * @param {number} proj.a - the semimajor radius of the ellipsoid axis
     * @param {number} proj.b - the semiminor radius of the ellipsoid axis
     * @param {number} proj.long0 - the longitude of the central meridian
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromEnuToTMerc(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from a LongLat frame to the local East North Up (ENU) frame.
     * The identity quaternion (0,0,0,1) is returned, as longlat and ENU frame are assumed to be aligned.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromLongLatToEnu(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Computes the rotation from a LongLat frame to the local East North Up (ENU) frame.
     * The identity quaternion (0,0,0,1) is returned, as longlat and ENU frame are assumed to be aligned.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromLongLatToEnu(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
    * Computes the rotation from the local East North Up (ENU) frame to a LongLat frame.
    * The identity quaternion (0,0,0,1) is returned, as longlat and ENU frame are assumed to be aligned.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromEnuToLongLat(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
    * Computes the rotation from the local East North Up (ENU) frame to a LongLat frame.
    * The identity quaternion (0,0,0,1) is returned, as longlat and ENU frame are assumed to be aligned.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromEnuToLongLat(coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Warns for an unimplemented projection, sets the quaternion to the
     * identity (0,0,0,1).
     *
     * @param {Projection} proj - the unimplemented projection (may be parsed
     * using proj4)
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionUnimplemented(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Warns for an unimplemented projection, sets the quaternion to the
     * identity (0,0,0,1).
     *
     * @param {Projection} proj - the unimplemented projection (may be parsed
     * using proj4)
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionUnimplemented(proj: {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Compute the quaternion that models the rotation from the local East North
     * Up (ENU) frame to the frame of the given crs.
     *
     * @param {string|Projection} crsOrProj - the CRS of the target frame or its
     * proj4-compatible object.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromEnuToCRS(crsOrProj: string | {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Compute the quaternion that models the rotation from the local East North
     * Up (ENU) frame to the frame of the given crs.
     *
     * @param {string|Projection} crsOrProj - the CRS of the target frame or its
     * proj4-compatible object.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromEnuToCRS(crsOrProj: string | {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Compute the quaternion that models the rotation from the frame of the
     * given crs to the local East North Up (ENU) frame.
     *
     * @param {string|Projection} crsOrProj - the CRS of the source frame or its
     * proj4-compatible object.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromCRSToEnu(crsOrProj: string | {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Compute the quaternion that models the rotation from the frame of the
     * given crs to the local East North Up (ENU) frame.
     *
     * @param {string|Projection} crsOrProj - the CRS of the source frame or its
     * proj4-compatible object.
     *
     * @param {Coordinates} [coordinates]  coordinates the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
     */
    function quaternionFromCRSToEnu(crsOrProj: string | {
        projName: string;
    }, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Return the function that computes the quaternion that represents a
     * rotation of coordinates between two CRS frames.
     *
     * @param {string} crsIn - the CRS of the input frame.
     * @param {string} crsOut - the CRS of the output frame.
     * @param {Coordinates} [coordinates]  coordinates - the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromCRSToCRS(crsIn: string, crsOut: string, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
    /**
     * Return the function that computes the quaternion that represents a
     * rotation of coordinates between two CRS frames.
     *
     * @param {string} crsIn - the CRS of the input frame.
     * @param {string} crsOut - the CRS of the output frame.
     * @param {Coordinates} [coordinates]  coordinates - the origin of the local East North Up
     * (ENU) frame
     * @param {THREE.Quaternion} [target=new THREE.Quaternion()] output Quaternion
     * @return {FunctionOrQuaternion} The target quaternion if coordinates is defined, otherwise, a function to compute it from coordinates.
    */
    function quaternionFromCRSToCRS(crsIn: string, crsOut: string, coordinates?: Coordinates, target?: THREE.Quaternion): Function | THREE.Quaternion;
}
export default _default;
import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";
//# sourceMappingURL=OrientationUtils.d.ts.map