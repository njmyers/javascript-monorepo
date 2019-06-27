/* eslint-disable */
const path = require('path');
const config = require(path.resolve(__dirname, '../../babel.config.js'));

module.exports = api => {
  return {
    ...config(api),
  };
};
