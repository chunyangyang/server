/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 22:06:47
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/articlesPage/banner/index';
import myAdvantages from '../components/articlesPage/my_advantages/index';
import myServe from '../components/articlesPage/my_serve/index';
import boxImages from '../components/articlesPage/box_img/index';
import choiceExample from '../components/articlesPage/choice_example/index';
import boxImages2 from '../components/articlesPage/box_img2/index';
import boxImages3 from '../components/articlesPage/box_img3/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    myAdvantages();
    myServe();
    boxImages();
    choiceExample();
    boxImages2();
    boxImages3();
    footer()
    console.log(123)
})