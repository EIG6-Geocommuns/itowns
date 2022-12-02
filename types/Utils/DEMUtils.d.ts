export function readTextureValueWithBilinearFiltering(metadata: any, texture: any, vertexU: any, vertexV: any): any;
declare namespace _default {
    /**
     * Gives the elevation value of a {@link TiledGeometryLayer}, at a specific
     * {@link Coordinates}.
     *
     * @param {TiledGeometryLayer} layer - The tile layer owning the elevation
     * textures we're going to query. This is typically a `GlobeLayer` or
     * `PlanarLayer` (accessible through `view.tileLayer`).
     * @param {Coordinates} coord - The coordinates that we're interested in.
     * @param {number} [method=FAST_READ_Z] - There are two available methods:
     * `FAST_READ_Z` (default) or `PRECISE_READ_Z`. The first one is faster,
     * while the second one is slower but gives better precision.
     * @param {TileMesh[]} [tileHint] - Optional array of tiles to speed up the
     * process. You can give candidates tiles likely to contain `coord`.
     * Otherwise the lookup process starts from the root of `layer`.
     *
     * @return {number} If found, a value in meters is returned; otherwise
     * `undefined`.
     */
    export function getElevationValueAt(layer: TiledGeometryLayer, coord: Coordinates, method?: number, tileHint?: TileMesh[]): number;
    /**
     * Gives the elevation value of a {@link TiledGeometryLayer}, at a specific
     * {@link Coordinates}.
     *
     * @param {TiledGeometryLayer} layer - The tile layer owning the elevation
     * textures we're going to query. This is typically a `GlobeLayer` or
     * `PlanarLayer` (accessible through `view.tileLayer`).
     * @param {Coordinates} coord - The coordinates that we're interested in.
     * @param {number} [method=FAST_READ_Z] - There are two available methods:
     * `FAST_READ_Z` (default) or `PRECISE_READ_Z`. The first one is faster,
     * while the second one is slower but gives better precision.
     * @param {TileMesh[]} [tileHint] - Optional array of tiles to speed up the
     * process. You can give candidates tiles likely to contain `coord`.
     * Otherwise the lookup process starts from the root of `layer`.
     *
     * @return {number} If found, a value in meters is returned; otherwise
     * `undefined`.
     */
    export function getElevationValueAt(layer: TiledGeometryLayer, coord: Coordinates, method?: number, tileHint?: TileMesh[]): number;
    /**
     * @typedef Terrain
     * @type {Object}
     *
     * @property {Coordinates} coord - Pick coordinate with the elevation in coord.z.
     * @property {THREE.Texture} texture - the picked elevation texture.
     * The texture where the `z` value has been read from
     * @property {TileMesh} tile - the picked tile and the tile containing the texture
     */
    /**
     * Gives a {@link Terrain} object, at a specific {@link Coordinates}. The returned
     * object is as follow:
     * - `coord`, Coordinate, coord.z is the value in meters of the elevation at the coordinates
     * - `texture`, the texture where the `z` value has been read from
     * - `tile`, the tile containing the texture
     * @example
     * // place mesh on the ground
     * const coord = new Coordinates('EPSG:4326', 6, 45);
     * const result = DEMUtils.getTerrainObjectAt(view.tileLayer, coord)
     * mesh.position.copy(result.coord.as(view.referenceCrs));
     * view.scene.add(mesh);
     * mesh.updateMatrixWorld();
     *
     *
     * @param {TiledGeometryLayer} layer - The tile layer owning the elevation
     * textures we're going to query. This is typically a `GlobeLayer` or
     * `PlanarLayer` (accessible through `view.tileLayer`).
     * @param {Coordinates} coord - The coordinates that we're interested in.
     * @param {number} [method=FAST_READ_Z] - There are two available methods:
     * `FAST_READ_Z` (default) or `PRECISE_READ_Z`. The first one is faster,
     * while the second one is slower but gives better precision.
     * @param {TileMesh[]} [tileHint] - Optional array of tiles to speed up the
     * process. You can give candidates tiles likely to contain `coord`.
     * Otherwise the lookup process starts from the root of `layer`.
     * @param {Object} [cache] - Object to cache previous result and speed up the next `getTerrainObjectAt`` use.
     *
     * @return {Terrain} - The {@link Terrain} object.
     */
    export function getTerrainObjectAt(layer: TiledGeometryLayer, coord: Coordinates, method?: number, tileHint?: TileMesh[], cache?: any): {
        /**
         * - Pick coordinate with the elevation in coord.z.
         */
        coord: Coordinates;
        /**
         * - the picked elevation texture.
         * The texture where the `z` value has been read from
         */
        texture: THREE.Texture;
        /**
         * - the picked tile and the tile containing the texture
         */
        tile: TileMesh;
    };
    /**
     * @typedef Terrain
     * @type {Object}
     *
     * @property {Coordinates} coord - Pick coordinate with the elevation in coord.z.
     * @property {THREE.Texture} texture - the picked elevation texture.
     * The texture where the `z` value has been read from
     * @property {TileMesh} tile - the picked tile and the tile containing the texture
     */
    /**
     * Gives a {@link Terrain} object, at a specific {@link Coordinates}. The returned
     * object is as follow:
     * - `coord`, Coordinate, coord.z is the value in meters of the elevation at the coordinates
     * - `texture`, the texture where the `z` value has been read from
     * - `tile`, the tile containing the texture
     * @example
     * // place mesh on the ground
     * const coord = new Coordinates('EPSG:4326', 6, 45);
     * const result = DEMUtils.getTerrainObjectAt(view.tileLayer, coord)
     * mesh.position.copy(result.coord.as(view.referenceCrs));
     * view.scene.add(mesh);
     * mesh.updateMatrixWorld();
     *
     *
     * @param {TiledGeometryLayer} layer - The tile layer owning the elevation
     * textures we're going to query. This is typically a `GlobeLayer` or
     * `PlanarLayer` (accessible through `view.tileLayer`).
     * @param {Coordinates} coord - The coordinates that we're interested in.
     * @param {number} [method=FAST_READ_Z] - There are two available methods:
     * `FAST_READ_Z` (default) or `PRECISE_READ_Z`. The first one is faster,
     * while the second one is slower but gives better precision.
     * @param {TileMesh[]} [tileHint] - Optional array of tiles to speed up the
     * process. You can give candidates tiles likely to contain `coord`.
     * Otherwise the lookup process starts from the root of `layer`.
     * @param {Object} [cache] - Object to cache previous result and speed up the next `getTerrainObjectAt`` use.
     *
     * @return {Terrain} - The {@link Terrain} object.
     */
    export function getTerrainObjectAt(layer: TiledGeometryLayer, coord: Coordinates, method?: number, tileHint?: TileMesh[], cache?: any): {
        /**
         * - Pick coordinate with the elevation in coord.z.
         */
        coord: Coordinates;
        /**
         * - the picked elevation texture.
         * The texture where the `z` value has been read from
         */
        texture: THREE.Texture;
        /**
         * - the picked tile and the tile containing the texture
         */
        tile: TileMesh;
    };
    export { FAST_READ_Z };
    export { PRECISE_READ_Z };
    export { placeObjectOnGround };
}
export default _default;
import Coordinates from "Core/Geographic/Coordinates";
import * as THREE from "three";
declare const FAST_READ_Z: 0;
declare const PRECISE_READ_Z: 1;
import placeObjectOnGround from "Utils/placeObjectOnGround";
//# sourceMappingURL=DEMUtils.d.ts.map