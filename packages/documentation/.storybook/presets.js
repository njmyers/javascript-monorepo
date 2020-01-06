module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      forkTsCheckerWebpackPluginOptions: {
        ignoreDiagnostics: [5055],
      },
    },
  },
  '@storybook/addon-docs/react/preset',
];
