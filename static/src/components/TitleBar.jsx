import React, {Component} from 'react';
import {Icon,Divider} from 'antd';
import styles from '../assert/style/TitleBar.css';

/**
 * 模块统一标题栏
 * value数据model {iconDefault:false,iconVisible:true,title:"漫画推荐",linkTitle:"全部",linkUrl:""}
 */

class TitleBar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.bar}>
                    {this.props.value.iconDefault ? <img className={styles.barIcon} /> : <Icon className={styles.barIcon} type={"bars"} />}
                    <p className={styles.barTitle}>{this.props.value.title}</p>
                    <a className={styles.barLink} href={this.props.value.linkUrl}>{this.props.value.linkTitle}</a>
                </div>
                <Divider className={styles.barDivider}></Divider>
            </div>
        );
    }
}

export {TitleBar};