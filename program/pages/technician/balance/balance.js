// pages/technician/balance/balance.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex:null,
    hidden:false,
    disabled:true,
    types:'digit',
    technician:null,
    moneyLength:0,
    inputMoney:0,
  },

  click:function(){
    if ( this.data.technician.money > 0 ) {
      this.setData({
        curIndex:1,
      })  
    }
  },
  Sure:function(){
    if ( this.data.inputMoney < 1 || this.data.inputMoney > this.data.technician.money ) {
      wx.showToast({
        title : '提现金额不正确'
      });
      return false;
    }

    let self = this;
    wx.showToast({
      title : '加载中',
      icon : 'loading',
      mask : true,
    });

    app.util.post('apply_withdraw', {
      openid:app.globalData.openid,
      money:this.data.inputMoney
    }, function (res) {
      wx.hideToast();
      if ( res.data.code == 1 ) {
        wx.showToast({
          title : '提交成功'
        });
        setTimeout(function () {
          let technician = self.data.technician;
          technician.money = res.data.data.money;
          self.setData({
            hidden:true,
            curIndex: null,
            technician:technician
          })
        }, 500);
      } else {
        wx.showToast({
          title : res.data.msg
        });
      }
    });
  },
  bindInput:function(e){
    let value=e.detail.value;
    let that=this;
    if(value!=null || value!=''|| value!=undefined)
    {
      that.setData({
        inputMoney:value,
        disabled:false,
      })
    }
  },
  onLoad: function (options) {
    let self = this;
    wx.showToast({
      title : '加载中',
      icon : 'loading',
      mask : true,
    });

    app.util.get('get_technician_info', {
      openid:app.globalData.openid
    }, function (res) {
      wx.hideToast();
      if ( res.data.code == 1 ) {
        self.setData({
          technician:res.data.data,
          moneyLength:res.data.data.money.toString().length
        });

      } else {
        wx.showToast({
          title : res.data.msg
        });
      }
    });
  }
})