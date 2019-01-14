// pages/evaluation/evaluation.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:'0',
    list:[
      {
        userName:'昵称不超过六个字',
        starCount:3,
        fraction:'6.0'
      },
      {
        userName: '昵称不超过五个字',
        starCount: 5,
        fraction: '10.0'
      }
    ],
    templateData:{
      tips:"提交成功23223",
      url:'/pages/index/index'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 导航切换
  setTabIndex:function(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      tabIndex:index
    })
  }
})