const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // is_certification:0
    hidden1:false,
    hidden2:false,
    hidden3: false,
    src1:"",
    src2:"",
    src3:"",
    phone:'',
    roate:'',
    mode:'scaleToFill',
  },
  upload1:function(){
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'], 
      success(res) {  
        const src = res.tempFilePaths[0]
        wx.navigateTo({
          url: `./upload/upload?src1=${src}&id=1`
        })
      }
    })
  },
  upload2: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success(res) {
        const src= res.tempFilePaths[0];
        wx.navigateTo({
          url: `./uploads/uploads?src2=${src}&id=2`
        })
      }
    })
  },
  upload3: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success(res) {
        const src= res.tempFilePaths[0];
        wx.navigateTo({
          url: `./uploads/uploads?src3=${src}&id=3`
        })
      }
    })
  },
  bindLoad:function(e){
    let width=e.detail.width;
    let height=e.detail.height;
    console.log(e.detail);
    if(width<height)
    {
      this.setData({
        roate:90
      })
    }else if(width==height){
      this.setData({
        roate:0
      })
    }else if(width>height){
      this.setData({
        roate: 0
      })
    }
    this.setData({
      mode:'scaleToFill'
    })
    if(width<600 && height<800)
    {
        this.setData({
          mode: 'aspectFit'
        })
    }
  },
  bindSubmit:function(e){
    if(!e.detail.value)
    {
      return
    }else if(e.detail.value)
    {
      if (e.detail.value.name == "" || e.detail.value.name == null){
          wx.showToast({
            title: '请输入姓名',
            mask:true,
            duration:1000
          })
      }else if (this.data.phone=="" || this.data.phone==null){
        wx.showToast({
          title: '请获取手机号码',
          mask: true,
          duration: 1000
        })
      } 
      else if(e.detail.value.weixin=="" || e.detail.value.weixin==null)
      {
        wx.showToast({
          title: '请输入微信号',
          mask: true,
          duration: 1000
        })
      }
    }
  },
  getPhoneNumber:function(e){
    console.log(e.detail.encryptedData);
    
  },
  onLoad:function(options){
     wx.showLoading({
       title: '加载中',
       duration:1000,
       mask:true,
     })
  }

})