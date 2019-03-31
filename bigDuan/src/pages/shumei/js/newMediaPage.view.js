/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 22:07:26
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/newMediaPage/banner/index';
import myAdvantages from '../components/newMediaPage/my_advantages/index';
import myServe from '../components/newMediaPage/my_serve/index';
import boxImages from '../components/newMediaPage/box_img/index';
import boxImages2 from '../components/newMediaPage/box_img2/index';
import boxImages3 from '../components/newMediaPage/box_img3/index';
import choiceExample from '../components/newMediaPage/choice_example/index';

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
    boxImages3();
    choiceExample();
    footer();
});