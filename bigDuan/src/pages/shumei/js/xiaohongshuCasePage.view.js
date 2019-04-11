/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-11 09:59:11
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/xiaohongshuCasePage/banner/index';
import boxImagesNotitle from '../components/xiaohongshuCasePage/box_img_notitle/index';
import boxImagesNotitle2 from '../components/xiaohongshuCasePage/box_img_notitle2/index';
import boxImagesNotitle3 from '../components/xiaohongshuCasePage/box_img_notitle3/index';
import boxImages from '../components/xiaohongshuCasePage/box_img/index';
import boxImages2 from '../components/xiaohongshuCasePage/box_img2/index';
import boxImages3 from '../components/xiaohongshuCasePage/box_img3/index';
import boxImages4 from '../components/xiaohongshuCasePage/box_img4/index';
import boxImages5 from '../components/xiaohongshuCasePage/box_img5/index';
import boxImages6 from '../components/xiaohongshuCasePage/box_img6/index';

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