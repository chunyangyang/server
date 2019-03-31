/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 22:06:57
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/caseOnePage/banner/index';
import myAdvantages from '../components/caseOnePage/my_advantages/index';
import boxImages from '../components/caseOnePage/box_img/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    myAdvantages();
    boxImages();
    footer();
});