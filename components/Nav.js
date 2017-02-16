/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'antd';
import PublishButton from 'PublishButton.js';
//导航栏
export default class Nav extends React.Component{
    constructor(pros){
        super(pros);
        this.ticking = false;
    }
    //鼠标滚动导航栏动画效果;pos在0-10之间的时候，nav为黑色；其余时候为白色；
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll.bind(this));
    }
    handleScroll(e){
        var pos = 0;
        var header = document.getElementById('navHeader');
        pos = window.scrollY;
        if (pos>0&&!this.ticking){
            header.classList.add("navCopy");
            this.ticking = true;
        }
        if (pos<10&&this.ticking){
            header.classList.remove("navCopy");
            this.ticking = false;
        }
    }


    render(){
        return(
            <div>
                <Row className="nav" id="navHeader">
                    <Col span={6}><img src="../static/imgs/index.png"/> </Col>
                    <Col span={12}><p className="navTitle">心愿墙</p></Col>
                    <Col span={6}><div className="publishbtn"> <PublishButton/></div></Col>
                </Row>
            </div>
        )
    }
}