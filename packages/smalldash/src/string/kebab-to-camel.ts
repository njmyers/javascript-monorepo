import toCamel from './to-camel';
import { KEBAB_CASE_SEPARATOR } from './constants';

/**
 * Convert a kebab-case string to a camelCase string and trim all whitespace.
 */
function kebabToCamel(kebabCaseString) {
  return toCamel(KEBAB_CASE_SEPARATOR)(
    kebabCaseString
  );
}

export default kebabToCamel;
