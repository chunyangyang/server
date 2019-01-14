import React from 'react';
import _ from 'lodash';
import {getPhoneCode,postPhoneCode}from '@/api/';
import {setLocallStorage}from '@/util/';


class HomeLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			phone: '',
			captcha: '',
			isSended: false,
			sendTime: 60
		};
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	handleCaptcha = () => {
		this.setState({
			isSended: true,
			sendTime: 60
		});
		this.countDown();
	};

	countDown = () => {
		this.interval = setInterval(() => {
			const time = this.state.sendTime - 1;
			if (!time) {
				this.setState({
					isSended: false,
					sendTime: 60
				});
				clearInterval(this.interval);
				return;
			}
			this.setState({
				sendTime: time
			});
		}, 1000);
	};

	handleModalVisible = flag => {
		this.setState({
			modalVisible: !!flag
		});
	};

	handChange = (key, value) => {
		const data = {};
		data[key] = value;
		this.setState(data);
	};

	getCaptcha = () => {
		const { phone } = this.state;
		if (!phone) {
			alert('请先填写手机号');
			return;
		}

		if (!/^1[3-9]\d{9}$/.test(phone)) {
			alert('请填写正确的手机号');
			return;
		}
        getPhoneCode({phone})
        .then(
            responce=>{
                if(responce.code===200){
                    this.handleCaptcha();
                }else{
                    alert(responce.msg);
                }
            }
        )
		// this.handleModalVisible(true);
	};
    postCode=()=>{
        const { responceData } = this.props;
        const { phone, captcha } = this.state;
       
		if (!phone) {
			alert('手机号码不能为空');
			return;
		}

		if (!captcha) {
			alert('验证码不能为空');
			return;
		}

		if (!/^1[3-9]\d{9}$/.test(phone)) {
			alert('请先填写正确的手机号');
			return;
		}

		if (!captcha) {
			alert('请输入正确的验证码');
        }
        postPhoneCode({phone,code:captcha})
        .then(
            responce=>{
                if(responce.code==200){
                    responceData({phone,token:responce.data.token,money:responce.data.money})
                    setLocallStorage('jqm_token',{phone,token:responce.data.token});
                }else{
                    alert(responce.msg);
                }
            }
        )
    }
	
	render() {
		const { phone, captcha, isSended, sendTime, modalVisible } = this.state;
		const captchaCls = isSended ? 'active' : '';

		return (
			<div>
				<div className="home-inp home-inp-first">
					<i className="home-inp-tel"/>
					<input
						type="tel"
						value={phone}
						placeholder="请输入手机号码"
						maxLength="11"
						onChange={e => this.handChange('phone', e.target.value)}
					/>
				</div>

				<div className="home-inp">
					<i className="home-inp-code"/>
					<div className="home-inp-place"></div>
					<input
						type="tel"
						value={captcha}
						placeholder="短信验证码"
						maxLength="6"
						onChange={e => this.handChange('captcha', e.target.value)}
					/>
					<button className={`captcha ${captchaCls}`} onClick={this.getCaptcha}>
						{isSended ? `${sendTime}s` : '发送验证码'}
					</button>
				</div>
				<button className="btn-borrow" onClick={e => this.postCode()}>
					立即借款
				</button>
			</div>
		);
	}
}

export default HomeLogin;
