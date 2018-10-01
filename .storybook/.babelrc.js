module.exports = {
  plugins: ['babel-plugin-react-docgen', '@babel/plugin-external-helpers'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
        useBuiltIns: false,
      },
    ],
  ],
};
