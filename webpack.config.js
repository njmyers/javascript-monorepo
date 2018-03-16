var path = require('path');

module.exports = {
	entry: {
		array: './src/array',
		object: './src/object',
		functional: './src/functional',
		async: './src/async',
		string: './src/string',
		module: './src',
	},
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'functions'),
		filename: '[name].js',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|functions)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-class-properties'],
					},
				},
			},
		],
	},
};
