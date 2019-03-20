import React from 'react';
import { Button, Modal, Alert, Toast } from 'zzc-design-mobile';
// import qs from 'query-string';
import Header from '../../components/header/';
import paybgImg from './pay-bg.png';
import { getUserInfo, postupdUserInfo, postapplyLoan } from '@/api/';
import { getLocallStorage, getSessionStorage, setLocallStorage, validateIdCard } from '@/util/index';
import './index.scss';

const payPlans = [
    {
        text: '1~1999元',
        applyAmount: 1000,
        val: 99
    },
    {
        text: '2000~5999元',
        applyAmount: 2000,
        val: 199
    },
    {
        text: '6000元以上',
        applyAmount: 6000,
        val: 399
    }
];

function PayForm({ name, papers, cardNo, money, btnCls, handChange, confirmPay }) {
    return (
        <form >
            <div className="pay-title">支付金额：{money}元</div>
            <div className="pay-form">
                <div className="form-inp form-inp-first">
                    <input
                        type="text"
                        value={name || ''}
                        name="acct_name"
                        placeholder="姓名"
                        maxLength="11"
                        onChange={e => handChange('name', e.target.value)}
                    />
                </div>

                <div className="form-inp">
                    <input
                        type="text"
                        value={papers || ''}
                        name="id_no"
                        placeholder="身份证号"
                        maxLength="20"
                        onChange={e => handChange('papers', e.target.value)}
                    />
                </div>
                <div className="form-inp">
                    <input
                        type="text"
                        value={cardNo || ''}
                        name="bankCard"
                        placeholder="银行卡号"
                        maxLength="20"
                        onChange={e => handChange('cardNo', e.target.value)}
                    />
                </div>
            </div>
            <div className="submit-box has-bottombar">
                <Button type='main' disabled={btnCls ? false : true} size='lg' style={{ borderRadius: '0.16rem' }} onClick={confirmPay} > 确认支付</Button>
            </div>
            {/* <button className={`btn-confirm ${btnCls}`}>确认支付</button> */}
        </form>
    );

}

// function CreditCard({ money }) {
// 	return (
// 		<div>
// 			<div className="pay-title">支付金额：{money}元</div>
// 			<div className="credit-card">
// 				<h3>常用银行卡</h3>
// 				<div className="credit-card-box">
// 					<img src={creditImg} />
// 					<div className="card-text">
// 						<span>XXX银行</span>
// 						<p>借记卡</p>
// 					</div>
// 					<div className="card-no">**** **** **** **** 5879</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

