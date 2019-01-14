/*
 * @Author: zhengchunyang 
 * @Date: 2018-04-20 16:10:30 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-13 18:31:53
 */
function isFunction(func) {
    return typeof func === 'function';
}

function noop() {};


// 验证规则：邮箱
const REG_EMAIL = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)+$/;

// 验证规则：数字
const REG_DIGIT = /^(\d+)$/;

// 验证规则：手机号码区号
const REG_PHONE_CODE = /^\+?(\d+)$/; //验证规则---> 首位可以是+号也可以不是，其他位都是数字

// 验证规则：手机号码
const REG_PHONE = /^1[3,4,5,6,7,8,9]\d{9}$/;

// 验证规则：字母
const REG_ALPHA = /^[a-zA-Z\s]+$/;

// 验证规则：中文
const REG_CHINESE = /^[\u2E80-\u9FFF]+.*[\u2E80-\u9FFF]+$/;

// 验证规则：日期
const REG_DATE = /^((?:18|19|20|21)\d\d)-(0[1-9]|[1-9]|1[012])-(0[1-9]|[1-9]|[12][0-9]|3[01])$/;


function checkReg(reg, value = "") {
    if (value.length > 0) {
        return reg.test(value);
    }
    return true;
}

//默认配置
const defaultConfig = {
    onValidate: noop,
    onValidateDone: noop
}

class FormValidate {

    constructor(config, options) {
        this.config = config || {};
        this.options = { ...defaultConfig,
            ...options
        };
        this.validateResult = {};
    }

    //根据配置验证数据，返回是否所有通过
    validate(data) {
        let allPass = true;
        let validateConfig = this.config;
        this.validateResult = {};
        for (let name of Object.keys(validateConfig)) {
            let value = data[name];
            let configList = validateConfig[name];
            let result = FormValidate.validate(configList, value, data);
            if (!result.validate) {
                this.validateResult[name] = result;
            }
            this.options.onValidate(name, this.validateResult);
            if (!result.validate) {
                allPass = false;
            }
        }
        this.options.onValidateDone();
        return {
            allPass,
            result: this.validateResult
        };
    }

    validateByName(name, value, allData) {
        let validateConfig = this.config;
        let configList = validateConfig[name];
        if (!configList) {
            return { validate: true }
        }
        return FormValidate.validate(configList, value, allData);
    }

    // 是否必填
    static required(value = "") {
        return value.length > 0;
    }

    // 是否邮箱
    static email(value = "") {
        return checkReg(REG_EMAIL, value);
    }

    // 是否数字
    static digit(value = "") {
        return checkReg(REG_DIGIT, value);
    }

    // 是否是手机区号
    static phoneCode(value) {
        return checkReg(REG_PHONE_CODE, value);
    }

    // 是否是手机号码
    static phone(value = "") {
        return checkReg(REG_PHONE, value);
    }

    // 是否是拼音
    static alpha(value = "") {
        return checkReg(REG_ALPHA, value);
    }

    // 是否是中文
    static chinese(value = "") {
        return checkReg(REG_CHINESE, value);
    }

    // 是否是日期格式
    static date(value = "") {
        return checkReg(REG_DATE, value);
    }
    static fromCheckReg=checkReg;
    
    //根据配置验证对应的值
    static validate(configList, value = "", allData) {
        value = '' + value; //转化为字符串
        for (let i = 0; i < configList.length; i++) {
            let config = configList[i];
            let {
                validate,
                msg
            } = config;
            if (isFunction(validate)) {
                if (!validate(value, allData)) {
                    return {
                        validate: false,
                        msg
                    }
                }
            }
        }
        return {
            validate: true
        };
    }
}

export default FormValidate;