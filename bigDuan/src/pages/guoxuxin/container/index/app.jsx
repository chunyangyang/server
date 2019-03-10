
import React, { Component } from 'react';
import { Layout, Carousel } from 'antd';
import TabsCard from './components/TabsCard';
import FooterContent from '../../components/FooterContent';
import Nav from '../../components/nav';

const { Header, Content, Footer } = Layout;
import 'antd/lib/layout/style/css';
import 'antd/lib/Carousel/style/css';
import './index.scss';
import imgsrc  from '../../images/banner.jpg';
export default class Index extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <Nav/>
                </Header>
                <Content className='w' style={{marginBottom:56}}>
                    <div style={{ background: '#fff', minHeight: 352,marginBottom:14 }}>
                        <Carousel effect="fade">
                            <div><h3 style={{backgroundImage:`url(${imgsrc})`}}>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                    {/* tab */}
                    <div className="card-container">
                       <TabsCard/>
                    </div>
                </Content>
                <Footer style={{ height: 270, backgroundColor: '#30333c' }}>
                   <FooterContent/>
                </Footer>
            </Layout>
        )
    }

}