/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-02-17 12:37:16
 */
import './index.scss';
export default function choiceCompany(){
    console.log('choiceCompany');
    var swiper = new Swiper('.J-swiper-container', {
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'fraction',
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}