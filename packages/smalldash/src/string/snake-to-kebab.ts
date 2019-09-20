import caseToCase from './case-to-case';
import { SNAKE_CASE_SEPARATOR, KEBAB_CASE_SEPARATOR } from './constants';

/**
 * Convert a snake_case string to a kebab-case string and trim all whitespace.
 */
function snakeToKebab(sentenceCaseString) {
  return caseToCase(SNAKE_CASE_SEPARATOR)(KEBAB_CASE_SEPARATOR)(
    sentenceCaseString
  );
}

export default snakeToKebab;
