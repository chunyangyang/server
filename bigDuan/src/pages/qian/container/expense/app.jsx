import React from 'react';
// import qs from 'query-string';
import Header from '../../components/header/';
// import itemData from './data'
import { getexpense, getUserInfo } from '@/api/';
import { getLocallStorage } from '@/util/index';
import './index.scss';

class Expense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.jqmToken = getLocallStorage('jqm_token') || {}
    }

    componentDidMount() {
        this.getData();
    }

    getData = async function () {
        // const userInfo = await getUserInfo({ token: this.jqmToken.token });
        // let amount =''
        // if (userInfo.code == 200) {
        //      amount = userInfo.data.money;
        // }else{
        //     alert(userInfo.msg);
        //     return;
        // }

        // let money = 99;
        // if (amount >= 2000) money = 199;
        // if (amount >= 8000) money = 399;
        let money= getLocallStorage('my_amount');
        try {
            const res = await getexpense({ amount: money,token: this.jqmToken.token });
            if (res.code == 200) {
                this.setState({
                    data: res.data,
                    money,
                });
            }else{
                window.location.href='/';
            }
            
        } catch (err) {
            console.log(err);
            return;
        }
    };

    render() {
        const { data ,money} = this.state;
        // const params = qs.parse(this.props.location.search);
        const orderId = '';
        if (!data) return null;

        return (
            <div className="expense">
                <Header
                    title="贷款情报"
                    onBack={()=>{history.back()}}
                    showBack
                    hideMore
                />
                <div className="expense-mn">
                    <div className="expense-common">
                        <ul className="expense-list">
                            {data.map((item, idx) => {
                                const cls = item.refundFlag ? '' : 'active';
                                return (
                                    <li key={idx} className={cls}>
                                        <span className="left">{item.itemName}</span>
                                        <span className="right">￥{item.itemFee}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="expense-total">
                            共计{data.length}服务<span>
                                <b>￥</b>
                                {money}
                            </span>
                        </div>
                    </div>
                    <div className="expense-tip">
                        * (红色部分为不可退金额）贷款情报、专属客服通道如发
						生退费，将按使用天数计费。
					</div>
                    {orderId && (
                        <div className="expense-extra">
                            <ul className="expense-list">
                                <li>
                                    <span className="left">订单金额</span>
                                    <span className="right">￥{data.totalFee}</span>
                                </li>
                                <li>
                                    <span className="left">支持退款金额</span>
                                    <span className="right">￥{data.refundableItemFee}</span>
                                </li>
                                <li>
                                    <span className="left">您已消费</span>
                                    <span className="right">￥{data.spentAmount}</span>
                                </li>
                            </ul>
                            <div className="expense-total">
                                目前可退金额<span>
                                    <b>￥</b>
                                    {data.refundableFee}
                                </span>
                            </div>
                        </div>
                    )}
                    {orderId && <button className="expense-btn" onClick={this.props.history.goBack}>确认</button>}
                </div>
            </div>
        );
    }
}

export default Expense;
