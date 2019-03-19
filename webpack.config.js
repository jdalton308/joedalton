
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
  entry: '/src/js/main.js';
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: 'node_modules/@kite/typography', from: 'fonts', to: 'assets/fonts' },
    ]),
  ],
}