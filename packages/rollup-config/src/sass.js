/* eslint-disable */
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

const sass = pkg =>
  postcss({
    plugins: [autoprefixer],
    extract: 'build/style.css',
    sourceMap: true,
  });

module.exports = sass;
