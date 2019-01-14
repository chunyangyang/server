//app.js
App({
  globalData: {
    userInfo: null,//用户信息
    openid: null,//微信小程序openid
    loading: 0,//加载数据标记
    from: '',//推广openid
    reloadOrder:0//重新加载订单数量
  },

  //工具包
  util: require('./utils/util.js'),

  //用户登录
  login() {
    let self = this;

    //异步promise
    return new self.util.promise( (resolve, reject) => {
      if ( !self.globalData.openid && self.globalData.loading == 1 ) {
          //循环检查openid值
          let time = 0,
              interval = setInterval( _ => {
            if ( self.globalData.openid || time >= 20 ) {
              if ( !self.globalData.openid ) wx.showToast({ title: '网络超时，请下拉刷新' });
              clearInterval(interval);
              self.globalData.loading = 0;
              return resolve();
            }
            time++;
          },300);
          return;
      }

      if ( self.globalData.openid ) return resolve();

      self.globalData.loading = 1;
      wx.showToast({ title: '加载中', icon: 'loading', mask: true });

      // 登录
      wx.login({
        success: res => {
          self.util.post('/api/user/login', { code: res.code, from: self.globalData.from }, resData => {
            self.globalData.loading = 0;
            
            if ( resData.data.code == 200 ) {
              self.globalData.token =  resData.data.data.token
            //   self.globalData.openid = resData.data.data.openid;//用户信息
            //   self.globalData.userInfo = resData.data.data.userInfo;//用户信息
            //   self.globalData.topBroadcast = resData.data.data.topBroadcast;//首页顶部轮播
            //   self.globalData.typeSetting = resData.data.data.typeSetting;//服务分类
            //   self.globalData.newServiceList = resData.data.data.newServiceList;//最新服务列表
            //   self.globalData.topServiceList = resData.data.data.topServiceList;//推荐服务列表
            //   self.globalData.topTechnicianList = resData.data.data.topTechnicianList;//推荐技师列表
              wx.hideToast();
              resolve();
            } else {
              wx.showToast({ title: '加载失败' });
              reject();
            }
          });
        }
      });
    });
  },

  //程序初始化
  onLaunch (e) {
    if ( e.query.from ) this.globalData.from = e.query.from
    this.login().then( _ => { });
  }
});