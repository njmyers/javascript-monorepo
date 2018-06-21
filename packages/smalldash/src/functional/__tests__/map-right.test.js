import mapRight from '../map-right';

test('map multiple transformations right to left', () => {
	const arr = [0, 1, 2, 3];
	const expected = [2, 3, 3, 3];
	const transformer = (val) => val + 1;
	const toBool = (val) => new Boolean(val);

	expect(mapRight(toBool, transformer, transformer)(arr)).toMatchObject(expected);
});
