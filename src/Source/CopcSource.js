import { Binary, Info, Las } from 'copc';
import Fetcher from 'Provider/Fetcher';
import LASzipParser from 'Parser/LASzipParser';
import Source from 'Source/Source';

/**
 * @param {function(number, number):Promise<Uint8Array>} fetcher
 */
async function getHeaders(fetcher) {
    const header =
        Las.Header.parse(await fetcher(0, Las.Constants.minHeaderLength));
    const vlrs = await Las.Vlr.walk(fetcher, header);

    // info: required by COPC
    const infoVlr = Las.Vlr.find(vlrs, 'copc', 1);
    if (!infoVlr) { return Promise.reject('COPC info VLR is required'); }
    const info = Info.parse(await Las.Vlr.fetch(fetcher, infoVlr));

    // OGC Coordinate System WKT: required by LAS1.4
    const wktVlr = Las.Vlr.find(vlrs, 'LASF_Projection', 2112);
    if (!wktVlr) { return Promise.reject('LAS1.4 WKT VLR is required'); }
    const wkt = Binary.toCString(await Las.Vlr.fetch(fetcher, wktVlr));

    // Extra bytes: optional by LAS1.4
    const ebVlr = Las.Vlr.find(vlrs, 'LASF_Spec', 4);
    const eb = ebVlr ?
        Las.ExtraBytes.parse(await Las.Vlr.fetch(fetcher, ebVlr)) :
        [];

    // TODO: Other VLRs?

    return { header, info, wkt, eb };
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
     * @param {Object} config - Source configuration
     * @param {string} config.url - URL of the COPC ressource.
     * @param {RequestInit} [config.networkOptions] - Fetch options (passed
     * directly to `fetch()`), see [the syntax for more information]{@link
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax}.
     */
    constructor(config) {
        super(config);

        this.isCopcSource = true;

        this.parse = LASzipParser.parseChunk;
        this.fetcher = Fetcher.arrayBuffer;

        const get = (/** @type {number} */ begin, /** @type {number} */ end) =>
            this.fetcher(this.url, {
                ...this.networkOptions,
                headers: {
                    ...this.networkOptions.headers,
                    range: `bytes=${begin}-${end - 1}`,
                },
            }).then(buffer => new Uint8Array(buffer));
        this.whenReady = getHeaders(get).then((metadata) => {
            this.header = metadata.header;
            this.info = metadata.info;
            this.eb = metadata.eb;

            // TODO: use projection definition in `metadata.wkt`

            return this;
        });
    }
}

export default CopcSource;
