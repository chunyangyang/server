let uploadTask = null;
const uploadFile = (filePath, callback) => {
    wx.showLoading({ title: '上传中' });
    uploadTask = wx.uploadFile({
      url: 'https://smb.fjsmb.com/system/program/upload_file', //仅为示例，非真实的接口地址
      filePath: filePath,
      name: 'file',
      success: function(res){
      	res.data = JSON.parse(res.data);
        
        wx.hideLoading();
        if ( res.data.code == 1 ) {
        	callback(res.data.data);
          console.log(res);
        } else {
        	wx.showToast({ title:'上传失败' });
        }
      },
      fail: function (res) {  
        wx.showToast({ title:'上传失败' });
        wx.hideLoading();
      }  
    });

    uploadTask.onProgressUpdate((res) => {
	    console.log('上传进度', res.progress)
	    console.log('已经上传的数据长度', res.totalBytesSent)
	    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
	});
}

exports.upload = (type, callback) => {
	let sourceType = ['album', 'camera'];
	if ( type == 'album' ) sourceType = ['album'];
	else if ( type == 'camera' ) sourceType = ['camera'];

	wx.chooseImage({
		count:3,
		sizeType:['compressed'],
		sourceType:sourceType,
	  success: res => {
	    uploadFile(res.tempFilePaths[0], callback);
	  }
	});
}

exports.uploadVoice = (wxFilePath, callback) => {
    uploadFile(wxFilePath, callback);
}

exports.uploadCancel = _ => {
	if ( uploadTask ) uploadTask.abort();
}