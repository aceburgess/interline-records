var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
			{
			  test: /\.scss$/,
			  include: APP_DIR,
			  loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process env': {
				'API_URL': process.env.API_URL,
				'API_KEY': process.env.API_KEY
			}
		})
	]
};

module.exports = config;