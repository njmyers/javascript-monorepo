import camelTo from './camel-to';
import acceptStrings from './accept-strings';
import { compose } from '../functional';

type CamelToKebab = (arg: string) => string;

/**
 * Converts a camelCase string to kebab-case
 * @type {[type]}
 */
const camelToKebab: CamelToKebab = compose(
  camelTo('-'),
  acceptStrings
);

export default camelToKebab;
