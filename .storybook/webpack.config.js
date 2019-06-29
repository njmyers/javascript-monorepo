const path = require('path');

process.env.BABEL_ENV = 'storybook';

module.exports = ({ config, mode }) => {
  // add sass rule
  const rules = [
    ...config.module.rules,
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
      ],
    },
    {
      test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
  ];

  return {
    ...config,
    module: {
      ...config.module,
      rules,
    },
    resolve: {
      ...config.resolve,
      alias: {
        'with-docs$': path.resolve(__dirname, 'with-docs.js'),
      },
      extensions: [...config.resolve.extensions, '.ts', '.tsx'],
    },
  };
};
