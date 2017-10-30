var path = require('path')

module.exports = function(config, files, coverageReport) {
  var karmaConf = {
    basePath: '../',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js'
    ],

    preprocessors: {},

    coverageReporter: {
      type : 'text',
      includeAllSources: true
    },

    thresholdReporter: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    },

    webpack: { //kind of a copy of your webpack config
      entry: ['babel-polyfill'],
      resolve: {
        extensions: ['', '.js', '.md', '.txt', '.scss', '.css', '.json'],
        alias: {
          'common': path.resolve(__dirname, '../../src/common'),
          'ambassador-common': path.resolve(__dirname, '../../node_modules/@ambassador/common/lib'),
          'welcome': path.resolve(__dirname, '../../src/welcome')
        }
      },
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'isparta-loader',
            exclude: [/node_modules/, /test/]
          }
        ],
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.json?$/,
            loader: 'json-loader'
          },
          {
            test: /\.(css|scss)$/,
            loaders: [
              'style-loader?sourceMap',
              'css-loader?modules&localIdentName=[local]!postcss-loader',
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
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': 'true',
        'react/lib/ReactContext': 'true',
        'react/addons': 'true'
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-chai',
      'karma-chrome-launcher'
    ],

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },

    reporters: ['mocha'],

    port: 8080,

    browserNoActivityTimeout: 100000,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    singleRun: true
  }

  if(coverageReport) {
    karmaConf.plugins.push('karma-coverage')
    karmaConf.plugins.push('karma-threshold-reporter')
    karmaConf.reporters.push('coverage')
    karmaConf.reporters.push('threshold')
  }

  for (var i = 0; i < files.length; i++) {
    karmaConf.files.push(files[i])
    karmaConf.preprocessors[files[i]] = ['webpack']
  }

  return karmaConf
}
