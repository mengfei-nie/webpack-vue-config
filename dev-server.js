const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.dev.js')

const options = {
    open: true,
    contentBase: './dist',
    host: 'localhost',
    watchOptions: {
    	poll: true
    },
    hot: true
}

webpackDevServer.addDevServerEntrypoints(config, options)

const compiler = webpack(config)

const server = new webpackDevServer(compiler, options)

server.listen(5000,'localhost',()=>{
    console.log('dev server is runing localhost 5000')
})
