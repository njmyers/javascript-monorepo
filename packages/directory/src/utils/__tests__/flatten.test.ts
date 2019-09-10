import flatten from '../flatten';

describe('utils/flatten', () => {
  test('it is a function ', () => {
    expect(typeof flatten).toBe('function');
  });

  const testCases = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, [4, 5]],
    [1, [2, [3, [4, [5]]]]],
    [1, 2, [3, 4], 5],
  ];

  testCases.forEach(testArray => {
    test('it flattens the array to expected array of [1, 2, 3, 4, 5]', () => {
      expect(flatten(testArray)).toMatchObject([1, 2, 3, 4, 5]);
    });
  });
});
