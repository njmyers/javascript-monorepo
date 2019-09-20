import toCamel from './to-camel';
import { SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a kebab-case string to a sentence case string and trim all
 * whitespace.
 */
function sentenceToCamel(kebabCaseString) {
  return toCamel(SENTENCE_CASE_SEPARATOR)(kebabCaseString);
}

export default sentenceToCamel;
