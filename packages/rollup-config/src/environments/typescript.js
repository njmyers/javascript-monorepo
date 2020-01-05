/* eslint-disable */
const typescript = require('rollup-plugin-typescript2');

const defaults = {
  clean: true,
};

module.exports = ({ env, ...options }) =>
  env === 'typescript' || (Array.isArray(env) && env.includes('typescript'))
    ? [
        typescript({
          ...defaults,
          ...options.typescript,
        }),
      ]
    : [];
