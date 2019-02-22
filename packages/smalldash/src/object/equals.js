/** @flow */
import { nullish, objectish, arrayish } from '../primitives';
import type { Complex, Primitive } from '../primitives';

/** compare primitives with NaN */
const primitives = (value: Primitive, compare: Primitive): boolean %checks => {
  return (Number.isNaN(value) && Number.isNaN(compare)) || value === compare;
};

/** compare references for shortcut */
const reference = (value: Complex, compare: Complex): boolean %checks =>
  value === compare;

/** Get object or array length */
const length = (object: Complex): number =>
  Array.isArray(object) ? object.length : Object.keys(object).length;

/**
 * Deep equals descends into entire object
 * Rewrote this as a giant ternary in attempt to get flow to understand this
 * Obviously way too many checks here for flow but we can try right?
 */
const equals = (actual: Complex, expected: Complex): boolean %checks =>
  // add an initial short path ... improves speed drastically
  !reference(actual, expected)
    ? // Check if input is object or array
      objectish(actual) || arrayish(actual)
      ? // check if key lengths match (for speed)
        length(actual) !== length(expected)
        ? false
        : Object.entries(actual)
            .map((entry: [string, Complex]) =>
              arrayish(entry[1]) || objectish(entry[1])
                ? equals(entry[1], expected[entry[0]])
                : primitives(entry[1], expected[entry[0]])
            )
            .reduce((a, b) => a && b, true)
      : primitives(actual, expected)
    : true;

export default equals;
