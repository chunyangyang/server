import React, { Component } from 'react';
import Popup from 'zzc-design-mobile/lib/popup';
import AddressList from './address/index';
import ModalHelper from '../modal-helper/index';

const modalHelper = new ModalHelper();
let skipArea;
class SelectCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    validataSelect(result) {
        modalHelper.toggleBlock(false);
        const { name } = this.props;
        let skipArea = this.props.skipArea == 'true' ? true : false;
        let bankAddress = {};
        const addressName = name.split('_')[0];
        for (let key in result) {
            let keyName = `${addressName}_${key}`;
            bankAddress[keyName] = result[key]
        }

        if (!skipArea) {
            if(result.district_cn){
                bankAddress[name] = result.province_cn == result.city_cn ? `${result.city_cn},${result.district_cn}` : `${result.province_cn},${result.city_cn},${result.district_cn}`;
            }else{
                bankAddress[name] = result.province_cn == result.city_cn ? `${result.city_cn}` : `${result.province_cn},${result.city_cn}`;
            }

        } else {
            bankAddress[name] = result.province_cn == result.city_cn ? `${result.city_cn}` : `${result.province_cn},${result.city_cn}`;
        }


        if (bankAddress) {

            this.props.change(bankAddress, () => {
                this.props.blur(bankAddress[name], name);
            });

        } else {
            this.props.blur('', name);
        }
    }

    // selectAddress
    selectAddress() {
        modalHelper.toggleBlock(true);
        this.setState({
            visible: true
        });
    }

    render() {
        const itemDataInfor = this.props;
        const { visible } = this.state;

        const { errorMsg, status, value, itemTemplate, name, className, noArrow, disabled,layout, noBorder } = this.props;
        let { labelClassName } = this.props;
        const inputClassName = className ? `${className} all-line-input-box` : 'all-line-input-box';
        let skipArea = this.props.skipArea == 'true' ? true : false;
        labelClassName = labelClassName ? `${labelClassName} item-name` : 'item-name';
        let itemClassName =layout?`item-${layout} item`:'item-inline item';
      
        if(!noBorder){
            itemClassName =layout?`item-${layout} item border-bottom`:'item-inline item border-bottom';
        }

        return (
            <div className={status ? `${status} form-item` : 'form-item'}>
                <div className={itemClassName}>
                    <span className={labelClassName}>{itemDataInfor.label}</span>
                    <div
                        className={inputClassName}
                        onClick={() => {
                            if (disabled) { retrun };
                            this.selectAddress()
                        }}>
                        <input
                            type='text'
                            className='normal-input'
                            name={itemDataInfor.name}
                            placeholder={itemDataInfor.placeholder}
                            value={value}
                            readOnly
                            disabled
                        />
                    </div>

                    <Popup
                        maskClose={true}
                        visible={visible}
                        onClose={() => {
                            this.setState({
                                visible: false
                            });
                        }}
                    >
                        {
                            <AddressList
                                skipArea={skipArea}
                                handClickCloseCallback={
                                    (data) => {
                                        // console.log(data);
                                        modalHelper.toggleBlock(false);
                                        this.setState({
                                            visible: false
                                        }, () => {
                                            this.props.blur(value, name);
                                        });
                                    }
                                }
                                selectCallback={
                                    (data) => {
                                        // console.log(data);
                                        let result = {
                                            province_cn: data.provinceCn,
                                            province: data.provinceId,
                                            city_cn: data.cityCn,
                                            city: data.cityId,
                                            district_cn: data.districtCn,
                                            district: data.districtId,
                                        };
                                        this.setState({
                                            visible: false
                                        }, this.validataSelect(result));
                                    }
                                }
                            />}
                    </Popup>
                    {
                        itemTemplate
                            ?
                            <span className='templete-title' onClick={() => { itemTemplate.show(); }}>{itemTemplate.txt}</span>
                            :
                            noArrow || <span className='arrow'>&nbsp;</span>
                    }

                </div>
                {errorMsg && <p className='error'>{errorMsg}</p>}

            </div>
        );
    }
}
export default SelectCity;