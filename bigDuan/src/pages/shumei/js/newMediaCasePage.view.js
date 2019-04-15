/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-13 16:19:46
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/newMediaCasePage/banner/index';
import boxImages from '../components/newMediaCasePage/box_img/index';
// import boxImages2 from '../components/newMediaCasePage/box_img2/index';
// import boxImages3 from '../components/newMediaCasePage/box_img3/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    boxImages();
    footer();
});