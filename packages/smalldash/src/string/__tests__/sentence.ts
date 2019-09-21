import sentenceToSentence from '../sentence-to-camel';
import sentenceToKebab from '../sentence-to-kebab';
import sentenceToSnake from '../sentence-to-snake';
import sentenceToTitle from '../sentence-to-title';
import sentenceToPascal from '../sentence-to-pascal';

import * as strings from '../__fixtures__/cased-strings';

describe('sentenceToCamel', () => {
  test('it converts a sentence cased string to camel case', () => {
    expect(sentenceToSentence(strings.SENTENCE)).toBe(strings.CAMEL);
  });

  test('it fails on non string input', () => {
    expect(() => sentenceToSentence(9)).toThrow();
  });
});

describe('sentenceToTitle', () => {
  test('it converts a sentence cased string to title case', () => {
    expect(sentenceToTitle(strings.SENTENCE)).toBe(strings.TITLE);
  });

  test('it fails on non string input', () => {
    expect(() => sentenceToTitle(9)).toThrow();
  });
});

describe('sentenceToKebab', () => {
  test('it converts a sentence cased string to kebab case', () => {
    expect(sentenceToKebab(strings.SENTENCE)).toBe(strings.KEBAB);
  });

  test('it fails on non string input', () => {
    expect(() => sentenceToKebab(9)).toThrow();
  });
});

describe('sentenceToSnake', () => {
  test('it converts a sentence cased string to snake case', () => {
    expect(sentenceToSnake(strings.SENTENCE)).toBe(strings.SNAKE);
  });

  test('it fails on non string input', () => {
    expect(() => sentenceToSnake(9)).toThrow();
  });
});

describe('sentenceToPascal', () => {
  test('it converts a sentence cased string to pascal case', () => {
    expect(sentenceToPascal(strings.SENTENCE)).toBe(strings.PASCAL);
  });

  test('it fails on non string input', () => {
    expect(() => sentenceToPascal(9)).toThrow();
  });
});