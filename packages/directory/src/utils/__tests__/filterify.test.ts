import filterify from '../filterify';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof filterify).toBe('function');
  });

  test('it returns a function ', () => {
    expect(typeof filterify).toBe('function');
  });

  const testCases = [
    [
      'js',
      { mime: { extension: 'js' } },
      { mime: { extension: 'js' }, include: true },
    ],
    [
      '.js',
      { mime: { extension: 'js' } },
      { mime: { extension: 'js' }, include: true },
    ],
    [
      'css',
      { mime: { extension: 'js' } },
      { mime: { extension: 'js' }, include: false },
    ],
    [
      ['css', '.js'],
      { mime: { extension: 'js' } },
      { mime: { extension: 'js' }, include: true },
    ],
    [
      ['css', '.js'],
      { mime: { extension: 'ts' } },
      { mime: { extension: 'ts' }, include: false },
    ],
  ];

  testCases.forEach(([filter, fileObject, expectedFileObject]) => {
    test(`it returns the correct file object with filter of type ${typeof filter}`, () => {
      expect(filterify(filter)(fileObject)).toMatchObject(expectedFileObject);
    });
  });
});
