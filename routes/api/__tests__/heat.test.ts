import { expect } from 'jsr:@std/expect';

import { isAllowedDomain } from '../heat.ts';

Deno.test('it should return true for valid domains', () => {
  expect(isAllowedDomain('https://sjogg.no')).toBe(true);
  expect(isAllowedDomain('https://sjogg.no/')).toBe(true);
  expect(isAllowedDomain('http://localhost:8000')).toBe(true);
  expect(isAllowedDomain('https://trailguide.net/')).toBe(true);
  expect(isAllowedDomain('https://beta.trailguide.net/')).toBe(true);
  expect(isAllowedDomain('https://mtbmap.app/')).toBe(true);
  expect(isAllowedDomain('https://cyclemap.net/')).toBe(true);
  expect(isAllowedDomain('https://topptur.guide/')).toBe(true);
  expect(isAllowedDomain('https://skiguide.app/')).toBe(true);
});

Deno.test('it should return false for invalid domains', () => {
  expect(isAllowedDomain('https://notmy.domain.no')).toBe(false);
  expect(isAllowedDomain('https://strava.com')).toBe(false);
});
