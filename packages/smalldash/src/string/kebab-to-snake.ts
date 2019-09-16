import kebabTo from './kebab-to';
import acceptStrings from './accept-strings';
import compose from '../functional/compose';

type KebabToSnake = (string: string) => string;

/**
 * Converts kebab-case to snake_case
 * @type {[type]}
 */
const kebabToSnake: KebabToSnake = compose(
  kebabTo('_'),
  acceptStrings
);

export default kebabToSnake;
