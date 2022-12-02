declare namespace _default {
    /**
     * Filter from a list of features, features that are under a coordinate.
     *
     * @param {Coordinates} coordinate - The coordinate for the filter
     * condition.
     * @param {Feature|FeatureCollection} collection - A single feature or a
     * collection of them, to filter given the previous coordinate.
     * @param {number} [epsilon=0.1] Tolerance around the coordinate (in
     * coordinate's unit).
     *
     * @return {Feature[]} Array of filtered features.
     */
    function filterFeaturesUnderCoordinate(coordinate: Coordinates, collection: any, epsilon?: number): Feature[];
    /**
     * Filter from a list of features, features that are under a coordinate.
     *
     * @param {Coordinates} coordinate - The coordinate for the filter
     * condition.
     * @param {Feature|FeatureCollection} collection - A single feature or a
     * collection of them, to filter given the previous coordinate.
     * @param {number} [epsilon=0.1] Tolerance around the coordinate (in
     * coordinate's unit).
     *
     * @return {Feature[]} Array of filtered features.
     */
    function filterFeaturesUnderCoordinate(coordinate: Coordinates, collection: any, epsilon?: number): Feature[];
}
export default _default;
import Coordinates from "Core/Geographic/Coordinates";
//# sourceMappingURL=FeaturesUtils.d.ts.map