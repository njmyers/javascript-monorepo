import fillFrom from '../fill-from';

test('fill array with sequence', () => {
  const expected = [0, 1, 2, 3, 4];
  const filled = fillFrom(0, 4);

  filled.map((num, index) => expect(num).toBe(expected[index]));
});
