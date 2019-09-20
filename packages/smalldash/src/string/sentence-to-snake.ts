import caseToCase from './case-to-case';
import { KEBAB_CASE_SEPARATOR, SNAKE_CASE_SEPARATOR } from './constants';

/**
 * Convert a sentence case string to a snake_case string and trim all
 * whitespace.
 */
function sentenceToSnake(sentenceCaseString) {
  return caseToCase(SNAKE_CASE_SEPARATOR)(KEBAB_CASE_SEPARATOR)(
    sentenceCaseString
  );
}

export default sentenceToSnake;
