
//获取应用实例
const app = getApp()

Page({
  data: {
    list:null,
    title:'服务'
  },

  onLoad(options) {
    let self = this;
    options.openid = app.globalData.openid;
    // console.log(options);
    app.util.loadingGet('get_service_list', options, data => {
        let listArray = data.list;
        for ( let i = 0; i < listArray.length; i++ ) {
          listArray[i].distance = app.util.distanceUnit(listArray[i].distance);
        }
        self.setData({
          title: data.title,
          list: listArray       
        });
        wx.setNavigationBarTitle({ title: data.title })//页面标题为路由参数
    });
  }
})
