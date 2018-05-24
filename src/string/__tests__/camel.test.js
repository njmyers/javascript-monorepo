import camelToSentence from '../camel-to-sentence';
import camelToKebab from '../camel-to-kebab';
import camelToSnake from '../camel-to-snake';
import camelToTitle from '../camel-to-title';
import camelToPascal from '../camel-to-pascal';

test('camel string to sentence case', () => {
	const string = 'thisIsSomeCamel';
	const expected = 'this is some camel';

	expect(camelToSentence(string)).toBe(expected);
});

test('camel string to title case', () => {
	const string = 'thisIsSomeCamel';
	const expected = 'This Is Some Camel';

	expect(camelToTitle(string)).toBe(expected);
});

test('camel string to kebab case', () => {
	const string = 'thisIsSomeCamel';
	const expected = 'this-is-some-camel';

	expect(camelToKebab(string)).toBe(expected);
});

test('camel string to snake case', () => {
	const string = 'thisIsSomeCamel';
	const expected = 'this_is_some_camel';

	expect(camelToSnake(string)).toBe(expected);
});

test('camel string to pascal case', () => {
	const string = 'thisIsSomeCamel';
	const expected = 'ThisIsSomeCamel';

	expect(camelToPascal(string)).toBe(expected);
});

test('fails on non string input', () => {
	expect(() => camelToKebab(9)).toThrow();
	expect(() => camelToSentence(9)).toThrow();
	expect(() => camelToSnake(9)).toThrow();
	expect(() => camelToTitle(9)).toThrow();
	expect(() => camelToPascal(9)).toThrow();
});
