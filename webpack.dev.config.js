const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

const config = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, 'src/welcome/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.md', '.txt', '.scss', '.css', '.json'],
    alias: {
      'common': path.resolve(__dirname, 'src/common'),
      'ambassador-common': path.resolve(__dirname, 'node_modules/@ambassador/common/lib'),
      'welcome': path.resolve(__dirname, 'src/welcome')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/welcome/index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HappyPack({
      id: 'jsx',
      threads: 4,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      threads: 4,
      loaders: ['css-loader!postcss-loader']
    })
  ],
  module: {
    postLoaders: [
      {
        test: /\.js?$/,
        loader: 'transform?envify',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: 'happypack/loader?id=jsx',
        include: [/src/, /node_modules\/camelcase-keys/, /node_modules\/camelcase/, /node_modules\/map-obj/]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader?sourceMap',
          'happypack/loader?id=styles',
          'sass-loader?sourceMap'
        ],
        exclude: [
          /node_modules\/react-ions\/lib\/styles\/global/
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader',
          'postcss-loader',
          'sass-loader?sourceMap'
        ],
        include: [
          /node_modules\/react-ions\/lib\/styles\/global/
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(jpe?g|gif|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ico|png)$/,
        loader: 'static-loader'
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ]
  }
}

module.exports = config
