const app = getApp();
Page({

  data: {
    technician:null
  },
  switchingUser(){
    wx.reLaunch({
      url: '../about/about',
    })
  },
  onLoad: function () {
    let self = this;
    wx.showToast({
      title : '加载中',
      icon : 'loading',
      mask : true,
    });

    app.util.get('get_technician_info', {
      openid:app.globalData.openid
    }, function (res) {
      wx.hideToast();
      if ( res.data.code == 1 ) {
        self.setData({
          technician:res.data.data
        })
        app.globalData.userInfo.is_technician = 1;
      } else {
        wx.showToast({
          title : res.data.msg
        });
      }
    });
  },

  onReady: function () {
  
  },

  
})