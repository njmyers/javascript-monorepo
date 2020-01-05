/* eslint-disable */
const typescript = require('rollup-plugin-typescript2');

module.exports = ({ env, ...options }) =>
  env === 'typescript' || (Array.isArray(env) && env.includes('typescript'))
    ? [
        typescript({
          ...options.typescript,
          clean: true,
        }),
      ]
    : [];
