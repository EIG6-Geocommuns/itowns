export default class InfoLayer {
    constructor(layer: any);
    layer: any;
    clear(): void;
    update(): void;
}
/**
 * InfoTiledGeometryLayer that provides some states layer informations. These
 * informations are displayed tiles, displayed {@link ColorLayer} and {@link
 * ElevationLayer} and extent of displayed tiles.
 *
 * @class InfoTiledGeometryLayer
 *
 * @property {object} displayed
 * @property {Layer[]} displayed.layers - Displayed {@link ColorLayer} and {@link ElevationLayer}.
 * @property {Extent} displayed.extent - {@link Extent} of displayed tiles.
 * @property {Set} displayed.tiles - Set of displayed tiles.
 */
export class InfoTiledGeometryLayer extends InfoLayer {
    displayed: {
        tiles: Set<any>;
    };
    update(tile: any): void;
}
//# sourceMappingURL=InfoLayer.d.ts.map