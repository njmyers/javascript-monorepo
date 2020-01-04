import toCamel from './to-camel';
import { SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a sentence case string to a camelCase string and trim all whitespace.
 */
function sentenceToCamel(kebabCaseString: string): string {
  return toCamel(SENTENCE_CASE_SEPARATOR)(kebabCaseString);
}

export default sentenceToCamel;
