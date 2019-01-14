// pages/region/region.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        order:1,
        title:'热门国家',
        country:[
          {
            name:'美国',
            countruId:'1001'
          },
          {
            name:'泰国',
            countruId: '1002'
          },
          {
            name:'加拿大',
            countruId: '1003'
          }
        ]

      },
      {

        order:2,
        title:'北美洲',
        country:[
          {
            name:'加拿大',
            countruId: '1003'
          },
          {
            name:'美国',
            countruId: '1002'
          },
          {
            name:'墨西哥',
            countruId: '1004'
          }
        ]
      }
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})