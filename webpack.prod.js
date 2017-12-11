const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(['dist'])
  ]
})
