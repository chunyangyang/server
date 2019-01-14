// pages/myOrder/evaluate/evaluate.js
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hidden: {
      type: String,
      value: 0
    },
    list:{
      type:Array,
      value:[]
    },
    count: {
      type: String,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex:3,
    startX: 0,
    startY:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchstart(e) {
      if (e.touches.length == 1) this.setData({ startX: e.touches[0].clientX });
      if (e.touches.length == 1) this.setData({ startY: e.touches[0].clientY });
    },

    //手指离开时
    touchend(e) {
      let that = this,
          index = e.currentTarget.dataset.index,//当前索引
          id = this.data.list[index].order_id,
          list = that.data.list;

      if (e.changedTouches.length == 1) {
        // 记录触摸点位置的X坐标

        let endX = e.changedTouches[0].clientX, // 计算手指起始点的X坐标与当前触摸点的X坐标的差值
          endY = e.changedTouches[0].clientY,
          disX,
          disY = endY - that.data.startY,
          txtStyle = '';
        if (disY < 20 && disY > -20) {
          disX = that.data.startX - endX;
        } else {
          disX = 0;
        }

        if (disX == 0) { //如果移动距离小于等于0，文本层位置不变
          return false;
        } else if (disX < 0) {
          txtStyle = "transform:translateX(-" + disX + "px)";
        } else if (disX > 0) { //如果移动距离大于0，文本层right值
          txtStyle = " transform:translateX(-" + disX + "px)";
          if (disX > 50) {
            wx.showModal({
              title: '删除提示', content: '确定删除吗？',
              success: res => {
                if (res.confirm) {
                  app.util.loadingGet('del_order', { openid: app.globalData.openid, order_id: id }, data => {
                      wx.showToast({
                        title: '删除成功',
                      });

                      if (that.data.list.length <= 0)
                        that.setData({ count: 0 });
                      
                      let pages = getCurrentPages(),
                          prevPage = pages[pages.length-2];
                      
                      prevPage.setData({reload:1});

                      wx.redirectTo({
                        url: `myOrder?index=3&count=${that.data.count}`,
                      });
                  });
                } else if (res.cancel) {
                  list[index].textStyle = " transform: translateX(0px)";
                  that.setData({ list: list })
                }
              }
            })
          }
        }

        list[index].textStyle = txtStyle;
        this.setData({list: list})
      }
    }
  }
})
