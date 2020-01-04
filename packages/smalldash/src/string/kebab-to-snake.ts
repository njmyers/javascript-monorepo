import caseToCase from './case-to-case';
import { KEBAB_CASE_SEPARATOR, SNAKE_CASE_SEPARATOR } from './constants';

/**
 * Convert a kebab-case string to snake_case string and trim all whitespace.
 */
function kebabToSnake(kebabCaseString: string): string {
  return caseToCase(KEBAB_CASE_SEPARATOR)(SNAKE_CASE_SEPARATOR)(
    kebabCaseString
  );
}

export default kebabToSnake;
