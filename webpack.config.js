var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.min.js'
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
