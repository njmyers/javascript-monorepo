/* eslint-disable */
require('./generate-examples');
const fs = require('fs');
const path = require('path');
const directory = require('@njmyers/directory');
const appendSourceToDocs = require('./append-source-to-docs');

const DIRECTORY = '__docs__';
const IGNORE = 'index';

const README = directory(path.resolve(__dirname, '../', DIRECTORY), {
  recursive: true,
  mime: true,
  filter: 'md',
  read: true,
}).filter(fileDescriptor => fileDescriptor.path.includes('README'))[0].file;

const EXAMPLES = directory(path.resolve(__dirname, '../', DIRECTORY), {
  recursive: true,
  mime: true,
  filter: 'md',
  read: true,
})
  .filter(fileDescriptor => !fileDescriptor.path.includes('README'))
  .map(fileDescriptor => {
    const dirname = path.dirname(fileDescriptor.path);
    const basename = path.basename(fileDescriptor.path, '.md');
    const example = fs.readFileSync(path.resolve(dirname, `${basename}.txt`));

    return appendSourceToDocs(fileDescriptor.file, example);
  })
  .join('\n');

fs.writeFileSync(
  path.resolve(__dirname, '../README.md'),
  `${README}\n${EXAMPLES}`
);
