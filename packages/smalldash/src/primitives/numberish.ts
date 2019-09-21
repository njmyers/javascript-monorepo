import { Complex } from './types';

/**
 * Test whether or not a value is a number excluding NaN. Return true for all
 * valid numbers except NaN. This includes positive and negative infinities as
 * well as zeros and max/min safe integers.
 */
function numberish(value: Complex): boolean {
  return typeof value === 'number' && !Number.isNaN(value);
}

export default numberish;
