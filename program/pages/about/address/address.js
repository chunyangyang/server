// pages/about/address/address.js
const app  = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    loadHidden: true,
    list: null,
    changeId: 0,
    select: 0
  },

  loadList() {
    let self = this;
    app.util.loadingGet('get_address_list', { openid: app.globalData.openid }, data => {
        self.setData({ list: data });
    });
  },


  onShow() {
    if ( this.data.changeId > 0 ) this.loadList();

  },

  onLoad(options) {
    if ( options.select == 1 ) this.setData({ select: 1 });
    this.loadList();
  },

  selectAddress(e) {
    if ( this.data.select == 1 ) {
      let id = e.currentTarget.dataset.id, pages = getCurrentPages(), prevPage = pages[pages.length-2];
      for ( let i = 0; i < this.data.list.length; i++ ) {
        if ( this.data.list[i].id == id ) {
          prevPage.setData({ selectAddress: this.data.list[i] });
          wx.navigateBack({ changed: true });
          break;
        }
      }
    }
  },

  delAddress(e) {
    let id = e.currentTarget.dataset.id, self = this;
    wx.showModal({  
      title: '删除提示', content: '确定删除该地址吗？',  
      success: res => {  
        if ( res.confirm ) {  
          app.util.loadingGet('del_address', { id: id, openid: app.globalData.openid }, data => {
              wx.showToast({ title: '删除成功' });
              let list = self.data.list;
              for ( let i = 0; i < list.length; i++ ) {
                if ( list[i].id == id ) {
                  list[i].is_del = 1;
                  self.setData({ list: list });
                  break;
                }
              }
          });
        }
      }  
    });
  }
})