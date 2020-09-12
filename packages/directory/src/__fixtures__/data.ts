import path from 'path';

/**
 * Resolve paths relative to the dirname of this test file. Since directory is
 * designed to return absolute paths we must use this to ensure that we can
 * write tests using relative paths and compare the results correctly
 */
function resolvePath(relativePath: string): string {
  return path.resolve(__dirname, relativePath);
}

export const SINGLE_FILE_PATH = resolvePath('fake-directory/test.txt');
export const SINGLE_FILE_DATA = [
  {
    file: 'some text\n',
    path: resolvePath('fake-directory/test.txt'),
    mime: { contentType: 'text/plain', extension: 'txt' },
  },
];

export const JS_FILE_PATH = resolvePath(
  'fake-directory/recursive/folder/otherfile.js'
);
export const JS_FILE_DATA = [
  {
    file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
    path: resolvePath('fake-directory/recursive/folder/otherfile.js'),
    mime: { contentType: 'application/javascript', extension: 'js' },
  },
];

export const SHALLOW_FOLDER_PATH = resolvePath('fake-directory/folder');
export const SHALLOW_FOLDER_DATA = [
  {
    file: '',
    path: resolvePath('fake-directory/folder/file.txt'),
    mime: { contentType: 'text/plain', extension: 'txt' },
  },
  {
    file: '',
    path: resolvePath('fake-directory/folder/otherfile.txt'),
    mime: { contentType: 'text/plain', extension: 'txt' },
  },
];

export const DEEP_FOLDER_PATH = resolvePath('fake-directory/recursive');
export const DEEP_FOLDER_DATA = [
  {
    file: '',
    path: resolvePath('fake-directory/recursive/file.txt'),
    mime: { contentType: 'text/plain', extension: 'txt' },
  },
  {
    file: '',
    path: resolvePath('fake-directory/recursive/folder/file.txt'),
    mime: { contentType: 'text/plain', extension: 'txt' },
  },
  {
    file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
    path: resolvePath('fake-directory/recursive/folder/otherfile.js'),
    mime: { contentType: 'application/javascript', extension: 'js' },
  },
  {
    file: '',
    path: resolvePath('fake-directory/recursive/folder/thing/file.txt'),
    mime: { contentType: 'text/plain', extension: 'txt' },
  },
];
