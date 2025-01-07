import { decodeBase64 } from "jsr:@std/encoding/base64";
import { FreshContext } from "$fresh/server.ts";

// these need to be updated every 10 days or so
const POLICY =
  "eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vaGVhdG1hcC1leHRlcm5hbC0qLnN0cmF2YS5jb20vKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNjY2OTY1MH0sIkRhdGVHcmVhdGVyVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzM1NDQ1NjUwfX19XX0_";

const SIGNATURE =
  "cG2z10ZVrU2~0T9L3VIJNR8sslSbSPvMomv-TJFwvYjx~0qFHSvnSpU3b0w15p5ueXlhyCOpdQPpNaa~VDHcS05OD03C6cXKK9z5uEIdaZtK8Uzv92XxjgxaOx85eLDOzcMVUYjzxmykxinqg4UmpzVg~Cvvbajgvv7zxknjJJoijDMazAT4jBOSu3Is-MyLmS~6MOAj7VmXCNRviNN9f58QPgXOZjUk50SYcTd8eeN9ii4sdC40KYuIwYXQOr5b0jclijDNqOGJKDYNHWSysZ-ZRXRsnFjz741Kk2QTz6DP48Shlw0DHw4S1s5e6GQ0U3raN7iR9Yz0IfmcxDSYbA__";

const KEY_PAIR_ID = "APKAIDPUN4QMG7VUQPSA";

/**
 * Returns the base URL to the heatmap tiles.
 *
 * @param type - ride, winter, run, water
 */
function heatURL(type = "ride"): string {
  return `https://heatmap-external-b.strava.com/tiles-auth/${type}/hot`;
}

// this is used as a memory cache for the heat map tiles
let _cache: { [key: string]: Uint8Array | ArrayBuffer } = {};
function cache(tile: string): Uint8Array | ArrayBuffer | undefined {
  if (Object.keys(_cache).length > 10000) {
    _cache = {};
  }
  return _cache[tile];
}

const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const COOKIE_PASSWORD = "HKGYGUUYTUIURDTOHJ";

/**
  Example of call to this function
  https://kvande.com/api/heat?z=12&x=1.234&y=5.678
 */
export async function handler(
  req: Request,
  _ctx: FreshContext,
): Promise<Response> {
  // TODO: should only allow requests from localhost, mtbmap, skigiude, and trailguide domains

  const params = urlParams(req.url);
  if (params == null) {
    return new Response("Bad request", { status: HTTP_BAD_REQUEST });
  }

  const { z, x, y, type, cookies } = urlParams(req.url) || {};

  if (cookies === COOKIE_PASSWORD) {
    const body = { POLICY, SIGNATURE };
    return Response.json(body);
  }

  if (!(isNumber(z) && isNumber(x) && isNumber(y))) {
    return new Response("Bad request", { status: HTTP_BAD_REQUEST });
  }

  const tile = `${z}/${x}/${y}`;
  const tile_id = `${type}/${tile}`;
  if (cache(tile_id)) {
    console.log("cache hit", tile_id);
    const tile = cache(tile_id);
    return new Response(tile, {
      status: HTTP_OK,
      headers: { "Content-Type": "image/png" },
    });
  }

  try {
    const url = `${heatURL(type)}/${tile}.png` +
      `?Key-Pair-Id=${KEY_PAIR_ID}` +
      `&Signature=${SIGNATURE}&Policy=${POLICY}`;

    const response = await fetch(url);
    const { status, statusText } = response || {};

    // it was not found, just return a transparent PNG
    if (status === HTTP_NOT_FOUND) {
      // eslint-disable-next-line
      _cache[tile_id] = TRANSPARENT_PNG;
      return new Response(TRANSPARENT_PNG, {
        status: HTTP_OK,
        headers: { "Content-Type": "image/png" },
      });
    }

    if (status !== HTTP_OK) {
      return new Response(statusText, { status });
    }

    const image = await response.arrayBuffer();
    _cache[tile_id] = image;
    return new Response(image, {
      status: HTTP_OK,
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
    return new Response("Internal server error", {
      status: HTTP_INTERNAL_SERVER_ERROR,
    });
  }
}

/**
 * @param url - The URL to parse
 */
function urlParams(
  url: string,
): { z: string; x: string; y: string; type: string; cookies?: string } | null {
  const search = url.split?.("?")?.[1];
  if (search == null) {
    return null;
  }
  try {
    const params = new URLSearchParams(search);
    const z = params.get("z") as string;
    const x = params.get("x") as string;
    const y = params.get("y") as string;
    const type = params.get("type") || "ride";
    const cookies = params.get("cookies") as string;
    return { z, x, y, type, cookies };
  } catch {
    return null;
  }
}

function isNumber(number?: string): boolean {
  if (number == null) return false;
  const parsed = parseInt(number);
  return typeof parsed === "number" && !isNaN(parsed);
}

const TRANSPARENT_PNG = decodeBase64(
  "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAED0lEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DcC8AAB2WfxiAAAAABJRU5ErkJggg==",
);
