/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-13 21:03:33
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/searchCasePage/banner/index';
import text from '../components/searchCasePage/text/index';
import boxImages from '../components/searchCasePage/box_img/index';
import boxImages2 from '../components/searchCasePage/box_img2/index';
import boxImages3 from '../components/searchCasePage/box_img3/index';
import boxImages4 from '../components/searchCasePage/box_img4/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    text();
    banner();
    boxImages();
    boxImages2();
    boxImages3();
    boxImages4();
    footer();
});