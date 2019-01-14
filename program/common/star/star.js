// common/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { },

  /**
   * 组件的初始数据
   */
  data: {
    two_2:5, //没有点亮的星星数
    one_2:0, //点亮的星星数
    list: ["极差", "较差", "一般", "不错","很棒"],
    Comment:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTap:function(e){
      let in_xin = e.currentTarget.dataset.in, one_2;

      if( in_xin == 'star' ) one_2 = Number(e.currentTarget.id);
      else one_2 = Number(e.currentTarget.id)+this.data.one_2;
      
      this.setData({ one_2 : one_2, two_2 : 5-one_2, Comment: this.data.list[one_2-1] });
      this.triggerEvent('myEvent', { num : one_2 });
    }
  }
})
