import readAsync from '../read-async';

describe('utils/readAsync', () => {
  test('it is a function ', () => {
    expect(typeof readAsync).toBe('function');
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
      return readAsync(fileObject).then(resolvedFileObject => {
        expect(resolvedFileObject).toMatchObject(expectedFileObject);
      });
    });
  });
});
