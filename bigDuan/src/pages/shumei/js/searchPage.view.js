/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 22:07:34
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/searchPage/banner/index';

import myAdvantages from '../components/searchPage/my_advantages/index';
import myServe from '../components/searchPage/my_serve/index';
import boxImages from '../components/searchPage/box_img/index';
import boxImages2 from '../components/searchPage/box_img2/index';
import choiceExample from '../components/searchPage/choice_example/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    boxImages2();
    choiceExample();
    footer();
});