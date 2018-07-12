const path = require('path');

console.log(path.resolve(__dirname, 'with-docs.js'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'with-docs$': path.resolve(__dirname, 'with-docs.js'),
    },
  },
};
