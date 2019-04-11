import './index.scss';
export default function hotAnnulation () {
  $(function () {
    let contentBox = $('.J-ppcj');
    let index = 0;
    $('.J-ind_rem_title').on('mouseenter', 'a', function () {
      let thisIndex = $(this).data('index');
      if (index != thisIndex) {
        $(contentBox[index]).hide();
        $(contentBox[thisIndex]).show();
        index = thisIndex;
      }
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.J-load').on('click',function(){
      $(this).html('');
      $(this).parent('li').find('.J-rem_pp').addClass('scroll');
    })
  })
}