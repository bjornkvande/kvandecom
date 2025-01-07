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

const webCache = await caches.open("tile-cache");

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

  // we use the deno web cache to cache tiles, they can safely be
  // cached due to very infrequent changes to the heatmap tiles
  const cachedResponse = await webCache.match(req);
  if (cachedResponse) {
    console.log("cache hit", req.url);
    return cachedResponse;
  }

  // a tile is identified with x and y coordinates and a zoom level
  // we also use a type parameter to specify biking, running, skiing, etc.
  const params = urlParams(req.url);
  if (params == null) {
    return new Response("Bad request", { status: HTTP_BAD_REQUEST });
  }

  // this is used by the trailguide.net server to get the
  // latest cookies so it can load the tiles itself
  if (params.cookies === COOKIE_PASSWORD) {
    const body = { POLICY, SIGNATURE };
    return Response.json(body);
  }

  // for a valid request, we need the proper zoom level and coordinates
  const { z, x, y, type } = params;
  if (!(isNumber(z) && isNumber(x) && isNumber(y))) {
    return new Response("Bad request", { status: HTTP_BAD_REQUEST });
  }

  try {
    // now we are ready to fetch the heatmap tile from the server
    const tile = `${z}/${x}/${y}`;
    console.log("fetch tile", req.url);
    const url = `${heatURL(type)}/${tile}.png` +
      `?Key-Pair-Id=${KEY_PAIR_ID}` +
      `&Signature=${SIGNATURE}&Policy=${POLICY}`;
    const heatMapResponse = await fetch(url);
    const { status, statusText } = heatMapResponse || {};

    // it was not found, just return a transparent PNG
    if (status === HTTP_NOT_FOUND) {
      const transparent = new Response(TRANSPARENT_PNG, {
        status: HTTP_OK,
        headers: { "Content-Type": "image/png" },
      });
      await webCache.put(req, transparent.clone());
      return transparent;
    }

    // for whatever reason we could not get the tile, return an error,
    // we really do not want to convey the error from the tile server
    if (status !== HTTP_OK) {
      console.log({ status, statusText });
      return new Response("Internal server error", {
        status: HTTP_INTERNAL_SERVER_ERROR,
      });
    }

    // cache the image and return it
    const image = await heatMapResponse.arrayBuffer();
    const imageResponse = new Response(image, {
      status: HTTP_OK,
      headers: { "Content-Type": "image/png" },
    });
    await webCache.put(req, imageResponse.clone());
    return imageResponse;
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
