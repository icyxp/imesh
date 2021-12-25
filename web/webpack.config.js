/* globals __dirname process */
'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'vizceral.[hash].bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    // modulesDirectories: ['node_modules'],
    // fallback: path.join(__dirname, 'node_modules')
  },
  // resolveLoader: { fallback: path.join(__dirname, 'node_modules') },
  module: {
    rules: [
      { test: /\.jsx$/,  exclude: /node_modules/, use: {
        loader: 'babel-loader',
      } },
      {
        test: /\.(png|woff2?)$/,
        use: {
          loader:'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      { test: /\.(otf|ttf|eot|svg)$/, use: 'file-loader' },
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
          },
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.DefinePlugin({
      __HIDE_DATA__: !!process.env.HIDE_DATA
    }),
    new HtmlWebpackPlugin({
      title: 'IMesh',
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: true
    }),
    new Dotenv({
      path: './.env',
      safe: false,
      systemvars: true
    })
  ]
};
