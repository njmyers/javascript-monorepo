#!/usr/bin/env node
const directory = require('@njmyers/directory');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const camelCase = require('camelcase');

const SRC = path.resolve(__dirname, '../src');
const IGNORE = ['types', 'index', '__tests__', '__fixtures__', 'constants'];
const FOLDERS = [
  'array',
  'async',
  'functional',
  'object',
  'primitives',
  'string',
];

let mainIndex = '';

FOLDERS.forEach(folderName => {
  let folderIndex = '';
  mainIndex += `export * from './${folderName}';\n`;

  directory(path.resolve(SRC, folderName), {
    absolute: true,
  })
    .filter(filePath => !IGNORE.some(ignore => filePath.includes(ignore)))
    .forEach(filePath => {
      const baseName = path.basename(filePath, '.ts');
      const functionName = camelCase(baseName);
      folderIndex += `export { default as ${functionName} } from './${baseName}';\n`;
    });

  const folderIndexPath = path.resolve(SRC, folderName, 'index.ts');
  console.log(chalk.green('writing index at: ') + chalk.bold(folderIndexPath));
  fs.writeFileSync(folderIndexPath, folderIndex);
});

const mainIndexPath = path.resolve(SRC, 'index.ts');
console.log(chalk.green('writing index at: ') + chalk.bold(mainIndexPath));
fs.writeFileSync(mainIndexPath, mainIndex);
