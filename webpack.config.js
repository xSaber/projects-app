const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/public/views/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    devtool: 'eval-source-map',
    entry: './src/app/app.module.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            Styles: path.resolve('src/public/assets/styles/'),
            Views: path.resolve('src/public/views')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate-loader','babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html-loader',
                exclude: /index\.html/
            }
        ]
    },
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'src/public'),
        stats: 'minimal'
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
