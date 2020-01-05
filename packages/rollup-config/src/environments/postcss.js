/* eslint-disable */
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

const defaults = {
  plugins: [autoprefixer],
  extract: 'build/style.css',
  sourceMap: true,
};

module.exports = ({ env, ...options }) =>
  env === 'postcss' || (Array.isArray(env) && env.includes('postcss'))
    ? [
        postcss({
          ...defaults,
          ...options.postcss,
        }),
      ]
    : [];
