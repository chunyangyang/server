const http = require( 'http' );

function createCookieStr( cookies ) {
    let str = '';
    for ( let i = 0; i < cookies.length; i++ ) {
        str += `${cookies[i].split( ' ' )[0]} `;
    }
    return str;
}

let cookie = '';

function login( id ) {

    return new Promise( ( resolve, reject ) => {
        let req = http.request( {
            hostname: 't.zuzuche.net',
            port: 80,
            path: `http://t.zuzuche.net/t_login.php?user_id=${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': '_cpan=linhao; allow_test_ip=1;',
            }
        }, ( res ) => {
            let html = '';

            res.setEncoding( 'utf8' );

            res.on( 'data', ( chunk ) => {
                // let cookies = res.headers['set-cookie'];
                // cookie = createCookieStr( cookies );
            } );

            res.on( 'end', () => {
                
                let cookies = res.headers['set-cookie'];
                cookie = createCookieStr( cookies );

                if ( cookie != '' ) {
                    console.log( '登录成功' );
                } else {
                    console.log( '登录失败' );
                }
                resolve( cookie );
            } )

        } );

        req.on( 'error', ( e ) => {
            console.error( '出错了,' + e.message );
        } );
        req.write( '' );
        req.end();
    } );
}

module.exports = login;


