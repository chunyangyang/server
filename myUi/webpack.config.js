/*
 * @Author: zhengchunyang 
 * @Date: 2018-05-30 17:41:43 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-07-31 23:45:39
 */
const NODE_ENV = process.env.NODE_ENV;
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 将js带hash插入html
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将css独立出来单独打包
const webpack = require('webpack');

const path = require('path');
const ROOT_PATH = path.resolve(process.cwd());
const APP_PATH = path.resolve(ROOT_PATH, 'src');

const isProduction = NODE_ENV
module.exports = {
    entry: { index: APP_PATH + '/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [{
                test: /\.(handlebars|hbs)$/,
                loader: "handlebars-loader",
                options: {
                    runtime: 'handlebars/dist/handlebars.runtime',
                }
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "sass-loader", "postcss-loader"],
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '../images/[name].[ext]'
                }
            },
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }

            },
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: '../css/index.css',
            allChunks: false
        }),
        new HtmlWebpackPlugin({ template: './src/index.html' })
       
    ],
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        disableHostCheck: true,
        port: 9001,
        contentBase: path.join(__dirname, './dist'),
        host: '0.0.0.0',
        // openPage: 'webpack-dev-server',
    },


}


// if (isProduction == 'production') {
//     module.exports.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
//     );
// }
// console.log( module.exports.plugins)