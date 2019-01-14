import './index.scss';
import React from 'react';

export default function Header() {
    let host = '//www.huoxsq.cn'
    return (
        <div className="header">
            <div className="header-mn">
                <div className="title">简单钱包介绍</div>
                <img className="more" src={host+"/public/img/fb75e0612250adf72c309426a2de0f19.png"} />
            </div>
        </div>
    )
}