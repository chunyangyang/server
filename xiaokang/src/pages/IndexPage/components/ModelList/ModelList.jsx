import React, { Component } from 'react';
import { Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../../../../components/ContainerTitle';
import './ModelList.scss';
// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 6 }).map((item, index) => {
    return {
      name: '神经网络模型',
      count: `${index}`,
    };
  });
};

export default class ModelList extends Component {
  static displayName = 'ModelList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Input 发生改变的时候触发的回调
   */
  handleChange = (value) => {
    console.log({ value });
  };

  render () {
    const mockData = getData();
    return (
      <div className="wrap">
        <IceContainer className="modelListTop">
          <p className="title">Hi 欢迎来到 <span className="welcom">唉好忙网</span></p>
          <p className="desc">分享所遇到的技术问题和解决方案</p>
          <div>
            <Button size="large" className="mr"><a>写文章</a></Button>
            <Button size="large" ><a href="/index/common/add.html">提问</a></Button>
          </div>
        </IceContainer>
        <IceContainer className="modelList">
          <ContainerTitle title="模型服务列表" />
          <div>
            {mockData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <span className="name">{item.name}</span>
                  <span className="count">{item.count}</span>
                </div>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}

// const styles = {
//   modelListTop: {
//     textAlign: 'center',
//     color: '#999',
//     fontSize: '14px',
//   },
//   mr: {
//     marginRight: '10px',
//   },
//   welcom: {
//     color: '#00a4ff',
//   },
//   title: {
//     fontSize: '16px',
//   },
//   desc: {
//     margin: '0 0 15px',
//   },
//   modelList: {
//     height: '500px',
//     padding: '0',
//     overflowY: 'scroll',
//   },
//   item: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 20px',
//     height: '44px',
//     lineHeight: '44px',
//     borderBottom: '1px solid #eee',
//     cursor: 'pointer',
//   },
//   name: {
//     color: '#666',
//     fonstSize: '12px',
//   },
//   count: {
//     background: '#58ca9a',
//     width: '28px',
//     height: '28px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '4px',
//     color: '#fff',
//     fonstSize: '12px',
//   },
// };
