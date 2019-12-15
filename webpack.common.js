const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ReactPluginConfig = new webpack.ProvidePlugin({'React': 'react'})

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      'src': path.resolve(__dirname, 'src/'),
      'shared': path.resolve(__dirname, 'src/shared'),
      'assets': path.resolve(__dirname, 'src/components/common/assets'),
      'common': path.resolve(__dirname, 'src/components/common'),
      'landing': path.resolve(__dirname, 'src/components/landing'),
      'timer': path.resolve(__dirname, 'src/components/timer'),
      'julio': path.resolve(__dirname, 'src/components/julio-le-parc'),
      'instability': path.resolve(__dirname, 'src/components/instability'),
      'sequences': path.resolve(__dirname, 'src/components/sequences')
    }
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
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
  ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    ReactPluginConfig
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
