module.exports = (api) => {
  api.cache(true);

  return {
    babelrcRoots: ['.'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      'dynamic-import-node',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-external-helpers',
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV === 'development',
        },
      ],
      '@babel/preset-flow',
    ],
  };
};
