// pages/countDown/countDown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countBool:false,
    timeNum: 3600000,
    hour:null,
    Hour:null,
    min:null,
    Min:null,
    sec:null,
    Sec:null,
    timer:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setTimeCount(this.data.timeNum)
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
  // 计算时间
  setTimeCount:function(time){
    var secTime = time / 1000;
    var hour = '0' + parseInt(secTime / 3600);
    var min = '0' + parseInt(secTime % 3600 / 60);
    var sec = '0' + parseInt(secTime % 60);
    this.setData({
      timeNum:time,
      hour: hour.substr(-1, 1),
      Hour: hour.substr(-2, 1),
      min: min.substr(-1, 1),
      Min: min.substr(-2, 1),
      sec: sec.substr(-1, 1),
      Sec: sec.substr(-2, 1)
    })
  },
  // 开始到时
  startCountDown:function(){
    var _this = this;
    if (!_this.data.countBool){
      _this.setData({
        timer: setInterval(function () {
          let time = _this.data.timeNum - 1000;
          if (time <= 0) {
            clearInterval(_this.data.timer);
          }
          _this.setTimeCount(time);
        }, 1000),
        countBool:true
      })
    }
  }
})