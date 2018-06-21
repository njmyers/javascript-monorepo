import uniq from '../uniq';

test('uniq array regardless of order', () => {
	const arr = [0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 4, 5];
	const expected = [0, 1, 2, 3, 4, 5];

	const transformed = uniq(arr);

	transformed.sort().map((num, index) => expect(num).toBe(expected.sort()[index]));
});

test('uniq array preserving order', () => {
	const arr = [0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 4, 5];
	const expected = [0, 1, 2, 3, 4, 5];

	const transformed = uniq(arr);

	transformed.map((num, index) => expect(num).toBe(expected[index]));
});

test('uniq array of simple bool', () => {
	const arr = [true, false, false, true];
	const expected = [true, false];

	const transformed = uniq(arr);

	transformed.map((num, index) => expect(num).toBe(expected[index]));
});

// undefined , null , NaN , 0 , "" (empty string), and false
test('uniq array of falsey values', () => {
	const arr = [undefined, undefined, null, null, NaN, NaN, 0, 0, '', '', false];
	const expected = [undefined, null, NaN, 0, '', false];

	const transformed = uniq(arr);
	transformed.map((num, index) => expect(num).toBe(expected[index]));
});

test('uniq array of object by shallow property', () => {
	const arr = [
		{ id: 0 },
		{ id: 0 },
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
	];

	const expected = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
	const transformed = uniq(arr, (obj) => obj.id);

	transformed.map((obj, index) => expect(obj.id).toBe(expected[index].id));
});

test('uniq array of objects by nested property', () => {
	const arr = [
		{ name: { id: 0 } },
		{ name: { id: 0 } },
		{ name: { id: 1 } },
		{ name: { id: 2 } },
		{ name: { id: 3 } },
		{ name: { id: 3 } },
		{ name: { id: 4 } },
		{ name: { id: 5 } },
	];

	const expected = [
		{ name: { id: 0 } },
		{ name: { id: 1 } },
		{ name: { id: 2 } },
		{ name: { id: 3 } },
		{ name: { id: 4 } },
		{ name: { id: 5 } },
	];
	const transformed = uniq(arr, (obj) => obj.name.id);
	transformed.map((obj, index) => expect(obj.name.id).toBe(expected[index].name.id));
});

test('uniq preserves order by having choosing first uniq options', () => {
	const arr = [
		{ name: { id: 0, other: true } },
		{ name: { id: 0, other: false } },
		{ name: { id: 1, other: false } },
		{ name: { id: 2, other: false } },
		{ name: { id: 3, other: false } },
		{ name: { id: 3, other: true } },
		{ name: { id: 4, other: false } },
		{ name: { id: 5, other: false } },
	];

	const expected = [
		{ name: { id: 0, other: true } },
		{ name: { id: 1, other: false } },
		{ name: { id: 2, other: false } },
		{ name: { id: 3, other: false } },
		{ name: { id: 4, other: false } },
		{ name: { id: 5, other: false } },
	];
	const transformed = uniq(arr, (obj) => obj.name.id);

	// check uniq ids
	transformed.map((obj, index) => expect(obj.name.id).toBe(expected[index].name.id));

	// check that properties match
	transformed.map((obj, index) => expect(obj.name.other).toBe(expected[index].name.other));
});

test('uniq by falsey values', () => {
	const arr = [
		{ name: { id: 0, other: true } },
		{ name: { id: 0, other: false } },
		{ name: { id: 1, other: false } },
		{ name: { id: 2, other: false } },
		{ name: { id: 3, other: false } },
		{ name: { id: 3, other: true } },
		{ name: { id: 4, other: false } },
		{ name: { id: 5, other: false } },
	];

	const expected = [{ name: { id: 0, other: true } }, { name: { id: 0, other: false } }];
	const transformed = uniq(arr, (obj) => obj.name.other);

	// check uniq ids
	transformed.map((obj, index) => expect(obj.name.id).toBe(expected[index].name.id));

	// check that properties match
	transformed.map((obj, index) => expect(obj.name.other).toBe(expected[index].name.other));

	expect(transformed.length).toBe(2);
});
