// pages/index/nominate/nominate_js.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    title: '技师推荐'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({ title: this.data.title });

    let self = this;
    options.openid = app.globalData.openid;
    app.util.loadingGet('get_technician_list', options, data => {
        let list = [],tmp = [];
        for ( let i = 0; i < data.list.length; i++ ) {
          data.list[i].distance = app.util.distanceUnit(data.list[i].distance);
          tmp.push(data.list[i]);  
        }
        list.push(tmp);
        self.setData({ list:list });
    });
  }
})