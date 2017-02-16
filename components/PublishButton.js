/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import { Button } from 'antd';
import WishFillIn from 'WishFillIn.js';
//按钮，发布心愿
export default class PublishButton extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
        };
        [
            'onClick',
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(){
        this.setState({
            show: !this.state.show,
        });
    }

    render(){
        return (
            <div className="code-box-demo-wrapper">
                <p className="buttons">
                    <Button type="Default" onClick={this.onClick}>发布心愿</Button>
                </p>
                <Animate
                    component=""
                    transitionName="fade"
                >
                    {
                        this.state.show ?
                            <WishFillIn/> : null}
                </Animate>
            </div>
        );
    }
}