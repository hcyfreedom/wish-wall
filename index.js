import React from 'react';
import ReactDOM from 'react-dom';
// import {Row,Col} from 'antd';
// import Animate from 'rc-animate';
import { Button } from 'antd';
import Test from './components/Test';
// import {Card} from 'antd';
// import { Input } from 'antd';
// import { DatePicker } from 'antd';
// import { Alert } from 'antd';
// import { Radio } from 'antd';
// import './index.css';



ReactDOM.render(<div>
                    <Button>antd button</Button>
                    <br /><br />
                    <Test />
                </div>
, document.getElementById('root'));


// ReactDOM.render(<WishBox url="/wish/submit" pollInterval={2000}/>, document.getElementById('root'));

/*
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
                    <Col span={6}><img src="imgs/index.png"/> </Col>
                    <Col span={12}><p className="navTitle">心愿墙</p></Col>
                    <Col span={6}><div className="publishbtn"> <PublishButton/></div></Col>
                </Row>
            </div>
        )
    }
}

//发布心愿

class PublishButton extends React.Component{
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
                            <Wishlist onWishPublish={handleWishSubmit}/> : null}
                </Animate>
            </div>
        );
    }
}

//心愿单
const Wishlist = React.createClass({
    getInitialState(){
        return {text:'',tel:''};
    },
    handleTextChange(e){
      this.setState({text:e.target.value});
    },
    handleTelChange(e){
        this.setState({tel:e.target.value});
    },

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
    },
    render(){
        return(
            <Card title="我的小心思" extra={<p onSubmit={this.handleSubmit}>发布</p>} style={{ width: 300,marginTop:10}}>
                <Input value={this.state.text} onChange={this.handleTextChange} type="textarea" placeholder="写下我的小心思~" autosize={{ minRows: 2, maxRows: 6 }} />
                <TimeSelector/>
                <Input placeholder="联系方式" value={this.state.tel} onChange={this.handleTelChange} style={{width:180,marginTop:10}} />
                <Alert message="联系方式已发生改变" type="warning" showIcon style={{marginTop:10}} className="warnIcon"/>
                <Anonymous/>
            </Card>
        )
    }
});

//时间选择器
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}
const TimeSelector = React.createClass({
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
});


//是否匿名选择
const RadioGroup = Radio.Group;
const Anonymous = React.createClass({
    getInitialState() {
        return {
            value: 1,
        };
    },
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    },
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}  style={{marginTop:10}}>
                <Radio value={1}>匿名</Radio>
                <Radio value={2}>实名</Radio>

            </RadioGroup>
        );
    },
});

//空白
const Block = React.createClass({
    render(){
        return(
            <div className="block">

            </div>
        )
    }
})
//心愿展示单
const WishShow = React.createClass({
    render(){
        var wishNodes = this.props.data.map(function (wish) {
            return(
                <div>
                    <Row className="showRow">
                        <Col span={3}></Col>
                        <Col span={18}>
                            <div className="wishshow">
                                <Header/>
                                <WishContent key={wish.id}>
                                    {wish.text}
                                </WishContent>
                            </div>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </div>
            )
        })

        return(
            <div>
                {wishNodes}
            </div>
        );
    }
})

//心愿列表上方一行
const Header = React.createClass({
    render(){
        return(
            <div className="header">
                <img src="imgs/man.jpg" />
                <span className="headerName">hcy</span>
                <WishDetail/>
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
//查看心愿详情
class WishDetail extends React.Component{
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

//心愿详情
const WishDetailCard = React.createClass({
    render(){
        return (
            <Card title="心愿详情~"  extra={<a href="#">领取</a>} style={{width: 400, marginTop: 10,zIndex:2}}>
                <p>发布者：<span>hcy</span></p>
                <p>发布时间：<span>2017-1-1 00:10:01</span></p>
                <p>截止时间：<span>2017-2-11 00:00:00</span></p>
                <p>性别：<span>女</span></p>
                <p>详情：<span>啦啦啦啦要开学了我不开心，有没有小可爱请我吃可爱多</span></p>
            </Card>
        )
    }
})

//查看详情
const ShowDetail = React.createClass({
    getInitialState:function () {
        return{

        };
    },
    componentDidMount:function () {
        $.ajax({
            url:this.props.url,
            datatype:'json',
            success:function (data) {
                alert("lll")
            }.bind(this),
        });
    },
    render:function () {
        return(
            <div>
                {this.state.response}
            </div>
        );
    }

})





const WishBox = React.createClass({
    loadWishFromServer(){
        $.ajax({
            url:this.props.url,
            datatype:'json',
            success:function (data) {
                this.setState({data:data});
            }.bind(this),
            error:function (xhr,status,err) {
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        })
    },
    handleWishSubmit(wish){
        var wishes = this.state.data;
        wish.id = Date.now();
        $.ajax({
            url:this.props.url,
            datatype:'json',
            type:'POST',
            data:wish,
            success:function (data) {
                this.setState({data:data});
            }.bind(this),
            error:function (xhr,status,err) {
                this.setState({data:wishes});
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        })
    },
    getInitialState(){
      return {data:[]}
    },
    componentDidMount(){
        this.loadWishFromServer();
        setInterval(this.loadWishFromServer,this.props.pollInterval)
    },

    render(){
        return(
            <div>
                <Test />
                <Nav/>
                <Block/>
                <WishShow data={this.state.data}/>
            </div>

        )
    }
})

*/