/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 22:07:03
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/caseThreePage/banner/index';
import boxImagesNotitle from '../components/caseThreePage/box_img_notitle/index';
import boxImagesNotitle2 from '../components/caseThreePage/box_img_notitle2/index';
import boxImagesNotitle3 from '../components/caseThreePage/box_img_notitle3/index';
import boxImages from '../components/caseThreePage/box_img/index';
import boxImages2 from '../components/caseThreePage/box_img2/index';
import boxImages3 from '../components/caseThreePage/box_img3/index';
import boxImages4 from '../components/caseThreePage/box_img4/index';
import boxImages5 from '../components/caseThreePage/box_img5/index';
import boxImages6 from '../components/caseThreePage/box_img6/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    boxImagesNotitle();
    boxImagesNotitle2();
    boxImagesNotitle3();
    boxImages();
    boxImages2();
    boxImages3();
    boxImages4();
    boxImages5();
    boxImages6();
    footer();
});