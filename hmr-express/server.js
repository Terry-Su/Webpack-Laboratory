const express = require( 'express' )
const PATH = require( 'path' )
const webpack = require( 'webpack' )
const webpackConfig = require( './webpack.config.js' )
const buildDirectory = PATH.resolve(__dirname, './build')


const app = express()
const compiler = webpack( webpackConfig )

const port = 7000


// webpck hmr
app.use(
  require( 'webpack-dev-middleware' )( compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  } )
)

app.use( require( 'webpack-hot-middleware' )( compiler ) )

app.use( express.static( buildDirectory ) )

app.get( "/", ( req, res ) => {
  res.sendFile( PATH.resolve( __dirname, 'build/index.html' ) )
} )

// Here we can set navigation to subsequent page for enabling hmr on it
// app.get( "/subPage", ( req, res ) => {
//   res.sendFile( PATH.resolve( __dirname, 'build/sub/sub/subPage.html' ) )
// } )

app.listen( port, () => { console.log( `listening on the port ${ port }` ) } )