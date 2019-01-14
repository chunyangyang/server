// common/Tips/Tips.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: { hidden : { type : Boolean, value : "" }, text : { type : String, value : "" } },

  /**
   * 组件的初始数据
   */
  data: { hidden:true },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(){
      this.setData({ hidden:true });
    },

    sure(){
      this.setData({ hidden:true });
    },

    getUserInfo(e) {
      if ( e.detail.userInfo ) {
        this.setData({ userInfo:e.detail.userInfo });
        app.globalData.userInfo = e.detail.userInfo;
        e.detail.userInfo.openid = app.globalData.openid;
        app.util.post('set_user_info', e.detail.userInfo, function (res) { });
      } 
    }, 
  }
})
