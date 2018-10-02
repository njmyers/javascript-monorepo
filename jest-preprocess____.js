const registerRequireContextHook = require('babel-plugin-require-context-hook/register');

const babelOptions = {
  plugins: [
    'transform-class-properties',
    'transform-react-jsx',
    'transform-object-rest-spread',
    'dynamic-import-node',
    'syntax-dynamic-import',
    'babel-plugin-react-docgen',
    'transform-runtime',
    'transform-async-to-generator',
    'require-context-hook',
  ],
  presets: [['env'], 'flow'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
