//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  //事件处理函数
  clickSearch: function () {
    wx.navigateTo({
      url: '../carList/carList'
    });
  },
  onLoad: function () {

  }
})
