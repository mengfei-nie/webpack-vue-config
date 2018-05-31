const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
	mode: 'development',
	// entry: './src/index.js', // 单入口
	entry: {
		index: './src/index.js',
		print: './src/print.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|gif|jpg|jpeg)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.vue$/,
			use: [
				'vue-loader'
			]
		},
		  {
			  test: require.resolve('./src/MarkerClusterer.js'),  // 转换第三方模块
			  use: 'exports-loader?BMapLib'
		  }]
	},
	// devServer: {
	//     contentBase: './dist'
	// },
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: "all",
			name: 'common'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'output Management',
			template: './src/index.html'
		}),
		new VueLoaderPlugin()
	]
}
