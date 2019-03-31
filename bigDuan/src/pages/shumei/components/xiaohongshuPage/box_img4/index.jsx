/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-28 18:19:20
 */
import './index.scss';
import './wanghong.scss';

export default function boxImages4() {
    let contentBox = $('.J-wb-box');
    $('.J-wb-menu').on('mouseenter', 'li', function () {
        let index =   $(this).data('index');
        $(this).addClass('active').siblings().removeClass('active');       
        $(contentBox[index]).show().siblings().hide();
    });
    let rightContentBox ={}
    for(let i=0;i<3;i++){
        rightContentBox[`c${i}`]= $(`.J-wbb-right-${i} ul`);
        $(`.J-wbb-left-${i}`).on('mouseenter', 'li', function () {
            let index =   $(this).data('index');
            $(this).addClass('wl-cur').siblings().removeClass('wl-cur');       
            $( rightContentBox[`c${i}`][index]).show().siblings().hide();
        });
    }
   
}