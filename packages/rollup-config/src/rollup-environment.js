/* eslint-disable */
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const runtimes = require('@njmyers/babel-runtime-files');
const json = require('rollup-plugin-json');
const { node, postcss, typescript, flow } = require('./environments');

const defaultOptions = {
  /** default rollup options */
  external: undefined,
  format: 'cjs',
  /** environment settings */
  env: ['browser', 'typescript'],
  /** plugin options */
  babel: undefined,
  typescript: undefined,
  flow: undefined,
  json: undefined,
  commonjs: undefined,
  resolve: undefined,
};

const rollupEnvironment = (pkg, userOptions = {}) => {
  const options = {
    ...defaultOptions,
    ...userOptions,
  };

  const config = {
    input: options.input,
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      ...runtimes(),
      ...(options.external || []),
    ],
    output: {
      file: options.output.format === 'es' ? pkg.module : pkg.main,
      sourcemap: true,
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
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: ['@babel/plugin-transform-runtime'],
        ...options.babel,
      }),
    ],
  };

  if (options.debug) {
    console.log(config);
  }

  return config;
};

module.exports = rollupEnvironment;
