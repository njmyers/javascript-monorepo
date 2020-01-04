/**
 * Create two closures to generate a function that will transform a string
 * separator from one character to another. This can be used to create
 * capitalization or character case transform such as going from snake_case to
 * kebab-case.
 */
const caseToCase = fromSeparator => toSeparator => (sentence: string): string =>
  sentence
    .trim()
    .split(fromSeparator)
    .join(toSeparator);

export default caseToCase;
