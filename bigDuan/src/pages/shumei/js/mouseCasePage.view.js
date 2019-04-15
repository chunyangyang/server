/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-13 16:07:52
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/mouseCasePage/banner/index';
import boxImages from '../components/mouseCasePage/box_img/index';
import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    boxImages();
    footer();
});