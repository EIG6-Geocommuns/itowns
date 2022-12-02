export default threeExamples.LegacyGLTFLoader;
declare var LegacyGLTFLoader: {
    new (manager: any): {
        load(url: any, onLoad: any, onProgress: any, onError: any): void;
        parse(data: any, path: any, callback: any): void;
        crossOrigin: string;
        withCredentials: boolean;
        path: string;
        resourcePath: string;
        manager: THREE.LoadingManager;
        requestHeader: {
            [header: string]: string;
        };
        loadAsync(url: string, onProgress?: (event: ProgressEvent<EventTarget>) => void): Promise<any>;
        setCrossOrigin(crossOrigin: string): any;
        setWithCredentials(value: boolean): any;
        setPath(path: string): any;
        setResourcePath(resourcePath: string): any;
        setRequestHeader(requestHeader: {
            [header: string]: string;
        }): any;
    };
    Shaders: {
        update: () => void;
    };
    Animations: {
        update: () => void;
    };
};
declare namespace threeExamples { }
import * as THREE from "three";
//# sourceMappingURL=LegacyGLTFLoader.d.ts.map