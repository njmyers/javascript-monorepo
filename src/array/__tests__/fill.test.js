import fill from '../fill';

const same = (val) => val;

test('fill array with zeros', () => {
	const expected = [0, 0, 0, 0, 0];
	const filled = fill(same)([])(5);

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
