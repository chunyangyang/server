import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';
import FooterContent from '../../components/FooterContent';
import Nav from '../../components/nav';

const { SubMenu } = Menu;
const { Header, Content, Footer,Sider } = Layout;

import 'antd/lib/layout/style/css';

import './index.scss';

export default class Contents extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                   <Nav/>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}
                        >
                            Content
                </Content>
                    </Layout>
                </Layout>
                <Footer style={{ height: 270, backgroundColor: '#000' }}>
                   <FooterContent/>
                </Footer>
            </Layout>
        )
    }

}