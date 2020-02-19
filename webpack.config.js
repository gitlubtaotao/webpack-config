const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件

//A webpack plugin to remove your build folder(s) before building 
// https://github.com/johnagan/clean-webpack-plugin 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
	mode:'development',
 	entry: {
 		main: './src/index.js',

 		// 多入口文件
 		sub: './src/sub.js',
 	},
 	module:{
 		rules:[
 		// {
 		// 	test: /\.(jpg|png|gif)$/,
 		// 	use:{
 		// 		loader: 'file-loader',
 		// 		options:{
 		// 			//placeholder 占位符
 		// 			name: '[name]_[hash].[ext]',
 		// 			outputPath: 'images/'
 		// 		}
 		// 	}
 		// },
 		{
 			test: /\.(eot|ttf|svg|woff)$/,
 			use: {
 				loader: 'file-loader'
 			}		
 		},
 		{
 			test: /\.(jpg|png|gif)$/,
 			use:{
 				loader: 'url-loader',
 				options:{
 					//placeholder 占位符
 					name: '[name]_[hash].[ext]',
 					outputPath: 'images/',
 					limit: 2048,
 				}
 			}                     
 		},
 		{
 			test: /\.css$/,
 			use: ['style-loader','css-loader','postcss-loader']
 		},
 		{
 		 	test: /\.scss$/,
 			use: ['style-loader',
 			{
 				loader: 'css-loader',
 				options: {
 					importLoaders: 2, //
 					modules: true //css 模块化打包
 				}
 			},
 			'sass-loader','postcss-loader']
 		},
 		{
 			test: /\.vue$/,
 			use:{
 				loader: 'vue-loader'
 			}
 		}]
 	},
 	output: {
   		//filename: 'bundle.js'，
   		filename: '[name].js',
   		publicPath: 'http://cdn-webpacker.com', //生成url
   		// publicPath: '/assets/'， //生成一个新文件夹

   	},
   	plugins: [
   	 	new CleanWebpackPlugin(),
	   	new HtmlWebpackPlugin({
	   		template: 'src/index.html', //指定生成html文件饿模版
	   		title: 'plugins'
	   	})
   	 
   	]
}
