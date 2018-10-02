module.exports = (api) => {
  api.cache(true);

  const env = process.env.BABEL_ENV;

  console.log(env);

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
      // https://github.com/storybooks/storybook/pull/4262
      // [
      //   'babel-preset-minify',
      //   {
      //     builtIns: false,
      //     mangle: false,
      //   },
      // ],
    ],
  };
};
