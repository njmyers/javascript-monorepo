import { SCALE } from './constants';

/** Normalize an input range against a different max length */
export function normalizeRange(value: number, max: number): number {
  return Number.isFinite(value / max) ? Math.ceil((value / max) * SCALE) : 0;
}

/** Denormalize an input range against a different max length */
export function denormalizeRange(value: number, max: number): number {
  return (value / SCALE) * max;
}
