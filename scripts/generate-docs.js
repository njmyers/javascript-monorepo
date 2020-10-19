#!/usr/bin/env node
/* eslint-env node */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { directory } = require('@njmyers/directory');

const whitelist = ['docs'];
const blacklist = ['index'];
const extensions = ['ts', 'js', 'tsx'];

/**
 * Append code blocks to a markdown file string
 *
 * @param {String} markdownString - A markdown file string
 * @param  {Array<String>} codeBlocks - Source code blocks
 */
function appendCodeToMarkdown(markdownString, ...codeBlocks) {
  return codeBlocks.reduce((prevMarkdown, codeBlock) => {
    return prevMarkdown + '\n```js\n' + codeBlock + '\n```\n';
  }, markdownString);
}

/**
 * Filter files by the white and blacklists
 *
 * @param {Object} fileDescriptor - A file descriptor object
 */
function filterByLists(fileDescriptor) {
  return (
    whitelist.some(include => fileDescriptor.path.includes(include)) &&
    !blacklist.some(ignore => fileDescriptor.path.includes(ignore))
  );
}

/**
 * Sort readme to the top and order files alphabetically
 *
 * @param {Object} prevFileDescriptor - A file descriptor object
 * @param {Object} nextFileDescriptor - A file descriptor object
 */
function sortByReadme(prevFileDescriptor, nextFileDescriptor) {
  if (prevFileDescriptor.path.includes('README')) {
    return -1;
  }

  const prevBasename = path.basename(prevFileDescriptor.path, '.md');
  const nextBasename = path.basename(nextFileDescriptor.path, '.md');

  return prevBasename.localeCompare(nextBasename);
}

/**
 * Generate readme files for packages provided they follow the docs files naming
 * convention
 *
 * @param  {Array<String>} packages - The packages to generate readme files for
 *
 * @example
 *
 * /my-package
 *    /docs
 *      /Example.js
 *      /Example.md
 *      /OtherExample.ts
 *      /OtherExample.md
 *
 */
function writeReadmeFiles(...packages) {
  packages.forEach(pkg => {
    const pkgDir = path.resolve(__dirname, '../packages', pkg);

    const docs = directory(pkgDir, {
      recursive: true,
      mime: true,
      filter: 'md',
      read: true,
    })
      .filter(filterByLists)
      .sort(sortByReadme)
      .map(fileDescriptor => {
        const dirname = path.dirname(fileDescriptor.path);
        const basename = path.basename(fileDescriptor.path, '.md');

        const examples = extensions
          .map(extension => {
            const sourceFile = path.resolve(
              dirname,
              `${basename}.${extension}`
            );
            if (fs.existsSync(sourceFile)) {
              return fs.readFileSync(sourceFile);
            }
          })
          .filter(Boolean);

        return appendCodeToMarkdown(fileDescriptor.file, examples);
      })
      .join('\n');

    const absolute = path.resolve(__dirname, '../packages', pkg, 'README.md');
    const relative = absolute.replace(path.resolve(__dirname, '../'), '');

    // eslint-disable-next-line no-console
    console.log(`${chalk.green('==> ')} Generating docs at ${relative}`);
    fs.writeFileSync(absolute, docs);
  });
}

const packages = ['audio-player', 'react-you-tube'];
writeReadmeFiles(...packages);
