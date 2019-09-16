import map from '../map';

test('map one transformation', () => {
  const arr = [0, 1, 2, 3];
  const expected = [1, 2, 3, 4];
  const transformer = (val) => val + 1;

  expect(map(transformer)(arr)).toMatchObject(expected);
});

test('map multiple transformations', () => {
  const arr = [0, 1, 2, 3];
  const expected = [2, 3, 4, 5];
  const transformer = (val) => val + 1;

  expect(map(transformer, transformer)(arr)).toMatchObject(expected);
});
