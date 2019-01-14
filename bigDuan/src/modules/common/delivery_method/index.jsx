/*
 * @Author: zhengchunyang 
 * @Date: 2018-11-05 12:25:15 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-11-14 20:17:13
 */
import React, { Component } from 'react';
import Animate from 'zzc-design-mobile/lib/animate';

import './index.scss';
// let config = [
//     {
//         "express": "普通快递",
//         "price": "10.0",
//         "send_time": "2018-11-15",
//         "express_remark": "11月15日发货,预计11月19日收到",
//         ext_type:1
//     },
//     {
//         "express": "顺丰快递",
//         "price": "59.0",
//         "send_time": "2018-11-15",
//         "express_remark": "顺丰,24小时内发货,预计11月17日收到",
//         "express_time": "2018-11-17",
//         ext_type:2
//     }
// ]
export default class ShowDeliveryMethodPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.handClickClosePopup = this.handClickClosePopup.bind(this);
    }

    handClickClosePopup() {
        this.props.handHidePopup(false);
    }
    closSharePopup(type) {
        if (type == 'leave') {
            this.setState({
                visible: false
            });
        }
    }

    componentWillReceiveProps(nextprops) {
        if (!this.state.visible) {
            this.setState({
                visible: nextprops.isShowPopup
            });
        }
    }
    render() {
        const { visible } = this.state;
        const { deliveryMethodConfigData, submitDeliveryMethodFn } = this.props;
        // if(!deliveryMethodConfigData) return null;
        let deliveryMethodConfig =deliveryMethodConfigData.express_type_info;
        // let deliveryMethodConfig = config;
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
                <div className="delivery-method-model">                
                    <div className='model-content'>
                    <div className='header'>选择配送方式</div>
                        {
                            deliveryMethodConfig && deliveryMethodConfig.map((item, i) => {
                                return (
                                    <div className='list' onClick={() => submitDeliveryMethodFn(item.ext_type)}
                                        key={`delivery_method${i}`}>
                                        <div className='content'>
                                            <div className="price">
                                                {item.express}<span className="fn-rmb">¥</span>{item.price},
                                        </div>
                                            <div>{item.express_remark}</div>
                                        </div>
                                        <div className='btn'>选择</div>
                                    </div>
                                )
                            })
                        }     
                         <div className='close' onClick={this.handClickClosePopup}>关闭</div> 
                    </div>
                   
                </div>
            </Animate>
        )
    }
}
