const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const webpackConfig = {
    entry: {
        polyfill: '@babel/polyfill'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 9000,
        open: true,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: miniCssExtractPlugin.loader },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),
        new htmlPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency',
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ]
};

module.exports = webpackConfig;