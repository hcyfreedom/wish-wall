/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import Animate from 'rc-animate';
import { Button } from 'antd';
import WishDetailCard from 'WishDetailCard.js';
export default  class WishDetailBtn extends React.Component{
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
                    <Button type="Default" onClick={this.onClick} style={btn}><p style={{color:'white'}}>心愿详情</p></Button>
                </p>
                <Animate
                    component=""
                    transitionName="fade"
                >
                    {
                        this.state.show ?
                            <WishDetailCard/> : null}
                </Animate>
            </div>
        );
    }
}

var btn = {
    position:'absolute',
    width:100,
    height:35,
    backgroundColor:'#8fc31f',
    cursor:'pointer',
    borderRadius:5,
    fontSize:18,
    outline:'medium',
    right:20,
    float:'right',
    top:-30
}