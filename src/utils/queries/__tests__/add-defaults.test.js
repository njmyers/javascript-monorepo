import addDefaults from '../add-defaults';

const defaults = addDefaults({
	per_page: 10,
});

test('add default query parameters', () => {
	const query = {
		page: 1,
	};

	const merged = defaults(query);

	expect(merged).toMatchObject({
		per_page: 10,
		page: 1,
	});
});
