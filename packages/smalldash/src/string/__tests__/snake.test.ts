import snakeToSentence from '../snake-to-sentence';
import snakeToCamel from '../snake-to-camel';
import snakeToKebab from '../snake-to-kebab';
import snakeToTitle from '../snake-to-title';

test('snake string to sentence case', () => {
  const string = 'this_is_some_snake';
  const expected = 'this is some snake';

  expect(snakeToSentence(string)).toBe(expected);
});

test('snake string to sentence case preserves capitalization', () => {
  const string = 'This_is_some_snake';
  const expected = 'This is some snake';

  expect(snakeToSentence(string)).toBe(expected);
});

test('snake string to camel case', () => {
  const string = 'this_is_some_snake';
  const expected = 'thisIsSomeSnake';

  expect(snakeToCamel(string)).toBe(expected);
});

test('snake string to kebab case', () => {
  const string = 'this_is_some_snake';
  const expected = 'this-is-some-snake';

  expect(snakeToKebab(string)).toBe(expected);
});

test('snake string to kebab case preserves capitalization', () => {
  const string = 'This_is_some_snake';
  const expected = 'This-is-some-snake';

  expect(snakeToKebab(string)).toBe(expected);
});

test('snake string to title case', () => {
  const string = 'This_is_some_snake';
  const expected = 'This Is Some Snake';

  expect(snakeToTitle(string)).toBe(expected);
});

test('fails on non string input', () => {
  expect(() => snakeToCamel(9)).toThrow();
  expect(() => snakeToSentence(9)).toThrow();
  expect(() => snakeToSentence(9)).toThrow();
});
