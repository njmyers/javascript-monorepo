const concatFilePaths = require('./concat-file-paths');

function stubRemover(string, stub) {
  // add trailing slash to stub regex
  const regex = new RegExp(stub + '/', 'gi');
  const split = string.split(regex);
  return split[split.length - 1];
}

/**
 * creates a new file path by cutting the file path from the stub and replacing it with the destination directory
 * @param  {string} stub where to trim the file path
 * @return {string}      concatenated file path with the destination path replacing the stub
 */
function directoryReplacer(stub) {
  return (filePath, dest) => {
    return concatFilePaths(dest, stubRemover(filePath, stub));
  };
}

module.exports = directoryReplacer;
