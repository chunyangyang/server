exports.imageHeight = e => {
   let imageSize={},
    originWidth = e.detail.width, //图片原始宽度
    originHeight = e.detail.height, //图片原始高度
    originScale = originHeight / originWidth; //图片高宽比

  //  console.log('原始宽'+originWidth);
  //  console.log('原始高' + originHeight);
   wx.getSystemInfo({
     success: res => {
       let winWidth = res.windowWidth, //屏幕宽度
        winHeight = res.windowHeight, //屏幕高度
        winScale = winHeight / winWidth; //屏幕比例
      //  console.log('屏幕宽' + winWidth);
      //  console.log('屏幕高' + winHeight);
       if( originScale < winScale ) {
         imageSize.imageWidth = winWidth;
         imageSize.imageHeight = (winWidth * originHeight) /originWidth;
         
       }else{
         imageSize.imageHeight = winHeight;
         imageSize.imageWidth = (winHeight * originWidth) /originHeight;
         
       }
     }
   })
   return imageSize;
   
};