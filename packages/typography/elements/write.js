#!/usr/bin/env node
/* eslint-env commonjs, node */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const elements = require('./elements.json');
const src = path.resolve(__dirname, '../src/elements');
const docs = path.resolve(__dirname, '../docs/elements');
const template = fs.readFileSync(
  path.resolve(__dirname, 'Template.tsx'),
  'utf8'
);

const storyTemplate = fs.readFileSync(
  path.resolve(__dirname, 'Template.stories.tsx'),
  'utf8'
);

const files = elements.map(element => {
  const contents = Object.entries(element).reduce((prev, [token, value]) => {
    const regex = new RegExp(token, 'g');
    return prev.replace(regex, value);
  }, template);

  return {
    contents,
    filePath: path.resolve(src, `${element.ComponentName}.tsx`),
  };
});

const stories = elements.map(element => {
  const contents = Object.entries(element).reduce((prev, [token, value]) => {
    const regex = new RegExp(token, 'g');
    return prev.replace(regex, value);
  }, storyTemplate);

  return {
    contents,
    filePath: path.resolve(docs, `${element.ComponentName}.stories.tsx`),
  };
});

shell.rm('-rf', src);
shell.mkdir('-p', src);
shell.rm('-rf', docs);
shell.mkdir('-p', docs);

[...files, ...stories].forEach(file => {
  fs.writeFileSync(file.filePath, file.contents);
  shell.exec(`yarn prettier ${file.filePath} --write`);
});

const indexFile = elements.reduce((prev, element) => {
  return `${prev}export * from './${element.ComponentName}';\n`;
}, '');

const indexPath = path.resolve(src, 'index.ts');

fs.writeFileSync(indexPath, indexFile);
shell.exec(`yarn prettier ${indexPath} --write`);
