/*
/*
 * @Author: zhengchunyang 
 * @Date: 2018-09-10 12:15:31 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2018-12-01 19:03:02
 */
import './index.scss';
import React, { Component } from 'react';
import Header from '../../components/header/';
import AboutBox from './components/AboutBox';


export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { pageData } = window.serverData;
        return (
            <div className='about-layout'>
                <Header />
                <div className="about-place"></div>
                {
                    pageData && pageData.map((item, i) => {
                        return <AboutBox
                            title={item.title}
                            content={item.content}
                            key={`about-item_${i}`}
                        />
                    })
                }
            </div>

        );
    }
}
