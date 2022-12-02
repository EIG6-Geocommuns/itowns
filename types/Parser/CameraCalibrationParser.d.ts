declare namespace _default {
    /**
     * Description of a camera calibration in a JSON file.
     *
     * @typedef CameraCalibrationJson
     * @type {Object}
     *
     * @property {number[]} projection - projection matrix,
     * @property {number[]} size - image size in pixel.
     * @property {number[]} position - position of the camera.
     * @property {number[]} rotation - rotation matrix
     * @property {Object} [distorsion={}] - distorsion
     * @property {number[]} [distorsion.pps]
     * @property {number[]} [distorsion.poly357]
     * @property {number[]} [distorsion.limit]
     * @property {number[]} [distorsion.l1l2]
     * @property {number[]} [distorsion.etat]
     */
    /**
     * Parser a JSON array of camera calibrations and return an array of {@link OrientedImageCamera}.
     * @param {string|JSON} json - the json content of the calibration file.
     * @param {Object} [options={}] - Options controlling the parsing.
     * @param {string} [options.near=0.1] - Near of the created cameras. Default value comes from created {@link OrientedImageCamera}
     * @param {string} [options.far=1000] - Far of the created cameras. Default value comes from created {@link OrientedImageCamera}
     * @return {Promise} - A promise resolving with an array of {@link OrientedImageCamera}.
     */
    function parse(json: string | JSON, options?: {
        near?: string;
        far?: string;
    }): Promise<any>;
    /**
     * Description of a camera calibration in a JSON file.
     *
     * @typedef CameraCalibrationJson
     * @type {Object}
     *
     * @property {number[]} projection - projection matrix,
     * @property {number[]} size - image size in pixel.
     * @property {number[]} position - position of the camera.
     * @property {number[]} rotation - rotation matrix
     * @property {Object} [distorsion={}] - distorsion
     * @property {number[]} [distorsion.pps]
     * @property {number[]} [distorsion.poly357]
     * @property {number[]} [distorsion.limit]
     * @property {number[]} [distorsion.l1l2]
     * @property {number[]} [distorsion.etat]
     */
    /**
     * Parser a JSON array of camera calibrations and return an array of {@link OrientedImageCamera}.
     * @param {string|JSON} json - the json content of the calibration file.
     * @param {Object} [options={}] - Options controlling the parsing.
     * @param {string} [options.near=0.1] - Near of the created cameras. Default value comes from created {@link OrientedImageCamera}
     * @param {string} [options.far=1000] - Far of the created cameras. Default value comes from created {@link OrientedImageCamera}
     * @return {Promise} - A promise resolving with an array of {@link OrientedImageCamera}.
     */
    function parse(json: string | JSON, options?: {
        near?: string;
        far?: string;
    }): Promise<any>;
}
export default _default;
//# sourceMappingURL=CameraCalibrationParser.d.ts.map