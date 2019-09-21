import kebabToSentence from '../kebab-to-sentence';
import kebabToCamel from '../kebab-to-camel';
import kebabToSnake from '../kebab-to-snake';
import kebabToTitle from '../kebab-to-title';
import kebabToPascal from '../kebab-to-pascal';

import * as strings from '../__fixtures__/cased-strings';

describe('kebabToSentence', () => {
  test('it converts a kebab cased string to sentence case', () => {
    expect(kebabToSentence(strings.KEBAB)).toBe(strings.SENTENCE);
  });

  test('it fails on non string input', () => {
    expect(() => kebabToSentence(9)).toThrow();
  });
});

describe('kebabToTitle', () => {
  test('it converts a kebab cased string to title case', () => {
    expect(kebabToTitle(strings.KEBAB)).toBe(strings.TITLE);
  });

  test('it fails on non string input', () => {
    expect(() => kebabToTitle(9)).toThrow();
  });
});

describe('kebabToCamel', () => {
  test('it converts a kebab cased string to camel case', () => {
    expect(kebabToCamel(strings.KEBAB)).toBe(strings.CAMEL);
  });

  test('it fails on non string input', () => {
    expect(() => kebabToCamel(9)).toThrow();
  });
});

describe('kebabToSnake', () => {
  test('it converts a kebab cased string to snake case', () => {
    expect(kebabToSnake(strings.KEBAB)).toBe(strings.SNAKE);
  });

  test('it fails on non string input', () => {
    expect(() => kebabToSnake(9)).toThrow();
  });
});

describe('kebabToPascal', () => {
  test('it converts a kebab cased string to pascal case', () => {
    expect(kebabToPascal(strings.KEBAB)).toBe(strings.PASCAL);
  });

  test('it fails on non string input', () => {
    expect(() => kebabToPascal(9)).toThrow();
  });
});
