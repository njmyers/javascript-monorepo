import kebabTo from './kebab-to';
import acceptStrings from './accept-strings';
import compose from '../functional/compose';

type KebabToSentence = (string: string) => string;

/**
 * Converts kebab-case to sentence case
 * @type {[type]}
 */
const kebabToSentence: KebabToSentence = compose(
  kebabTo(' '),
  acceptStrings
);

export default kebabToSentence;
