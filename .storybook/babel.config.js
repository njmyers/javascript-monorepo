module.exports = (config) => {
  const { plugins, presets } = config;

  console.log(plugins, presets);

  return {
    plugins: [
      ...plugins,
      'babel-plugin-react-docgen',
      '@babel/plugin-external-helpers',
    ],
    presets: [
      [
        ...presets,
        '@babel/preset-env',
        {
          targets: '> 0.25%, not dead',
          useBuiltIns: false,
        },
      ],
      // https://github.com/storybooks/storybook/pull/4262
      [
        'babel-preset-minify',
        {
          builtIns: false,
          mangle: false,
        },
      ],
    ],
  };
};
