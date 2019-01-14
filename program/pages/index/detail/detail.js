// pages/index/detail/detail.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: null, 
    itemId: 0,
    collectImg: '/image/xx2.png',
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
    topBroadcast: null,
  },

  
  //轮播图的切换事件
  swiperChange(e) {
    this.setData({ swiperCurrent: e.detail.current });
  },

  //点击指示点切换
  chuangEvent(e) {
    this.setData({ swiperCurrent: e.currentTarget.id });
  },

  changeGoodsSwip(e) {
    if (e.detail.source == "touch") {
      // console.log(this.data.preIndex)
      //防止swiper控件卡死
      if (this.data.swiperCurrent == 0 && this.data.preIndex > 1) {
        //卡死时，重置current为正确索引
        this.setData({ swiperCurrent: this.data.preIndex });
      } else {//正常轮转时，记录正确页码索引
        this.setData({ preIndex: this.data.swiperCurrent });
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let self = this;
    app.util.loadingGet('get_service_detail', {
      id: options.id, 
      openid: app.globalData.openid, 
      from: options.from
    }, data => {
        self.setData({
          detail: data,
          collectImg: data.collect == 1 ? '/image/xx1.png' : '/image/xx2.png',
          itemId: data.items[0].id,
        });
    });
  },

  collect() {
    let self = this;
    app.util.loadingGet('edit_collect', {
      openid: app.globalData.openid,
      id: this.data.detail.id
    }, data => {
        if ( data.is_del == 1 ) {
          wx.showToast({ title: '取消收藏' });
          self.setData({ collectImg: '/image/xx2.png' });
        } else {
          wx.showToast({ title: '收藏成功' });
          self.setData({ collectImg:'/image/xx1.png' });
        }
    });
  },

  clickTel() {
    wx.makePhoneCall({ phoneNumber: this.data.detail.technician.phone });
  },

  onShareAppMessage(ops) {
     return {
       title: this.data.detail.title,
       desc: '上门宝，你附近的贴心小棉袄',
       path: `/pages/index/detail/detail?id=${this.data.detail.id}&from=${app.globalData.openid}`,
       success: res => {
       },
       fail: res => {
       }
     }
   }
})