/* eslint-disable */
const fs = require('fs');
const path = require('path');
const directory = require('@njmyers/directory');

const DIRECTORY = '__docs__';
const IGNORE = 'index';

directory(path.resolve(__dirname, '../src'), {
  recursive: true,
  mime: true,
  filter: 'ts',
  read: true,
})
  .filter(
    fileDescriptor =>
      fileDescriptor.path.includes(DIRECTORY) &&
      !fileDescriptor.path.includes(IGNORE)
  )
  .forEach(fileDescriptor => {
    const dirname = path.dirname(fileDescriptor.path);
    const basename = path.basename(fileDescriptor.path, '.ts');

    fs.writeFileSync(
      path.resolve(dirname, `${basename}.txt`),
      fileDescriptor.file
    );
  });
