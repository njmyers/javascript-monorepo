import toPascal from './to-pascal';
import { SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a sentence case string to PascalCase string and trim all whitespace.
 */
function sentenceToPascal(sentenceCaseString) {
  return toPascal(SENTENCE_CASE_SEPARATOR)(sentenceCaseString);
}

export default sentenceToPascal;
