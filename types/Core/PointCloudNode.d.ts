export default PointCloudNode;
declare class PointCloudNode extends THREE.EventDispatcher<THREE.Event> {
    constructor(numPoints: number, layer: any);
    numPoints: number;
    layer: any;
    children: any[];
    bbox: THREE.Box3;
    sse: number;
    add(node: any, indexChild: any): void;
    load(): any;
    findCommonAncestor(node: any): any;
}
import * as THREE from "three";
//# sourceMappingURL=PointCloudNode.d.ts.map