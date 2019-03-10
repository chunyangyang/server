import { List } from 'antd';
import qrCode from '../../images/qr_coe.jpg';
import 'antd/lib/list/style/css';
import 'antd/lib/list/style/css';
import './index.scss';
const listData = [
    {
        youqin:{
            title:'友情链接',
            data:[
                { title:'校园招聘',href:''},
                { title:'论文范文',href:''},
                { title:'浙江公务员考试网',href:''},
                { title:'会议',href:''},
                { title:'海峡人才网',href:''},
                { title:'中国教育网',href:''},
                { title:'省公务员考试',href:''},
                { title:'人力资源考试',href:''},
            ]
        },
        banquan:{
            title:'版权信息',
            description: '五百丁网站所发布展示的“简历模板”版权归五百丁所有， 任何商业用途均须联系作者。如未经授权用作他处，五百丁 将保留追究侵权者法',
        },    
        othet: [
            {title:'ppt大学',href:''},
            {title:'首页',href:''},
            {title:'PPT高级教程',href:''}
        ],
    }
];

export default function FooterContent() {
    return (
        <div>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key='code'
                        extra={<img width={120} alt="logo" src={qrCode} />}
                    >
                        <List.Item.Meta
                            title={item.youqin.title}
                            description={
                                item.youqin.data.map((item,i)=>{
                                    return<a href={item.href} style={{marginRight:10}}>{item.title}</a>
                                })
                            }
                        />
                        <List.Item.Meta
                            title={item.banquan.title}
                            description={item.banquan.description}
                        />
                        {item.othet.map((item,i)=>{
                            return <a href={item.href} style={{marginRight:10}}>{item.title}</a>
                        })}
                    </List.Item>
                )}
            />
        </div>
    )
}