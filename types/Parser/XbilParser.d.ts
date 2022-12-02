/**
  * Calculates the minimum maximum texture elevation with xbil data
  *
  * @param      {THREE.Texture}  texture       The texture to parse
  * @param      {THREE.Vector4}  pitch  The pitch,  restrict zone to parse
 * @param      {number}  noDataValue  No data value
  * @return     {Object}  The minimum maximum elevation.
  */
export function computeMinMaxElevation(texture: THREE.Texture, pitch: THREE.Vector4, noDataValue: number): any;
export function checkNodeElevationTextureValidity(data: any, noDataValue: any): boolean;
export function insertSignificantValuesFromParent(data: any, dataParent: any, noDataValue: any, pitch: any): void;
//# sourceMappingURL=XbilParser.d.ts.map