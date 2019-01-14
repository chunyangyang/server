const app = getApp();
Page({

  data: {
    list:null
  },

  onLoad: function (options) {
	let self = this;
    wx.showToast({
      title : '加载中',
      icon : 'loading',
      mask : true,
    });

    app.util.get('get_bill_list', {
      openid:app.globalData.openid
    }, function (res) {
      wx.hideToast();
      if ( res.data.code == 1 ) {
        self.setData({
          list:res.data.data
        })
      } else {
        wx.showToast({
          title : res.data.msg
        });
      }
    });
  }
})