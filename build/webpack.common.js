module.exports = {
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
 		},
 		//babel-loader: es6 to es5
 		{ 
 			test: /\.js$/, 
 			exclude: /node_modules/, 
 			loader: "babel-loader",
 			// options:{

 			// 	// @babel/polyfill
 			// 	// "presets": [["@babel/preset-env",
 			// 	// 	{
 			// 	// 	useBuiltIns: "usage",
 			// 	// 	targets:{
 			// 	// 		chrome: "67"
 			// 	// 	}}
 			// 	// ]]
 			// 	//A plugin that enables the re-use of Babel's injected helper code to save on codesize 

 			// 	"plugins": [["@babel/plugin-transform-runtime",{
 			// 		"absoluteRuntime": false,
    		//    	"corejs": 2,
    		//     	"helpers": true,
    		//      "regenerator": true,
			//      "useESModules": false,
			//      "version": "7.0.0-beta.0"
 			// 	}]]
 			
 			// }
 		}]
 	},
 	output: {
   		//filename: 'bundle.js'，
   		filename: '[name].js',
   		//publicPath: 'http://cdn-webpacker.com', //生成url
   		// publicPath: '/assets/' //生成一个新文件夹

   	}
}