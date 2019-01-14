import React from 'react';
import { Modal } from 'antd-mobile';
// import { Modal } from 'zzc-design-mobile';
// import {getLoanRecord} from '@/api';
import './index.scss';
// import Form from '../../../quota/components/form';

// data={
//     orderStatus:9 ,
//     matchReportStatus:9,
//     createTime:'2018-09-09',
//     loanAmount:1000,
// }
function Card({ data, handleModalVisible }) {
    let cardCls = '';
    let text = '未匹配';
    let thirdCls = '';
    let bageText = '已';
    let { orderStatus, matchReportStatus } = data;

    if (orderStatus < 20) {
        cardCls = 'refund';
        bageText = '未';
    } else {
        if (matchReportStatus < 10) {
            cardCls = 'auth';
        }
    }

    if (orderStatus == 30 || orderStatus == 40) {
        text = '已完成';
        cardCls = 'history';
    } else if (orderStatus == 35 || orderStatus == 45) {
        text = '已退款';
        thirdCls = 'refund';
        cardCls = 'rebate';
    } else {
        if (matchReportStatus >= 20) {
            text = '已匹配';
            thirdCls = 'active';
        }
    }

    return (
        <div className={`loan-card ${cardCls}`}>
            <div className="loan-title">申请时间 {data.createTime}</div>
            <div className="loan-box">
                <div className="loan-info">
                    <ul className="loan-bage">
                        <li className="first">
                            {data.loanAmount == 6000 ? '6000以上' : data.loanAmount}
                        </li>
                        <li className="second">{data.deposit}</li>
                        <li className={`third ${thirdCls}`}>{text}</li>
                        <li className="last">{data.zfAdminName}</li>
                    </ul>
                    <ul className="loan-list">
                        <li className="first">借款金额(元)</li>
                        <li className="second">{bageText}付服务费(元)</li>
                        <li className="third">匹配状态</li>
                        <li className="last">服务经理</li>
                    </ul>
                </div>
                <div className="loan-btns">
                    {/* {orderStatus !== 45 && (
						<a className="btn btn-contact" href={`/customer/${data.orderId}`}>
							客户服务
						</a>
					)} */}
                    {/* <a className="btn btn-submit" href={`/auth/${data.orderId}`}>
						提交信用信息
					</a> */}
                    <a className="btn btn-pay" href="/pay">
                        支付服务费
					</a>
                    {/* <a className="btn btn-plan" href={`/plan/${data.orderId}`}>
						查看贷款方案
					</a> */}
                </div>
            </div>
        </div>
    );
}

function LoanHead({ money }) {
    return (
        <div className="loan-box loan-hd">
            <h3>
                金钱猫<span>最快1个小时放款</span>
            </h3>
            <div className="loan-box-ft">
                <div className="text">
                    <p>可借金额(元)</p>
                    <h5>{money}</h5>
                </div>
                <a className="btn-loan" href="/pay">
                    立即借款
				</a>
            </div>
        </div>
    );
}

class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            history: [],
            visiableModal: false,
            contactWechat: '',
            contactQQ: '',
            sobotLinkUrl: '',
            orderFinish: true
        };
    }

    componentDidMount() {
        // this.useTestData();
        // this.getLoanRecord();
    }

    // useTestData = () => {
    // 	const testData = require('./testdata').default;
    // 	let order = [];
    // 	let history = [];
    // 	testData.data.list.map(item => {
    // 		if (item.orderStatus === 40) {
    // 			history.puah(item);
    // 		} else {
    // 			order.push(item);
    // 		}
    // 	});
    // 	this.setState({
    // 		order,
    // 		history
    // 	});
    // };

    getLoanRecord = async function () {
        try {
            const res = getLoanRecord();
            if (res.code === 200) {
                const data = res.data;
                let order = [];
                let history = [];
                let orderFinish = true;

                if (data.total === 0) return null;
                data.list.map((item, idx) => {
                    const orderStatus = item.orderStatus;
                    if (orderStatus === 40) {
                        history.push(item);
                    } else {
                        order.push(item);
                    }
                    if (idx === 0 && orderStatus >= 10 && orderStatus < 30) {
                        orderFinish = false;
                    }
                });
                this.setState({
                    order,
                    history,
                    orderFinish
                });
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    handleModalVisible = (flag, contactData) => {
        let data = {
            visiableModal: !!flag
        };
        if (contactData) {
            data = {
                visiableModal: !!flag,
                ...contactData
            };
        }
        this.setState(data);
    };

    render() {
        const { matchQuotaRight } = this.props;
        const {
            order,
            history,
            visiableModal,
            sobotLinkUrl,
            orderFinish
        } = this.state;
        const { contactWechat, contactQQ, } = window.serverData;
        return (
            <div className="loan">
                {orderFinish && <LoanHead money={matchQuotaRight} />}
                {order &&
                    order.length > 0 &&
                    order.map((item, idx) => (
                        <Card
                            key={idx}
                            data={item}
                            handleModalVisible={this.handleModalVisible}
                        />
                    ))}
                {history &&
                    history.length > 0 && (
                        <div className="loan-history">
                            <div className="loan-history-title">
                                <div className="line" />
                                <h4>历史贷款</h4>
                            </div>
                            {history.map((item, idx) => <Card key={idx} data={item} />)}
                        </div>
                    )}
                <div className="contact-box">
                    <div className='text'>联系我们:</div>
                    <div className="contact-box-item">
                        <div className='wechat'><span></span>{contactWechat}</div>
                        <div className='qq'><span></span>{contactQQ}</div>
					</div>
                </div>
                <Modal
                    visible={false && visiableModal}
                    transparent
                    maskClosable={false}
                    onClose={e => this.handleModalVisible()}
                    title="联系服务经理"
                    className="loan-modal"
                    footer={[
                        {
                            text: 'OK',
                            onPress: () => {
                                this.handleModalVisible();
                            }
                        }
                    ]}
                >
                    <div className="loan-modal-box">
                        <div className="loan-modal-item">
                            方式1：复制微信号<span>{contactWechat}</span>添加
						</div>
                        <div className="loan-modal-item">
                            方式2：复制QQ号<span>{contactQQ}</span>添加
						</div>
                        {/* <div className="loan-modal-item">
							方式3：<a href={sobotLinkUrl}>在线客服</a>
						</div> */}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Loan;
