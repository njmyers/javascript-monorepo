const path = require('path');

const NODE_MODULES = path.resolve(__dirname, '../node_modules');
const PACKAGES = path.resolve(__dirname, '../../../', 'packages');

module.exports = ({ config, mode }) => {
  // add sass rule
  const rules = [
    ...config.module.rules,
    {
      test: /\.js?$/,
      include: PACKAGES,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(NODE_MODULES, '.cache/storybook'),
            presets: [
              [
                path.resolve(NODE_MODULES, '@babel/preset-env/lib/index.js'),
                {
                  shippedProposals: true,
                  useBuiltIns: 'usage',
                  corejs: '3',
                },
              ],
              path.resolve(NODE_MODULES, '@babel/preset-react/lib/index.js'),
            ],
          },
        },
      ],
    },
    {
      test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
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
      modules: [...config.resolve.modules, NODE_MODULES],
      alias: {
        'with-docs$': path.resolve(__dirname, 'with-docs.js'),
      },
    },
  };
};
