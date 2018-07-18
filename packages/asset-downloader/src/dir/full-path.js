const path = require('path');

const fullPath = (env) => (partialPath) => path.resolve(APP_ROOT, partialPath);

module.exports = fullPath;
