import mimeify from '../mimeify';

type Arg = Parameters<typeof mimeify>[0];
type Return = ReturnType<typeof mimeify>;

describe('mimeify', () => {
  const testCases: [Arg, Return][] = [
    [
      '/some/file.js',
      {
        contentType: 'application/javascript',
        extension: 'js',
      },
    ],
    [
      '/some-other/directory/file.css',
      {
        contentType: 'text/css',
        extension: 'css',
      },
    ],
  ];

  describe.each(testCases)(
    'when the file path is "%s"',
    (filePath, expectedMime) => {
      test(`it returns the value with the path property of ${filePath}`, () => {
        expect(mimeify(filePath)).toMatchObject(expectedMime);
      });
    }
  );
});
