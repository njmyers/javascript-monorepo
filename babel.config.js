/* eslint-disable */
module.exports = api => {
  api.cache(true);

  const env = process.env.BABEL_ENV;

  return {
    babelrcRoots: ['.'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      'dynamic-import-node',
      '@babel/plugin-syntax-dynamic-import',
    ],
    presets: [
      ['@babel/preset-env'],
      [
        '@babel/preset-react',
        {
          development: env === 'development',
        },
      ],
      '@babel/preset-flow',
      ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      // https://github.com/storybooks/storybook/pull/4262
      [
        'babel-preset-minify',
        {
          builtIns: false,
          evaluate: false,
          mangle: false,
        },
      ],
    ],
  };
};
