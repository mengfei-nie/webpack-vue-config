const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(common,{
    // devtool: 'inline-source-map', //为了更容易地追踪错误和警告，将编译后的代码映射回原始源代码  耗性能    
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:5000'
        })
    ]
})