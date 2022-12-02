export default AnimationPlayer;
/**
 * It can play, pause or stop Animation or AnimationExpression (See below).
 * AnimationPlayer is needed to use Animation or AnimationExpression
 * AnimationPlayer emits events :
 *       - for each animation's frame;
 *       - when Animation is stopped
 *       - when Animation is ending
 */
declare class AnimationPlayer extends THREE.EventDispatcher<THREE.Event> {
    constructor();
    id: NodeJS.Timer;
    keyframe: number;
    duration: number;
    state: number;
    waitTimer: number;
    callback: () => void;
    isPlaying(): boolean;
    isStopped(): boolean;
    isEnded(): boolean;
    /**
     * Set the Player `callback` property. This callback is executed at each animation frame.
     *
     * @param {function} callback - The callback to execute at each animation frame.
     */
    setCallback(callback: Function): void;
    /**
     * Play one animation.
     * If another animation is playing, it's stopped and the new animation is played.
     *
     * @param {number} duration - The duration to play
     */
    play(duration: number): void;
    /**
     * Play an animation after a number of frames.
     *
     * @param      {number}  duration    The duration to play
     * @param      {number}  waitingFrame    The waiting time before start animation (time in frame)
     */
    playLater(duration: number, waitingFrame: number): void;
    /**
     * Stop the current animation.
     *
     */
    stop(): void;
    /**
     * Executed for each frame.
     *
     * @private
     */
    private frame;
}
import * as THREE from "three";
//# sourceMappingURL=AnimationPlayer.d.ts.map