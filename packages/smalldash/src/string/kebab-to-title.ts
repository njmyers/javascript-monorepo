import kebabTo from './kebab-to';
import capitalize from './capitalize';
import acceptStrings from './accept-strings';
import compose from '../functional/compose';

type KebabToTitle = (string: string) => string;

/**
 * Converts a kebab-case string to Title Case
 * @param {string}
 */
const kebabToTitle: KebabToTitle = compose(
  capitalize,
  kebabTo(' '),
  acceptStrings
);

export default kebabToTitle;
