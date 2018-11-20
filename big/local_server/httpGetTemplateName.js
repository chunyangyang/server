const superagent = require( 'superagent' );
const log = require( './log.js' );
const readFile = require( './readFile.js' );
const getHtml = require( './getHtml.js' );

let HOST = '';

// 从服务器获取模板名
// url 域名后面的 path 和 query
// 处理模板返回问题
function httpGetTemplateName( req, res, cookies, Server, hostPath, callback ) {
    HOST = hostPath;
    getTemplateName( req, cookies )
        .then( function ( templateName ) {
            // console.log(templateName);
            // 获取本地html文件（或者需要先打包出来）
            const fileContent = readFile( templateName, Server );

            getHtml( req, res, fileContent, cookies, hostPath, ( html ) => {
                callback( html );
            } );
        } )
        .catch( function ( err ) {
            res.status( 500 );
            res.send( `<p>获取模板名的时候出错了</p>
                        <pre>status: ${err.status}\nmessage: ${err.message}\nstack: ${err.stack}</pre>` );
        } );
}

function getTemplateName( req, cookie ) {
    const url = req.url;
    if ( !fetchTemplateName._cache ) {
        fetchTemplateName._cache = {};
    }

    if ( fetchTemplateName._cache[url] ) {
        return Promise.resolve( fetchTemplateName._cache[url] );
    }
    return fetchTemplateName( req, cookie )
        .then( ( data ) => {
            const templateName = extractTemplateName( data );
            fetchTemplateName._cache[url] = templateName;
            return templateName;
        } );
}


// 发起获取模板名字的请求
function fetchTemplateName( req, cookies ) {
    const url = req.url;
    const api = `${HOST}${url}`;
    const query = {
        __is_dev_template: 1,
        p_file: 1
    };
    log( `request url:${api} query:${JSON.stringify( query )}` );

    log( `cookies --->  ${cookies}` );
    return superagent
        .get( api )
        .set( 'Content-Type', 'application/json' )
        .set( 'Accept', 'application/json' )
        .set( 'Cookie', `${cookies}_cpan=linhao;` )
        .set( 'User-Agent', req.get( 'user-agent' ) )
        .buffer( true )
        .query( query )
        .then( function ( res ) {
            log( `response url:${api} query:${res.text}` );
            try {
                const data = JSON.parse( res.text );
                return data;
            } catch ( e ) {
                throw e;
            }
        } )
        .catch( ( err ) => {
            log( `response url:${api} status:${err.status} error:${err.message}` );
            throw err;
        } );
}
// 从返回的file中提取模板名称
function extractTemplateName( data ) {
    const file = data.file;
    log( `extractTemplateName ---> ${file}` );
    const paths = file.slice(file.indexOf('/dist/'), file.length);
    log( `extractTemplateNamepaths ---> ${paths}` );
    return paths || '';
}

module.exports = httpGetTemplateName;