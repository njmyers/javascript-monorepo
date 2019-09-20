import caseToCase from './case-to-case';
import { KEBAB_CASE_SEPARATOR, SENTENCE_CASE_SEPARATOR } from './constants';
import compose from '../functional/compose';
import capitalize from './capitalize';

/**
 * Convert a sentence case string to Title Case string and trim all whitespace.
 */
function kebabToSentence(sentenceCaseString) {
  return compose(
    capitalize,
    caseToCase(SENTENCE_CASE_SEPARATOR)(KEBAB_CASE_SEPARATOR)
  )(sentenceCaseString);
}

export default kebabToSentence;
