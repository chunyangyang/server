// common/LabelSelection/LabelSelection.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: { order_id : { type : String, value : "" } },

  /**
   * 组件的初始数据
   */
  data: { curIndex : 0, background : '#E5E5E5', color : '#282828', list : [] },

  ready: function () {
    let self = this;
    wx.showToast({ title : '加载中', icon : 'loading', mask : true });
    app.util.get('get_comment_tab', { order_id : this.data.order_id, openid : app.globalData.openid }, function (res) {
      wx.hideToast();
      if ( res.data.code == 1 )
        self.setData({ list : res.data.data });
      else
        wx.showToast({ title : '加载失败' });
    });
  },

  methods: {
    bindClick:function(e){
      let item = this.data.list[e.target.dataset.index];
      item.isSelected = !item.isSelected;
      this.setData({ list : this.data.list });
      this.triggerEvent('selectEvent', { id : e.target.dataset.id, status : item.isSelected });
    }
  }
})
