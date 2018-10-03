const path = require('path');

process.env.BABEL_ENV = 'storybook';

module.exports = (baseConfig, env, defaultConfig) => {
  // add sass rule
  const rules = [
    ...defaultConfig.module.rules,
    {
      test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
  ];

  const config = {
    ...defaultConfig,
    module: {
      ...defaultConfig.module,
      rules,
    },
    resolve: {
      ...defaultConfig.resolve,
      alias: {
        'with-docs$': path.resolve(__dirname, 'with-docs.js'),
      },
    },
  };

  return config;
};
