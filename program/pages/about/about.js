// pages/about/about.js
const app  = getApp();
Page({
  data: {
    userInfo:null,
    orderCountList:null,
    reload:0
  },
  onLoad(options) {
    let self = this;
    app.login().then(_ => {
      app.util.loadingGet('get_order_count_list', {
        openid:app.globalData.openid
      }, data => {
        self.setData({orderCountList:data});
      });

      if ( app.globalData.userInfo && app.globalData.userInfo.avatarUrl != '' ) {
        self.setData({userInfo:app.globalData.userInfo});
      } else {
        wx.getUserInfo({
          success:res=>{
            self.setData({userInfo:res.userInfo});
            app.globalData.userInfo = e.detail.userInfo;
            res.userInfo.openid = app.globalData.openid;
            app.util.post('set_user_info', res.userInfo, res => { });
          }
        });
      }
    });
  },

  onShow() {
    let self = this;
    if ( this.data.reload || app.globalData.reloadOrder == 1 ) {
      app.util.loadingGet('get_order_count_list', {
        openid:app.globalData.openid
      }, data => {
        app.globalData.reloadOrder = 1;
        self.setData({orderCountList:data, reload: 0});
      });
    }
  },

  getUserInfo(e) {
    if ( e.detail.userInfo ) {
      this.setData({ userInfo:e.detail.userInfo });
      app.globalData.userInfo = e.detail.userInfo;
      e.detail.userInfo.openid = app.globalData.openid;
      app.util.post('set_user_info', e.detail.userInfo, res => { });
    } 
  },  

  becomeTechnician(){
    wx.redirectTo({ url: '../technician/technician' })
  }
})