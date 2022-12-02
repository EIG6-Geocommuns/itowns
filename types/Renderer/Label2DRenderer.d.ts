export default Label2DRenderer;
/**
 * This renderer is inspired by the
 * [`THREE.CSS2DRenderer`](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer).
 * It is instanciated in `c3DEngine`, as another renderer to handles Labels.
 */
declare class Label2DRenderer {
    domElement: HTMLDivElement;
    garbage: HTMLDivElement;
    halfWidth: number;
    halfHeight: number;
    grid: ScreenGrid;
    infoTileLayer: any;
    setSize(width: any, height: any): void;
    registerLayer(layer: any): void;
    render(scene: any, camera: any): void;
    culling(object: any, extent: any, camera: any): void;
    removeLabelDOM(label: any): void;
    hideNodeDOM(node: any): void;
    showNodeDOM(node: any): void;
}
declare class ScreenGrid {
    constructor(x: number, y: number, width: any, height: any);
    x: number;
    y: number;
    grid: any[];
    hidden: any[];
    visible: any[];
    width: any;
    height: any;
    reset(): void;
    resize(): void;
    insert(obj: any): boolean;
}
//# sourceMappingURL=Label2DRenderer.d.ts.map