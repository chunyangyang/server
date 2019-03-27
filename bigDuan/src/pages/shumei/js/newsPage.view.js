/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-27 10:11:45
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/newsPage/banner/index';
import myAdvantages from '../components/newsPage/my_advantages/index';
import myServe from '../components/newsPage/my_serve/index';
import boxImages from '../components/newsPage/box_img/index';
import choiceCompany from '../components/newsPage/choice_company/index';
import choiceExample from '../components/newsPage/choice_example/index';
import myTaocan from '../components/newsPage/my_taocan/index';
import boxImages2 from '../components/newsPage/box_img2/index';
import myServe2 from '../components/newsPage/my_serve2/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    choiceExample();
    choiceCompany();
    myTaocan();
    boxImages2();
    myServe2();
    footer();
})