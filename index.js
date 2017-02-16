import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.js';
import Block from './components/Block.js';
import WishList from './components/WishList.js';
import './index.css';



ReactDOM.render(<div>
                    <Nav/>
                    <Block/>
                    <WishList/>
                </div>
, document.getElementById('root'));


