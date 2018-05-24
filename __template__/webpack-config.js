const PATH = require('path')


module.exports = {
  entry: {
    app: PATH.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: PATH.resolve(__dirname, 'build')
  }
}