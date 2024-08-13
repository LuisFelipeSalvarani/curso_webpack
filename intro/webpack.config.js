const path = require('path')

module.exports = {
    // Arquivo de entrada
    entry: './src/teste.js',
    // Arquivo de saída
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
}