/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import { Radio } from 'antd';
//是否匿名
const RadioGroup = Radio.Group;
export default class Anonymous extends React.Component{

    getInitialState() {
        return {
            value: 1,
        };
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}  style={{marginTop:10}}>
                <Radio value={1}>匿名</Radio>
                <Radio value={2}>实名</Radio>

            </RadioGroup>
        );
    }
};