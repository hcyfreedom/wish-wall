/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import {Row,Col} from 'antd';
import WishDetailBtn from 'WishDetailBtn.js'
//主页心愿列表
export default class WishList extends React.Component{
    render(){
            return(
                <div>
                    <Row className="showRow">
                        <Col span={3}></Col>
                        <Col span={18}>
                            <div className="wishshow">
                                <Header/>
                                <WishContent/>

                            </div>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </div>
            )
        }
}
//心愿列表上方一行
const Header = React.createClass({
    render(){
        return(
            <div className="header">
                <img src="../static/imgs/man.jpg" />
                <span className="headerName">hcy</span>
                <WishDetailBtn/>
            </div>
        )
    }
})
//心愿内容
const WishContent = React.createClass({
    render(){
        return(
            <div className="wishcontent">
                <p>巴拉拉小魔仙，变变变~~</p>
            </div>
        )
    }
})