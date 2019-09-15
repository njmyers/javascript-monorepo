import { Complex } from './types';

/**
 * Test whether or not a value is a non empty string. Return true for all non
 * empty strings. Return false for all other values both primitive and complex.
 */
function stringish(value: Complex): boolean {
  return typeof value === 'string' && value.length > 0;
}

export default stringish;
