import { formViolate } from '../components/unit'
Page({
  data: {
    hosts: '//tidl.zuzuche.net',
    driverTpl: false,
    driverTplSrc: '',
    array: [],
    index: 18,
    captcha: '//tidl.zuzuche.net/api/violate/captcha?rand=',
    carOrder: '',
    enginenum: '',
    framenum: '',
    captchaValue: '',
    enginenumlen: '车身号后6位',
    framenumlen: '完整的发动机号'
  },
  changeValue(e) {

    let name = e.currentTarget.dataset.name;
    switch (name) {
      case "carOrder":
        this.setData({
          carOrder: e.detail.value
        });
        break;
      case "enginenum":
        this.setData({
          enginenum: e.detail.value
        });
        break
      case "framenum":
        this.setData({
          framenum: e.detail.value
        });
        break
      case "captchaValue":
        this.setData({
          captchaValue: e.detail.value
        });
        break
    }

  },

  showDriverTpl(e) {
    this.setData({
      driverTpl: true,
      driverTplSrc: e.currentTarget.dataset.src,
    });
  },
  closeDriverTpl() {
    this.setData({
      driverTpl: false,
    });
  },
  bindPickerChange(e) {

    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  getImagesCode(e) {
    let value = this.data.captcha + e.timeStamp;
    this.setData({
      captcha: value,
    });
  },
  getCarPlateInfo(e) {
    console.log(e);
    this.changeValue(e);
    if (e.detail.value === '') {
      this.showToastTpl('请输入正确车牌号码！');
      return false;
    }
    let platenum = this.data.array[this.data.index] + e.detail.value;

    let options = {
      url: this.data.hosts + '/api/violate/carPlateInfo',
      data: {
        platenum: platenum,
      },
      callback: (res) => {
        if (res.data.code == 200) {
          let result = res.data.data;
          this.setData({
            cityId: result.cityid,
            platenum: platenum
          });
          this.binSetPlaceHold(result);
        } else {
          this.showToastTpl(res.data.message);
        }
      }
    }
    this.request(options);
  },
  binSetPlaceHold(result) {
    if (result.enginenumlen == 0) {
      this.setData({
        enginenumlen: `选填项`,
      });
    } else if (result.enginenumlen == 99) {
      this.setData({
        enginenumlen: `全部车身号`,
      });
    } else {
      this.setData({
        enginenumlen: `车身号后${result.enginenumlen}位`,
      });
    }
  },
  getViolateRecord(e) {
    let result = formViolate(this);
    if (result) {
      let datas = this.data;
      let options = {
        url: this.data.hosts + '/api/violate/violateRecord',
        data: {
          cityid: datas.cityId,
          platenum: datas.platenum,
          enginenum: datas.enginenum,
          framenum: datas.framenum,
          captcha: datas.captchaValue
        },
        callback: (res) => {
          if (res.data.code == 200) {

          } else {
            this.showToastTpl(res.data.message);
            this.getImagesCode(e);
          }
        }
      }
      this.request(options);
    }
  },
  showToastTpl(msg) {
    my.showToast({
      content: msg, // 文字内容
      success: (res) => {

      },
    });
  },
  onLoad() {
    console.log(my.canIUse('lifestyle'))
    let options = {
      url: this.data.hosts + '/api/violate/provinceShort',
      callback: (res) => {
        if (res.data.code == 200) {
          this.setData({
            array: res.data.data
          });
        }
      }
    }
    this.request(options);
  },
  request(options) {
    my.httpRequest({
      url: options.url, // 目标服务器 url
      data: options.data,
      success: (res) => {
        console.log(res);
        options.callback(res);
      },
      fail: function (res) {
        console.log(res);
        options.error && options.error(res);
      },
      complete: (res) => {
        options.complete && options.complete(res);
      }
    });
  },
  onShow() {

  },

});
