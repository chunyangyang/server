const baseUrl = 'https://renren.dian68.net';
// const baseUrl = 'https://smb.fjsmb.com/system/program/';

/**
 * 获取当前时间 格式2018/08/24 17:24:00
 */
const formatTime = date => {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(formatNumber).join('/') + ' ' + [date.getHours(), date.getMinutes(), date.getSeconds()].map(formatNumber).join(':')
}

/**
 * 获取当前时间 格式2018/08/24 17:24
 */
const formatTimeShot = date => {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(formatNumber).join('/') + ' ' + [date.getHours(), date.getMinutes()].map(formatNumber).join(':')
}

/**
 * 不是两位数的数值 变成字符串 前面加0
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 封装基础请求函数
 */
const baseRequest = (url, data, method, callback,token='') => {
  wx.request({ url: url, data: data, method: method,
    header: {
        'content-type': 'application/json', // 默认值
        'token': token // 默认值
    },
    success: res => {
      return callback(res);
    }
  })
};

/**
 * get请求api链接
 */
const get = (url, data, callback,token) => {
  baseRequest(baseUrl+url, data, 'GET', callback,token);
};

/**
 * 加载提示 get请求
 */
const loadingGet = (url, data, successCallback,token) => {
  wx.showToast({ title : '加载中', icon : 'loading', mask : true });
  get(url, data, function(res){
    if ( res.data.code == 200 ) {
      wx.hideToast();
      successCallback(res.data.data);
    } else {
      wx.showToast({ title : res.data.msg });
    }
  },token);
}

/**
 * post请求api链接
 */
const post = (url, data, callback) => {
  baseRequest(baseUrl+url, data, 'POST', callback);
};

/**
 * 加载提示 post请求
 */
const loadingPost = (url, data, successCallback) => {
  wx.showToast({ title : '加载中', icon : 'loading', mask : true });
  post(url, data, function(res){
    if ( res.data.code == 1 ) {
      wx.hideToast();
      successCallback(res.data.data);
    } else {
      wx.showToast({ title : res.data.msg });
    }
  });
}

/**
 * 文件上传
 */
const uploadFileObject = require('uploadFile.js');
const upload = (type, callback) => {
  uploadFileObject.upload(type, callback);
};
const uploadVoice = (filePath, callback) => {
  uploadFileObject.uploadVoice(filePath, callback);
};

/**
 * 高德位置定位
 */
const amap = (location, callback) => {
  let amap = require('amap-wx.js');
  let amapwx = new amap.AMapWX({ key: 'fe16a04308983998d6af656c4d8fc8f8' });
  amapwx.getRegeo({
    location: `${location.longitude},${location.latitude}`,//location的格式为'经度,纬度'
    success: data => {
      console.log(data);
      return callback(data);
    },
    fail: info => {
      console.log(info);
      return callback(false);
    }
  });
}

/**
 * 坐标位置定位
 */
const loadLocationDetail = (location, callback) => {
  amap(location, res => {
    if ( res == false ) {
      callback(false);
      wx.showToast({ title:'定位失败' });
    } else {
      callback({
        address:res[0].name,
        latitude:res[0].latitude,
        longitude:res[0].longitude,
        city:res[0].regeocodeData.addressComponent.city,
        district:res[0].regeocodeData.addressComponent.district,
        province:res[0].regeocodeData.addressComponent.province
      });
    }
  });
}

/**
 * 位置定位更新
 */
const updateLocation = (openid, location, callback) => {
  loadLocationDetail(location, data => {
    callback(data);
    if ( data ) {
      data.openid = openid;
      post('update_location', data, res => { });
    }
  });
}

/**
 * 距离显示
 */
const distanceUnit = distance => {
  if ( distance < 1000 )
    distance = distance + "m";
  else if ( distance >= 1000 )
    distance = (Math.round(distance / 100) / 10).toFixed(1) + "km";

  return distance;
}

module.exports = {
  formatTime: formatTime,
  formatTimeShot:formatTimeShot,
  get: get,
  post: post,
  loadingGet: loadingGet,
  loadingPost: loadingPost,
  upload: upload,
  uploadVoice: uploadVoice,
  recorder : require('recorder.js'),
  updateLocation: updateLocation,
  loadLocationDetail: loadLocationDetail,
  promise :require('promise.js'),
  distanceUnit:distanceUnit
}
