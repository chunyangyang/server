
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    tempFilePath: ""
  },

  onLoad: function (options) {
    var that=this;
    if(options.src2){
      let src2=options.src2;
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];
      wx.getSystemInfo({

        success: function (res) {
          var width = res.windowWidth;
          var height = res.windowHeight;

          that.setData({
            width: width,
            height: height
          })
          wx.getImageInfo({
            src: src2,
            success: function (res) {

              let w;
              let h;

              if (res.width < 600) {
                w = res.width;
              } else {
                w = 600;
              }
              if (res.height < 800) {
                h = res.height;
              } else {
                h = 800;
              }
              const ctx = wx.createCanvasContext('image-canvas');
              ctx.drawImage(src2);
              wx.showLoading({
                title: '数据处理中',
              })
              ctx.draw();
              setTimeout(() => {
                wx.canvasToTempFilePath({
                  canvasId: 'image-canvas',
                  x: 0, //画布x轴起点
                  y: 0, //画布y轴起点
                  width: that.data.width, //画布宽度
                  height: that.data.height, //画布高度
                  destWidth: w, //输出图片宽度
                  destHeight: h, //输出图片高度
                  fileType: "jpg",
                  success: (res) => {

                    wx.hideLoading();
                    let path = res.tempFilePath;
                    if (path) {

                      prevPage.setData({
                        src2: path,
                        hidden2: true
                      })
                      wx.navigateBack({ changed: true })
                    }
                  },
                  fail: (e) => {
                    wx.hideLoading()
                    wx.showToast({
                      title: '出错啦..',
                      icon: 'loading'
                    })
                  }
                })
              }, 500)
            }
          })
        },
      })
    }
    if(options.src3)
    {
      let src3 = options.src3;
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];
      wx.getSystemInfo({

        success: function (res) {
          var width = res.windowWidth;
          var height = res.windowHeight;

          that.setData({
            width: width,
            height: height
          })
          wx.getImageInfo({
            src: src3,
            success: function (res) {

              let w;
              let h;

              if (res.width < 600) {
                w = res.width;
              } else {
                w = 600;
              }
              if (res.height < 800) {
                h = res.height;
              } else {
                h = 800;
              }
              const ctx = wx.createCanvasContext('image-canvas');
              ctx.drawImage(src3);
              wx.showLoading({
                title: '数据处理中',
              })
              ctx.draw();
              setTimeout(() => {
                wx.canvasToTempFilePath({
                  canvasId: 'image-canvas',
                  x: 0, //画布x轴起点
                  y: 0, //画布y轴起点
                  width: that.data.width, //画布宽度
                  height: that.data.height, //画布高度
                  destWidth: w, //输出图片宽度
                  destHeight: h, //输出图片高度
                  fileType: "jpg",
                  success: (res) => {

                    wx.hideLoading();
                    let path = res.tempFilePath;
                    if (path) {

                      prevPage.setData({
                        src3: path,
                        hidden3: true
                      })
                      wx.navigateBack({ changed: true })
                    }
                  },
                  fail: (e) => {
                    wx.hideLoading()
                    wx.showToast({
                      title: '出错啦..',
                      icon: 'loading'
                    })
                  }
                })
              }, 500)
            }
          })
        },
      })
    }
  },
  
  onReady: function () {

  },

 
})