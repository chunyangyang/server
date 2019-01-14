//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    location:{
      province: '',
      city: '定位中',
      district: '',
      inputValue: 'none',
    },

    doLocation: 0,//执行定位成功

    // 当前所在页面的index(下标)
    swiperCurrent: 0,
    //  是否 显示面板指示点
    indicatorDots: true,
    // 是否 自动切换
    autoplay: true,
    // 自动切换时间
    interval: 3000,
    // 滑动 动画时长
    duration: 800,
    // 是否采用衔接滑动
    circular: true,

    topBroadcast : null,
    typeSetting : null,
    newServiceList : null,
    topServiceList : null,
    topTechnicianList : null,
    hiddenAlertTips:true,
    preIndex: '0',
    display: 'none',
    from:'',
    // id: null,
  },
  
  //轮播图的切换事件
  swiperChange(e) {
    // console.log(e.detail.current);
    this.setData({ swiperCurrent: e.detail.current });
  },
  
  changeGoodsSwip(e) {
    if ( e.detail.source == "touch" ) {
     
      console.log(this.data.preIndex)
      //防止swiper控件卡死
      if ( this.data.swiperCurrent == 0 && this.data.preIndex > 1 ) {
        //卡死时，重置current为正确索引
        this.setData({ swiperCurrent: this.data.preIndex });
      }
      else {//正常轮转时，记录正确页码索引
        this.setData({ preIndex: this.data.swiperCurrent });
      }
    } 
  },
  //点击指示点切换
  chuangEvent(e) {
    this.setData({ swiperCurrent: e.currentTarget.id });
  },

  //点击图片触发事件
  swipclick(e) {
    // console.log(this.data.topBroadcast[this.data.swiperCurrent].id);
    wx.navigateTo({
      url: `/pages/index/index?id=${this.data.topBroadcast[this.data.swiperCurrent].id}`
    });
  },


  onLoad() {
    this.setData({ from: app.globalData.from });
    this.login();
  },


  login() {
    let self = this;
    app.login().then( _ => {
      if ( app.globalData.openid ) {
        // console.log(app.globalData.openid );
        if ( !app.globalData.userInfo || app.globalData.userInfo.avatarUrl == '' ) {
          self.setData({ hiddenAlertTips: false });
        }

        self.setData({
          topBroadcast: app.globalData.topBroadcast,
          typeSetting: app.globalData.typeSetting,//服务分类
          newServiceList: app.globalData.newServiceList,//最新服务列表
          topServiceList: app.globalData.topServiceList,//推荐服务列表
          topTechnicianList: app.globalData.topTechnicianList,//推荐技师列表
        });

        self.doLocation();
      }
    });
  },


  /**
   * 加载用户位置
   */
  loadLocation() {
    let self = this;
    wx.getLocation({
      type: 'wgs84',
      success: location => {
        app.util.updateLocation(app.globalData.openid, location, amapRes => {
          self.setData({ location: amapRes });
        });
      }
    });
  },

  /**
   * 定位用户位置
   */
  doLocation(e) {
    if ( this.data.doLocation == 1 ) return false;
    this.setData({ doLocation: 1 });
    this.loadLocation();
  },

  onBlur(e) {
    this.setData({ inputValue: e.detail.value });
    if ( !e.detail.value ){
      wx.showToast({ title: '请输入内容', duration: 1000 });
    } else {
      this.setData({ inputValue: "", display: 'none'});
      wx.navigateTo({ url: `./nominate/nominate?keyword=${e.detail.value}` });
    }    
  },

  onFocus(e) {  
    this.setData({ display: !e.detail.value ? 'none' : 'block' });
  },

  onClick() {
    this.setData({ inputValue: "", display: 'none'});
  },

  onShareAppMessage(ops) {
   return {
     title: '上门宝，你附近的贴心小棉袄',
     desc: '上门宝，你附近的贴心小棉袄',
     path: `/pages/index/index?from=${app.globalData.openid}`,
     success: res => {
     },
     fail: res => {
     }
   }
 },

 onPullDownRefresh() {
  if ( !app.globalData.openid ) this.login();
 }
});