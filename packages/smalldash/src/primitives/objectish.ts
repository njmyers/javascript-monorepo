import { Complex } from './types';

/**
 * Test whether or not a value is a non null and non array object. Return true
 * for all non null objects that are also not arrays. Return false for all other
 * types of values.
 */
function objectish(value: Complex): boolean {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export default objectish;
