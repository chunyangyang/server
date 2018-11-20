
const readline = require( 'readline' );
const login = require( './login' );
const path = require( 'path' );
const fs = require( 'fs' );
const userConfig = require('./user.config');

const root = path.join( __dirname, '../../' );

function readSyncByRl( tips ) {
    tips = tips || '> ';
    return new Promise( ( resolve ) => {
        const rl = readline.createInterface( {
            input: process.stdin,
            output: process.stdout
        } );
        rl.question( tips, ( answer ) => {
            rl.close();
            resolve( answer.trim() );
        } );
    } );
}

// 删除登录记录log
function removeUserLog() {
    let dirPath = path.join( root, '.user_log' );
    let exists = fs.existsSync( dirPath );
    if ( exists ) {
        let files = fs.readdirSync( dirPath );
        files.forEach( function ( file ) {
            let filePath = path.join( dirPath, file );
            if ( fs.statSync( filePath ).isFile() ) {
                fs.unlinkSync( filePath );
            }
        } );
        if ( fs.statSync( dirPath ).isDirectory() ) {
            fs.rmdirSync( dirPath );
        }
    }
}

// 创建登录记录log
function creatUserLog(data) {

    let dirPath = path.join( root, '/.user_log' );
    if ( !fs.existsSync( dirPath ) ) {
        fs.mkdirSync( dirPath );
    }

    fs.writeFileSync(
        path.join( root, '/.user_log/userLog.json' ),
        JSON.stringify( data, null, 4 )
    );
}

readSyncByRl( '请输入你的登录id:' ).then( ( id ) => {
    if(id==1220432){
        return false;
    }

    removeUserLog();

    let loginId = null;

    if ( userConfig[id] ) {
        loginId = userConfig[id];
    } else { 
        loginId = id;
    }
    
    login( loginId )
        .then( cookie => {
            creatUserLog( {
                cookie: cookie,
                id: loginId
            });
        } )
} );