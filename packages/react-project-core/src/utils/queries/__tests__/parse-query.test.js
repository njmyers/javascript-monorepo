import parseQuery from '../parse-query';

test('parse query string', () => {
	const obj = {
		property: 'value',
	};

	const parsed = parseQuery('?property=value');
	expect(parsed).toMatchObject(obj);
});
