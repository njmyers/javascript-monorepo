/**
 * Checks to see if object is an instance of object
 */
const isObject = (val) => typeof val === 'object' && val !== null;

const comparePrimitives = (value, compare) => {
  if (Number.isNaN(value) && Number.isNaN(compare)) return true;
  else return value === compare;
};

const equals = (actual, expected) => {
  // add an initial short path ... improves speed drastically
  if (actual === expected) {
    return true;
  }
  // Check if input is object or primitive
  if (isObject(actual)) {
    const keys = Object.keys(actual);
    // check if key lengths match (for speed)
    if (keys.length !== Object.keys(expected).length) return false;
    // compare key values
    return (
      keys
        // map to boolean values
        .map((key, i) => {
          // safely access object properties
          if (expected[key] !== undefined) {
            const value = actual[key];
            const compare = expected[key];
            if (isObject(value)) return equals(value, compare);
            else return comparePrimitives(value, compare);
          } else {
            return Object.keys(expected).includes(key);
          }
        })
        // reduce to single boolean
        .reduce((a, b) => a && b, true)
    );
  }
  // return primitive comparison
  return comparePrimitives(actual, expected);
};

export default equals;
