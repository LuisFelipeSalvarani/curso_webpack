const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        port: 9002,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".jsx", ".js", '.json']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("@babel/preset-react")]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App'
        }),
        new ModuleFederationPlugin({
            name: 'HomeApp',
            filename: 'remoteEntry.js',
            exposes: {
                './HomeApp': './src/Home.js'
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "^18.0.0",
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: "^18.0.0",
                },
            }
            
        })
    ]
}