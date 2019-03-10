/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-19 13:44:37 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-01-19 16:52:43
 */
import { Card, Icon, Pagination } from 'antd';

import 'antd/lib/Tabs/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/Pagination/style/css';
import './index.scss';
const { Meta } = Card;

const tabListNoTitle = [{
    key: 'article',
    tab: '首页推荐',
}, {
    key: 'app',
    tab: '最新推荐1',
}, {
    key: 'project',
    tab: '最新推荐2',
}];

const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
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
        current: 3,
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
                        style={{ width: 278, float: 'left', marginRight: 20 }}
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
                        style={{ width: 278, float: 'left', marginRight: 20 }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                    <Card
                        style={{ width: 278, float: 'left', marginRight: 20 }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                    <Card
                        style={{ width: 278, float: 'left' }}
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