declare namespace _default {
    export { UNIT };
    /**
     * Assert that the CRS is valid one.
     *
     * @param {string} crs - The CRS to validate.
     *
     * @throws {Error} if the CRS is not valid.
     */
    export function isValid(crs: string): void;
    /**
     * Assert that the CRS is valid one.
     *
     * @param {string} crs - The CRS to validate.
     *
     * @throws {Error} if the CRS is not valid.
     */
    export function isValid(crs: string): void;
    /**
     * Assert that the CRS is geographic.
     *
     * @param {string} crs - The CRS to validate.
     * @return {boolean}
     * @throws {Error} if the CRS is not valid.
     */
    export function isGeographic(crs: string): boolean;
    /**
     * Assert that the CRS is geographic.
     *
     * @param {string} crs - The CRS to validate.
     * @return {boolean}
     * @throws {Error} if the CRS is not valid.
     */
    export function isGeographic(crs: string): boolean;
    /**
     * Assert that the CRS is using metric units.
     *
     * @param {string} crs - The CRS to validate.
     * @return {boolean}
     * @throws {Error} if the CRS is not valid.
     */
    export function isMetricUnit(crs: string): boolean;
    /**
     * Assert that the CRS is using metric units.
     *
     * @param {string} crs - The CRS to validate.
     * @return {boolean}
     * @throws {Error} if the CRS is not valid.
     */
    export function isMetricUnit(crs: string): boolean;
    export { toUnit };
    export { is4326 };
    export { isGeocentric };
    /**
     * Give a reasonnable epsilon to use with this CRS.
     *
     * @param {string} crs - The CRS to use.
     * @return {number} 0.01 if the CRS is EPSG:4326, 0.001 otherwise.
     */
    export function reasonnableEpsilon(crs: string): number;
    /**
     * Give a reasonnable epsilon to use with this CRS.
     *
     * @param {string} crs - The CRS to use.
     * @return {number} 0.01 if the CRS is EPSG:4326, 0.001 otherwise.
     */
    export function reasonnableEpsilon(crs: string): number;
    export { formatToEPSG };
    export { formatToTms };
    export { isTms };
    export { isEpsg };
    export const tms_3857: string;
    export const tms_4326: string;
    export function defs(code: string, proj4def: string): undefined;
}
export default _default;
/**
 * Units that can be used for a CRS.
 */
type UNIT = number;
declare namespace UNIT {
    const DEGREE: number;
    const METER: number;
}
declare function toUnit(crs: any): number;
declare function is4326(crs: any): boolean;
declare function isGeocentric(crs: any): boolean;
declare function formatToEPSG(crs: any): any;
declare function formatToTms(crs: any): any;
declare function isTms(crs: any): any;
declare function isEpsg(crs: any): any;
//# sourceMappingURL=Crs.d.ts.map