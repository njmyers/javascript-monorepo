import kebabToSentence from '../kebab-to-sentence';
import kebabToCamel from '../kebab-to-camel';
import kebabToSnake from '../kebab-to-snake';

test('kebab string to sentence case', () => {
	const string = 'this-is-some-kebab';
	const expected = 'this is some kebab';

	expect(kebabToSentence(string)).toBe(expected);
});

test('kebab string to sentence case preserves capitalization', () => {
	const string = 'This-is-some-kebab';
	const expected = 'This is some kebab';

	expect(kebabToSentence(string)).toBe(expected);
});

test('kebab string to camel case', () => {
	const string = 'this-is-some-kebab';
	const expected = 'thisIsSomeKebab';

	expect(kebabToCamel(string)).toBe(expected);
});

test('kebab string to snake case', () => {
	const string = 'this-is-some-kebab';
	const expected = 'this_is_some_kebab';

	expect(kebabToSnake(string)).toBe(expected);
});

test('kebab string to snake case preserves capitalization', () => {
	const string = 'This-is-some-kebab';
	const expected = 'This_is_some_kebab';

	expect(kebabToSnake(string)).toBe(expected);
});

test('fails on non string input', () => {
	expect(() => kebabToCamel(9)).toThrow();
	expect(() => kebabToSentence(9)).toThrow();
	expect(() => kebabToSentence(9)).toThrow();
});
