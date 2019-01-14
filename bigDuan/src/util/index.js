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
// 验证中国身份证
export function validateIdCard(idCard) {
    //15位和18位身份证号码的正则表达式
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
        if (idCard.length == 18) {
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
                idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
            }
            var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
            var idCardLast = idCard.substring(17);//得到最后一位身份证号码
            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod == 2) {
                if (idCardLast == "X" || idCardLast == "x") {

                    // alert("恭喜通过验证啦！");
                    return true;
                } else {

                    // alert("身份证号码错误！");
                    return false;
                }
            } else {
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if (idCardLast == idCardY[idCardMod]) {
                    // alert("恭喜通过验证啦！");
                    return true;
                } else {

                    // alert("身份证号码错误！");
                    return false;
                }
            }
        }
    } else {
        // alert("身份证格式不正确!");
        return false;
    }
}