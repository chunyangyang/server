/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-21 22:29:35
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/caseOnePage/banner/index';
import myAdvantages from '../components/caseOnePage/my_advantages/index';
import boxImages from '../components/caseOnePage/box_img/index';

import footer from '../components/footer/index';
$(function(){
    head();
    banner();
    myAdvantages();
    boxImages();
    footer();
});