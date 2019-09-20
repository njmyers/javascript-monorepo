import caseToCase from './case-to-case';
import { SNAKE_CASE_SEPARATOR, SENTENCE_CASE_SEPARATOR } from './constants';
import compose from '../functional/compose';
import capitalize from './capitalize';

/**
 * Convert a snake_case string to Title Case string and trim all whitespace.
 */
function snakeToTitle(snakeCaseString) {
  return compose(
    capitalize,
    caseToCase(SNAKE_CASE_SEPARATOR)(SENTENCE_CASE_SEPARATOR)
  )(snakeCaseString);
}

export default snakeToTitle;
