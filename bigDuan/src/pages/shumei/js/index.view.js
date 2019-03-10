/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-02-17 22:40:39
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import banner from '../components/index/banner/index';
import footer from '../components/footer/index';
import listOne from '../components/index/list_one/index';
import myServe from '../components/index/my_serve/index';
import myAdvantages from '../components/index/my_advantages/index';
import allChoice from '../components/index/all_choice/index';
import choiceCompany from '../components/index/choice_company/index';
import choiceExample from '../components/index/choice_example/index';

$(function(){
    head();
    banner();
    listOne();
    myServe();
    myAdvantages();
    allChoice();
    choiceCompany();
    choiceExample();

    footer();
})