import { Complex } from './types';

/**
 * Test whether or not a value is an array. Return true if the value is an array
 * and return false for all other types.
 */
function arrayish(value: Complex): boolean {
  return Array.isArray(value);
}

export default arrayish;
