import queryString from '../query-string';

test('assembles query string correctly', () => {
	const query = {
		per_page: 10,
		page: 1,
	};

	const string = '?per_page=10&page=1';

	expect(queryString(query)).toBe(string);
});

test('ignores parameters for id query', () => {
	const query = {
		per_page: 10,
		page: 1,
		id: 8304,
	};

	const string = '/8304';

	expect(queryString(query)).toBe(string);
});
