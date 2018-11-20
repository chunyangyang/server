const http = require('http');
const querystring = require('querystring');

let HOST = '';

function getOptions(postData, request, cookie) {
    // console.log(HOST);
    // console.log(request.originalUrl);
    // console.log(cookie);
    return {
        hostname: HOST,
        port: 80,
        path: request.originalUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
            // Cookie: `${cookie};_cpan=linhao; allow_test_ip=1;user_uuid=5e3cc601ccca4e3a42d7451eff76e98d;`,
            Cookie: `${cookie};_cpan=linhao; allow_test_ip=1;`,
        }
    };
}


function ajaxRequest(data, request, response, cookie, hostPath, callback) {
    HOST = hostPath;
    const postData = querystring.stringify(data);

    const req = http.request(getOptions(postData, request, cookie), (res) => {
        let datas = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            datas += chunk;
        });

        res.on('end', () => {
            let callbackData = {code:404,message:'请求出错了-前端本地开发返回的'+datas}
            try {
                callbackData = JSON.parse(datas);
            } catch (msg) {
                console.log(msg);
            }

            callback instanceof Function && callback(callbackData);
        });


    });

    req.on('error', (e) => {
        console.error(`出错了,${e.message}`);
    });
    req.write(postData);
    req.end();
}

module.exports = ajaxRequest;