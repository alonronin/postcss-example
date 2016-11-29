const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rucksack = require('rucksack-css');

module.exports = {
  entry: {
    app: './index'
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
    //publicPath: `/`
  },

  context: path.resolve(__dirname, 'src'),

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: ['style', 'css?sourceMap', 'postcss']
      },

      {
        test: /\.html$/,
        loader: 'html'
      }
    ],

    noParse: []
  },

  postcss: [
    rucksack({
      autoprefixer: true
    }),

    require('postcss-simple-vars'),

    require('postcss-nested')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      title: 'PostCSS'
    })
  ]
};
