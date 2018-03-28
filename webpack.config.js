const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2', // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|build)/,
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
    // plugins: [
    //     new UglifyJsPlugin({
    //         sourceMap: true,
    //     }),
    // ],
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
        debounce: {
            root: 'debounce',
            commonjs2: 'lodash/debounce',
            commonjs: 'lodash/debounce',
            amd: 'lodash/debounce',
            umd: 'lodash/debounce',
        },
        throttle: {
            root: 'throttle',
            commonjs2: 'lodash/throttle',
            commonjs: 'lodash/throttle',
            amd: 'lodash/throttle',
            umd: 'lodash/throttle',
        },
        smalldash: {
            root: '__',
            commonjs2: 'smalldash',
            commonjs: 'smalldash',
            amd: 'smalldash',
            umd: 'smalldash',
        },
    },
};
