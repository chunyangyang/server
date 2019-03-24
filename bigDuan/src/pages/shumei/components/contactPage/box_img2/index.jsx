/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-24 12:31:44
 */
import './index.scss';
export default function boxImages2(){
    $('.J-office-img-box').on('mouseenter', 'div',function(){       
        $(this).addClass('active').siblings().removeClass('active');
    });
}