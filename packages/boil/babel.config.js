'use strict';

module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime',
      'dynamic-import-node',
    ],
  };
};
