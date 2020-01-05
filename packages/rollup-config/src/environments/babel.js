const babel = require('rollup-plugin-babel');

const defaults = {
  runtimeHelpers: true,
  exclude: 'node_modules/**',
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  plugins: ['@babel/plugin-transform-runtime'],
};

module.exports = ({ env, ...options }) =>
  env === 'babel' || (Array.isArray(env) && env.includes('babel'))
    ? [
        babel({
          ...defaults,
          ...options.babel,
        }),
      ]
    : [];
