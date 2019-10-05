/* eslint-disable */
const builtins = require('rollup-plugin-node-builtins');

module.exports = ({ env, ...options }) =>
  env === 'node' || (Array.isArray(env) && env.includes('node'))
    ? [builtins(options.builtins)]
    : [];
