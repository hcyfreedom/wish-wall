/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import {Card} from 'antd';
export default  class WishDetailCard extends React.Component{
    render(){
        return (
            <Card {this.state.response} title="心愿详情~"  extra={<a href="#">领取</a>} style={{width: 400, marginTop: 10,zIndex:2}}>
                <p>发布者：<span ref="publisher" >hcy</span></p>
                <p>发布时间：<span ref="pubTime" >2017-1-1 00:10:01</span></p>
                <p>截止时间：<span ref="pubDeadline">2017-2-11 00:00:00</span></p>
                <p>性别：<span ref="sex" >女</span></p>
                <p>详情：<span ref="detail">啦啦啦啦要开学了我不开心，有没有小可爱请我吃可爱多</span></p>
            </Card>
        )
    }
}