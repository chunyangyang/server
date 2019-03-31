/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 21:28:21
 */
import './index.scss';
export default function alertLinkServe() {
    $('.J-click-hide').on('click',function () {
        $('.J-alert-link-box').hide();
    });
    setTimeout(function(){
        $('.J-alert-link-box').show();
    },5000)
}