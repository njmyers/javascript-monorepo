import capitalize from './capitalize';

/**
 * Return a function that converts a string to camel case. The separator
 * determines where to create capitalization groupings. Use this function to
 * generate other functions such as snakeToCamel or any other case to camel case
 * conversions.
 */
function toCamel(separator: string) {
  return (string: string): string =>
    string
      .split(separator)
      .map((word, i) => (i !== 0 ? capitalize(word) : word.toLowerCase()))
      .join('');
}

export default toCamel;
