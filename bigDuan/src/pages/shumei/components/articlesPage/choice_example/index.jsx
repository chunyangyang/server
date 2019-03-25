/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-25 22:42:27
 */
import './index.scss';
export default function choiceExample(){
    // console.log('choiceExample');
   let contentBox = $('.J-show-content .show-content');
   $(contentBox[0]).show();
   let index='0';
  $('.J-control-box').on('mouseenter', 'li',function(){
      let thisIndex =  $(this).data('index');
        if(index!=thisIndex){
            $(contentBox[index]).hide();
            $(contentBox[thisIndex]).show();
            index = thisIndex;
        }     
      $(this).addClass('active').siblings().removeClass('active');
  })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

}