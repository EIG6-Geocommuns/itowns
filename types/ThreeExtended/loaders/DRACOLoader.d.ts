export class DRACOLoader extends Loader {
    constructor(manager: any);
    decoderPath: string;
    decoderConfig: {};
    decoderBinary: any;
    decoderPending: Promise<void>;
    workerLimit: number;
    workerPool: any[];
    workerNextTaskID: number;
    workerSourceURL: string;
    defaultAttributeIDs: {
        position: string;
        normal: string;
        color: string;
        uv: string;
    };
    defaultAttributeTypes: {
        position: string;
        normal: string;
        color: string;
        uv: string;
    };
    setDecoderPath(path: any): DRACOLoader;
    setDecoderConfig(config: any): DRACOLoader;
    setWorkerLimit(workerLimit: any): DRACOLoader;
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
    decodeDracoFile(buffer: any, callback: any, attributeIDs: any, attributeTypes: any): void;
    decodeGeometry(buffer: any, taskConfig: any): any;
    _createGeometry(geometryData: any): BufferGeometry;
    _loadLibrary(url: any, responseType: any): Promise<any>;
    preload(): DRACOLoader;
    _initDecoder(): Promise<void>;
    _getWorker(taskID: any, taskCost: any): Promise<any>;
    _releaseTask(worker: any, taskID: any): void;
    debug(): void;
    dispose(): DRACOLoader;
}
import { Loader } from "three/src/loaders/Loader";
import { BufferGeometry } from "three/src/core/BufferGeometry";
//# sourceMappingURL=DRACOLoader.d.ts.map