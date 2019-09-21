import toPascal from './to-pascal';
import { SNAKE_CASE_SEPARATOR } from './constants';

/**
 * Convert a snake-case string to PascalCase string and trim all whitespace.
 */
function snakeToPascal(snakeCaseString) {
  return toPascal(SNAKE_CASE_SEPARATOR)(snakeCaseString);
}

export default snakeToPascal;
