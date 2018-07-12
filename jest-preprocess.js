const babelOptions = {
  plugins: [
    'transform-class-properties',
    'transform-react-jsx',
    'transform-object-rest-spread',
  ],
  presets: [['env'], 'flow'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
