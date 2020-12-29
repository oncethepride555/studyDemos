import React, { useState } from 'react'
import { ConfigProvider, Button, DatePicker, version, message, Alert, Card } from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
// antd 的默认文案是英文，需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn');

const Date = () => {
    const [date, setDate] = useState(null); // state 值初始化为 null
    const handleChange = value => {
        // 全局提示 message，其中 普通提示通过 message.info 设置
        message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value); // 将 state 值更新为 value
    }
    return (
        <>
            <ConfigProvider locale={zhCN}>
                <div className='app'>
                    <h1>ant-design version:{version}</h1>
                    <DatePicker onChange={handleChange} />
                    <Button type='primary' style={{ marginLeft: 8 }}>
                        Primary Button
                </Button>
                    <div style={{ marginTop: 16 }}>
                        <Alert message='当前日期：' description={date ? date.format('YYYY年MM月DD日') : '未选择'} type='info' showIcon closable />
                    </div>
                </div>
            </ConfigProvider>
            <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>
    )
}

export default Date