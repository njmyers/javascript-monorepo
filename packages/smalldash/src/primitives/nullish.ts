import { Complex } from './types';

/**
 * Test whether or not a value is null or undefined. Return true if the value is
 * null or undefined and return false for all other values and types.
 */
function nullish(value: Complex): boolean {
  return value === null || value === undefined;
}

export default nullish;
