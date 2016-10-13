var path = require('path');

module.exports = {
    cache: true,
    entry: {
        main: './app/app.module.js',

        vendor: [
            'angular',
            'angular-resource'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/scripts'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
        }]
    },
    plugins: [
        // ....
    ],
    resolve: {
        extensions: ['', '.js']
    }
};