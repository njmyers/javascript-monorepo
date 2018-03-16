import equals from '../equals';

test('objects equal', () => {
	const object = {
		a: 1,
		b: {
			c: 2,
			d: {
				e: 4,
			},
		},
	};

	const same = {
		a: 1,
		b: {
			c: 2,
			d: {
				e: 4,
			},
		},
	};

	expect(equals(same, object)).toBe(true);
});

test("objects don't equal", () => {
	const object = {
		a: 1,
		b: {
			c: 2,
			d: {
				e: 4,
			},
		},
	};

	const same = {
		a: 1,
		b: {
			c: 2,
			d: {
				// this line is different
				e: 5,
			},
		},
	};

	expect(equals(same, object)).toBe(false);
});
