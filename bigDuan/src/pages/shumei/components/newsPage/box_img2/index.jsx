/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-26 22:45:47
 */
import './index.scss';
export default function boxImages(){
  $('.J-item-box-serve').on('mouseenter','.item',function(){
      $(this).addClass('active').siblings().removeClass('active');
  })
}