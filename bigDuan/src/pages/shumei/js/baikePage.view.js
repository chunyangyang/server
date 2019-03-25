/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-26 00:36:56
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/baikePage/banner/index';
import myAdvantages from '../components/baikePage/my_advantages/index';
// import myServe from '../components/baikePage/my_serve/index';
import boxImages from '../components/baikePage/box_img/index';
import boxImages2 from '../components/baikePage/box_img2/index';
import boxImages3 from '../components/baikePage/box_img3/index';
import boxImages4 from '../components/baikePage/box_img4/index';
import choiceExample from '../components/baikePage/choice_example/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    myAdvantages();
    // myServe();
    boxImages();
    boxImages2();
    boxImages3();
    boxImages4();
    choiceExample();
    footer();
});