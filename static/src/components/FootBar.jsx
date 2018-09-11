import React, {Component} from 'react';
import {Layout} from 'antd';

import styles from '../assert/style/FootBar.css';

const {Footer} = Layout;

class FootBar extends Component {

    render() {
        return (
            <Layout>
                <Footer>
                    <div className={styles.footBarContainer}>
                        <div className={styles.footBarContent}>
                            <p className={styles.footBarCopyRight}>漫画情报 ©2018 Created by 小菜</p>
                        </div>
                    </div>
                </Footer>
            </Layout>
        )
    }

}

export {FootBar};