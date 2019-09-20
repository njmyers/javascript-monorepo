import camelTo from './camel-to';
import { SNAKE_CASE_SEPARATOR } from './constants';

/**
 * Convert a camelCase string to snake_case string and trim all whitespace.
 */
function camelToSnake(camelCaseString) {
  return camelTo(SNAKE_CASE_SEPARATOR)(camelCaseString);
}

export default camelToSnake;
