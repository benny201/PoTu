/**
 * Created by benny on 17/3/5.
 */
import React from 'react';
import {Row, Col} from 'antd';


export default class Footer extends React.Component {

    render() {
        return (
            <footer >
                <Row>
                    <Col span={24} className="footer">
                        &copy;&nbsp;2017 哈哈哈哈哈哈 All Rights Reserved.
                    </Col>
                </Row>
            </footer>

        );


    };
}
