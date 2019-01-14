import './index.scss';
import React from 'react';
export default class Css extends React.Component {
    render() {
        return (
            <div className='box'>
                {/* 书信纸效果 */}
                {/* <div className='shuxin'></div> */}

                {/* 纹理背景 */}
                <div className='patterns pt1'></div>
                <div className='patterns pt2'></div>
                <div className='patterns pt3'>p3</div>
                <div className='patterns pt4'>p4</div>
                <div className='patterns pt5'>p5</div>
                <div className='patterns pt6'>p6</div>
                <div className='patterns pt7'>p7</div>
                <div className='patterns pt8'>p8</div>
                <div className='patterns pt20'></div>
            </div>
        )
    }
}