/*
 * @Author: zhengchunyang 
 * @Date: 2018-04-26 12:05:50 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-10-09 15:38:43
 */
import './index.scss';
import React, { Component } from 'react';
import CountDown from 'zzc-count-down';
import Toast from 'zzc-design-mobile/lib/toast';
import FormValidate from '@/util/form_validate';
import { isProductionEnv, getReqSn } from '@/util/index';
import { getRisk, checkRiskImages, getRiskNote, postSubmitData } from '@/api/index';
import ModalHelper from '@/modules/common/modal-helper/index';

let config = {
    phone: [
        { validate: FormValidate.required, msg: "手机号码不能为空" },
        { validate: FormValidate.phone, msg: "请填写正确手机号码" }
    ],
    img_code: [
        { validate: FormValidate.required, msg: "图形验证码不能为空" }
    ],
    sms_code: [
        { validate: FormValidate.required, msg: "验证码不能为空" }
    ]
};
let flag = false;
let flagIcon = true;
class AppointmentPopup extends Component {
    constructor() {
        super();
        this.state = {
            itemData: {
                phone: '',
                img_code: '',
                sms_code: '',
            },
            phone_error: '',
            verify_code: '',
            verify_code_txt: '获取验证码',
            img_code_src: '',
            isDev: isProductionEnv(),
            host: '',
            risktoken: '',
            riskkey: ''
        };
        this.updataImageCode = this.updataImageCode.bind(this);
        this.getSmsCode = this.getSmsCode.bind(this);
        this.formValidate = new FormValidate(config);
        // this.modalHelper = new ModalHelper();
        // this.modalHelper.toggleBlock(true);
        this.countDown = new CountDown({
            //每次计时都会回调，每秒一次
            count: second => {
                this.setState({
                    verify_code_txt: "重新发送(" + second + "s)"
                });
            },
            // 计时结束的时候回调
            end: second => {
                console.log("count down end");
                flagIcon = true;
                this.setState({
                    verify_code_txt: "重新获取"
                });
            },
        });
    }


    // 初始化图形验证码
    async init() {
        let { riskkey, risktoken, isDev, host } = this.state;
        riskkey = isDev ? '75f90663dbf0bfa36b521dbddc752a2e' : '6cae5c9c8eea52a8097a43a1569671a8';
        host = isDev ? '//account.zuzuche.com' : '//account.zuzuche.net';
        // 获取公用tocken
        await getRisk(isDev, { riskkey })
            .then(
                response => {
                    if (response.data) {
                        risktoken = response.data.risktoken
                    }
                }
            ).catch(
                response => {
                    console.log(response);
                }
            );

        // 获取图片验证码
        const reqSn = getReqSn();
        this.setState(
            {
                risktoken,
                host,
                riskkey,
                reqSn,
                img_code_src: `${host}/api.php?ctl=riskcheck_index_images&act=seccode_new&risktoken=${risktoken}&req_sn=${reqSn}`
            }
        )
    }
    //  点击更新图片验证码
    updataImageCode() {
        const { risktoken, host } = this.state;
        const reqSn = getReqSn();
        this.setState(
            {
                reqSn,
                img_code_src: `${host}/api.php?ctl=riskcheck_index_images&act=seccode_new&risktoken=${risktoken}&req_sn=${reqSn}`
            }
        )
    }
    // 验证图形验证码
    async checkImageCode() {
        const { itemData, risktoken, isDev, reqSn } = this.state;
        let result = '';
        await checkRiskImages(isDev, { risktoken: risktoken, code: itemData.img_code, req_sn: reqSn })
            .then(
                (response) => {
                    if (response.code == 0) {
                        result = response.data.csessionid

                    } else if (response.code == 101) {
                        this.setState({
                            img_code_error: response.msg
                        });
                    }
                }
            )
            .catch(
                response => {
                    console.log(response);
                }
            );
        return result;
    }
    // 获取短信验证码
    async getSmsCode() {
        let { itemData, isDev, risktoken } = this.state;
        if (!flagIcon) return false;
        flagIcon = false;
        // 验证表单
        let phoneResult = this.formValidate.validateByName('phone', itemData.phone);
        let imgCoderesult = this.formValidate.validateByName('img_code', itemData.img_code);
        if (!phoneResult.validate) {
            this.setState({
                phone_error: phoneResult.msg
            });
            flagIcon = true;
            return false;
        } else if (!imgCoderesult.validate) {
            this.setState({
                img_code_error: imgCoderesult.msg
            });
            flagIcon = true;
            return false;
        }
        // 调用 验证图片验证码,获取发送短信的csessionid
        let csessionid = ''
        await this.checkImageCode()
            .then(
                result => {
                    // console.log(result);
                    if (result) {
                        this.countDown.start(60);
                        csessionid = result;
                    }
                }
            );

        // 发短信
        if (!csessionid) {
            this.updataImageCode();
            flagIcon = true;
            return false;
        }
        getRiskNote(isDev, { mobile: itemData.phone, active_type: 40, csessionid, risktoken })
            .then(
                response => {
                    // console.log(response);
                    flag = true;
                }
            ).catch(
                response => {
                    console.log(response);
                    flagIcon = true;
                    this.updataImageCode();
                }
            )
    }

    inputChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        let { itemData } = this.state;
        let item = {};
        item[name] = value;
        // 更新提交数据
        const newFormData = { ...itemData, ...item };
        // console.log(newFormData);
        this.setState({
            itemData: newFormData
        })
    }
    inputFocus(event) {
        const name = event.target.name;
        const errorName = name + '_error'
        this.setState({
            [errorName]: ''
        });
    }
    hide() {
        let { handClocePopup } = this.props;
        // this.modalHelper.toggleBlock(false);
        handClocePopup();
    }
    //提交预约信息
    submitData() {
        let { itemData } = this.state;
        let { handClocePopup } = this.props;
        let validateResult = this.formValidate.validate(itemData);
        if (validateResult.allPass) {
            //   全部验证通过        
            if (flag) {
                flag = false;
                let data = {
                    phone: itemData.phone,
                    code: itemData.sms_code,
                    from_page: 'index',
                    from_topic: window.serverData.fromTopic || '',
                    active_type: '40'
                };
                Toast.info('提交中', 0);
                postSubmitData(data)
                    .then(
                        (response) => {
                            flag = true;
                            if (response.code == 200) {
                                Toast.hideToast();
                                handClocePopup();
                                window.location.href = response.data.success_url || '/';
                            } else {
                                Toast.info(response.message, 2);
                            }
                        }
                    ).catch(
                        response => {
                            flag = true;
                            this.updataImageCode();
                            if (response.code === 2700) {
                                this.setState({
                                    sms_code_error: response.message
                                });
                            } else {
                                Toast.info(response.message, 2);
                            }
                        }
                    )
            } else {
                Toast.info('请先获取短信验证码', 2);
            }
        } else {
            let keyName;
            let errorDate = {};
            let objkey = "";
            for (keyName in validateResult.result) {
                objkey = keyName + "_error"
                errorDate[objkey] = validateResult.result[keyName].msg;
                break;
            }

            this.setState(errorDate);
        }
    }
    componentWillMount() {
        this.init();
    }

    render() {

        let { itemData, phone_error, img_code_error, sms_code_error, verify_code_txt, img_code_src } = this.state;

        let result = 'form-item';
        let phoneItemClassName = !!phone_error ? `${result} error` : result;
        let imgCodeItemClassName = !!img_code_error ? `${result} error` : result;
        let verifyCodeItemClassName = !!sms_code_error ? `${result} error` : result;

        return (
            <div className="no-drive-box">
                <div className="content">
                    <h3>手机号预约办理</h3>
                    <p className="txt">您可以先使用手机号码完成预约办理。 预约成功后我们会给您发送提示短信，您可在方便的时候按照短信提示操作，完善驾照信息。</p>
                    <form className="">
                        <div className={phoneItemClassName}>
                            <span>手机号码</span>
                            <input type="tel" name="phone" maxLength="11" className="width-4"
                                value={itemData.phone}
                                onChange={(event) => { this.inputChange(event) }}
                                onClick={(event) => { this.inputFocus(event) }}
                            />
                            {phone_error && <p className="error-message">{phone_error}</p>}
                        </div>
                        <div className={imgCodeItemClassName}>
                            <span>图形验证码</span>
                            <input type="text" name="img_code" className="width-2"
                                value={itemData.img_code}
                                onChange={(event) => { this.inputChange(event) }}
                                onClick={(event) => { this.inputFocus(event) }}
                            />
                            <a href="javascript:void (0);" className="get-message img-verify" onClick={this.updataImageCode}>
                                <img src={img_code_src} alt="图片验证码" />
                            </a>
                            {img_code_error && <p className="error-message">{img_code_error}</p>}
                        </div>
                        <div className={verifyCodeItemClassName}>
                            <span>短信验证码</span>
                            <input type="tel" name="sms_code" className="width-2"
                                onChange={(event) => { this.inputChange(event) }}
                                onClick={(event) => { this.inputFocus(event) }}
                            />
                            <a href="javascript:void (0);" className="get-message" onClick={this.getSmsCode}>{verify_code_txt}</a>
                            {sms_code_error && <p className="error-message">{sms_code_error}</p>}
                        </div>
                        <div className="bottom">
                            <input type="button" value="取消" className="cancel" data-tj="取消预约办理" onClick={() => { this.hide() }} />
                            <input type="button" value="提交" className="comfirm disable-click" onClick={() => { this.submitData() }} data-tj="确定预约办理" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default AppointmentPopup;