const PATH = require('path')
const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildPath = PATH.resolve(__dirname, 'build')

module.exports = {
  mode: 'development',
  entry: {
    app: PATH.resolve(__dirname, 'src/index.js')
  },
  devServer: {
    contentBase: './build',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin( [ 'build' ] ),
    new HtmlWebpackPlugin( {
      title: 'Development'
    } ),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: buildPath
  }
}