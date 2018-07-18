import fs from 'fs';
import path from 'path';
import lodash from 'lodash';

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

export default readDirectoryKeys;
