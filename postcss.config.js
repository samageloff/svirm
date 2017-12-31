const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: () => {
    return [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  }
}
