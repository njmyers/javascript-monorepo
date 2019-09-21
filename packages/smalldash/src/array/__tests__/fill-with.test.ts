import fillWith from '../fill-with';

const same = (val) => val;

test('fill array with zeros', () => {
  const expected = [0, 0, 0, 0, 0];
  const filled = fillWith(5);

  filled.map((num, index) => expect(num).toBe(expected[index]));
});

test('fill array with ones', () => {
  const expected = [1, 1, 1, 1, 1];
  const filled = fillWith(5, 1);

  filled.map((num, index) => expect(num).toBe(expected[index]));
});

test('fill array with ones length 10', () => {
  const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const filled = fillWith(10, 1);

  filled.map((num, index) => expect(num).toBe(expected[index]));
});
