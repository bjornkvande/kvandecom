import { decodeBase64 } from 'jsr:@std/encoding/base64';

// these need to be updated every 10 days or so
// const POLICY =
//   'eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vKmNvbnRlbnQtKi5zdHJhdmEuY29tL2lkZW50aWZpZWQvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0NDQ0MTIwNH19fV19';

// const SIGNATURE =
//   'PBf9W4pZHKlhYTMp2DUAYGxpWT5qR~h7KSJe3UIEfL8Dxd09VzaECpPUrdXfTxasPZqzfre9vnRlxu3t7KEjRuCXWGcRpOMuYxp4x1ItSueNGo7OEKXJqAT9qigqnUlM2z6Tpnz0PoJ6MqpT3wu57iyNuqFoPxz5YROxpIPv8oKZv~-Ysr5MdspnDzrlvIQ-8mK5qyDciCeWhIhrRK8-r6P~IYnKtxJFKuHAlY-obkIk8k7LFwkNlfzS4KvM9Dj0-aXrARCm86lv5j9WOVbWemY9O9Vg3~xRCv26L54U1CSLpG425lwLVdXTkbnYjFukrvsg1Ixx1Bo8ddUJsGlHRw__';

// const KEY_PAIR_ID = 'APKAIDPUN4QMG7VUQPSA';
// const KEY_PAIR_ID = 'K3VK9UFQYD04PI';

const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;

/**
 * This is used to cache the heatmap tiles. This way, it will improve performance, and it
 * will still work if the cookies has expired or the heatmap server is down. However, we
 * do not know how much the cache will fill up, or if it will cost us money down the road.
 * from https://deno.com/blog/deploy-cache-api#cache-policy
 * "By default, cached data is persisted for an indefinite period of time. While we
 * periodically scan and delete inactive objects, an object is usually kept in cache
 * for at least 30 days.""
 */
const webCache = await caches.open('tile-cache');

const ALLOWED_SKIGUIDE_PLUGIN_DOMAINS = [
  'nordnorge.com',
];

/**
 * We limit access to the heatmap API to our own servers.
 */
const ALLOWED_DOMAINS = [
  '127.0.0.1',
  'localhost',
  'kvande.com',
  'sjogg.no',
  'beta.trailguide.net',
  'www.trailguide.net',
  'trailguide.net',
  'trailguide.at',
  'trailguide.dk',
  'trailguide.es',
  'trailguide.fr',
  'trailguide.it',
  'trailguide.pl',
  'trailguide.se',
  'mtbmap.app',
  'mtbmap.net',
  'mtbmap.online',
  'mtbmap.ch',
  'mtbmap.dk',
  'mtbmap.es',
  'mtbmap.eu',
  'mtbmap.pl',
  'mtbmap.uk',
  'our.guide',
  'cyclemap.net',
  'skiguide.app',
  'topptur.guide',
  'topptur.app',
  ...ALLOWED_SKIGUIDE_PLUGIN_DOMAINS,
];

/**
 * This will respond with a heatmap tile in PNG format.
 *
 * Example of call to this api endpoint:
 * https://kvande.com/api/heat?z=12&x=1.234&y=5.678
 */
