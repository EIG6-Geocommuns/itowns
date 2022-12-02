export default Widget;
/**
 * An interface that stores common methods for all specific widgets.
 *
 * @hideconstructor
 */
declare class Widget {
    constructor(view: any, options: {}, defaultOptions: any);
    parentElement: any;
    position: any;
    domElement: HTMLDivElement;
    /**
     * Change the widget style `display` property so that the widget becomes visible.
     */
    show(): void;
    /**
     * Change the widget style `display` property so that the widget becomes invisible.
     */
    hide(): void;
    #private;
}
//# sourceMappingURL=Widget.d.ts.map