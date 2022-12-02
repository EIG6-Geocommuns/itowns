export default CancelledCommandException;
/**
 * Custom error thrown when cancelling commands. Allows the caller to act differently if needed.
 * @class
 * @param {Command} command
 */
declare class CancelledCommandException {
    constructor(command: any);
    command: any;
    isCancelledCommandException: boolean;
    toString(): string;
}
//# sourceMappingURL=CancelledCommandException.d.ts.map