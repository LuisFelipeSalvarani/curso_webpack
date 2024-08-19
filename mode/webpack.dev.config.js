const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new TerserPlugin()
    ]
}