// pages/country/country.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    country: '',
    host: 'm.zuzuche.com'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      region: options.region,
      country: options.country
    })
    wx.setNavigationBarTitle({
      title: that.data.country + '自驾证件查询'
    });
    wx.request({
      url: 'http://'+that.data.host + '/api/licence/support_licence.php',
      method: 'GET',
      data: {
        region: options.region
      },
      success: function (res) {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})