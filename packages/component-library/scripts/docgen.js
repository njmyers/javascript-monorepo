const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');
const generateMarkdown = require('./generate-markdown');
const appRootDir = require('app-root-dir').get();

// order of README.md files to be assembled
const docs = ['SemiSticky', 'SlideShow', 'LazyImage', 'Modal'];

/** Generate JS paths */
const jsPaths = (name) => path.resolve(appRootDir, 'src', name, `${name}.js`);
const notesPath = (name) => path.resolve(appRootDir, 'src', name, 'NOTES.md');
const readmePath = (folder) =>
  path.resolve(appRootDir, 'src', folder, 'README.md');
/** Read the file */
const read = (path) => fs.readFileSync(path, 'utf8');

const generateReadme = (name) => {
  const json = reactDocs.parse(read(jsPaths(name)));
  const md = generateMarkdown(json);

  // console.log(JSON.stringify(json, null, 2));

  const readme = fs.readFileSync(notesPath(name)) + '\n' + md;
  fs.writeFileSync(readmePath(name), readme);
};

docs.forEach(generateReadme);
