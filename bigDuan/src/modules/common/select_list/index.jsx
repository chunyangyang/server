/*
 * @Author: zhengchunyang 
 * @Date: 2018-05-25 11:25:36 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-23 17:52:07
 */
import React, { Component } from 'react';
import Popup from 'zzc-design-mobile/lib/popup';
import Toast from 'zzc-design-mobile/lib/toast';
import BottomSlidePop from './bottomSlidePop/index';

class SelectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasShowBottonSlide: false,
            // currentValue: ''
        };
    }

    clickSelect(hasShow) {
        const { allowList, handClickCallback, name } = this.props;
        if (allowList.length == 0) {
            handClickCallback ? handClickCallback(allowList, name) : Toast.info('没有数据', 2);;
        } else {
            this.setState({
                hasShowBottonSlide: hasShow
            });
        }

    }

    validataSelect(name, element) {
        this.setState({ hasShowBottonSlide: false }, () => {
            if (typeof (element) == 'object' && JSON.stringify(element) != '{}') {
                const result = {};
                const dataKey = `${name}_cn`;
                // const dataKey = `${name}_key`;
                result[dataKey] = element.content;
                result[name] = element.key;
                this.props.change(result, () => {
                    this.props.blur(element.key, name);
                });

            } else if (element !== '') {
                return false;
            } else {
                this.props.blur('', name);
            }
            return false;
        });
    }

    render() {
        const itemDataInfor = this.props;
        const { label, name, value, errorMsg, status, allowList, hasMsg, itemTemplate, className, noArrow, disabled, layout, noBorder } = this.props;
        let { labelClassName } = this.props;
        const inputClassName = className ? `${className} all-line-input-box` : 'all-line-input-box';
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
                            this.clickSelect(true);
                        }}>
                        <input
                            type='text'
                            name={itemDataInfor.name}
                            className='normal-input'
                            placeholder={itemDataInfor.placeholder}
                            value={value}
                            readOnly
                            disabled
                        />
                    </div>

                    {
                        itemTemplate
                            ?
                            <span className='templete-title' onClick={() => { itemTemplate.show(); }}>{itemTemplate.txt}</span>
                            : noArrow || <span className='arrow'>&nbsp;</span>
                    }

                </div>
                {errorMsg && <p className='error'>{errorMsg}</p>}
                <Popup
                    maskClose={true}
                    visible={this.state.hasShowBottonSlide}
                    onClose={() => {
                        this.setState({
                            hasShowBottonSlide: false
                        });
                    }}
                >
                    <BottomSlidePop
                        title={label}
                        hasShow={this.state.hasShowBottonSlide}
                        defaultCode={value}
                        dataList={allowList}
                        dataType='array'
                        hasMsg={hasMsg}
                        hidePop={() => {
                            this.validataSelect(name, value);
                        }}
                        selected={(element) => {
                            this.validataSelect(name, element);
                        }}
                    />
                </Popup>
            </div>
        );
    }
}
export default SelectList;