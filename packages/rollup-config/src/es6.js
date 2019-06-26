/* eslint-disable */
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const runtimes = require('@njmyers/babel-runtime-files');

const es6 = pkg => ({
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...runtimes(),
  ],
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts'],
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    }),
  ],
});

module.exports = es6;
