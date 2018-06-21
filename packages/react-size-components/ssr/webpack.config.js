const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
};
