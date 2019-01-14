/*
 * @Author: zhengchunyang 
 * @Date: 2018-05-04 16:46:39 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-30 22:04:45
 */
import React, { Component } from 'react';
import { Alert, Button } from 'zzc-design-mobile';
// import Sex from '@/modules/common/sex/index';
import FormItem from '@/modules/common/form_item/index';

import SelectList from '@/modules/common/select_list/index';
import FormValidate from '@/util/form_validate';

// import {  } from '@/api/index';
import { setLocallStorage, setSessionStorage,getSessionStorage} from '@/util/index';
import './index.scss';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemConfig:this.props.pageConfig,
            errorMsg: {}, // 错误信息
            formItemStatus: {}, // 表单项状态          
            storageName: 'jqm',
            driverLicensePop: false,
            submitData:this.props.pageData,
            saveStorage: this.props.saveStorage || true,
        };
        this.syncPageData = this.syncPageData.bind(this);
    }

    static status = {
        none: '',
        focus: 'focus',
        error: 'error-tips',
    }


    //赋值
    formDataChange(item, callback) {
        let { itemConfig, submitData, storageName, saveStorage } = this.state;

        // 更改数据同步页面

        itemConfig = this.syncPageData(item, 'value');
        // 更新提交数据
        const newFormData = { ...submitData, ...item };
        // 时间联动
        // itemConfig = this.limitTime(item);
        // 同步数据
        saveStorage && setSessionStorage(`${storageName}_license`, newFormData);

        this.setState({
            itemConfig,
            submitData: newFormData
        }, () => {
            callback && callback();
            // 检测时间是否正确
            if (item.birthdate) {
                this.formItemBlur(itemConfig.accreditation_date, 'accreditation_date');
            } else if (item.accreditation_date) {
                this.formItemBlur(itemConfig.issuing_date, 'issuing_date');
            }
        });
    }
    // 更改数据同步页面
    syncPageData(datas, KeyName) {
        const { itemConfig } = this.state;
        for (const itemKey in datas) {
            if (itemConfig[itemKey]) {
                // 更改对应key的数据value
                itemConfig[itemKey][KeyName] = datas[itemKey];
            }
        }
        return itemConfig;
    }
    formItemClick(e, name) {
        this.fromItemStatusSet(name, '', Form.status.focus);
    }

    // 失去焦点检测
    formItemBlur(value, name) {
        let { submitData } = this.state;
        let result = this.formValidate.validateByName(name, value, submitData);

        if (result.validate) {
            this.fromItemStatusSet(name, '', Form.status.none);

        } else {
            this.fromItemStatusSet(name, result.msg, Form.status.error);
        }
    }


    // 状态设置
    fromItemStatusSet(name, msg, status) {
        const { errorMsg, formItemStatus } = this.state;
        errorMsg[name] = msg;
        formItemStatus[name] = status;
        this.setState({
            errorMsg,
            formItemStatus
        });
    }

    // 发送表单数据
    sendFormData() {
        let { submitData } = this.state;
        let validateResult = this.formValidate.validate(submitData);

        if (validateResult.allPass) {
            //   全部验证通过
            this.props.onSubmit(submitData);
        } else {
            let KeyName;
            for (KeyName in validateResult.result) {
                this.fromItemStatusSet(KeyName, validateResult.result[KeyName].msg, Form.status.error);
            }
        }
    }

    // 外界改变表单属性值
    componentWillReceiveProps(nextProps) {
        this.setState({
            // itemConfig: nextProps.pageConfig.form_zone,
            submitData: nextProps.pageData
        });
    }
    componentDidMount() {
        this.formValidate = new FormValidate(this.props.validateConfig);
    }

    render() {
        let { submitData,errorMsg,formItemStatus,itemConfig } = this.state;
       

        return (
            <div>
                <div className='form-layout form-layout-box'>
                    {/* {this.createFormItem()} */}
                    <SelectList
                        label="您的职业身份？"
                        type="text"
                        value={submitData.zhiye_cn||''}
                        name='zhiye'
                        placeholder='请选择'
                        errorMsg={errorMsg["zhiye"]}
                        status={formItemStatus["zhiye"]}
                        allowList={itemConfig.zhiye||[]}
                        noBorder={false}
                        change={
                            (result, callback) => {
                                this.formDataChange(result, callback);
                            }
                        }
                        blur={(value, name = '') => {
                            this.formItemBlur(value, name);
                        }}
                    />
                    <SelectList
                        label="您的信用卡最高额度为？"
                        type="text"
                        value={submitData.xyk_cn||''}
                        name='xyk'
                        placeholder='请选择'
                        errorMsg={errorMsg["xyk"]}
                        status={formItemStatus["xyk"]}
                        allowList={itemConfig.xyk||[]}
                        change={
                            (result, callback) => {
                                this.formDataChange(result, callback);
                            }
                        }
                        blur={(value, name = '') => {
                            this.formItemBlur(value, name);
                        }}
                    />
                    <SelectList
                        label="您的手机号是否本人实名？已使用多长时间？"
                        type="text"
                        value={submitData.shiming_cn||''}
                        name='shiming'
                        placeholder='请选择'
                        errorMsg={errorMsg["shiming"]}
                        status={formItemStatus["shiming"]}
                        allowList={itemConfig.shiming||[]}
                        change={
                            (result, callback) => {
                                this.formDataChange(result, callback);
                            }
                        }
                        blur={(value, name = '') => {
                            this.formItemBlur(value, name);
                        }}
                    />
                    <SelectList
                        label="您当前的芝麻信用分是？"
                        type="text"
                        value={submitData.zmxyf_cn||''}
                        name='zmxyf'
                        placeholder='请选择'
                        errorMsg={errorMsg["zmxyf"]}
                        status={formItemStatus["zmxyf"]}
                        allowList={itemConfig.zmxyf||[]}
                        change={
                            (result, callback) => {
                                this.formDataChange(result, callback);
                            }
                        }
                        blur={(value, name = '') => {
                            this.formItemBlur(value, name);
                        }}
                    />
                </div>

                <div className="submit-box has-bottombar">
                    <Button type='main' size='lg'  style={{ borderRadius: '0.16rem' }} onClick={() => { this.sendFormData() }}>开始计算</Button>
                </div>


            </div>
        );
    }
}
export default Form;