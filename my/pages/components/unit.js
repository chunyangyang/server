export function formViolate(self) {
    console.log(self);
    let flog = true;
    let datas = self.data;
    if (datas.carOrder == '') {
        self.showToastTpl('请输入正确的车牌号码！');
        flog = false;

    } else if (datas.enginenum === '') {
        self.showToastTpl('请输入正确的车辆识别代码！！');
        flog = false;
    }
    else if (datas.framenum === '') {
        self.showToastTpl('请输入正确的发动机号！！');
        flog = false;
    }
    else if (datas.captchaValue === '') {
        self.showToastTpl('请输入正确的验证码！！');
        flog = false;
    }

    return flog;
}