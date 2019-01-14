import './index.scss';
import React, { Component } from 'react';

export default class HomeHead extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state={
            name:'',
            money:'',
            time:'',
            address:''
        }
        this.setText=this.setText.bind(this);
    }
    setText = () => {
        const { slideData } = window.serverData;
        this.count++;
        if (this.count >= slideData.length) {
            this.count = 0;
        }
        let name = slideData[this.count].name,
            money = slideData[this.count].money,
            time = slideData[this.count].time,
            address = slideData[this.count].address
        this.setState({
            name,
            money,
            time,
            address
        });
    }
    componentWillMount() {
        this.setText();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentDidMount() {
        this.interval = setInterval(this.setText, 5000);
    }
    componentWillReceiveProps() {
        this.setText();
    }
    render() {
        const { logo, moneyIcon, banner } = window.serverData.imagesData.header;
        const { name, money, time, address } = this.state;
        return (
            <div className="home-hd">
                <img className="home-logo" src={logo} alt="钱包" />
                <a href="/profile">
                    <img className="home-bage" src={moneyIcon} alt="钱包" />
                </a>
                <img className="banner" src={banner} alt="最快1小时放款" />
                <div className="home-tip" >{name}成功下款<span>{money}</span><p>{time}·{address}</p></div>
            </div>
        )
    }

}
