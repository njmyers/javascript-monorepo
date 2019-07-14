import { SCALE } from './constants';

/* Normalize a volume range against a max value */
export function normalizeVolume(value: number, max: number = 1) {
  return Number.isFinite(value / max) ? Math.ceil((value / max) * SCALE) : 0;
}

/* Denormalize a volume range against a max value */
export function denormalizeVolume(value: number, max: number = 1) {
  return (value / SCALE) * max;
}
