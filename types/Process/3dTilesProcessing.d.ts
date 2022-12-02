/**
 * Check if the node is visible in the camera.
 *
 * @param      {C3DTilesLayer} layer       node 3D tiles layer
 * @param      {Camera}   camera           camera
 * @param      {THREE.Object3D}   node             The 3d tile node to check.
 * @param      {THREE.Matrix4}   tileMatrixWorld  The node matrix world
 * @return     {boolean}  return true if the node is visible
 */
export function $3dTilesCulling(layer: C3DTilesLayer, camera: Camera, node: THREE.Object3D, tileMatrixWorld: THREE.Matrix4): boolean;
export function pre3dTilesUpdate(): any[];
export function computeNodeSSE(camera: any, node: any): number;
export function init3dTilesLayer(view: any, scheduler: any, layer: any, rootTile: any): any;
/**
 * This funcion builds the method to update 3d tiles node.
 *
 * The returned method checks the 3d tile visibility with `cullingTest` function.
 * It subdivises visible node if `subdivisionTest` return `true`.
 *
 * @param      {Function}  [cullingTest=$3dTilesCulling]                 The culling test method.
 * @param      {Function}  [subdivisionTest=$3dTilesSubdivisionControl]  The subdivision test method.
 * @return     {Function}    { description_of_the_return_value }
 */
export function process3dTilesNode(cullingTest?: Function, subdivisionTest?: Function): Function;
/**
 *
 *
 * the method returns true if the `node` should be subivised.
 *
 * @param      {object}   context  The current context
 * @param      {Camera}   context.camera  The current camera
 * @param      {C3DTilesLayer}   layer  The 3d tile layer
 * @param      {THREE.Object3D}  node  The 3d tile node
 * @return     {boolean}
 */
export function $3dTilesSubdivisionControl(context: {
    camera: Camera;
}, layer: C3DTilesLayer, node: THREE.Object3D): boolean;
import * as THREE from "three";
//# sourceMappingURL=3dTilesProcessing.d.ts.map