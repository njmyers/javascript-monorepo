import isUpperCase from './is-upper-case';

/**
 * Create a camelCase converter function. This can be used to insert separator
 * characters where words were previously delimited by upper case characters.
 */
function camelTo(separator) {
  return string =>
    string
      .trim()
      .split('')
      .map(letter =>
        isUpperCase(letter) ? `${separator}${letter.toLowerCase()}` : letter
      )
      .join('');
}

export default camelTo;
