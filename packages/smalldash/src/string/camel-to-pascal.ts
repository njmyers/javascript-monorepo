import camelTo from './camel-to';
import capitalize from './capitalize';

/**
 * Convert a camelCase string to sentence case string and trim all whitespace.
 */
function camelToPascal(camelCaseString) {
  return capitalize(camelCaseString);
}

export default camelToPascal;