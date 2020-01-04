/**
 * Capitalize all words in a sentence or string based on a character separator.
 * The separator will be used to separate the string into "words" which will
 * then all have capitalization applied.
 */
function capitalize(sentence: string, separator = ' '): string {
  return sentence
    .split(separator)
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(separator);
}

export default capitalize;
