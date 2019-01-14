// pages/myOrder/myevaluate/success/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      "tip":'评价成功',
      "url":'/pages/myOrder/myOrder',
      "open":"switchTab"
    }, 
    curIndex:0,
  },


  onLoad:function(options){
    this.setData({curIndex:options.index});
  },

  clickBack:function () {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length-2];
    prevPage.setData({reload:1, curIndex:this.data.curIndex});
    wx.navigateBack({ changed: true });
  }
})