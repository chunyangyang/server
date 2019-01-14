import Http from '@/middleware/http';

const http = new Http();

// 金钱

export function getUserInfo(data) {
    return http.post('/Index/Index/getUserInfo', data);
}
export function getPhoneCode(data) {
    return http.post('/Index/Login/sendyzm', data);
}
export function postPhoneCode(data) {
    return http.post('/Index/Login/yzphone', data);
}
export function gettOptionList(data) {
    return http.getAsync('/Index/Mctype/getOptionList',data);
}
export function posttOptionListData(data) {
    return http.postAsync('/Index/Mctype/getMoneyLimit',data);
}
export function postupdUserInfo(data) {
    return http.postAsync('/Index/Index/updUserInfo',data);
}
export function getexpense(data) {
    return http.getAsync('/Index/expense/getFeeDetail',data);
}
export function postapplyLoan(data) {
    return http.postAsync('/Index/Order/applyLoan',data);
}
export function getLoanRecord(data) {
    return http.postAsync('/Index/Order/getLoanRecord',data);
}
