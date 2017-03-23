/**
 * Created by benny on 17/3/22.
 */
import React from 'react';

//ant-design
import { Card } from 'antd';
import {Row, Col} from 'antd';

export default class Item extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Row>
                    <Col span={18}>
                        <Card className="item-container">
                            <div>
                                <div>
                                    <a href="/">
                                        <img src="./src/images/logo-2.png" alt="user image"/>
                                    </a>

                                    <span>2017-03-17 16:17:51</span>
                                </div>

                                <div className="item-image">
                                    <img src="./src/images/example1.jpg" alt=""/>
                                </div>

                            </div>
                        </Card>
                        <Card className="item-container">
                            <div>
                                <div>
                                    <a href="/">
                                        <img src="./src/images/logo-2.png" alt="user image"/>
                                    </a>

                                    <span>2017-03-17 16:17:51</span>
                                </div>

                                <div className="item-image">
                                    <img src="./src/images/example1.jpg" alt=""/>
                                </div>

                            </div>
                        </Card>
                        <Card className="item-container">
                            <div>
                                <div>
                                    <a href="/">
                                        <img src="./src/images/logo-2.png" alt="user image"/>
                                    </a>

                                    <span>2017-03-17 16:17:51</span>
                                </div>

                                <div className="item-image">
                                    <img src="./src/images/example1.jpg" alt=""/>
                                </div>

                            </div>
                        </Card>
                        <Card className="item-container">
                            <div>
                                <div>
                                    <a href="/">
                                        <img src="./src/images/logo-2.png" alt="user image"/>
                                    </a>

                                    <span>2017-03-17 16:17:51</span>
                                </div>

                                <div className="item-image">
                                    <img src="./src/images/example1.jpg" alt=""/>
                                </div>

                            </div>
                        </Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                        <Card className="item-container"></Card>
                    </Col>
                    <Col span={6}>
                        <Card className="item-right-container">
                            <ul>
                                <li className="first">
                                    <div className="title">
                                        <a href="https://www.douban.com/note/611834061/">狂躁之猪</a>
                                    </div>
                                    <div className="author">
                                        泽帆的日记
                                    </div>
                                    <p>一 “依目前形态看，犯罪模型是以传销的形式排列的，延实的犯罪接头人，正是屠夫一...</p>
                                </li>

                                <li><a href="https://www.douban.com/note/611462919/">在米其林餐厅吃出虫子是什么样的一种体验？</a></li>
                                <li><a href="https://www.douban.com/note/610905210/">现在的年轻人都不看红楼梦了，这还了得？！</a></li>
                                <li><a href="https://www.douban.com/note/611882870/">一头抹香鲸的最后74小时</a></li>
                                <li><a href="https://www.douban.com/note/611657443/">金光下，一只猫的激情尬舞</a></li>
                                <li><a href="https://www.douban.com/note/611759569/">他选择留在昨天，撕开理想的真容</a></li>
                                <li><a href="https://www.douban.com/note/611238447/">阿宝的玩具</a></li>
                                <li><a href="https://www.douban.com/note/611317183/">「心理朋克」No.003 坏人坏人告诉我，你们到底要什么？</a></li>
                                <li><a href="https://www.douban.com/note/611906519/">《绝命毒师》与美国电视剧文化的索福克勒斯之怨</a></li>
                                <li><a href="https://www.douban.com/note/611888391/">莱蒙托夫：对于生活我已无所期待， 对于过去我也毫不遗憾</a></li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }


}