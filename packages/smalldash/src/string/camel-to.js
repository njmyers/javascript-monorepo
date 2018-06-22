import isUpperCase from './is-upper-case';

const camelTo = (separator) => (str) =>
  str
    .split('')
    .map(
      (letter) =>
        isUpperCase(letter) ? separator + letter.toLowerCase() : letter
    )
    .join('');

export default camelTo;
