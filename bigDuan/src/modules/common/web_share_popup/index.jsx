/*
 * @Author: zhengchunyang 
 * @Date: 2018-04-24 19:41:18 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-08 14:50:53
 */

import React, { Component } from 'react';
import ClipboardJS from 'clipboard';
import { Toast, Animate } from 'zzc-design-mobile';
// import ModalHelper from '@/modules/common/modal-helper/index.js';
import './index.scss';

class WebSharePopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }
    }
    componentDidMount() {
        this.copyLink();
    }

    copyLink() {
        const copyLink = new ClipboardJS('.J-browserLink');
        copyLink.on('success', function (e) {
            Toast.info('复制成功');
            // e.clearSelection();
        });
    }

    closSharePopup(type) {
        if (type == 'leave') {
            this.setState({
                visible: false
            });
        }
    }
    hidePopup() {
        this.props.handHidePopup(false);
    }
    componentWillReceiveProps(nextprops) {
        if (!this.state.visible) {
            this.setState({
                visible: nextprops.isShowPopup
            });
        }
    }
    render() {
        let { popUpConfig } = this.props
        let { visible } = this.state
        return (
            visible && <Animate
                visible={this.props.isShowPopup}
                animationName={{
                    enter: 'change-enter',
                    leave: 'change-leave'
                }}
                onEnd={(type) => {
                    this.closSharePopup(type);
                }}
            >
                <div className="share-popup">
                    <div className="share-mask"></div>
                    <div className="popup-wrap">
                        <div className="popup-header-star"></div>
                        <div className="popup-header"></div>
                        <div className="popup-content">
                            <p className="share-browser-link J-browserLink" data-clipboard-text={popUpConfig.share_url}>{popUpConfig.share_url}</p>
                            <p className="share-browser-tip popup-tip ">点击（或长按）上方链接框，复制后分享给好友</p>
                            <p className="split-line"><span className="line"></span><span className="text">或</span></p>
                            <div className="qr-code-box">
                                <img src={popUpConfig.share_qr_img_url} alt="" className="qr-code-img lazy-img" />
                            </div>
                            <p className="popup-tip share-code-tip">截屏保存二维码到手机，分享给好友</p>
                        </div>
                        <div className='popup-close' onClick={() => this.hidePopup()} />
                    </div>
                </div>
            </Animate>
        )
    }
}

export default WebSharePopup;