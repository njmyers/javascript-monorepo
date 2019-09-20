import caseToCase from './case-to-case';
import { KEBAB_CASE_SEPARATOR, SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a sentence case string to a kebab-case string and trim all
 * whitespace.
 */
function sentenceToKebab(sentenceCaseString) {
  return caseToCase(SENTENCE_CASE_SEPARATOR)(KEBAB_CASE_SEPARATOR)(
    sentenceCaseString
  );
}

export default sentenceToKebab;
