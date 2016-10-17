'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (function makeWebpackConfig () {
    var config = {};

    config.entry = {
        app: './src/app/app.module.js'
    };

    config.output = {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    };

    config.devtool = 'source-map';


    config.resolve = {
        modulesDirectories: [
            'node_modules',
        ]
    };

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loaders: ['ng-annotate', 'babel'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    };

    config.plugins = [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('style.css', {allChunks: true})
    ];

    return config;
}());

