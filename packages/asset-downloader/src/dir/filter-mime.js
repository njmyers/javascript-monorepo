const mime = require('mime');
const path = require('path');

const filterMime = (mimeType = 'text/html') => (file) => {
  return mimeType === mime.getType(path.extname(file));
};

module.exports = filterMime;
