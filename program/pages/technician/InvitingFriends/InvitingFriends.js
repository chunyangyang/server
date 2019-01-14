var imageHeight=require('../../../utils/img.js');
Page({

  
  data: {
    imageWidth:0,
    imageHeight:0,
  },
  imageLoad:function(e){
    var imageSize=imageHeight.imageHeight(e);
    this.setData({
      imageHeight:imageSize.imageHeight
    })
  },
  onLoad: function (options) {
    console.log(imageHeight);
  },

  onReady: function () {
  
  },

  
})