import createArray from '../create-array';

test('create array with zeros', () => {
	const expected = [0, 0, 0, 0, 0];
	const created = createArray(5);

	created.map((num, index) => expect(num).toBe(expected[index]));
});

test('create array with ones', () => {
	const expected = [1, 1, 1, 1, 1];
	const created = createArray(5, 1);

	created.map((num, index) => expect(num).toBe(expected[index]));
});

test('create array with ones length 10', () => {
	const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	const created = createArray(10, 1);

	created.map((num, index) => expect(num).toBe(expected[index]));
});
