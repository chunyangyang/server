import React from 'react';
// import { Tabs, Toast } from 'zzc-design-mobile';
import { Tabs, Toast } from 'antd-mobile';
import 'antd-mobile/lib/tabs/style/css';
import 'antd-mobile/lib/toast/style/css';
import Header from '../../components/header/index'
import Loan from './components/loan/';
import RealInfo from './components/realinfo/';
import { getUserInfo, postupdUserInfo } from '@/api/';
import { getLocallStorage,validateIdCard } from '@/util/';
import './index.scss';

const tabs = [{ title: '我的借款' }, { title: '实名信息' }];

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            realname: '',
            idNumber: '',
            bankCard: '',
            formatMobile: '',
            matchQuotaRight: ''
        };
        this.jqmToken = getLocallStorage('jqm_token') || {}
    }
    componentWillMount() {

        getUserInfo({ token: this.jqmToken.token }).then(
            responce => {
                if (responce.code == 200) {
                    let data = responce.data;
                    this.setState({
                        realname: data.name,
                        formatMobile: data.phone,
                        idNumber: data.sfzh,
                        bankCard: data.yhkh,
                        matchQuotaRight: data.money,
                    });
                }else{
                    window.location.href='/';
                }
            }
        )

    }

    saveToState = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    saveInfo = async function () {
        const { realname, idNumber, bankCard } = this.state;
        const params = {
            name: realname,
            sfzh: idNumber,
            yhkh: bankCard,
            token: this.jqmToken.token
        };
        if (!realname) {
            Toast.fail('请先填写姓名');
            return;
        }

        if (!idNumber) {
            Toast.fail('请先填写身份证号');
            return;
        }
       
        if (!bankCard) {
            Toast.fail('请先填写银行卡号');
            return;
        }

        if ( !validateIdCard(idNumber)) {
            Toast.fail('请输入正确的身份证号');
            return;
        }
        if (!/^([1-9]{1})(\d{14,18})$/.test(bankCard)) {
            Toast.fail('请输入正确的银行卡号');
            return;
        }
        try {
            const res = await postupdUserInfo(
                params
            );
            if (res.status === 200) {
                Toast.success('保存成功');
            }else{
                window.location.href='/';
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    render() {

        const { realname, idNumber, bankCard, formatMobile, matchQuotaRight } = this.state;
        return (
            <div className="profile">
                <Header />
                <div className="profile-user">
                    <div className="profile-info">{formatMobile}</div>

                </div>
                <Tabs tabs={tabs} initalPage={1} swipeable={false}>
                    <div className="profile-tab">
                        <Loan matchQuotaRight={matchQuotaRight} />
                    </div>
                    <div className="profile-tab">
                        <RealInfo
                            realname={realname}
                            idNumber={idNumber}
                            bankCard={bankCard}
                            handleSubmit={e => this.saveInfo()}
                            saveToState={this.saveToState}
                        />
                    </div>
                </Tabs>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
// 	userInfo: state.userInfo,
// 	isLogin: state.isLogin
// });

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(
// 		{
// 			updateUserInfo
// 		},
// 		dispatch
// 	);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profile;
