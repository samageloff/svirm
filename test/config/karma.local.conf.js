var genKarmaConf = require('./genKarmaConf')
var singleFile = process.argv[4]
var showCoverage = process.argv[5]

module.exports = function (config) {
  var files = []
  var coverage = true
  var singleRun = true

  if (singleFile) {
    singleFile = singleFile.replace('test/src', 'src')
    files.push(singleFile)
    coverage = showCoverage === 'true'
  } else {
    files.push('config/context/index.js')
  }

  if (process.env.NODE_ENV === 'testwatch') {
    singleRun = false
  }

  config.set(genKarmaConf(config, files, coverage, singleRun))
}
