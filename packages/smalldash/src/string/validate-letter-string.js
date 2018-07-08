// @flow

/**
 * Ensures that the argument is a string of length one
 * @param  {string} string the string to test
 * @return {string}        the same string provided it meets the requirements
 */
const validateLetterString = (string: string) => {
  if (string.length !== 1)
    throw new Error('this function only accepts strings of length equal to 1');

  return string;
};

export default validateLetterString;
