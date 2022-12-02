export default PotreeNode;
declare class PotreeNode extends PointCloudNode {
    constructor(numPoints: number, childrenBitField: number, layer: any);
    childrenBitField: number;
    id: string;
    depth: number;
    baseurl: any;
    add(node: any, indexChild: any, root: any): void;
    createChildAABB(node: any, childIndex: any): void;
    get octreeIsLoaded(): boolean;
    get url(): string;
    loadOctree(): any;
}
import PointCloudNode from "Core/PointCloudNode";
//# sourceMappingURL=PotreeNode.d.ts.map