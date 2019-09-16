import validateLetterString from './validate-letter-string';
import compose from '../functional/compose';

type IsLowerCase = (letter: string) => boolean;

/**
 * Tests whether a letter is lowercase or not
 * @param  {string}  letter the letter to test
 * @return {boolean}        boolean value of whether the letter is upper case
 */
const _isLowerCase: IsLowerCase = (letter) => letter !== letter.toUpperCase();

const isLowerCase: IsLowerCase = compose(
  _isLowerCase,
  validateLetterString
);

export default isLowerCase;
