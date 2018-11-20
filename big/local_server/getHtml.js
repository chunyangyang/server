const http = require( 'http' );
const querystring = require( 'querystring' );

let HOST = '';

function getOptions( postData, request, cookie ) {
    return {
        hostname: HOST,
        port: 80,
        path: request.originalUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength( postData ),
            'User-Agent': request.get( 'user-agent' ),
            Cookie: `${cookie}_cpan=linhao; allow_test_ip=1;`
        }
    };
}

function getHtml( request, response, fileContent, cookie, hostPath, callback ) {
    HOST = hostPath;
    const postData = querystring.stringify( {
        __is_dev_template: 1,
        __template_html: encodeURIComponent( fileContent )
    } );
    const req = http.request( getOptions( postData, request, cookie ), ( res ) => {
        let html = '';

        res.setEncoding( 'utf8' );

        res.on( 'data', ( chunk ) => {
            html += chunk;
        } );

        res.on( 'end', () => {
            callback instanceof Function && callback( html );
        } );
    } );

    req.on( 'error', ( e ) => {
        console.error( `出错了,${e.message}` );
    } );
    req.write( postData );
    req.end();
}
module.exports = getHtml;