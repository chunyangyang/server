/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-10 18:47:17
 */
import './index.scss';
export default function choiceExample(){
    // console.log('choiceExample');
   let contentBox = $('.J-show-content li');
   $(contentBox[0]).show();
   let index='0';
  $('.J-control-box').on('click', 'li',function(){
      let thisIndex =  $(this).data('index');
        if(index!=thisIndex){
            $(contentBox[index]).hide();
            $(contentBox[thisIndex]).show();
            index = thisIndex;
        }     
      $(this).addClass('active').siblings().removeClass('active');
  })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

}