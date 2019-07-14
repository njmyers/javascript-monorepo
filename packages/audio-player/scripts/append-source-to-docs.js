/* eslint-disable */
function appendSourceToDocs(docs, source) {
  return docs + '\n```js\n' + source + '\n```\n';
}

module.exports = appendSourceToDocs;
