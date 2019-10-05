/* eslint-disable */
var flow = require('rollup-plugin-flow');

module.exports = ({ env, ...options }) =>
  env === 'flow' || (Array.isArray(env) && env.includes('flow'))
    ? [flow(options.flow)]
    : [];
