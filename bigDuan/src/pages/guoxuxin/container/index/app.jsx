import React, { Component } from 'react';
import { Layout, Menu, Carousel,Tabs } from 'antd';

const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

import 'antd/lib/layout/style/css';
import 'antd/lib/Menu/style/css';
import 'antd/lib/Carousel/style/css';
import 'antd/lib/Tabs/style/css';

import './index.scss';

export default class Index extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className='w'>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}

                            style={{ lineHeight: '70px', backgroundColor: '#fff' }}
                        >
                            <Menu.Item key="1" >PPT</Menu.Item>
                            <Menu.Item key="2">2003</Menu.Item>
                            <Menu.Item key="3" >2007</Menu.Item>
                            <Menu.Item key="4" >2010</Menu.Item>
                            <Menu.Item key="5" >2013</Menu.Item>
                        </Menu>
                    </div>


                </Header>
                <Content className='w'>
                    <div style={{ background: '#fff', minHeight: 352 }}>
                        <Carousel effect="fade">
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                    {/* tab */}
                    <div className="card-container">
                        <Tabs  type='card'>
                            <TabPane tab="Tab Title 1" key="1">
                                <p>Content of Tab Pane 1</p>
                                <p>Content of Tab Pane 1</p>
                                <p>Content of Tab Pane 1</p>
                            </TabPane>
                            <TabPane tab="Tab Title 2" key="2">
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                            </TabPane>
                            <TabPane tab="Tab Title 3" key="3">
                                <p>Content of Tab Pane 3</p>
                                <p>Content of Tab Pane 3</p>
                                <p>Content of Tab Pane 3</p>
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }} >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )
    }

}