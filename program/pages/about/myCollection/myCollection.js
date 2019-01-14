// pages/about/myCollection/myCollection.js
const app  = getApp();
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
    app.util.loadingGet('get_collect_list', {openid: app.globalData.openid}, data => {
      self.setData({list:data});
    });
  },

  // 取消收藏
  setCollection(e){
    let self = this, service_id = e.currentTarget.dataset.id;
    app.util.loadingGet('edit_collect', {id:service_id,openid:app.globalData.openid}, data => {
        if ( data.is_del == 1 ) {
          wx.showToast({ title : '取消成功' });

          let list = self.data.list;
          for ( let i = 0; i < list.length; i++ ) {
            if ( list[i].service_id == service_id ) {
              list[i].is_del =1;
              self.setData({list:list});
              break;
            }
          }
        } else {
          wx.showToast({ title : '收藏成功' });
        }
    });
  }
})