var path = require('path')

module.exports = function (config, files, coverageReport, singleRun) {
  var karmaConf = {
    basePath: '../',
    frameworks: ['mocha', 'chai', 'sinon', 'chai-immutable'],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js'
    ],

    coverageReporter: {
      type: 'text',
      includeAllSources: true
    },

    thresholdReporter: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    },

    webpack: {
      entry: ['babel-polyfill'],
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        alias: {
          'common': path.resolve(__dirname, '../src/')
        }
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            exclude: [
              /node_modules/,
              /test/
            ],
            use: [
              {
                loader: 'isparta-loader'
              }
            ]
          },
          {
            test: /\.js?$/,
            exclude: [
              /node_modules/
            ],
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]'
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
        'cheerio': 'window'
      }
    },

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-chai',
      'karma-chai-immutable',
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

    browserConsoleLogOptions: {
      terminal: true,
      level: ''
    },

    browsers: ['Chrome']
  }

  karmaConf.singleRun = singleRun

  if (coverageReport) {
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
