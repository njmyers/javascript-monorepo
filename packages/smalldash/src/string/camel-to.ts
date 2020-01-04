import isUpperCase from './is-upper-case';

/**
 * Create a camelCase converter function. This can be used to insert separator
 * characters where words were previously delimited by upper case characters.
 * This function will also trim all whitespace before and after the string.
 */
function camelTo(separator: string) {
  return (string: string): string =>
    string
      .trim()
      .split('')
      .map(letter =>
        isUpperCase(letter) ? `${separator}${letter.toLowerCase()}` : letter
      )
      .join('');
}

export default camelTo;
