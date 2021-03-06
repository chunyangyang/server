/*
/*
 * @Author: zhengchunyang 
 * @Date: 2018-09-10 12:15:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-01-26 13:47:24
 */
import './index.scss';
import React, { Component } from 'react';

import { getLocallStorage, removeLocallStorage } from '@/util/index';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

        return (
            <div className='index-layout'>
                <div className='top-banner' />

                <div className='message'>

                    <div className='message-content'>
                        <div className='box'>
                            <div className='head'>祖祠重建暨牌坊建设</div>
                            <div className='content-box'>
                                <div className='title-box'><span className='title'> 工期</span></div>
                                <div className='content'>2018年3月 至 208年12月</div>
                            </div>
                            <div className='content-box'>
                                <div className='title-box'>
                                    <span className='title'>公账资金</span>
                                </div>
                                <div>总入账：740400</div>
                                <div>总支出：452070</div>
                                <div>目前账户剩余：288330</div>
                            </div>
                            {/* <div className='content-box'>
                                <div className='title-box'>
                                    <span className='title'>理事会成员</span>
                                    <span className='tips'>按姓名笔画排序</span>
                                </div>
                                <div className='content'>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                </div>
                            </div> */}
                            {/* <div className='content-box'>
                                <div className='title-box'>
                                    <span className='title'>捐地基人员</span>
                                    <span className='tips'>感谢以下人员</span>
                                </div>
                                <div className='content'>                              
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                    <span className='name'>郑**</span>
                                </div>
                            </div> */}
                            <div className='content-box'>
                                <div className='title-box'>
                                    <span className='title'>捐款明星</span>
                                    <span className='tips'>感谢大家慷慨解囊</span>
                                </div>

                                <div className='content'>
                                    <span className='name'>郑周衡</span>
                                    <span className="name">刘斌</span>
                                    <span className="name">刘超</span>
                                    <span className="name">刘冬成</span>
                                    <span className="name">刘月平</span>
                                    <span className="name">刘交林</span>
                                    <span className="name">郑贱清</span>
                                    <span className="name">罗会成</span>
                                    <span className="name">郑文龙</span>
                                    <span className="name">刘利军</span>
                                    <span className="name">郑志坤</span>
                                    <span className="name">郑小林</span>
                                    <span className="name">郑齐龙</span>
                                    <span className="name">郑国成</span>
                                    <span className="name">郑小利</span>
                                    <span className="name">郑桂清</span>
                                    <span className="name">郑利林</span>
                                    <span className="name">郑方平</span>
                                    <span className="name">郑纯清</span>
                                    <span className="name">郑斌</span>
                                    <span className="name">郑周权</span>
                                    <span className="name">郑威威</span>
                                    <span className="name">郑连平</span>
                                    <span className="name">郑志成</span>
                                    <span className="name">郑法清</span>
                                    <span className="name">郑周武</span>
                                    <span className="name">郑贱成</span>
                                    <span className="name">郑慧兰</span>
                                    <span className="name">郑利军</span>
                                    <span className="name">郑小虎</span>
                                    <span className="name">郑胡苟</span>
                                    <span className="name">郑周平</span>
                                    <span className="name">郑文平</span>
                                    <span className="name">郑建林</span>
                                    <span className="name">郑小刚</span>
                                    <span className="name">李四英</span>
                                    <span className="name">郑勇</span>
                                    <span className="name">郑小国</span>
                                    <span className="name">郑平林</span>
                                    <span className="name">郑青林</span>
                                    <span className="name">郑金莲</span>
                                    <span className="name">郑圣</span>
                                    <span className="name">郑六斤</span>
                                    <span className="name">罗会新</span>
                                    <span className="name">罗会平</span>
                                    <span className="name">郑小林(大)</span>
                                    <span className="name">郑小阳</span>
                                    <span className="name">郑小平</span>
                                    <span className="name">郑志华</span>
                                    <span className="name">郑纯阳</span>
                                    <span className="name">郑青平</span>
                                    <span className="name">郑海波</span>
                                    <span className="name">郑小军</span>
                                    <span className="name">郑文文</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
