const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    'welcome': [
      'babel-polyfill',
      path.join(__dirname, 'src/welcome/index.js')
    ]
  },
  output: {
    path: path.join(__dirname, '/lib/'),
    filename: '[name].js'
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
      filename: 'welcome.html',
      chunks: ['welcome']
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
      sourceMap: false,
      output: { comments: false }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
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
        loader: 'babel-loader',
        include: [/src/, /node_modules\/camelcase-keys/, /node_modules\/camelcase/, /node_modules\/map-obj/]
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader'
        ),
        exclude: [
          /node_modules\/react-ions\/lib\/styles\/global/
        ]
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader'
        ),
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
