const path = require('path')
const loader = require('sass-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    }
}