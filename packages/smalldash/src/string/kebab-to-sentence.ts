import caseToCase from './case-to-case';
import { KEBAB_CASE_SEPARATOR, SENTENCE_CASE_SEPARATOR } from './constants';

/**
 * Convert a kebab-case string to sentence case string and trim all whitespace.
 */
function kebabToSentence(kebabCaseString) {
  return caseToCase(KEBAB_CASE_SEPARATOR)(SENTENCE_CASE_SEPARATOR)(
    kebabCaseString
  );
}

export default kebabToSentence;
