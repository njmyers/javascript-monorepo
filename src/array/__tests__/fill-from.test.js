import fillFrom from '../fill-from';

test('fill array with sequence', () => {
	const expected = [0, 1, 2, 3, 4];
	const filled = fillFrom(5);

	console.log(filled);

	filled.map((num, index) => expect(num).toBe(expected[index]));
});

test('fill array with ones', () => {
	const expected = [1, 1, 1, 1, 1];
	const filled = fill(same)([])(5, 1);

	filled.map((num, index) => expect(num).toBe(expected[index]));
});

test('fill array with ones length 10', () => {
	const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	const filled = fill(same)([])(10, 1);

	filled.map((num, index) => expect(num).toBe(expected[index]));
});
