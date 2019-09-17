import isUpperCase from './is-upper-case';

type CamelTo = (separator: string) => (string: string) => string;

/**
 * Creates a camelCase converter function
 * @param  {string} separator the separator to insert at a camelcase division
 * @param  {string} str       the string to convert
 * @return {function}         the converter function
 * @return {string}           the converted string
 */
const camelTo: CamelTo = (separator) => (str) =>
  str
    .split('')
    .map(
      (letter) =>
        isUpperCase(letter) ? separator + letter.toLowerCase() : letter
    )
    .join('');

export default camelTo;
