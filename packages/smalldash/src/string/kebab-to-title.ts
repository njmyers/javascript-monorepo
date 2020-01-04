import caseToCase from './case-to-case';
import { KEBAB_CASE_SEPARATOR, SENTENCE_CASE_SEPARATOR } from './constants';
import compose from '../functional/compose';
import capitalize from './capitalize';

/**
 * Convert a kebab-case string to sentence case string and trim all whitespace.
 */
function kebabToTitle(kebabCaseString: string): string {
  return compose(
    capitalize,
    caseToCase(KEBAB_CASE_SEPARATOR)(SENTENCE_CASE_SEPARATOR)
  )(kebabCaseString);
}

export default kebabToTitle;
