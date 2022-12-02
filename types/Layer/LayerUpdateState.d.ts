export default LayerUpdateState;
/**
 * LayerUpdateState is the update state of a layer, for a given object (e.g tile).
 * It stores information to allow smart update decisions, and especially network
 * error handling.
 * @constructor
 */
declare class LayerUpdateState {
    state: number;
    lastErrorTimestamp: number;
    errorCount: number;
    failureParams: {
        lowestLevelError: number;
    };
    canTryUpdate(timestamp?: number): boolean;
    secondsUntilNextTry(): number;
    newTry(): void;
    success(): void;
    noMoreUpdatePossible(): void;
    noData(failureParams: any): void;
    failure(timestamp: any, definitive: any, failureParams: any): void;
    inError(): boolean;
}
//# sourceMappingURL=LayerUpdateState.d.ts.map