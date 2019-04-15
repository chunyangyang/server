/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-13 15:25:59
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/zhihuCasePage/banner/index';
import boxImages from '../components/zhihuCasePage/box_img/index';
import boxImages2 from '../components/zhihuCasePage/box_img2/index';
import boxImages3 from '../components/zhihuCasePage/box_img3/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    boxImages();
    boxImages2();
    boxImages3();
    footer();
});