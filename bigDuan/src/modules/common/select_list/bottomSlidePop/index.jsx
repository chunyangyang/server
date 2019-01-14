/*
 * @Author: zhengchunyang 
 * @Date: 2018-04-20 16:09:40 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-30 21:39:57
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import './style.scss';
class BottomSlidePop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultCode: this.props.defaultCode,
            dataList: this.props.dataList,
        };
    }

    // 点击关闭弹框
    onClickHidePop(hideCallback) {
        hideCallback && hideCallback();
    }

    // 选择对应的项目后返回数据并关闭弹框
    onClickSelected(element, selectedCallback, event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        selectedCallback && selectedCallback(element);
    }

    // 渲染列表项
    createItem(selected) {
        let itemsJSX = null;
        const _self = this;
        itemsJSX = this.state.dataList.map((e, i) => {
            return (
                <div className='item-li' key={i} onClick={(event) => { _self.onClickSelected(e, selected, event); }}>
                    {e.title}
                    <span>{e.content}</span>
                    <div className={_self.state.defaultCode == e.content ? 'select selected' : 'select'}>&nbsp;</div>
                </div>
            );
        });
        return itemsJSX;
    }

    render() {
        const { hidePop, selected, title = '', hasMsg } = this.props;
        const selectBoxClassName = classnames({
            'telSelect-box-title': true,
            'has-msg': !!hasMsg
        });
        return (
            <div className='telSelect_box'>
                {title != '' &&
                    <div className={selectBoxClassName}>
                        <span className='selected-title'>{title}</span>
                        {hasMsg && <span className='selected-msg'>{hasMsg}</span>}
                        <button className='action-close-btn' onClick={() => { this.onClickHidePop(hidePop); }}><span>×</span></button>
                    </div>}
                <div>
                    {this.createItem(selected)}
                </div>
            </div>

        );
    }
}
export default BottomSlidePop;