/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-13 16:19:36
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/mousePage/banner/index';
import myAdvantages from '../components/mousePage/my_advantages/index';
import myServe from '../components/mousePage/my_serve/index';
import boxImages from '../components/mousePage/box_img/index';
import choiceCompany from '../components/mousePage/choice_company/index';
import boxImages2 from '../components/mousePage/box_img2/index';
import boxImages3 from '../components/mousePage/box_img3/index';
import boxImages4 from '../components/mousePage/box_img4/index';
import choiceExample from '../components/mousePage/choice_example/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    choiceCompany();
    boxImages2();
    boxImages3();
    boxImages4();
    choiceExample();
    footer()
    // console.log(123)
})