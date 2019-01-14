/*
/*
 * @Author: zhengchunyang 
 * @Date: 2018-09-10 12:15:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-12-05 20:28:40
 */
import './index.scss';
import React, { Component } from 'react';
import HomeHead from './components/HomeHead';
import HomeLogin from './components/HomeLogin';
import HomeFooter from './components/HomeFooter';
import { getUserInfo } from '@/api/';
import { getLocallStorage, removeLocallStorage } from '@/util/index';

function HomeAcount({ mobile, amount, handleLoan }) {
    return (
        <div>
            <div className="home-acount">
                <h3>
                    您好，<span>{mobile}</span>
                </h3>
                <h5>您的可匹配额度(元)</h5>
                <div className="money">{amount}</div>
                {/* <img src='' /> */}
            </div>
            <button className="btn-borrow" onClick={handleLoan}>
                立即借款
			</button>
        </div>
    );
}
function HomeCount({ mobile }) {
    return (
        <div>
            <div className="home-acount">
                <h3>
                    您好，<span>{mobile}</span>
                </h3>
                <h5>您的可匹配额度(元)</h5>
                <div className="count">通过计算获得可匹配额度</div>
            </div>
            <button className="btn-borrow">
                <a href="/quota">开始计算额度</a>
            </button>
        </div>
    );
}
function HomeTip({ data }) {
    return (
        <div className="home-tip" id="j-home-tip">
            {data.name}成功下款<span>{data.xiakuanAmount}元</span>
            <p>
                {getDateDiff(data.xiakuanTime)}前·{data.province}
                {data.city}
            </p>
        </div>
    );
}
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,
            phone: '',
            countMoney: ''
        }
        this.floag = false;
    }
    componentWillMount() {
        let jqmToken = getLocallStorage('jqm_token');
        if (jqmToken) {

            getUserInfo({ token: jqmToken.token }).then(
                responce => {
                    // console.log(responce)
                    if (responce.code === 200) {
                        let data = responce.data;
                        let status = 2;
                        let countMoney = '';
                        if (data.money != '0') {
                            status = 3;
                            countMoney = data.money;
                        }
                        this.floag = true;
                        this.setState({
                            status,
                            phone: data.phone,
                            countMoney
                        })
                    } else {
                        removeLocallStorage('jqm_token');
                        window.location.reload();
                    }
                }
            )
        } else {
            this.floag = true;
        }

    }
    getUserData = (data) => {
        let status = data.money == 0 ? 2 : 3;
        this.setState({
            phone: data.phone,
            status,
            countMoney: data.money || ''
        })
    }
    handleLoan() {
        window.location.href = '/pay'
    }

    render() {
        const { status, phone, countMoney } = this.state;
        if (!this.floag) return null;
        return (
            <div className='index-layout'>
                <HomeHead />
                <div className="home-mn">
                    {status === 1 &&
                        <HomeLogin
                            responceData={(data) => { this.getUserData(data) }}
                        />}
                    {status === 2 && <HomeCount mobile={phone} />}

                    {status === 3 && <HomeAcount
                        mobile={phone}
                        amount={countMoney}
                        handleLoan={this.handleLoan}
                    />}

                </div>
                <HomeFooter />
            </div>

        );
    }
}
