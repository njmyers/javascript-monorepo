import mapLeft from '../map-left';

test('map multiple transformations left to right', () => {
	const arr = [0, 1, 2, 3];
	const expected = [2, 3, 3, 3];
	const transformer = (val) => val + 1;
	const toBool = (val) => new Boolean(val);

	expect(mapLeft(transformer, transformer, toBool)(arr)).toMatchObject(expected);
});
