// pages/index/detail/order/order.js
const dateTimePicker = require('../../../../utils/dateTimePicker.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: null,
    selectAddress: null,
    date: '2018-09-05',
    time: '12:00',
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2018,
    endYear: 2050,
    startTime:null,
    total:0,
    price:0,
    count:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let self = this;
    app.util.loadingGet('get_item_of_order', {
      id: options.id,
      openid: app.globalData.openid
    }, data => {
        // 获取完整的年月日 时分秒，以及默认显示的数组
        let obj1 = dateTimePicker.dateTimePicker(self.data.startYear, self.data.endYear, data.order_time);
        self.setData({
          dateTimeArray1: obj1.dateTimeArray,
          dateTime1: obj1.dateTime,
          info: data,
          total : data.price*data.count,
          price: data.price,
          count:data.count,
          startTime:data.order_time
        });
    });
  },
  
  onShow() {
    if (this.data.selectAddress) {
      console.log(this.data.selectAddress);
      let info = this.data.info;
      info.address = this.data.selectAddress.address;
      this.setData({ info: info });
    }
  },
  
  pay() {
     app.util.loadingPost(
      'payment',
      {
        openid: app.globalData.openid,
        id:this.data.info.id,
        start_time:this.data.startTime,
        address_id:this.data.selectAddress ? this.data.selectAddress.id : 0
      },
      data => {
        console.log(data);
        let payargs = data;
        let cancelOrder = 0;
        let successOrder = 0;

        setTimeout(_ => {
          if ( cancelOrder == 1 || successOrder == 1 ) return false;
          app.util.get('payment_close', {
            order_id:payargs.order_id, 
            openid:app.globalData.openid
          }, res =>{

          });
        }, 300*1000);

        wx.requestPayment({
          timeStamp: payargs.timeStamp,
          nonceStr: payargs.nonceStr,
          package: payargs.package,
          signType: payargs.signType,
          paySign: payargs.paySign,
          success:rs => {
            successOrder = 1;
            app.globalData.reloadOrder = 1;
            wx.redirectTo({
              url:'../orderDetails/orderDetails?order_id='+payargs.order_id
            });
          },
          fail:rs => {
            cancelOrder = 1;
            app.util.get('payment_cancel', {
              order_id:payargs.order_id, 
              openid:app.globalData.openid
            }, function (res) {

            });
          }
        });
      }
    )
  },

  changeDateTime1(e) {
    let time = this.data.dateTimeArray1[0][e.detail.value[0]]
          +'-'+this.data.dateTimeArray1[1][e.detail.value[1]]
          +'-'+this.data.dateTimeArray1[2][e.detail.value[2]]
          +' '+this.data.dateTimeArray1[3][e.detail.value[3]]
          +':'+this.data.dateTimeArray1[4][e.detail.value[4]];

    this.setData({ startTime:time, dateTime1: e.detail.value });
  },

  changeDateTimeColumn1(e) {
    let arr = this.data.dateTime1,
    dateArr = this.data.dateTimeArray1;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({ dateTimeArray1: dateArr, dateTime1: arr });
  },

  //购买数量的加减
  prev() { 
    if ( this.data.count!=1 ){
      this.data.count--;
      let info = this.data.info;
      info.count = this.data.count;
      this.setData({ info: info, total: this.data.price * info.count });
    }
  },

  next() {
    if (this.data.count <= 999) {
      this.data.count++;
      let info = this.data.info;
      info.count = this.data.count;
      this.setData({ 
        info: info,
        total: this.data.price * info.count
      });   
    }
  }
})