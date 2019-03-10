/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-10 13:37:39
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
import choiceExample from '../components/mousePage/choice_example/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    choiceCompany();
    boxImages2();
    boxImages3();
    choiceExample();
    footer()
    console.log(123)
})