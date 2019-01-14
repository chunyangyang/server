import React, { Component } from 'react';
import './index.scss';
class FormItem extends Component {
    constructor(props) {
        super(props);
    }
    handleChange(e) {
        const { name, change } = this.props;
        let value = e.target.value
        change(value, name);

    }
    clearInput() {
        const { name, change } = this.props;
        change('', name);
    }

    handleClick(e) {
        const { name } = this.props;
        this.props.click(e, name);
    }

    handleBlur(e) {
        const { name } = this.props;
        this.props.blur(e, name);
    }

    render() {
        const itemDataInfor = this.props;
        const { errorMsg, status, className, value, itemTemplate, disabled, readOnly, isTextArea, type, maxLength, labelSmall, clear, layout, noBorder, containerClassName } = this.props;
        let { labelClassName } = this.props;

       
        let inputClassName = isTextArea ?'texarea' : 'all-line-input-box';
         inputClassName = className ? `${className} ${inputClassName}` : inputClassName;
        let itemValue = value;
        labelClassName = labelClassName ? `${labelClassName} item-name` : 'item-name';
        labelClassName = isTextArea?`${labelClassName} textare-laber`:labelClassName;
        let inputType = type ? type : 'text';
        let inputMaxLength = maxLength ? maxLength : '';
        let itemClassName = layout ? `item-${layout} item` : 'item-inline item';
        let itemContainerClassName = containerClassName ? `form-item-${containerClassName}` : '';

        if (!noBorder) {
            itemClassName = layout ? `item-${layout} item border-bottom` : 'item-inline item border-bottom';
        }
        let showClear = false;
        if (clear && itemValue) {
            showClear = true;
        } else {
            showClear = false;
        }
        return (
            <div className={status ? `${status} form-item ${itemContainerClassName}` : `form-item ${itemContainerClassName}`}>
                <div className={itemClassName}>
                    <span className={labelClassName}>
                        <i>{itemDataInfor.label}</i>
                        {labelSmall && <i>{itemDataInfor.labelSmall}</i>}
                    </span>
                    {
                        <div className={inputClassName}>
                            {
                                isTextArea
                                    ?
                                    <textarea
                                        rows="2"
                                        // cols="30"
                                        value={itemValue}
                                        disabled={disabled}
                                        readOnly={readOnly}
                                        name={itemDataInfor.name}
                                        maxLength={inputMaxLength}
                                        placeholder={itemDataInfor.placeholder}
                                        value={itemValue}
                                        className='normal-texarea'
                                        onChange={(e) => { this.handleChange(e); }}
                                        onClick={(e) => { this.handleClick(e); }}
                                        onBlur={(e) => { this.handleBlur(e); }}
                                    />
                                    :
                                    <input
                                        type={inputType}
                                        disabled={disabled}
                                        readOnly={readOnly}
                                        name={itemDataInfor.name}
                                        maxLength={inputMaxLength}
                                        className='normal-input'
                                        placeholder={itemDataInfor.placeholder}
                                        value={itemValue}
                                        onChange={(e) => { this.handleChange(e); }}
                                        onClick={(e) => { this.handleClick(e); }}
                                        onBlur={(e) => { this.handleBlur(e); }}
                                    />
                            }
                        </div>


                    }
                    {
                        showClear
                        &&
                        <span className='clear' onClick={() => { this.clearInput() }}>&nbsp;</span>
                    }
                    {
                        itemTemplate
                        &&
                        <span className='templete-title' onClick={() => { itemTemplate.show(); }}>{itemTemplate.txt}</span>
                    }

                </div>
                {errorMsg && <p className='error'>{errorMsg}</p>}
            </div >
        );
    }
}
export default FormItem;
