// pages/index/detail/allEvaluation/allEvaluation.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let self = this;
    app.util.loadingGet('get_comment_list', {
      id:options.id
    }, data => {
      self.setData({ list:data });
    });
  },
});