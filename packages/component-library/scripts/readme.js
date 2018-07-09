const fs = require('fs');
const path = require('path');

// order of README.md files to be assembled
const docs = ['StatusSwitch', 'Form', 'SemiSticky', 'Modal', 'BEM'];

const cwd = process.cwd();

const createPaths = (folder) => path.resolve(cwd, 'src', folder, 'README.md');

const read = (path) => fs.readFileSync(path, 'utf8');

const string = docs
  .map(createPaths)
  .map(read)
  .reduce((a, b) => a + '\n' + b, '');

// general readme under src
const general = fs.readFileSync(path.resolve(cwd, 'src', 'README.md'));
// add the general readme to the component readmes
const readme = general + '\n' + string;
// write path
const readmePath = path.join(cwd, 'README.md');
// do the thing
fs.writeFileSync(readmePath, readme);
