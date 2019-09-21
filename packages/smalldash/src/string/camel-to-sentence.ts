import camelTo from './camel-to';
import { SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a camelCase string to sentence case string and trim all whitespace.
 */
function camelToSentence(camelCaseString) {
  return camelTo(SENTENCE_CASE_SEPARATOR)(camelCaseString);
}

export default camelToSentence;
