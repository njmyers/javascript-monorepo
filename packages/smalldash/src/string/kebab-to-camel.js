import toCamel from './to-camel';
import acceptStrings from './accept-strings';
import compose from '../functional/compose';

type KebabToCamel = (string: string) => string;

/**
 * Converts kebab-case to camelCase
 * @type {[type]}
 */
const kebabToCamel: KebabToCamel = compose(
  toCamel('-'),
  acceptStrings
);

export default kebabToCamel;
