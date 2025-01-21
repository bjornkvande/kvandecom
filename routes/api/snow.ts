import { MetWeather, ThreeDayForecast } from "../../kvande/source/snow/types.ts";
import { to72HourMetForecast } from "../../kvande/source/snow/met.ts";
import {
  toDailyPrecipitationAndTemp,
  toSnowTimeSerie,
} from "../../kvande/source/snow/snow.ts";

const HTTP_OK = 200;
const HTTP_BAD_REQUEST = 400;
const HTTP_INTERNAL_SERVER_ERROR = 500;

/**
 * This will respond with a snow forecast
 *
 * Example of call to this api endpoint:
 * https://kvande.com/api/snow?lat=60.123&lng=5.678
 */
export async function handler(req: Request): Promise<Response> {
  // get the lat/lng coordinates
  const params = urlParams(req.url);
  if (params == null) {
    console.log("Bad request", req.url);
    return new Response("Bad request", { status: HTTP_BAD_REQUEST });
  }

  // make sure we have a valid request
  const { lat, lng } = params;
  if (!(isNumber(lat) && isNumber(lng))) {
    console.log("Bad request", req.url);
    return new Response("Bad request", { status: HTTP_BAD_REQUEST });
  }

  // now get the snow forecast from the met.no API
  try {
    const snow = await fetch72HourForecast(parseFloat(lat), parseFloat(lng));
    // response.headers.set("Access-Control-Allow-Origin", "https://your-client.example.com");
    return new Response(JSON.stringify(snow || {}), {
      status: HTTP_OK,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
    return new Response("Internal server error " + error, {
      status: HTTP_INTERNAL_SERVER_ERROR,
    });
  }
}

/**
 * Gets the z, y, and y parameters for the tile request.
 *
 * @param url - The URL to parse
 */
function urlParams(url: string): { lat: string; lng: string } | null {
  const search = url.split?.("?")?.[1];
  if (search == null) {
    return null;
  }
  try {
    const params = new URLSearchParams(search);
    const lat = params.get("lat") as string;
    const lng = params.get("lng") as string;
    return { lat, lng };
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
  return typeof parsed === "number" && !isNaN(parsed);
}

/**
 * Fetches the weather forecast from the MET API and converts it into a 3-day hourly
 * snow forecast.
 *
 * @param lat - The latitude of the location
 * @param lng - The longitude of the location
 */
async function fetch72HourForecast(
  lat: number,
  lng: number,
): Promise<ThreeDayForecast | null> {
  const forecast = await fetchWeather({ lat, lng });
  if (forecast) {
    return toSnowForecast(to72HourMetForecast(forecast));
  } else {
    return null;
  }
}

/**
 * This fetches the forecast for a specific lat/lng location.
 *
 * @param url - The URL to the MET weather API for a specific lat/lng location
 * @returns - The forecast for the lat/lng location
 */
async function fetchWeather(
  latlng: { lat: number; lng: number },
): Promise<MetWeather | null> {
  const result = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latlng.lat}&lon=${latlng.lng}`,
  );
  try {
    return await result.json();
  } catch (error) {
    console.error("Could not fetch weather for location", latlng, error);
    return null;
  }
}

/**
 * This converts the forecast into a hourly 3-day snow/sleet/rain forecast with
 * the weather per hour and the total precipitation and temperature for 24/48/72 hours.
 * @param forecast - The forecast from the MET API
 * @returns - The 3-day snow forecast
 */
function toSnowForecast(forecast: MetWeather): ThreeDayForecast {
  const timeseries = forecast.properties.timeseries.map(toSnowTimeSerie);
  const topDaily = toDailyPrecipitationAndTemp(timeseries);
  return { timeseries, ...topDaily };
}
