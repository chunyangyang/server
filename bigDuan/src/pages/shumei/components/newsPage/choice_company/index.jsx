/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-24 16:47:55
 */
import './index.scss';
export default function choiceCompany(){
    var swiper = new Swiper('.J-swiper-container', {
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        spaceBetween : 40,    
        loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}