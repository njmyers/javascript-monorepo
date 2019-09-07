import mimeify from '../mimeify';

describe('utils/mimeify', () => {
  test('it is a function ', () => {
    expect(typeof mimeify).toBe('function');
  });

  const testCases = [
    [
      {
        path: '/some/file.js',
      },
      {
        path: '/some/file.js',
        mime: {
          contentType: 'application/javascript',
          extension: 'js',
        },
      },
    ],
    [
      {
        path: '/some-other/directory/file.css',
      },
      {
        path: '/some-other/directory/file.css',
        mime: {
          contentType: 'text/css',
          extension: 'css',
        },
      },
    ],
  ];

  testCases.forEach(([arg, expected]) => {
    test(`it returns the value with the path property of ${arg.path}`, () => {
      expect(mimeify(arg)).toMatchObject(expected);
    });
  });
});
