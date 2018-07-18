const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

const isFile = (file) => fs.statSync(file).isFile();

const readDirectoryKeys = (dir) => {
  return isFile(dir)
    ? dir
    : lodash.flatten(
        fs.readdirSync(dir).map((name) => {
          const filePath = `${dir}/${name}`;
          return isFile(filePath) ? filePath : readDirectoryKeys(filePath);
        })
      );
};

module.exports = readDirectoryKeys;
