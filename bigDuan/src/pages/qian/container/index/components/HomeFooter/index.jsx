import './index.scss';
import React from 'react';

export default function HomeFooter() {
    const {server,ours,ICP,contactPone}=window.serverData.imagesData.footer;
  
    return (
        <div className="home-ft">
            <ul>
                <li>
                    <a href={contactPone}><img className="icon-custom" src={server} />联系客服</a>
                </li>
                <li>
                    <a href="/about"><img className="icon-about" src={ours} />关于我们</a>
                </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html:ICP}}/>
        </div>
    )
}