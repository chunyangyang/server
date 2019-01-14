import React from 'react';
import Header from '../../components/header/';

import Form from './components/form/index'
import loadBg from './load-bg.png';
import loadInner from './load-inner.png';
import loadWarp from './load-warp.png';
import { gettOptionList,posttOptionListData } from '@/api/';
import FormValidate from '@/util/form_validate';
import { getLocallStorage,getSessionStorage} from '@/util/index';

import './index.scss';

function Loading({ seconds }) {
    return (
        <div className="quota-loading">
            <div className="quota-layer">
                <img className="layer-bg" src={loadBg} />
                <img className="layer-inner" src={loadInner} />
                <img className="layer-warp" src={loadWarp} />
                <h4>{seconds}</h4>
            </div>
            <h3>正在计算借款额度</h3>
        </div>
    );
}

class Quota extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: false,
            seconds: 24,
            pageData: null
        };
        this.config = {
            zhiye: [
                { validate: FormValidate.required, msg: "不能为空" }
            ],
            xyk: [
                { validate: FormValidate.required, msg: "不能为空" }
            ],
            shiming: [
                { validate: FormValidate.required, msg: "不能为空" }
            ],
            zmxyf: [
                { validate: FormValidate.required, msg: "不能为空" }
            ],
        }
        this.jqmToken= getLocallStorage('jqm_token')||{}
    }

    componentWillMount() {

        let pageData= getSessionStorage(`jqm_license`)||{}
        gettOptionList({token:this.jqmToken.token}).then(
            responce => {
              
                if (responce.code === 200) {
                    let pageConfig = responce.data;

                    this.setState({
                        pageConfig,
                        pageData
                    })
                }else{
                    window.location.href='/';
                }
            }
        );
      
       
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startLoading = (data) => {
        this.setState({
            loading: true,

        });
        this.interval = setInterval(() => this.tick(), 1000);
    };

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds - 1
        }));
    }

  

    // getBtnCls = () => {
    //     let result = true;
    //     const state = this.state;
    //     const { list } = this.state;

    //     if (!list || list.length < 1) result = false;
    //     list.map(item => {
    //         if (!state[item.name]) result = false;
    //     });
    //     return result;
    // };
    handClickSubmit(data){
        data.token = this.jqmToken.token;
        this.startLoading(data);
        setTimeout(()=>{
            posttOptionListData(data).then(
                responce=>{
                    if(responce.code===200){
                      window.location.href = '/pay'
                    }else{
                        window.location.href='/';
                    }
                }
            )
        },3000)
        
    }
    render() {
        const { seconds, loading, pageData,pageConfig } = this.state;
        // const btnCls = this.getBtnCls() ? 'active' : '';
        if (!pageConfig) return null;
        return (
            <div className="quota">
                <Header />
                <div className="quota-mn">
                    <div className="quota-title">基本信息</div>
                    <div className="quota-desc">完成信用信息验证，有助于获得更高额度</div>
                    <div className="quota-form">
                        <Form
                            pageConfig={pageConfig}
                            pageData={pageData}
                            validateConfig={this.config}
                            saveStorage={true}
                            onSubmit={(data) => { this.handClickSubmit(data) }}
                            handClickTemplete={(data) => { this.showTemplete(data) }}
                        />
                    </div>
                </div>
                {loading && <Loading seconds={seconds} />}
            </div>
        );
    }
}

export default Quota;
