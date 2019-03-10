import { Menu } from 'antd';
import 'antd/lib/Menu/style/css';
import './index.scss';
export default function Nav({ index }) {
    return (
        <div className='w'>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}

                style={{ lineHeight: '68px', backgroundColor: '#fff'}}
            >
                <Menu.Item key="1" >PPT</Menu.Item>
                <Menu.Item key="2">2003</Menu.Item>
                <Menu.Item key="3" >2007</Menu.Item>
                <Menu.Item key="4" >2010</Menu.Item>
                <Menu.Item key="5" >2013</Menu.Item>
            </Menu>
        </div>
    )
}