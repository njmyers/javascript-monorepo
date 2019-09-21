import camelToSentence from '../camel-to-sentence';
import camelToKebab from '../camel-to-kebab';
import camelToSnake from '../camel-to-snake';
import camelToTitle from '../camel-to-title';
import camelToPascal from '../camel-to-pascal';

import * as strings from '../__fixtures__/cased-strings';

describe('camelToSentence', () => {
  test('it converts a camel cased string to sentence case', () => {
    expect(camelToSentence(strings.CAMEL)).toBe(strings.SENTENCE);
  });

  test('it fails on non string input', () => {
    expect(() => camelToSentence(9)).toThrow();
  });
});

describe('camelToTitle', () => {
  test('it converts a camel cased string to title case', () => {
    expect(camelToTitle(strings.CAMEL)).toBe(strings.TITLE);
  });

  test('it fails on non string input', () => {
    expect(() => camelToTitle(9)).toThrow();
  });
});

describe('camelToKebab', () => {
  test('it converts a camel cased string to kebab case', () => {
    expect(camelToKebab(strings.CAMEL)).toBe(strings.KEBAB);
  });

  test('it fails on non string input', () => {
    expect(() => camelToKebab(9)).toThrow();
  });
});

describe('camelToSnake', () => {
  test('it converts a camel cased string to snake case', () => {
    expect(camelToSnake(strings.CAMEL)).toBe(strings.SNAKE);
  });

  test('it fails on non string input', () => {
    expect(() => camelToSnake(9)).toThrow();
  });
});

describe('camelToPascal', () => {
  test('it converts a camel cased string to pascal case', () => {
    expect(camelToPascal(strings.CAMEL)).toBe(strings.PASCAL);
  });

  test('it fails on non string input', () => {
    expect(() => camelToPascal(9)).toThrow();
  });
});