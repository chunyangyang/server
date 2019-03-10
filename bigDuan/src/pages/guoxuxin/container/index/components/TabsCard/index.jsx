/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-19 13:44:37 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-01-20 15:34:22
 */
import { Card, Icon, Pagination } from 'antd';

import 'antd/lib/Tabs/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/Pagination/style/css';
import './index.scss';
const { Meta } = Card;

const tabListNoTitle = [{
    key: 'app',
    tab: '首页推荐',
}, {
    key: 'article',
    tab: '最新推荐',
}];

const contentListNoTitle = {
    app: {},
    article: <p>project content</p>,
};
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
class TabsCard extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
        current: 1,
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    onChange = (page) => {
        console.log(page);
        this.setState({
            current: page,
        });
    }
    render() {
        return (
            <div>
                <Card
                    style={{ width: '100%', border: 'none', background: 'transparent' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}

                >
                    {/* {contentListNoTitle[this.state.noTitleKey]} */}
                    <Card
                        className='card-item'
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                    <Card
                        className='card-item'
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                    <Card
                        className='card-item'
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                    <Card
                       className='card-item no-margin-right'
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Card>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Pagination current={this.state.current} onChange={this.onChange} total={100} />

                </div>

            </div>
        );
    }
}

export default TabsCard;