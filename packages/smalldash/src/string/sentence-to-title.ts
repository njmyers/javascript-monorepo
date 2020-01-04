import capitalize from './capitalize';

/**
 * Convert a sentence case string to Title Case string and trim all whitespace.
 */
function sentenceToTitle(sentenceCaseString: string): string {
  return capitalize(sentenceCaseString);
}

export default sentenceToTitle;
