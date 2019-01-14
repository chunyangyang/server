// pages/technician/CertificationSuccess/CertificationSuccess.js
const app=getApp();
Page({
	toTechnician:function(){
		if ( app.globalData.userInfo.is_technician == 1 ) {
			wx.navigateBack({ changed: true });
		} else {
			wx.redirectTo({
              url: '/pages/technician/technician'
            });
		}
	}
})