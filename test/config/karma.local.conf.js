var path = require('path')
var genKarmaConf = require('./genKarmaConf')
var singleFile = process.argv[4]

module.exports = function(config) {
  var files = []
  var coverage = true

  if(singleFile) {
    files.push(singleFile)
    coverage = false
  } else {
    files.push('config/context/index.js')
  }

  config.set(genKarmaConf(config, files, coverage))
}
