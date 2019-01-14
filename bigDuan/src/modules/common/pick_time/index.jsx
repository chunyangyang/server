/*
 * @Author: zhengchunyang 
 * @Date: 2018-07-11 16:29:29 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-23 20:33:08
 */
import React, { Component } from 'react';
import { DatePicker } from 'zzc-design-mobile';

class PickTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentValue: '',
            isShow: false
        }
    }

    clickSelect() {

        this.setState({
            isShow: true
        })

    }
    validataTime(name, value) {
        // this.setState( { currentValue: value } );

        if (value) {
            this.props.change({ [name]: value }, () => {
                this.props.blur(value, name);
            });

        } else {
            this.props.blur('', name);
        }

    }
    // 默认时间是时间戳的时候转换
    tranfromTime(date) {
        if (typeof date == 'string') {
            return date;
        } else {
            return '';
        }
    }

    render() {
        let itemDataInfo = this.props;
        const { errorMsg, status, value, endTime, startTime, name, className, noArrow, disabled, layout, noBorder } = this.props;
        let { labelClassName } = this.props;
        const inputClassName = className ? `${className} all-line-input-box` : 'all-line-input-box';
        let { isShow } = this.state;
        labelClassName = labelClassName ? `${labelClassName} item-name` : 'item-name';
        let itemClassName = layout ? `item-${layout} item` : 'item-inline item';

        if (!noBorder) {
            itemClassName = layout ? `item-${layout} item border-bottom` : 'item-inline item border-bottom';
        }

        let newStartTime = startTime && startTime.split('-').join('/') || '1990/01/01';
        let currentValue = this.tranfromTime(value);
        if (name == 'accreditation_date' && value == '') {
            let date = startTime.split('-');
            date[0] = date[0] * 1 + 18;
            currentValue = date.join('-');
        }
        return (
            <div className={status ? `${status} form-item` : 'form-item'}>
                <div className={itemClassName}>
                    <span className={labelClassName}>{itemDataInfo.label}</span>
                    <div
                        className={inputClassName}
                        onClick={() => {
                            if (disabled) { retrun };
                            this.clickSelect()
                        }}>
                        <input
                            type={itemDataInfo.type}
                            name={itemDataInfo.name}
                            className='normal-input'
                            placeholder={itemDataInfo.placeholder}
                            value={this.tranfromTime(value)}
                            readOnly
                            disabled
                        />
                    </div>

                    {noArrow || <span className="arrow"></span>}
                </div>
                {errorMsg && <p className="error">{errorMsg}</p>}
                {
                    <DatePicker
                        visible={isShow}
                        mode='date'
                        selectTime={currentValue || '1990/01/01'}
                        minDate={newStartTime}
                        maxDate={new Date(endTime) || Date.now()}
                        onClose={() => { this.setState({ isShow: false }) }}
                        onSubmit={(result) => {
                            this.setState({ isShow: false }, () => {
                                const timeValue = result.currDate.split('/').join('-');
                                this.validataTime(name, timeValue);
                            });
                        }}

                    />
                }
            </div>
        )
    }
}
export default PickTime;