/* eslint-disable */
require('./generate-examples');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const directory = require('@njmyers/directory');
const appendCodeToMarkdown = require('./append-code-to-markdown');

const PACKAGES = ['audio-player', 'react-you-tube'];
const INCLUDES = ['docs'];
const IGNORES = ['index'];

PACKAGES.forEach(package => {
  console.log({ package });
  const docs = directory(path.resolve(__dirname, '../packages', package), {
    recursive: true,
    mime: true,
    filter: 'md',
    read: true,
  })
    .filter(
      fileDescriptor =>
        INCLUDES.some(include => fileDescriptor.path.includes(include)) &&
        !IGNORES.some(ignore => fileDescriptor.path.includes(ignore)) &&
        fileDescriptor.path.includes('README')
    )
    .map(fileDescriptor => fileDescriptor.file)
    .concat(
      directory(path.resolve(__dirname, '../packages', package), {
        recursive: true,
        mime: true,
        filter: 'md',
        read: true,
      })
        .filter(
          fileDescriptor =>
            INCLUDES.some(include => fileDescriptor.path.includes(include)) &&
            !IGNORES.some(ignore => fileDescriptor.path.includes(ignore)) &&
            !fileDescriptor.path.includes('README')
        )
        .filter(fileDescriptor => !fileDescriptor.path.includes('README'))
        .map(fileDescriptor => {
          const dirname = path.dirname(fileDescriptor.path);
          const basename = path.basename(fileDescriptor.path, '.md');
          const example = fs.readFileSync(
            path.resolve(dirname, `${basename}.js`)
          );

          return appendCodeToMarkdown(fileDescriptor.file, example);
        })
    )
    .join('\n');

  const absolute = path.resolve(__dirname, '../packages', package, 'README.md');
  const relative = absolute.replace(path.resolve(__dirname, '../'), '');

  console.log(chalk.green('generate docs') + ' => ' + relative);
  fs.writeFileSync(absolute, docs);
});
