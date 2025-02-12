import { decodeBase64 } from 'jsr:@std/encoding/base64';

// these need to be updated every 10 days or so
const POLICY =
  'eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vaGVhdG1hcC1leHRlcm5hbC0qLnN0cmF2YS5jb20vKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczOTc4NDAwNX0sIkRhdGVHcmVhdGVyVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzM4NTYwMDA1fX19XX0_';

const SIGNATURE =
  'FY~QSDUtG2DithZnpcfEjy4wwJgIo3grY~nxFsF4ZK4pyrjE0vwiXSOlIklFYsMMwlhXWV~BceJLRPniQiz0oMZR5JRQj2uXq6T1IRyJu0RK-WEt63E6SU4qBn0OpGW3ohrfWySuVKCx~YJsFiy80lifvh5Yw5tFaXrKQwAd3DDWixXen8SiO0x4hXruFGFBW3egJ6ye2ul5uYq6vpA9Ykbu-vIZX~CqQfJCqfaEgcRAchslrXHq28IIhNu18fg3wLftKUIjPf07BSQygmcny1qat4aKS-ccHLzaE9~xJcSIBP~EQI1Qb3XZ~5pRYQqqeDN8ID16c3gNCSsPlhYyiA__';

const KEY_PAIR_ID = 'APKAIDPUN4QMG7VUQPSA';

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
  'trailguide.no',
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
  'topptur.app',
  'topptur.guide',
  'tourguide.ski',
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
    console.log('NOT ALLOWED FROM', { referer, host, origin, from, url });
    return new Response('Bad request', { status: HTTP_BAD_REQUEST });
  }

  // we use the deno web cache to cache tiles, they can safely be
  // cached due to very infrequent changes to the heatmap tiles
  const cachedResponse = await webCache.match(req);
  if (cachedResponse) {
    // console.log("cache hit", req.url);
    return cachedResponse;
  }

  // a tile is identified with x and y coordinates and a zoom level
  // we also use a type parameter to specify biking, running, skiing, etc.
  const params = urlParams(req.url);
  if (params == null) {
    console.log('Bad request', req.url);
    return new Response('Bad request', { status: HTTP_BAD_REQUEST });
  }

  // for a valid request, we need the proper zoom level and coordinates
  const { z, x, y, type } = params;
  if (!(isNumber(z) && isNumber(x) && isNumber(y))) {
    console.log('Bad request', req.url);
    return new Response('Bad request', { status: HTTP_BAD_REQUEST });
  }

  try {
    // now we are ready to fetch the heatmap tile from the server
    const tile = `${z}/${x}/${y}`;
    // console.log("fetch tile", req.url);
    const url = `${heatURL(type)}/${tile}.png` +
      `?Key-Pair-Id=${KEY_PAIR_ID}` +
      `&Signature=${SIGNATURE}&Policy=${POLICY}`;
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
      console.log(status, statusText);
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
function heatURL(type = 'ride'): string {
  return `https://heatmap-external-b.strava.com/tiles-auth/${type}/hot`;
}

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
