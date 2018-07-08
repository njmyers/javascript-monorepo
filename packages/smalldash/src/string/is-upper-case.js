// @flow
import validateLetterString from './validate-letter-string';
import compose from '../functional/compose';

type IsUpperCase = (letter: string) => boolean;

/**
 * Tests whether a letter is uppercase or not
 * @param  {string}  letter the letter to test
 * @return {boolean}        boolean value of whether the letter is upper case
 */
const _isUpperCase: IsUpperCase = (letter) => letter !== letter.toLowerCase();

const isUpperCase: IsUpperCase = compose(
  _isUpperCase,
  validateLetterString
);

export default isUpperCase;
