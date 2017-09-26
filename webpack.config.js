var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js',
  ],
  devtool: 'source-map',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader?'+JSON.stringify({
            presets: ['es2015', 'react', 'stage-1', 'stage-2']
          })
        ],
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
    ],
  }
};
