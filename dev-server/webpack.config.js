const PATH = require('path')


module.exports = {
  entry: {
    app: PATH.resolve(__dirname, 'src/index.js')
  },
  devServer: {
    contentBase: PATH.resolve(__dirname, 'build')
  },
  output: {
    filename: '[name].bundle.js',
    path: PATH.resolve(__dirname, 'build')
  }
}