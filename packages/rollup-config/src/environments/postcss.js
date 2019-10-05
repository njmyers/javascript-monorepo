/* eslint-disable */
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

module.exports = ({ env, ...options }) =>
  env === 'postcss' || (Array.isArray(env) && env.includes('postcss'))
    ? [
        postcss({
          plugins: [autoprefixer],
          extract: 'build/style.css',
          sourceMap: true,
          ...options.postcss,
        }),
      ]
    : [];
