/**
 * Created by benny on 17/3/5.
 */
import React from 'react';
import {Row, Col} from 'antd';
import { AutoComplete } from 'antd';

import { Menu, Icon } from 'antd';

function onSelect(value) {
    console.log('onSelect', value);
}

export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource: [],
            current: ''
        }
    }

    handleChange(value){
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    handleClick() {

    }

    render() {

        const { dataSource } = this.state;

        return(
            <header className="header">
                <Row type="flex" >
                    <Col span={3}></Col>
                    <Col span={2} className="header-logo">
                        <img  src="./src/images/logo.jpeg" alt="logo"/>
                    </Col>
                    <Col span={4} className="header-input">
                        {/*<AutoComplete*/}
                            {/*dataSource={dataSource}*/}
                            {/*style={{ width: 200 }}*/}
                            {/*onSelect={onSelect}*/}
                            {/*onChange={this.handleChange.bind(this)}*/}
                            {/*placeholder="input here"*/}
                        {/*/>*/}
                    </Col>
                    <Col span={3}></Col>
                    <Col span={1} className="header-col">
                        {/*<img  src="./src/images/logo-2.png" alt="logo"/>*/}
                    </Col>
                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className="header-menu"
                        >
                            <Menu.Item key="mail">
                                <Icon type="smile-o" />Basic
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="home" />Home
                            </Menu.Item>
                            <Menu.Item key="alipay">
                                <Icon type="plus-square" />+Pals
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2} className="user-image">
                        <img  src="./src/images/logo-2.png" alt="logo"/>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </header>
        );
    }
}