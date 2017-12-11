const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 3000
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader?cacheDirectory=true',
        options: {
          compact: true
        }
      }
    }, {
      test: /\.(css|scss)$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]-[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader'
      }]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
