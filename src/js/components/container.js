/**
 * Created by benny on 17/3/22.
 */
import React from 'react';
import {Row, Col} from 'antd';

//items
import Item from './item';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Item/>
                    </Col>
                    <Col span={3}></Col>

                </Row>
            </div>
        )
    }
}