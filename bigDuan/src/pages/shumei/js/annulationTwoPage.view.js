/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-04-02 22:28:29
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/annulationTwoPage/banner/index';
import table from '../components/annulationTwoPage/table/index';
import allChoice from '../components/annulationTwoPage/all_choice/index';
import choiceCompany from '../components/annulationTwoPage/choice_company/index';
import choiceExample from '../components/index/choice_example/index';

import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    banner();
    table();
    allChoice();
    choiceCompany();
    choiceExample();
    footer();

});