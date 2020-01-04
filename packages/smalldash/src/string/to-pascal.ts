// @ts-nocheck
import capitalize from './capitalize';

/**
 * Return a function that converts a string to pascal case. The separator
 * determines where to create capitalization groupings. Use this function to
 * generate other functions such as snakeToPascal or any other case to pascal
 * case conversions.
 */
function toPascal(separator: string) {
  return (string: string): string =>
    string
      .split(separator)
      .map(capitalize)
      .join('');
}

export default toPascal;
