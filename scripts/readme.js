const fs = require('fs');
const path = require('path');

// order of README.md files to be assembled
const docs = ['status-switch', 'form', 'bem'];

const cwd = process.cwd();

const createPaths = (folder) => path.resolve(cwd, 'docs', folder, 'README.md');
const read = (path) => fs.readFileSync(path, 'utf8');

const string = docs
  .map(createPaths)
  .map(read)
  .reduce((a, b) => a + '\n' + b, '');

const readmePath = path.join(cwd, 'README.md');

fs.writeFileSync(readmePath, string);
