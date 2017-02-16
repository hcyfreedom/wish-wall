/**
 * Created by Acer on 2017/2/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
//时间选择器
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
} 
export default class TimeSelector extends React.Component{
    render(){
        return(
            <div style={{marginTop:10}}>
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="心愿有效时间"
                    onChange={onChange}
                />
            </div>
        )
    }
};