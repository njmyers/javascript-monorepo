const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const runtimes = require('@njmyers/babel-runtime-files');

const cjs = (pkg) => ({
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...runtimes(),
  ],
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      extensions: ['.js', '.ts'],
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
});

module.exports = cjs;