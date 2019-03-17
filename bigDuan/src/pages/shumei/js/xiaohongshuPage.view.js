/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-15 22:45:26
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/xiaohongshuPage/banner/index';
import myAdvantages from '../components/xiaohongshuPage/my_advantages/index';
import myServe from '../components/xiaohongshuPage/my_serve/index';
import boxImages from '../components/xiaohongshuPage/box_img/index';
import boxImages2 from '../components/xiaohongshuPage/box_img2/index';
import boxImages3 from '../components/xiaohongshuPage/box_img3/index';
import boxImages4 from '../components/xiaohongshuPage/box_img4/index';
import choiceExample from '../components/xiaohongshuPage/choice_example/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    boxImages2();
    boxImages3();
    boxImages4();
    choiceExample();
    footer();

});