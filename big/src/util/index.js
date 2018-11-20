// 存储到本地
export function setLocallStorage( key, value ) {
    window.localStorage.setItem( key, JSON.stringify( value ) );
}
// 从本地获取
export function getLocallStorage( key ) {
    return JSON.parse( window.localStorage.getItem( key ) );
}
// 从本地删除
export function removeLocallStorage( key ) {
    window.localStorage.removeItem( key );
}

// 暂存储到本地
export function setSessionStorage( key, value ) {
    window.sessionStorage.setItem( key, JSON.stringify( value ) );
}
// 从本地获取暂存
export function getSessionStorage( key ) {
    return JSON.parse( window.sessionStorage.getItem( key ) );
}
// 从本地删除暂存
export function removeSessionStorage( key ) {
    window.sessionStorage.removeItem( key );
}



// 奇偶判断
export function isOdd( value ) {
    return value % 2 === 0;
}

/**
 * 获取url参数
 * @return {obj}
 */
export function getRequest() {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest ={};
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
/**
 * 判断当前是不是.com
 * 判断是不是正式环境
 * @return {boolean}
 */
export function isProductionEnv() {
    return  location.host.includes('.com');
}

/**
 * 得到一个32位的随机数
 * @return {string}
 */
export  function getReqSn(){
    const data = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let num ='';
    for(let i=0;i<32;i++){
        let id = parseInt(Math.random()*61);
        num+=data[id];
    }
    return num;
}

export function removeSpace(str) {
    return str.replace(/[\s]*/g, "");
}