export async function handler(req: Request): Promise<Response> {
  // limit access to our own apps
  const referer = req.headers.get('referer') || req.headers.get('referrer');
  // TODO: pass in req.headers to isAllowedDomain and write tests
  // for both referer and referrer
  if (!isAllowedDomain(referer)) {
    const host = req.headers.get('host');
    const origin = req.headers.get('origin');
    const from = req.headers.get('from');
    const url = req.url;
    console.warn('NOT ALLOWED FROM', { referer, host, origin, from, url });
    return new Response('Bad request', { status: HTTP_BAD_REQUEST });
  }

  // we use the deno web cache to cache tiles, they can safely be
  // cached due to very infrequent changes to the heatmap tiles
  let cachedResponse;
  try {
    cachedResponse = await webCache.match(req);
    if (cachedResponse) {
      // console.log("cache hit", req.url);
      return cachedResponse;
    }
  } catch (error) {
    // eslint-disable-next-line
    console.warn('Cache error', error);
  }

  // a tile is identified with x and y coordinates and a zoom level
  // we also use a type parameter to specify biking, running, skiing, etc.
  const params = urlParams(req.url);
  if (params == null) {
    console.warn('Bad request', req.url);
    return new Response('Bad request', { status: HTTP_BAD_REQUEST });
  }

  // for a valid request, we need the proper zoom level and coordinates
  const { z, x, y, type } = params;
  if (!(isNumber(z) && isNumber(x) && isNumber(y))) {
    console.warn('Bad request', req.url);
    return new Response('Bad request', { status: HTTP_BAD_REQUEST });
  }

  try {
    // now we are ready to fetch the heatmap tile from the server
    const tile = `${z}/${x}/${y}`;
    // console.log('fetch tile', req.url);
    const url = `https://strava-heatmap.tiles.freemap.sk/${type}/red/${tile}.png`;
    // const url = `${heatURL(type)}/${tile}.png` +
    //   `?Key-Pair-Id=${KEY_PAIR_ID}` +
    //   `&Signature=${SIGNATURE}&Policy=${POLICY}`;
    const heatMapResponse = await fetch(url);
    const { status, statusText } = heatMapResponse || {};

    // it was not found, just return a transparent PNG
    if (status === HTTP_NOT_FOUND) {
      const transparent = new Response(TRANSPARENT_PNG, {
        status: HTTP_OK,
        headers: { 'Content-Type': 'image/png' },
      });
      await webCache.put(req, transparent.clone());
      return transparent;
    }

    // for whatever reason we could not get the tile, return an error
    if (status !== HTTP_OK) {
      const msg = 'Internal server error ' + status + ' ' + statusText;
      console.warn(status, statusText);
      console.warn(heatMapResponse);
      return new Response(msg, { status });
    }

    // cache the image and return it
    const image = await heatMapResponse.arrayBuffer();
    const imageResponse = new Response(image, {
      status: HTTP_OK,
      headers: { 'Content-Type': 'image/png' },
    });
    await webCache.put(req, imageResponse.clone());
    return imageResponse;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
    return new Response('Internal server error ' + error, {
      status: HTTP_INTERNAL_SERVER_ERROR,
    });
  }
}

/**
 * Returns the base URL to the heatmap tiles.
 *
 * @param type - ride, winter, run, water
 */
// function heatURL(type = 'ride'): string {
//   // return `https://heatmap-external-b.strava.com/tiles-auth/${type}/hot`;
//   // return 'https://strava-heatmap.tiles.freemap.sk/ride/red/13/4532/2845.png';
// }

/**
 * Gets the z, y, and y parameters for the tile request.
 *
 * @param url - The URL to parse
 */
function urlParams(url: string): {
  z: string; // the zoom level
  x: string; // the x coordinate
  y: string; // the y coordinate
  type: string; // ride, run, winter, water
} | null {
  const search = url.split?.('?')?.[1];
  if (search == null) {
    return null;
  }
  try {
    const params = new URLSearchParams(search);
    const z = params.get('z') as string;
    const x = params.get('x') as string;
    const y = params.get('y') as string;
    const type = params.get('type') || 'ride';
    return { z, x, y, type };
  } catch {
    return null;
  }
}

/**
 * Just checks if the z, x, or y parameters are proper numbers.
 */
function isNumber(number?: string): boolean {
  if (number == null) return false;
  const parsed = parseInt(number);
  return typeof parsed === 'number' && !isNaN(parsed);
}

/**
 * This is reused to send a transparent PNG when the heatmap tile is not found.
 */
const TRANSPARENT_PNG = decodeBase64(
  'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAED0lEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DcC8AAB2WfxiAAAAABJRU5ErkJggg==',
);

/**
 * Returns true if we are allowed to access the heatmap API.
 *
 * @param referer - https://sjogg.no/
 */
export function isAllowedDomain(referer: string | null): boolean {
  if (referer == null) {
    return false;
  }
  const url = new URL(referer);
  return ALLOWED_DOMAINS.includes(url.hostname);
}
