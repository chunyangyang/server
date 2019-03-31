/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:28:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-24 14:52:20
 */
import './index.scss';
export default function choiceExample() {
    // console.log('choiceExample');
    let contentBox = $('.J-show-content li');
    let controlBox = $('.J-control-box li');
    $(contentBox[2]).show();
    let index = 2;
    $('.J-control-box').on('click', 'li', function () {
        let thisIndex = $(this).data('index');
        if (index != thisIndex) {
            $(contentBox[index]).hide();
            $(contentBox[thisIndex]).show();
            index = thisIndex;
        }
        $(this).addClass('active').siblings().removeClass('active');
    });

    setInterval(() => {
        let oldindex = index;
        index += 1;
        if (index >= contentBox.length) {
            index = 0;
        }
        $(contentBox[oldindex]).hide();
        $(contentBox[index]).show();
        controlBox.removeClass('active');
        $(controlBox[index]).addClass('active');
    }, 5000);

}