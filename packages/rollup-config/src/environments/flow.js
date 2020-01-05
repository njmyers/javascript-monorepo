/* eslint-disable */
var flow = require('rollup-plugin-flow');

const defaults = {};

module.exports = ({ env, ...options }) =>
  env === 'flow' || (Array.isArray(env) && env.includes('flow'))
    ? [flow({ ...defaults, ...options.flow })]
    : [];
