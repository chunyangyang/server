import './index.scss';
import React from 'react';

export default function HomeMd({title,content}) {
    return (
        <div className="about-box">
            <h3 dangerouslySetInnerHTML={{__html:title}}/>
            <p dangerouslySetInnerHTML={{__html:content}} />
        </div>
    )
}