import toCamel from './to-camel';
import { SNAKE_CASE_SEPARATOR } from './constants';

/**
 * Convert a snake_case string to a camelCase string and trim all whitespace.
 */
function snakeToCamel(snakeCaseString) {
  return toCamel(SNAKE_CASE_SEPARATOR)(snakeCaseString);
}

export default snakeToCamel;
