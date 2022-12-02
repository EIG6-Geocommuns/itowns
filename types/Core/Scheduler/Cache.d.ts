/**
 * Cache policies for flushing. Those policies can be used when something is
 * [set]{@link Cache.set } into the Cache, as the lifetime property.
 */
export type CACHE_POLICIES = {
    /**
     * - The entry is never flushed, except when the
     * `all` flag is set to `true` when calling {@link Cache.flush }.
     */
    INFINITE: number;
    /**
     * - Shortcut for texture resources. Time is 15 minutes.
     */
    TEXTURE: number;
    /**
     * - Shortcut for geometry resources. Time is 15 minutes.
     * minutes.
     */
    GEOMETRY: number;
};
export namespace CACHE_POLICIES {
    const INFINITE: number;
    const TEXTURE: number;
    const GEOMETRY: number;
}
export default Cache;
/**
 * This is a copy of the Map object, except that it also store a value for last
 * time used. This value is used for cache expiration mechanism.
 *
 * @example
 * import Cache, { CACHE_POLICIES } from 'Core/Scheduler/Cache';
 *
 * const cache = new Cache(CACHE_POLICIES.TEXTURE)
 * cache.set({ bar: 1 }, 'foo');
 * cache.set({ bar: 32 }, 'foo', 'toto');
 *
 * cache.get('foo');
 *
 * cache.delete('foo');
 *
 * cache.clear();
 *
 * cache.flush();
 */
declare class Cache {
    /**
     * @param      {number}  [lifetime=CACHE_POLICIES.INFINITE]  The cache expiration time for all values.
     */
    constructor(lifetime?: number);
    lifeTime: number;
    lastTimeFlush: number;
    data: Map<any, any>;
    /**
     * Returns the entry related to the specified key, content in array, from the cache.
     * The array contents one to three key.
     * The last time used property of the entry is updated to extend the longevity of the
     * entry.
     *
     * @param {string[]|number[]} keyArray key array ([key0, key1, key3])
     *
     * @return {Object}
     */
    getByArray(keyArray: string[] | number[]): any;
    /**
    * Adds or updates an entry with specified keys array ([key0, key1, key3]).
    * Caution: it overrides any existing entry already set at this/those key/s.
    *
    * @param {Object} value to add in cache
    * @param {string[]|number[]} keyArray key array ([key0, key1, key3])
    *
    * @return {Object} the added value
    */
    setByArray(value: any, keyArray: string[] | number[]): any;
    /**
     * Returns the entry related to the specified key from the cache. The last
     * time used property of the entry is updated to extend the longevity of the
     * entry.
     *
     * @param {string|number} key1
     * @param {string|number} [key2]
     * @param {string|number} [key3]
     *
     * @return {Object}
     */
    get(key1: string | number, key2?: string | number, key3?: string | number): any;
    /**
     * Adds or updates an entry with specified keys (up to 3).
     * Caution: it overrides any existing entry already set at this/those key/s.
     *
     *
     * @param {Object} value to add in cache
     * @param {string|number} key1
     * @param {string|number} [key2]
     * @param {string|number} [key3]
     *
     * @return {Object} the added value
     */
    set(value: any, key1: string | number, key2?: string | number, key3?: string | number): any;
    /**
     * Deletes the specified entry from the cache.
     *
     * @param {string|number} key1
     * @param {string|number} [key2]
     * @param {string|number} [key3]
     */
    delete(key1: string | number, key2?: string | number, key3?: string | number): void;
    /**
     * Removes all entries of the cache.
     *
     */
    clear(): void;
    /**
     * Flush the cache: entries that have been present for too long since the
     * last time they were used, are removed from the cache. By default, the
     * time is the current time, but the interval can be reduced by doing
     * something like `Cache.flush(Date.now() - reductionTime)`. If you want to
     * clear the whole cache, use {@link Cache.clear} instead.
     *
     * @param {number} [time=Date.now()]
     */
    flush(time?: number): void;
}
//# sourceMappingURL=Cache.d.ts.map