const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件

//A webpack plugin to remove your build folder(s) before building 
// https://github.com/johnagan/clean-webpack-plugin 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const webpack = require('webpack');

//sourceMap: 映射关系 最佳实践
//{mode: 'production',devtool: 'cheap-module-source-map'}
//{mode: 'development',devtool: 'cheap-module-eval-source-map'}


const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
	mode:'development',
	// devtool: 'none',//关闭开发模式 sourceMap
	devtool:  'cheap-module-eval-source-map',
 	//webpack-dev-server
 	devServer:{
 		contentBase: './dist',
 		open: false, //自动打开游览器
 		port: 8080, 		
 		proxy: {
 			'/api': "http: //localhost: 3000"
 		},
 		
 		//热模块更新
 		hot: true,
 		hotOnly: true
 	},
   	plugins: [
   	 	new CleanWebpackPlugin(), //清空上次打包的文件
	   	new HtmlWebpackPlugin({
	   		template: 'src/index.html', //指定生成html文件饿模版
	   		title: 'plugins'
	   	}),
	   	//热模块更新
	   	new webpack.HotModuleReplacementPlugin(),
   	 
   	],

   	// Tree Shaking
   	optimization:{
   		usedExports: true 
   	}
}

module.exports = merge(commonConfig,devConfig)
