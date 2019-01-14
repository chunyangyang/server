// pages/technician/balance/TreasureList/TreasureList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["全部", "待服务", "已结束"],
    curIndex:0,
  },
  clicktab:function(e){
    let index = e.target.dataset.index;
    var that = this;
    that.setData({
      curIndex: index
    })
  },
  bindChange:function(e){
    let index = e.detail.current;
    var that = this;
    that.setData({
      curIndex: index
    })
  },
  onLoad: function (options) {
  
  },

  
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

 
})