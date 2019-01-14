
Page({
  data: {
    curIndex:0,
    duration:300,
    list:["未使用","已使用","已过期"],
    backgroundUrl:"http://smb.fjsmb.com/static/lib/img/not-use.png",
  },
  clicktab(e){
      var index=e.target.dataset.index;
      this.setData({
        curIndex:index
      })
  },
  bindChange(e){
    let index=e.detail.current;
    var that=this;
    that.setData({
      curIndex:index
    })
    if(index==0)
    { 
      that.setData({
        backgroundUrl:"http://smb.fjsmb.com/static/lib/img/not-use.png"
      })
    } else if(index == 1)
    {
      that.setData({
        backgroundUrl: "http://smb.fjsmb.com/static/lib/img/al-use.png"
      })
    }else if (index == 2) {
      that.setData({
        backgroundUrl: "http://smb.fjsmb.com/static/lib/img/al-use.png"
      })
    }
  },
  onLoad: function (options) {
    
  },

  onReady: function () {
  
  },

})