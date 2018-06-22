const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const file = process.argv[2];

const ext = path.extname(file);
const stub = file.split(ext)[0];
const degree = '.3';

const sass = fs.readFileSync(path.resolve(__dirname, file), 'utf8');

const newline = /\n+/;
const colors = sass.split(newline);

const hoverized = colors.map((color) => {
  const stem = color.split(':')[0];
  return `${stem}-hover: transparentize(${stem}, ${degree})`;
});

const importStatement = `@import '${stub}.sass'\n`;

const string = importStatement + hoverized.reduce((a, b) => a + '\n' + b);

const newFileName = stub + '-hover' + ext;

fs.writeFileSync(path.resolve(__dirname, newFileName), string);
