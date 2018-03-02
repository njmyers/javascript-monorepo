import parse from '../parse';

test('parse query string', () => {
	const obj = {
		property: 'value',
	};

	const parsed = parse('?property=value');
	expect(parsed).toMatchObject(obj);
});
