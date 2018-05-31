const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
	plugins: [
       new CleanWebpackPlugin('./dist'),
       new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
	]
})
