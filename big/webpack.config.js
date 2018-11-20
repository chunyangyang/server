/*
 * @Author: zhengchunyang
 * @Date: 2018-06-07 18:29:40
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-10-10 12:34:37
 */
const NODE_ENV = process.env.NODE_ENV;
const NODE_TYPE = process.env.NODE_TYPE;
const path = require('path');
const glob = require('glob');
const webpack = require('guido').webpack;
const generateEntry = require('./local_server/generateEntry');
const router = require('./local_server/router.js');
const branch = require('./local_server/branch.js');

const ROOT_PATH = process.cwd();
const SRC_PATH = path.join(ROOT_PATH, 'src');
const DIST_PATH = path.join(ROOT_PATH, 'dist');
const PAGE_PATH = path.join(ROOT_PATH, 'src/pages');

// 打出react的包
let REACT_PATH = 'react/umd/react.production.min.js';
let REACT_DOM_PATH = 'react-dom/umd/react-dom.production.min.js';

let devtool = false;

let publicPath = '';

if (NODE_ENV == 'cdn') {
    publicPath = '//imgcdn50.zuzuche.com/assets/value_added_service/tidl/m/';
}

if (NODE_ENV == 'server' || NODE_ENV == 'development') {
    REACT_PATH = 'react/umd/react.development.js';
    REACT_DOM_PATH = 'react-dom/umd/react-dom.development.js';
    devtool = 'cheap-module-eval-source-map';
}

// 入口
let entry = {};
let outPutPath = 'dist/main';
switch (NODE_TYPE) {
    case 'main':
        entry = generateEntry(NODE_TYPE);
        outPutPath = 'dist/main';
        publicPath = "/frontend/m/dist/main/";
        break;
    case 'pre':
        entry = generateEntry(NODE_TYPE);
        outPutPath = 'dist/pre';
        publicPath = "/frontend/m/dist/pre/";
        break;
    case 'server':
        entry = generateEntry(NODE_TYPE);
        outPutPath = 'dist/server';
        publicPath = "/frontend/m/dist/server/";
        break;
    default:
        entry = generateEntry(NODE_TYPE);
        outPutPath = 'dist';
        publicPath = "/frontend/m/dist/";
}

entry['react-runtime'] = ['react', 'react-dom'];

module.exports = {
    entry,
    output: {
        path: outPutPath,
        publicPath,
        crossOriginLoading: false
    },
    module: {
        rules: [{
            test: require.resolve(REACT_PATH),
            use: [{
                loader: 'expose-loader',
                options: 'React'
            }]
        }, {
            test: require.resolve(REACT_DOM_PATH),
            use: [{
                loader: 'expose-loader',
                options: 'ReactDOM'
            }]
        }]
    },
    devtool,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'production'"
            }
        })
    ],
    externals: [
        function(context, request, callback) {
            if (context !== ROOT_PATH) {
                if (/^zepto/.test(request) && /fastclick/.test(context) === false) {
                    return callback(null, 'root window.Zepto');
                } else if (/^react-dom$/.test(request)) {
                    return callback(null, 'root window.ReactDOM');
                } else if (/^react$/.test(request) && /react\-dom\/umd$/.test(context) === false) {
                    return callback(null, 'root window.React');
                }
            }
            callback();
        }
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            react: require.resolve(REACT_PATH),
            'react-dom': require.resolve(REACT_DOM_PATH),
            '@': path.resolve(__dirname, 'src/')
        }
    },
    html: {
        test: (htmlPath) => {
            let files;
            if (NODE_TYPE == 'main') {
                files = glob.sync(`${process.cwd()}/src/pages/main/**/*.view.hbs`);
            } else if (NODE_TYPE == 'pre') {
                files = glob.sync(`${process.cwd()}/src/pages/pre/**/*.view.hbs`);
            } else if (NODE_TYPE == 'server') {
                files = glob.sync(`${process.cwd()}/src/pages/server/**/*.view.hbs`);
            }
            const result = files.indexOf(htmlPath);
            if (result >= 0) {
                return true;
            }
            return false;
        }
    },
    devServer: {
        disableHostCheck: true,
        publicPath,
        before: router(publicPath),
        port: 9001
    },
    // imagemin: {
    //     mozjpeg: {
    //         enabled: false,
    //         quality: 75
    //     }
    // }
};
