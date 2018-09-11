import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {autorun} from 'mobx';
import {Row,Col,Layout,Menu} from 'antd';
import mStyles from '../assert/css/HeadBar.css';
import {exp} from '../common/net/urls';

const {Header} = Layout;

@observer
class HeadBar extends Component {

    state = {
        currentKey : "home"
    }

    constructor(props){
        super(props);
        autorun(() => {
            console.log("headerbar navId="+this.props.topInfoStore.topInfo.currentNavTabId)
        });
    }

    handleMenuClick = (e) => {
        this.setState({currentKey:e.key});
        this.props.topInfoStore.onNavItemClickHandle(e.key);
        var url = exp.PathHome;

        if(e.key === "home") {
            url = exp.PathHome;
        } else if (e.key === "cartoon") {
            url = exp.PathMore + "1";
        } else if (e.key === "animation") {
            url = exp.PathMore + "2";
        }

        document.location.href = url;
    }

    render() {
        const navTabItems = this.props.topInfoStore.topInfo.navTabs.map((navTab)=> <Menu.Item key={navTab.id}>{navTab.title}</Menu.Item>);

        return (
            <Layout>
                <Header style={styles.nav_header}>
                    <div className={mStyles.logo}>
                        <img className={mStyles.logo_icon} src={require("../assert/img/640-2.png")} />
                    </div>
                    <Menu
                        style={styles.nav_menu}
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[this.props.topInfoStore.topInfo.currentNavTabId]}
                        onClick={this.handleMenuClick}
                    >
                        {navTabItems}
                    </Menu>
                </Header>
            </Layout>
        );
    }
}

const styles = {
    nav_header:{
        position:'fixed',
        zIndex:1,
        width:'100%',
    },
    nav_menu:{
        lineHeight: '64px',
    }
}

export {HeadBar};