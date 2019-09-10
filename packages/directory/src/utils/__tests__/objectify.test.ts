import objectify from '../objectify';

describe('utils/objectify', () => {
  test('it is a function ', () => {
    expect(typeof objectify).toBe('function');
  });

  const testCases = [
    ['/some/path', { path: '/some/path', include: true }],
    [
      '/some/other/thing/path',
      { path: '/some/other/thing/path', include: true },
    ],
  ];

  testCases.forEach(([arg, expected]) => {
    test(`it returns the expected object shape with the argument ${arg}`, () => {
      expect(objectify(arg)).toMatchObject(expected);
    });
  });
});