function ChoicePay({
    matchQuotaRight,
    money,
    agree,
    onChoice,
    changePlan,
    changeAgree
}) {
    return (
        <div className="choice-pay">
            <div className="choice-hd">
                <img src={paybgImg} />
                <h3>
                    <span>￥</span>
                    {matchQuotaRight}
                </h3>
                <p className='time'>（还款可选3~12月）</p>
            </div>
            <div className="choice-row">借款金额</div>
            <ul className="choice-list">
                {payPlans.map(item => (
                    <li
                        key={item.val}
                        className={item.val === money ? 'active' : ''}
                        onClick={e => changePlan(item.val)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <div className="choice-row">
                支付服务费：<span>{money}元</span>
                {
                    window.serverData.show && <a className="choice-detail" href={`/expense?amount=${money}`}>
                        <i className="iconfont icon-detail" />明细
				</a>
                }

            </div>
            <div className="choice-tip">
                <div
                    className={`iconfont iconfont-check icon-${agree ? 'checked' : 'check'}`}
                    onClick={changeAgree}
                />

                <p>本平台只提供贷款信息服务，服务含平台信息技术服务，人工客服咨询服务。具体请查看<a href="/terms">《平台服务协议》</a>，点击确认支付，即表示您已阅读并同意该协议。</p>
            </div>

            <div className="submit-box has-bottombar">
                <Button type='main' size='lg' style={{ borderRadius: '0.16rem' }} onClick={onChoice}> 确认支付</Button>
            </div>
        </div>
    );
}

class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchQuotaRight: '',
            name: '',
            papers: '',
            cardNo: '',
            money: '',
            amount: '',
            payLinkUrlPic: '',
            payLinkUrlZfb: '',
            status: 1,
            agree: false,
            visiblePay: false,
            payType: 1
        };

        this.jqmToken = getLocallStorage('jqm_token') || {}
    }

    componentWillMount() {

        getUserInfo({ token: this.jqmToken.token }).then(
            responce => {
                if (responce.code == 200) {
                    let data = responce.data;

                    let money = 99;
                    let amount = 1000;
                    const matchQuotaRight = data.money;

                    if (matchQuotaRight >= 2000) {
                        money = 199;
                        amount = 2000;
                    }
                    if (matchQuotaRight >= 6000) {
                        money = 399;
                        amount = 6000
                    }
                    this.setState({
                        money,
                        name: data.name,
                        phone: data.phone,
                        papers: data.sfzh,
                        cardNo: data.yhkh,
                        matchQuotaRight,
                        amount
                    })
                } else {
                    window.location.href = '/';
                }
            }
        )

    }

    handChange = (key, value) => {
        const data = {};
        data[key] = value;
        this.setState(data);
    };
    confirmPay = () => {
        const { name, papers, cardNo } = this.state;
        if (!(name && papers)) return;
        if (!validateIdCard(papers)) {
            Toast.info('请输入正确的身份证号');
            return;
        }
        if (!/^([1-9]{1})(\d{14,18})$/.test(cardNo)) {
            Toast.info('请输入正确的银行卡号');
            return;
        }
        postupdUserInfo(
            {
                token: this.jqmToken.token,
                name,
                sfzh: papers,
                yhkh: cardNo,
            }
        ).then(
            responce => {

                if (responce.code == 200) {
                    this.setState({
                        visiblePay: true
                    })
                } else {
                    Alert({
                        title: '温馨提示',
                        content: <p>{responce.msg}</p>,
                        buttons: [
                            {
                                text: '返回首页',
                                onPress: () => {
                                    window.location.href = '/'
                                },
                                props: {
                                    style: { color: '#254FCB' }
                                }
                            }
                        ]
                    });
                }
            }
        )
    }

    changePlan = val => {
        let amount = 1000;
        switch (val) {
            case 199:
                amount = 2000;
                break;
            case 399:
                amount = 6000;
                break;
            default:
                amount = 1000;
                break;
        }
        this.setState({
            money: val,
            amount
        });
        // setLocallStorage('my_amount',val);
    };

    changeAgree = val => {
        this.setState({
            agree: !this.state.agree
        });
    };

    onChoice = () => {
        if (!this.state.agree) {
            alert('请先阅读简单钱包协议，并点击同意后再支付！');
            return;
        }
        this.applyLoan();
    };

    applyLoan = function () {
        const { money, amount } = this.state;
        postapplyLoan({
            token: this.jqmToken.token,
            amount: amount,
            deposit: money,
        }).then(
            responce => {
                if (responce.code == 200) {
                    this.setState({
                        payLinkUrlPic: responce.data.pic || '',
                        payLinkUrlZfb: responce.data.zfb || '',
                        status: 2
                    });
                } else {
                    window.location.href = '/';
                }
            }
        )

    };

    changePay(type) {
        this.setState({
            payType: type
        })
    }

    render() {

        const {
            matchQuotaRight,
            name,
            papers,
            cardNo,
            money,
            status,
            agree,
            payLinkUrlPic,
            payLinkUrlZfb,
            payType
        } = this.state;
        const btnCls = name && papers ? 'active' : '';
        setLocallStorage('my_amount', money);
        return (
            <div className="pay">
                <Header />
                {status === 1 && (
                    <ChoicePay
                        matchQuotaRight={matchQuotaRight}
                        money={money}
                        agree={agree}
                        onChoice={this.onChoice}
                        changePlan={this.changePlan}
                        changeAgree={this.changeAgree}
                    />
                )}
                {status === 2 && (
                    <PayForm
                        money={money}
                        name={name}
                        papers={papers}
                        cardNo={cardNo}
                        btnCls={btnCls}
                        // payLinkUrlPic={payLinkUrl}
                        handChange={this.handChange}
                        confirmPay={this.confirmPay}
                    />
                )}
                <Modal
                    // title='请支付'
                    visible={this.state.visiblePay}
                    maskClose={true}
                    buttons={[
                        {
                            text: '关闭',
                            onPress: () => {
                                console.log('关闭');
                                // window.location.href = '/'
                            },
                            props: {
                                type: 'main',
                            }

                        }
                    ]}
                    closeCallback={() => { this.setState({ visiblePay: false }); }}
                >
                    <div className="modal-text">
                        <div className='pay-tab'>
                            <span className={payType == 1 ? 'active' : ''} onClick={() => this.changePay(1)}>微信付款</span>
                            {/* <span className={payType == 2 ? 'active' : ''} onClick={() => this.changePay(2)}>支付宝付款</span> */}
                        </div>
                        <div className='img-box'>
                            {
                                payType == 1 ?
                                    <img src={payLinkUrlPic || window.serverData.payImg} alt="" width="100%" />
                                    :
                                    <img src={payLinkUrlZfb || window.serverData.payImg} alt="" width="100%" />
                            }
                        </div>

                        <div className='text'>
                            {payType == 1 ? '可长按保存或者截图微信打开' : '可长按保存或者截图支付宝打开'}
                            <br/>付款时请备注注册手机号码，以便及时下款
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}


export default Pay;