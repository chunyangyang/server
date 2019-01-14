const app = getApp();
Page({
  data: {
   display:'none',
   animationData:{},
   tabList:[],
   value:"",
   id:'',
   order_id:null,
   curIndex:0,
  },
  formSubmit:function(e){
    let value=e.detail.value.textarea; 
    let that=this;
    if(value==null || value=="")
    {
      that.setData({
        display: 'block',
      })
      var animation=wx.createAnimation({
        duration:1000,
        timingFunction:'ease',
        
      })
      that.animation = animation
      setTimeout(function(){
        animation.translateY(20).opacity(0).step();
        that.setData({
          animationData:animation.export()
        })
      },1000)
        return false;
    }else{
      let tabs = [];
      for ( let i = 0; i < this.data.tabList.length; i++ ) {
        if ( this.data.tabList[i]['status'] )
          tabs.push(this.data.tabList[i]['id']);
      }

      app.util.loadingPost('add_comment', {
        openid:app.globalData.openid,
        grade:this.data.value*2,
        tabs:tabs.join(','),
        order_id:this.data.order_id,
        content:value,
      }, function (data) {
          wx.showToast({
            title : '评论成功'
          });
          setTimeout(function () {
            wx.redirectTo({
              url: './success/success?index='+that.data.curIndex,
            })
          }, 500);
      });
    }
  },
  onMyEvent:function(e){
    this.setData({
      value:e.detail.num
    })
  },
  selectEvent:function(e){
    let tabList = this.data.tabList;
    let has = 0;
    for ( let i = 0; i < tabList.length; i++ ) {
      if ( tabList[i].id == e.detail.id ) {
        has = 1;
        tabList[i].status = e.detail.status;
        break;
      }
    }

    if ( has == 0 ) {
      tabList.push({
        id:e.detail.id,
        status:e.detail.status
      });
    }
    this.setData({tabList:tabList});
  },
  onLoad:function(options){
    this.setData({
      order_id:options.order_id,
      curIndex:options.index
    });
  }
})