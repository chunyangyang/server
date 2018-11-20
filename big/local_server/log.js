const fs = require( 'fs' );
const path = require( 'path' );

const PROJECT_PATH = process.cwd();
const LOG_FILE = path.join( PROJECT_PATH, 'dev.log' );
// 简单实现日志 日志文件为 LOG_FILE
function log( message ) {
    message = `${message}\n`;
    fs.appendFile( LOG_FILE, message, 'utf8', function ( err ) {
        if ( err ) {
            console.log( '插入日志出错 ./local_server/server.js log(message)', err.message );
        }
    } );
}
module.exports = log;