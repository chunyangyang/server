/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-23 15:34:08
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/contactPage/banner/index';
import boxImages from '../components/contactPage/box_img/index';
import boxImages2 from '../components/contactPage/box_img2/index';
import boxImages3 from '../components/contactPage/box_img3/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    boxImages();
    boxImages2();
    boxImages3();
    footer();
});