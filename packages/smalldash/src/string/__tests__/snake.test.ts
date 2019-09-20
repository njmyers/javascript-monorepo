import snakeToSentence from '../snake-to-sentence';
import snakeToCamel from '../snake-to-camel';
import snakeToKebab from '../snake-to-kebab';
import snakeToTitle from '../snake-to-title';
import snakeToPascal from '../snake-to-pascal';

import * as strings from '../__fixtures__/cased-strings';

describe('snakeToSentence', () => {
  test('it converts a snake cased string to sentence case', () => {
    expect(snakeToSentence(strings.SNAKE)).toBe(strings.SENTENCE);
  });

  test('it fails on non string input', () => {
    expect(() => snakeToSentence(9)).toThrow();
  });
});

describe('snakeToTitle', () => {
  test('it converts a snake cased string to title case', () => {
    expect(snakeToTitle(strings.SNAKE)).toBe(strings.TITLE);
  });

  test('it fails on non string input', () => {
    expect(() => snakeToTitle(9)).toThrow();
  });
});

describe('snakeToCamel', () => {
  test('it converts a snake cased string to camel case', () => {
    expect(snakeToCamel(strings.SNAKE)).toBe(strings.CAMEL);
  });

  test('it fails on non string input', () => {
    expect(() => snakeToCamel(9)).toThrow();
  });
});

describe('snakeToKebab', () => {
  test('it converts a snake cased string to kebab case', () => {
    expect(snakeToKebab(strings.SNAKE)).toBe(strings.KEBAB);
  });

  test('it fails on non string input', () => {
    expect(() => snakeToKebab(9)).toThrow();
  });
});

describe('snakeToPascal', () => {
  test('it converts a snake cased string to pascal case', () => {
    expect(snakeToPascal(strings.SNAKE)).toBe(strings.PASCAL);
  });

  test('it fails on non string input', () => {
    expect(() => snakeToPascal(9)).toThrow();
  });
});
