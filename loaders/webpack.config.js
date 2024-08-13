const path = require('path')

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
            }
        ]
    }
}