/**
 * Return a boolean value that indicates whether or not a letter is lowercase.
 */
function isLowerCase(letter: string): boolean {
  return letter !== letter.toUpperCase();
}

export default isLowerCase;
