/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-10 22:12:55
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/zhihuPage/banner/index';
import myAdvantages from '../components/zhihuPage/my_advantages/index';
import myServe from '../components/zhihuPage/my_serve/index';
import boxImages from '../components/zhihuPage/box_img/index';
import boxImages2 from '../components/zhihuPage/box_img2/index';
import boxImages3 from '../components/zhihuPage/box_img3/index';
import choiceExample from '../components/zhihuPage/choice_example/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    boxImages2();
    boxImages3();
    choiceExample();
    footer();
});