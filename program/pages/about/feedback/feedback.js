// pages/about/feedback/feedback.js
const app  = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    autoFocus:true,
    maxlength:-1
  },

  bindInput(e){
    let value=e.detail.value;
    this.setData({ disabled:value=="" || value==null })
  },
  
  bindSubmit(e){
    app.util.loadingPost('add_feedback', {
      openid:app.globalData.openid,
      view:e.detail.value.textarea
    }, function (data) {
        wx.showToast({ title : '反馈成功' });
        setTimeout(_ => { wx.navigateBack({ changed: true }); }, 500);
    });
  }
})