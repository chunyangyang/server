import WeCropper from '../../../../we-cropper/we-cropper.min.js'

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight 

Page({
  data: {
    cropperOpt: {
      id: 'cropper',
      width,
      height,
      scale: 2.5,
      zoom: 8,
      src:'',
      cut: {
        x: (width - 300) / 2,
        y: (height - 300) / 2,
        width: 300,
        height: 300
      }
    },
  
    curtIndex:'',
  },

   A:{},

  touchStart(e) {
    this.wecropper.touchStart(e)
  },
  touchMove(e) {
    this.wecropper.touchMove(e)
  },
  touchEnd(e) {
    this.wecropper.touchEnd(e)
  },
  getCropperImage(e){
    let index=e.target.dataset.index;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    if (index==1)
    {
      this.A.getCropperImage((avatar) => {
        if (avatar) {
          //  获取到裁剪后的图片
          prevPage.setData({
            src1: avatar,
            hidden1: true
          })
          wx.navigateBack({delta:1})
        } else {
          console.log('获取图片失败，请稍后重试')
          
        }
      })
    }
  },
  uploadTap(){
    const self = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success (res) {
        const src = res.tempFilePaths[0]
        self.wecropper.pushOrign(src)
      }
    })
  },
  onLoad (option) {
   
    this.setData({ curtIndex:option.id});
 
      new WeCropper()
        .on('beforeImageLoad', (ctx) => {
          wx.showToast({
            title: '上传中',
            icon: 'loading',
            duration: 20000
          })
        })
        .on('imageLoad', (ctx) => {
          wx.hideToast()
        })
        .updateCanvas()
        
  const { cropperOpt } = this.data;
   if(option.src1 && option.id==1)
   {
     cropperOpt.src = option.src1;
     this.A = new WeCropper(cropperOpt);
   }
  }
})
