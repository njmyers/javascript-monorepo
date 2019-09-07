import normalizeExtension from '../normalize-extension';

describe('utils/normalizeExtension', () => {
  test('it is a function ', () => {
    expect(typeof normalizeExtension).toBe('function');
  });

  const testCases = [
    ['.js', 'js'],
    ['...js', 'js'],
    ['js', 'js'],
    ['.test.js', 'test.js'],
  ];

  testCases.forEach(([arg, expected]) => {
    test(`it returns the expected value of ${expected} with the argument of ${arg}`, () => {
      expect(normalizeExtension(arg)).toBe(expected);
    });
  });
});
