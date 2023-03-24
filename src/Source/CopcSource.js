import { Copc } from 'copc';
import Fetcher from 'Provider/Fetcher';
import LASzipParser from 'Parser/LASzipParser';
import Source from 'Source/Source';

/**
 * @param {string} url
 * @param {RequestInit} [options]
 */
async function bytes(url, options = {}) {
    const buffer = await Fetcher.arrayBuffer(url, options);
    return buffer;
}

/**
 * @classdesc
 * A class defining the source of Cloud Optimised Point Cloud (COPC) data. It
 * fetches and parses the LASzip header, the header of each Variable Length
 * Record (VLR) as well the following VLRs:
 * - COPC [`info`](https://copc.io/#info-vlr) record (required)
 * - LAS1.4 `OGC Coordinate System WKT` record (required, see [Las 1.4
 *   spec](https://portal.ogc.org/files/?artifact_id=74523))
 * - LAS1.4 `Extra Bytes` record (optional, see [Las 1.4
 *   spec](https://portal.ogc.org/files/?artifact_id=74523))
 *
 * @extends {Source}
 */
class CopcSource extends Source {
    /**
     * @param {Object} config - TODO
     */
    constructor(config) {
        super(config);

        this.isCopcSource = true;

        this.parse = LASzipParser.parseChunk;
        this.fetcher = bytes;

        const get = (/** @type {number} */ begin, /** @type {number} */ end) =>
            this.fetcher(this.url, {
                ...this.networkOptions,
                headers: {
                    ...this.networkOptions.headers,
                    range: `bytes=${begin}-${end - 1}`,
                },
            }).then(buffer => new Uint8Array(buffer));
        this.whenReady = Copc.create(get).then((copc) => {
            // TODO: Use projection definition in `copc.wkt` if present

            this.spacing = copc.info.spacing;
            this.copc = copc;

            return this;
        });
    }
}

export default CopcSource;
