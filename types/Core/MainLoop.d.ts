export const RENDERING_PAUSED: 0;
export const RENDERING_SCHEDULED: 1;
export namespace MAIN_LOOP_EVENTS {
    const UPDATE_START: string;
    const BEFORE_CAMERA_UPDATE: string;
    const AFTER_CAMERA_UPDATE: string;
    const BEFORE_LAYER_UPDATE: string;
    const AFTER_LAYER_UPDATE: string;
    const BEFORE_RENDER: string;
    const AFTER_RENDER: string;
    const UPDATE_END: string;
}
export default MainLoop;
declare class MainLoop extends EventDispatcher<import("three").Event> {
    constructor(scheduler: any, engine: any);
    renderingState: number;
    scheduler: any;
    gfxEngine: any;
    scheduleViewUpdate(view: any, forceRedraw: any): void;
    #private;
}
import { EventDispatcher } from "three/src/core/EventDispatcher";
//# sourceMappingURL=MainLoop.d.ts.map