const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '/'),
	entry: [
		//App entry point
		'./index.js'
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: __dirname,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', { modules: false }],
						'stage-2',
						'react'
					],
					plugins: [
						'react-html-attrs',
						'transform-decorators-legacy',
						'transform-class-properties'
					]
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					],
					publicPath: path.join(__dirname, 'dist')
				})
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.min.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		publicPath: '/',
		historyApiFallback: true,
		port: 3000,
		open: true,
		stats: {
			colors: true
		}
	},
	watch: true,
	plugins: [
		new webpack.DefinePlugin({ NODE_ENV: JSON.stringify('development') }),
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin('app.min.css'),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname, 'src/index.html'), to: 'index.html', force: true },
			{ from: path.join(__dirname, 'src/favicon.ico'), to: 'favicon.ico', force: true }
		])
	]
};
