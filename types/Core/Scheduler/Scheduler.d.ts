export default Scheduler;
/**
 * The Scheduler is in charge of managing the [Providers]{@link Provider} that
 * are used to gather resources needed to display the layers on a {@link View}.
 * There is only one instance of a Scheduler per webview, and it is instanciated
 * with the creation of the first view.
 *
 * @constructor
 */
declare function Scheduler(): void;
declare class Scheduler {
    defaultQueue: {
        queue(command: any): void;
        storages: Map<any, any>;
        counters: {
            executing: number;
            executed: number;
            failed: number;
            cancelled: number;
            pending: number;
        };
        execute(cmd: any, provider: any): any;
    };
    hostQueues: Map<any, any>;
    providers: {};
    maxCommandsPerHost: number;
    constructor: typeof Scheduler;
    initDefaultProviders(): void;
    runCommand(command: any, queue: any, executingCounterUpToDate: any): void;
    execute(command: any): any;
    /**
     * A Provider has the responsability to handle protocols and datablobs. Given a
     * data request (see {@link Provider#executeCommand} for details about this
     * request), it fetches serialized datasets, file content or even file chunks.
     *
     * @interface Provider
     */
    /**
     * When adding a layer to a view, some preprocessing can be done on it, before
     * fetching or creating resources attached to it. For example, in the WMTS and
     * WFS providers (included in iTowns), default options to the layer are added if
     * some are missing.
     *
     * @param {Layer} layer
     * @param {View} [view]
     * @param {Scheduler} [scheduler]
     * @param {Layer} [parentLayer]
     */
    /**
     * In the {@link Scheduler} loop, this function is called every time the layer
     * needs new information about itself. For tiled layers, it gets the necessary
     * tiles, given the current position of the camera on the map. For simple layers
     * like a GPX trace, it gets the data once.
     * <br><br>
     * It passes a `command` object as a parameter, with the `view` and the `layer`
     * always present. The other parameters are optional.
     *
     * @function
     * @name Provider#executeCommand
     *
     * @param {Object} command
     * @param {View} command.view
     * @param {Layer} command.layer
     * @param {TileMesh} [command.requester] - Every layer is attached to a tile.
     * @param {number} [command.targetLevel] - The target level is used when there
     * is a tiled layer, such as WMTS or TMS, but not in case like a GPX layer.
     *
     * @return {Promise} The {@link Scheduler} always expect a Promise as a result,
     * resolving to an object containing sufficient information for the associated
     * processing to the current layer. For example, see the
     * [LayeredMaterialNodeProcessing#updateLayeredMaterialNodeElevation]{@link
     * https://github.com/iTowns/itowns/blob/master/src/Process/LayeredMaterialNodeProcessing.js}
     * class or other processing class.
     */
    /**
     * Adds a provider for a specified protocol. The provider will be used when
     * executing the queue to provide resources. See {@link Provider} for more
     * informations.
     * By default, some protocols are already set in iTowns: WMTS, WMS, WFS, TMS,
     * XYZ, PotreeConverter, Rasterizer, 3D-Tiles and Static.
     * <br><br>
     * Warning: if the specified protocol has already a provider attached to it, the
     * current provider will be overwritten by the given provider.
     *
     * @param {string} protocol - The name of the protocol to add. This is the
     * `protocol` parameter put inside the configuration when adding a layer. The
     * capitalization of the name is not taken into account here.
     * @param {Provider} provider - The provider to link to the protocol, that must
     * respect the {@link Provider} interface description.
     *
     * @throws {Error} an error if any method of the {@link Provider} is not present
     * in the provider.
     */
    addProtocolProvider(protocol: string, provider: Provider): void;
    /**
     * Get a specific {@link Provider} given a particular protocol.
     *
     * @param {string} protocol
     *
     * @return {Provider}
     */
    getProtocolProvider(protocol: string): Provider;
    commandsWaitingExecutionCount(): number;
    commandsRunningCount(): number;
    resetCommandsCount(type: any): any;
    deQueue(queue: any): any;
}
//# sourceMappingURL=Scheduler.d.ts.map