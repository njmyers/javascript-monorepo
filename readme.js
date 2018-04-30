const fs = require('fs');
const path = require('path');

// order of README.md files to be assembled
const docs = [
    'general',
    'component',
    'window',
    'mobile',
    'orientation',
    'custom',
    'inview',
    'performance',
];

const createPaths = (folder) => path.resolve(__dirname, 'docs', folder, 'README.md');
const read = (path) => fs.readFileSync(path, 'utf8');

const string = docs
    .map(createPaths)
    .map(read)
    .reduce((a, b) => a + '\n' + b, '');

const readmePath = path.join(__dirname, 'README.md');

fs.writeFileSync(readmePath, string);
