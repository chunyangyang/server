import React, { Component } from 'react';
import './index.scss';

const sexValue = {
    man: 1,
    woman: 2
}

class Sex extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     currentValue:''
        // }
    }

    toggleGender(data) {
        this.props.change(data, 'gender');
        // this.setState({
        //     currentValue:data
        // });
    }

    render() {
        let { value, labelClassName, layout,errorMsg,noBorder} = this.props;
        // let { currentValue } = this.state;
        let dffiValue = value;

        let classSex = (targetValue) => {
            let result = 'sex-label sex';
            return dffiValue == targetValue ? `${result} active` : result
        }
        labelClassName = labelClassName ? `${labelClassName} item-name` : 'item-name';
        let itemClassName =layout?`item-${layout} item`:'item-inline item';
      
        if(!noBorder){
            itemClassName =layout?`item-${layout} item border-bottom`:'item-inline item border-bottom';
        }

        return (
            <div className='form-item'>
                <div className={itemClassName}>
                    <span className={labelClassName}>性别</span>
                    <div className="gender">
                        <label className={classSex(sexValue.man)} onClick={() => this.toggleGender(sexValue.man)}>
                            <span className="sex-title">男</span>
                        </label>
                        <label className={classSex(sexValue.woman)} onClick={() => this.toggleGender(sexValue.woman)}>
                            <span className="sex-title">女</span>
                        </label>
                    </div>
                </div>
                {errorMsg && <p className='error'>{errorMsg}</p>}
            </div>

        )
    }
}
export default Sex;