import readSync from '../read-sync';

describe('utils/readSync', () => {
  test('it is a function ', () => {
    expect(typeof readSync).toBe('function');
  });

  const testCases = [
    [
      {
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
      {
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
        file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
      },
    ],
    [
      {
        include: false,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
      {
        include: false,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
    ],
  ];

  testCases.forEach(([fileObject, expectedFileObject]) => {
    const { path } = fileObject;
    test(`it reads from the path ${path} and adds the contents to the file key`, () => {
      expect(readSync(fileObject)).toMatchObject(expectedFileObject);
    });
  });
});
