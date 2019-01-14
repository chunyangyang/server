import React, { Component } from 'react';
import { getHotAddress, getRegion } from '@/api/index';
import './index.scss';

/**
    * 设置返回的数据
    */
let result = {
    provinceCn: '',
    provinceId: '',
    cityCn: '',
    cityId: '',
    districtCn: '',
    districtId: '',
};
// 本地存储键值
let storageName = 'added_service';
// 暂存储到本地
function setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
}
// 从本地获取暂存
function getSessionStorage(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
}
// 从本地删除暂存
function removeSessionStorage(key) {
    window.sessionStorage.removeItem(key);
}

export default class AddressList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreCity: true,
            addressData: '',
            headTitle: '热门城市'
        }
        this.leave = 2;
    }

    // 选择热门城市
    selectHotCity() {
        let data = getSessionStorage(`${storageName}_address_hot`);
        if (data) {
            this.setState({
                addressData: data,
                headTitle: '热门城市'
            });
        } else {
            getHotAddress().then((responce) => {
                if (responce.code == 200) {
                    setSessionStorage(`${storageName}_address_hot`, responce.data);
                    this.setState({
                        addressData: responce.data
                    });
                }
            });
        }

    }
    // 选择所有省、自治区、直辖市
    selectAllProviceCity() {
        let data = getSessionStorage(`${storageName}_address_provice`);
        if (data) {
            this.setState({
                addressData: data,
                headTitle: '请选择省份'
            });
        } else {
            getRegion({ key: 1 }).then((responce) => {
                setSessionStorage(`${storageName}_address_provice`, responce.data);
                if (responce.code == 200) {
                    this.setState({
                        addressData: responce.data,
                        headTitle: '请选择省份'
                    });
                }
            })
        }

    }
    // 选择所有地级市
    selectAllCity(item) {

        getRegion({ key: item.value }).then((responce) => {
            if (responce.code == 200) {
                this.setState({
                    addressData: responce.data,
                    headTitle: '请选择城市'
                });
            }
        });


    }
    // 选择所有城市区
    selectCityArea(item) {

        getRegion({ key: item.value }).then((responce) => {
            if (responce.code == 200) {
                this.setState({
                    addressData: responce.data,
                    headTitle: '请选择区域'
                });
            } 
            // 与后端--fangcheng定义好了，没有数据的返回码--2108-9-17
            else if (responce.code == 3500) {
                // 对于湖北天门 这种没有区的城市特殊处理
                if (!responce.data) {
                    this.handClickSelectRequest({ title: '', value: '' });
                    return false;
                }
            }
        });


    }
    // 数据列表
    list(data) {
        let itemArray = [];
        data.map((item, index) => {
            itemArray.push(
                <li key={index + Date.now()} onClick={() => { this.handClickSelectRequest(item) }}>{item.title}</li>
            )
        });
        return itemArray;
    }
    handClickSelectRequest(item) {
        const { selectCallback, skipArea } = this.props;
        const { moreCity } = this.state;
        if (moreCity && this.leave == 2) {
            result.provinceCn = item.ptitle;
            result.provinceId = item.pvalue;
            result.cityCn = item.title;
            result.cityId = item.value;
            if (!skipArea) {
                this.leave = 3;
                this.setState({
                    moreCity: false,
                    addressData: ''
                }, () => {
                    this.selectCityArea(item);
                });
            } else {
                this.leave = 2;
                selectCallback(result);
            }

        }
        else if (this.leave == 1) {
            this.leave = 2;
            result.provinceCn = item.title;
            result.provinceId = item.value;
            this.setState({
                addressData: ''
            }, () => {
                this.selectAllCity(item);
            });

        }
        else if (this.leave == 2) {
            result.cityCn = item.title;
            result.cityId = item.value;
            if (!skipArea) {
                this.leave = 3;
                this.setState({
                    addressData: ''
                }, () => {
                    this.selectCityArea(item);
                });

            } else {
                this.leave = 2;
                selectCallback(result);
            }

        }
        else if (this.leave == 3) {
            this.leave = 2
            result.districtCn = item.title;
            result.districtId = item.value;
            selectCallback(result);
        }
    }
    hideMoreCityButton() {
        this.leave = 1;
        this.setState({
            moreCity: false
        }, () => {
            this.selectAllProviceCity();
        })

    }
    handClickCancel() {
        this.props.handClickCloseCallback()
    }
    componentWillMount() {
        this.selectHotCity();
    }

    render() {

        const { moreCity, addressData, headTitle } = this.state;
        return (
            <div className='selected-area-box'>
                <div className="selected-head">
                    <div className="title">{headTitle}</div>
                    <div className="cancel-button" onClick={this.handClickCancel.bind(this)}>取消</div>
                </div>
                <div className="content-list">
                    <ul className='item-list'>
                        {addressData && this.list(addressData)}
                    </ul>
                </div>
                {moreCity && <div className="bottom-btn" onClick={this.hideMoreCityButton.bind(this)}>其它更多城市</div>}

            </div>
        )
    }
}