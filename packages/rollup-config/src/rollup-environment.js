/* eslint-disable */
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const runtimes = require('@njmyers/babel-runtime-files');
const json = require('rollup-plugin-json');
const _ = require('lodash');
const { node, postcss, typescript, flow } = require('./environments');

const defaultOptions = {
  /** default rollup options */
  external: runtimes(),
  output: {
    format: 'cjs',
    sourcemap: true,
  },
  /** environment settings */
  env: ['browser', 'typescript'],
  /** plugin options */
  babel: {
    runtimeHelpers: true,
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: ['@babel/plugin-transform-runtime'],
  },
  typescript: {},
  flow: {},
  json: {},
  commonjs: {},
  resolve: {
    preferBuiltins: true,
  },
};

const rollupEnvironment = (pkg, userOptions = {}) => {
  const options = _.merge(defaultOptions, userOptions);

  const config = {
    input: options.input,
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      ...(options.external || []),
    ],
    output: {
      file: options.output.format === 'es' ? pkg.module : pkg.main,
      ...options.output,
    },
    plugins: [
      resolve(options.resolve),
      commonjs(options.commonjs),
      json(options.json),
      ...typescript(options),
      ...flow(options),
      ...postcss(options),
      ...node(options),
      babel(options.babel),
    ],
  };

  if (options.debug) {
    console.log(config);
  }

  return config;
};

module.exports = rollupEnvironment;
