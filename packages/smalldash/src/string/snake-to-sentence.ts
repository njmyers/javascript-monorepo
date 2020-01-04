import caseToCase from './case-to-case';
import { SNAKE_CASE_SEPARATOR, SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a snake_case string to sentence case string and trim all whitespace.
 */
function snakeToSentence(snakeCaseString: string): string {
  return caseToCase(SNAKE_CASE_SEPARATOR)(SENTENCE_CASE_SEPARATOR)(
    snakeCaseString
  );
}

export default snakeToSentence;
