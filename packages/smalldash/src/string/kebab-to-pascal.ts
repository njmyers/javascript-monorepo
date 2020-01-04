import toPascal from './to-pascal';
import { KEBAB_CASE_SEPARATOR } from './constants';

/**
 * Convert a kebab-case string to PascalCase string and trim all whitespace.
 */
function kebabToPascal(kebabCaseString: string): string {
  return toPascal(KEBAB_CASE_SEPARATOR)(kebabCaseString);
}

export default kebabToPascal;
