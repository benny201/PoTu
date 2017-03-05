/**
 * Created by benny on 17/3/5.
 */
import React from 'react';
import {Row, Col} from 'antd';

export default class Header extends React.Component{

    render() {
        return(
            <header>
                <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                </Row>
            </header>
        );
    }
}