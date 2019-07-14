/* eslint-disable */
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const directory = require('@njmyers/directory');

const PACKAGES = ['audio-player', 'react-you-tube', 'accessibility-hooks'];
const INCLUDES = ['__docs__'];
const IGNORES = ['index'];

PACKAGES.forEach(package => {
  directory(path.resolve(__dirname, '../packages', package), {
    recursive: true,
    mime: true,
    filter: 'ts',
    read: true,
  })
    .filter(
      fileDescriptor =>
        INCLUDES.some(include => fileDescriptor.path.includes(include)) &&
        !IGNORES.some(ignore => fileDescriptor.path.includes(ignore))
    )
    .forEach(fileDescriptor => {
      const dirname = path.dirname(fileDescriptor.path);
      const basename = path.basename(fileDescriptor.path, '.ts');
      const absolute = path.resolve(dirname, `${basename}.txt`);
      const relative = absolute.replace(path.resolve(__dirname, '../'), '');

      console.log(chalk.green('generate example') + ' => ' + relative);
      fs.writeFileSync(absolute, fileDescriptor.file);
    });
});
