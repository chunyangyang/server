import { List} from 'antd';

import 'antd/lib/list/style/css';
import 'antd/lib/list/style/css';
import './index.scss';
const listData = [
    {
        href: 'http://ant.design',
        title: `ant design part 1`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }
];

export default function FooterContent() {
    return (

        <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}