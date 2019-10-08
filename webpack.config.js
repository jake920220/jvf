const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    entry: ['./src/main.js', './src/stylesheets/app.scss'],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: `[name].[hash].js`,
    },
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "./public"),
        historyApiFallback: true,
        port: 9000,
        open: true,
        overlay: true,
        hot: true, //hot module replacement
    },
    resolve: {
        extensions: ['.js', '.vue'],
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
        new CleanWebpackPlugin(),
        new vueLoaderPlugin(),
        new htmlPlugin({
            template: path.resolve(__dirname, './src', 'index.html'),
            chunksSortMode: 'dependency',
        }),
        new miniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: `[name].chunk.css`
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};

module.exports = webpackConfig;