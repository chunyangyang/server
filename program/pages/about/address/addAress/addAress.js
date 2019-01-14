const app = getApp();
Page({
  data: {
    location:{
      address:'请选择'
    },
    id:null,
    phone: '',
    name: '',
    title:'添加地址'
  }, 
  onLoad(options) {
    if ( options.id ) {
      this.setData({ id: options.id });
      wx.setNavigationBarTitle({ title: '编辑地址' });
      let self = this;
      app.util.loadingGet('get_address_detail', { id: options.id, openid: app.globalData.openid }, data => {
          self.setData({
            location:{
              address: data.address,
              city: data.city,
              district: data.district,
              latitude: data.latitude,
              longitude: data.longitude,
              province: data.province,
            },
            phone: data.phone,
            name: data.name,
          });
      });
    }
  },
  clickPick(){
    let self = this;
    wx.chooseLocation({
      success: res => {
        console.log(res);
        app.util.loadLocationDetail(res, data => {  
          data.address = res.address; 
          self.setData({ location: data });
        });
      }
    });
  },
  formSubmit(e){
    if ( e.detail.value.phone == '' || e.detail.value.name == '' ) {
      wx.showToast({ title: '请填写必要信息' }); return;
    }

    if ( this.data.location.address == '请选择' ) {
      wx.showToast({ title: '请选择所在地' }); return;
    }

    if ( e.detail.value.phone.length != 11 ) {
      wx.showToast({ title: '请填写正确号码' }); return;
    }
    
    let location = this.data.location;
    location.phone = e.detail.value.phone;
    location.name = e.detail.value.name;
    location.openid = app.globalData.openid;
    location.id = this.data.id;
    
    app.util.loadingPost('edit_address', location, data => {
        wx.showToast({ title: '保存成功' });
        let pages = getCurrentPages(), prevPage = pages[pages.length-2];
        prevPage.setData({ changeId: data });
        setTimeout( _ => { wx.navigateBack({ changed: true }); }, 500);
    });
  }
});