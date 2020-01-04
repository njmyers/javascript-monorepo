// @ts-nocheck
import camelTo from './camel-to';
import capitalize from './capitalize';
import { SENTENCE_CASE_SEPARATOR } from './constants';
import { compose } from '../functional';

/**
 * Convert a camelCase string to sentence case string and trim all whitespace.
 */
function camelToTitle(camelCaseString: string): string {
  return compose(
    capitalize,
    camelTo(SENTENCE_CASE_SEPARATOR)
  )(camelCaseString);
}

export default camelToTitle;
