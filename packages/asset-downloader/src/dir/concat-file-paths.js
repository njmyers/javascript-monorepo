/**
 * concatenates strings
 * @param  {string} first  first to combine
 * @param  {string} second second to combine
 * @return {string}        combined
 */
function concatFilePaths(first, second) {
  return first + '/' + second;
}

module.exports = concatFilePaths;
