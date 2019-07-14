/* eslint-disable */
function appendCodeToMarkdown(markdown, ...codes) {
  return codes.reduce(
    (md, code) => md + '\n```js\n' + code + '\n```\n',
    markdown
  );
}

module.exports = appendCodeToMarkdown;
