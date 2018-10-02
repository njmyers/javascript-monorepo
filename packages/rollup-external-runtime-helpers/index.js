const path = require('path');
const fs = require('fs');
const directory = require('../directory/build/directory.cjs.js');

const searchUpwards = (folder) => {
  try {
    const runtime = directory(`${folder}/node_modules/@babel/runtime`, {
      recursive: true,
      filter: 'js',
    });
    return runtime;
  } catch (e) {
    return searchUpwards(path.resolve(folder, '../'));
  }
};

const normalizePath = (relativePath) =>
  relativePath.charAt(0) === '/'
    ? normalizePath(relativePath.slice(1))
    : relativePath;

const getRuntimeLocalPaths = () => {
  const runtime = searchUpwards(process.cwd());

  return runtime
    // get just the path
    .map((obj) => obj.path)
    // return the paths after node_modules
    .map((absolutePath) => normalizePath(absolutePath.split('node_modules')[1]))
    // ignore the extensions
    .map((relativePath) => relativePath.split('.js')[0])
    // treat any folders with index files as modules
    .map((relativePath) => relativePath.split('/index')[0]);
};

module.exports = getRuntimeLocalPaths;
