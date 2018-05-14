const path = require('path');

module.exports = {
    entry: {index: './src/index.js'},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    mode: 'production',
  module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        index: './dist/index.html',
        port: 3000,
        disableHostCheck: true,
        host: '0.0.0.0'
    }
};