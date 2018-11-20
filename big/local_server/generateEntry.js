/**
 * 生成webpack.config.js入口配置
 * 本项目为“多页应用”
 */

const path = require('path');

const glob = require('glob');

const PROJECT_PATH = process.cwd();
const REG_VIEW_HANDLEBARS_NAME_RULE = /(\.view)$/;

module.exports = function(nodeType) {
    const entry = {};
    const pagePath = path.resolve(PROJECT_PATH, `./src/pages/${nodeType}/`);
    const pagesName = glob.sync('**/**/*.view.js', {
        cwd: pagePath,
        nodir: true,
        matchBase: true,
        realpath: true
    });

    pagesName.map(function(pageName) {
        let outputName = path.basename(pageName, '.js');
        outputName = outputName.replace(REG_VIEW_HANDLEBARS_NAME_RULE, '');
        entry[outputName] = jsEntryPath(pageName);
        console.log(`entry ---> ${outputName},${jsEntryPath( pageName )}`);
    });

    function jsEntryPath(pageName) {
        return path.resolve(pagePath, pageName);
    }

    return entry;
};