/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-27 11:56:41
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import zonghe from '../components/annulation/zonghe/index';
import zongheList from '../components/annulation/zonghe_list/index';


import footer from '../components/footer/index';
$(function(){
    head();
    zonghe();
    zongheList();
    footer();

});