/* eslint-disable */
const typescript = require('rollup-plugin-typescript');

module.exports = ({ env, ...options }) =>
  env === 'typescript' || (Array.isArray(env) && env.includes('typescript'))
    ? [typescript(options.typescript)]
    : [];
