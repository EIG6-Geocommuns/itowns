export default placeObjectOnGround;
/**
 * @deprecated
 * Helper method that will position an object directly on the ground.
 *
 * @param {TiledGeometryLayer} layer - The tile layer owning the elevation
 * textures we're going to query. This is typically a `GlobeLayer` or
 * `PlanarLayer` (accessible through `view.tileLayer`).
 * @param {string} crs - The CRS used by the object coordinates. You
 * probably want to use `view.referenceCRS` here.
 * @param {Object3D} obj - the object we want to modify.
 * @param {Object} options
 * @param {number} [options.method=FAST_READ_Z] - There are two available methods:
 * `FAST_READ_Z` (default) or `PRECISE_READ_Z`. The first one is faster,
 * while the second one is slower but gives better precision.
 * @param {boolean} options.modifyGeometry - if unset/false, this function
 * will modify object.position. If true, it will modify
 * `obj.geometry.vertices` or `obj.geometry.attributes.position`.
 * @param {TileMesh[]} [tileHint] - Optional array of tiles to speed up the
 * process. You can give candidates tiles likely to contain `coord`.
 * Otherwise the lookup process starts from the root of `layer`.
 *
 * @return {boolean} true if successful, false if we couldn't lookup the elevation at the given coords
 */
declare function placeObjectOnGround(layer: TiledGeometryLayer, crs: string, obj: Object3D, options?: {
    method?: number;
    modifyGeometry: boolean;
}, tileHint?: TileMesh[]): boolean;
//# sourceMappingURL=placeObjectOnGround.d.ts.map