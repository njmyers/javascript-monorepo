import queryString from '../query-string';

test('assembles query string correctly', () => {
	const query = {
		per_page: 10,
		page: 1,
	};

	const string = '?per_page=10&page=1';

	expect(queryString(query)).toBe(string);
});
