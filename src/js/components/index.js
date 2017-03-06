/**
 * Created by benny on 17/3/5.
 */
import React from 'react';
import Footer from './footer';
import Header from './header';
import 'antd/dist/antd.css';

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}
