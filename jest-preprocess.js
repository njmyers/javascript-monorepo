const babelOptions = {
  plugins: [
    'transform-class-properties',
    'transform-react-jsx',
    'transform-object-rest-spread',
    'dynamic-import-node',
    'syntax-dynamic-import',
    'babel-plugin-react-docgen',
  ],
  presets: [['env'], 'flow'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
