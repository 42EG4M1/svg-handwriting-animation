const path = require('path');
const webpack = require('webpack');
const saveLicense = require('uglify-save-license');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/scripts/main.js'),
  },
  output: {
    path: path.join(__dirname, 'dist/scripts'),
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: {
        warnings: false
      },
      output: {
        comments: saveLicense
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
