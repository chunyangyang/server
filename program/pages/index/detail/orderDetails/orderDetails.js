// pages/orderDetails/orderDetails.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let self = this;
    app.util.loadingGet('get_order_detail', {
      order_id:options.order_id,
      openid:app.globalData.openid
    }, data => {
        self.setData({
          detail:data
        });
    });
  },

  cancelOrder() {
    let self = this;
    app.util.loadingGet('user_payment_cancel', {
      order_id:this.data.detail.order_id, 
      openid:app.globalData.openid
    }, data => {
        let detail = self.data.detail;
        detail.status = 4;
        self.setData({detail:detail})
        wx.showToast({ title : '取消成功' });
    });
  }
})