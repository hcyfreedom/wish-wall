/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';
import { Input } from 'antd';
import TimeSelector from 'TimeSelector.js'
import Anonymous from 'Anonymous.js'
//填写心愿
export default class WishFillIn extends React.Component{
    getInitialState(){
        return {text:'',tel:''};
    }
    handleTextChange(e){
        this.setState({text:e.target.value});
    }
    handleTelChange(e){
        this.setState({tel:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        var text = this.state.text.trim();
        var tel = this.state.tel.trim();
        if (!text||!tel){
            alert("请填写完整信息！")
            return;
        }
        this.props.onWishPublish({text:text,tel:tel});
        this.setState({text:'',tel:''})
    }
    render(){
        return(
            <Card title="我的小心思" extra={<p onSubmit={this.handleSubmit}>发布</p>} style={{ width: 300,marginTop:10}}>
                <Input value={this.state.text} onChange={this.handleTextChange} type="textarea" placeholder="写下我的小心思~" autosize={{ minRows: 2, maxRows: 6 }} />
                <TimeSelector/>
                <Input placeholder="联系方式" value={this.state.tel} onChange={this.handleTelChange} style={{width:180,marginTop:10}} />
                /*<Alert message="联系方式已发生改变" type="warning" showIcon style={{marginTop:10}} className="warnIcon"/>*/
                <Anonymous/>
            </Card>
        )
    }
}