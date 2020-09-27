const path = require('path');

module.exports = {
  stories: [
    '../../../packages/react-size-components/docs/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/react-you-tube/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/audio-player/__stories__/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/sass/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions/register',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
  ],
  /** Custom webpack configuration */
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.sass$/,
      exclude: /\.module\.sass$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ],
    });

    config.module.rules.push({
      test: /\.module\.sass$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            localsConvention: 'camelCaseOnly',
            modules: true,
          },
        },
        { loader: 'sass-loader' },
      ],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      'with-docs$': path.resolve(__dirname, 'decorators/with-docs.js'),
    };

    return config;
  },
};
