import camelTo from './camel-to';
import { KEBAB_CASE_SEPARATOR } from './constants';

/**
 * Convert a camelCase string to kebab-case string and trim all whitespace.
 */
function camelToKebab(camelCaseString: string): string {
  return camelTo(KEBAB_CASE_SEPARATOR)(camelCaseString);
}

export default camelToKebab;
