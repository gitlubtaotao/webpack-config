const path = require('path');

module.exports = {
	mode:'development',
 	entry: './src/index.js',
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
   		filename: 'bundle.js'
   	}
}
