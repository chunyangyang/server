
//获取应用实例
const app = getApp()

Page({
  data: { list: null },

  onLoad(options) {
    let self = this;
    options.openid = app.globalData.openid;
    app.util.loadingGet('get_service_list', { technician: app.globalData.userInfo.technician, openid: app.globalData.openid }, data => {
      self.setData({ list: data.list });
    });
  },

  Back(e){
    let pages = getCurrentPages(), prevPage = pages[pages.length-2], sendService;
    for (let service of this.data.list)　{
      if (service.id == e.currentTarget.dataset.id) {
        sendService = service;
        break;
      }
    }　
    prevPage.setData({ sendService: sendService });
    wx.navigateBack({ changed: true });
  }
})
