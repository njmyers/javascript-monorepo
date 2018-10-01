const path = require('path');
const config = require(path.resolve(__dirname, '../../babel.config.js'));

module.exports = (api) => {
  const { plugins, presets } = config(api);

  return {
    plugins: [
      ...plugins,
      '@babel/plugin-transform-regenerator',
      '@babel/plugin-transform-async-to-generator',
    ],
    presets: presets,
  };
};
