const fs = require('fs');
const path = require('path');
const multipart = require('connect-multiparty');
const httpProxy = require('express-http-proxy');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const ajaxRequest = require('./ajaxRequset.js');
const branch = require('./branch.js');
const httpGetTemplateName = require('./httpGetTemplateName.js');

const NODE_LOGIN = process.env.NODE_LOGIN;
const multipartMiddleware = multipart();
const currentBranch = branch.getBranch();
const HOST = `tidl_${currentBranch}.zuzuche.net`;


console.log(chalk.green(`当前分支名 ---->${HOST}`));

module.exports = function router(publicPath) {

    return function(app, Server) {
    
            let userLog = {
                id: '',
                cookie: ''
            };
            if (NODE_LOGIN == 'true') {
                userLog = JSON.parse(fs.readFileSync(path.join(__dirname, '../.user_log/userLog.json')));
            }

            app.use(bodyParser.urlencoded({
                extended: false
            }));
            
            // 获取模板
            app.get('*', (request, response, next) => {
                if (request.accepts(['js', 'css', 'image', 'html']) === 'html') {
                    httpGetTemplateName(request, response, userLog.cookie, Server, HOST, (html) => {
                        response.send(html);
                    });
                } else {
                    next();
                }
            });

            // 处理图片问题
            app.get(/\.(?:js|css|png|jpg|gif|jpeg)/, httpProxy(HOST, {
                filter: (req) => {
                    return req.url.indexOf(publicPath) === -1;
                }
            }));
            app.get(/\/api\/.+/, function(request, response) {
                const reqData = request.body;
                ajaxRequest(reqData, request, response, userLog.cookie, HOST, (result) => {
                    response.json(result);
                });
            });
            app.post(/\/api\/.+/, multipartMiddleware, function(request, response) {
                const reqData = request.body;
                    ajaxRequest(reqData, request, response, userLog.cookie, HOST, (result) => {
                        response.json(result);
                    });
                           
            }); 
                //   特殊请求验证码 
            app.post(/\/api/, multipartMiddleware, function(request, response) {
                const reqData = request.body;
                const url = request.originalUrl;
                 // 特殊处理验证
                 if(url.includes('/api.php?ctl=')){
                    console.log('request.originalUrl'+request.originalUrl);
                    ajaxRequest(reqData, request, response, userLog.cookie, 'account.zuzuche.net', (result) => {
                        response.json(result);
                    });
                 }else{
                    ajaxRequest(reqData, request, response, userLog.cookie, HOST, (result) => {
                        response.json(result);
                    });
                 }             
            });        
    };

};