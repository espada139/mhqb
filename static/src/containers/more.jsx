import React, {Component} from 'react';
import {HeadBar} from "../components/HeadBar";
import {FootBar} from "../components/FootBar";
import {TitleBar} from "../components/TitleBar";
import mStyle from "../assert/style/More.css";
import {Layout,List,Card,Pagination} from 'antd';
import {TopInfoStore} from "../store/TopInfoStore";
import {MoreStore} from "../store/MoreStore";
import {post} from '../common/net/request';
import {autorun} from 'mobx';
import {observer} from 'mobx-react';
import {topInfoStore} from "../common/data/base_data";

const {Content} = Layout;
const {Meta} = Card;

@observer
class MoreContainer extends Component {

    cards = [
        {
            title : "666",
            description : "777",
            thumbUrl : "http://www.hanhande.com/upload/180403/1283574_151T3161.jpg",
            url : "http://www.ishuhui.com/cartoon/book/1"
        },
        {
            title : "666",
            description : "777",
            thumbUrl : "http://mhfm3tel.cdndm5.com/44/43855/20180804113226_180x240_24.jpg",
            url : "http://www.ishuhui.com/cartoon/book/1"
        }
    ]

    moreStore = new MoreStore();

    constructor(props) {
        super(props);
        console.log("more store category="+this.props.store.category);
        this.state = {
            current : 1,
            pageSize : 24,
            total : 0,
        };

        console.log("more store tt e=" + (this.props.store.category === 2) + " type="+typeof this.props.store.category);
        if(this.props.store.category === '1') {
            topInfoStore.topInfo.currentNavTabId = "cartoon";
            this.moreStore.getComics((total) => {
                this.setState({total : total}, () => {
                    this.moreStore.loadComics(1, this.state.pageSize);
                })
            });
        } else if(this.props.store.category === '2') {
            topInfoStore.topInfo.currentNavTabId = "animation";
            this.moreStore.getAnimations(1, this.state.pageSize, (total) => {
                this.setState({total : total}, () => {
                })
            });
        }
    }

    handlePageChange = (page,pageSize) => {
        console.log("more onPageChange page="+page+" pagesize="+pageSize);
        this.setState({current : page}, () => {
            console.log("more handlePageChange current="+this.state.current);
        });

        if(this.props.store.category === '1') {
            this.moreStore.loadComics(page,pageSize);
        } else if(this.props.store.category === '2') {
            this.moreStore.getAnimations(page, pageSize, (total) => {
            });
        }
    }

    render() {

        return (
            <div className={mStyle.container}>
                <HeadBar topInfoStore={topInfoStore} />
                <Content>
                    <div className={mStyle.content}>
                        <div className={mStyle.subContentLeft}>
                            <div className={mStyle.cardList}>
                                <TitleBar value={{iconDefault:false,iconVisible:true,title:"所有漫画",linkTitle:"",linkUrl:""}}/>
                                <List
                                    grid={{gutter: 4,xs:1, sm:2, md:3, lg:4, xl:4, xxl:6}}
                                    dataSource={this.moreStore.moreInfo.comics}
                                    pagination={{
                                        current : this.state.current,
                                        pageSize : this.state.pageSize,
                                        total : this.state.total,
                                        showQuickJumper : true,
                                        hideOnSinglePage : true,
                                        onChange : this.handlePageChange
                                    }}
                                    renderItem={item => {
                                        return (
                                            <List.Item>
                                                <Card
                                                    className={mStyle.cardItem}
                                                    hoverable={true}
                                                    cover={<img className={mStyle.cardImg} src= {item.thumbUrl} />}
                                                    onClick={(e) => {window.open(item.url, '_blank');}}
                                                >
                                                    <Meta
                                                        title={item.title}
                                                        description={item.description}
                                                        className={mStyle.cardDescription}
                                                    >
                                                    </Meta>
                                                </Card>
                                            </List.Item>
                                        )
                                    }}
                                >
                                </List>
                            </div>
                        </div>
                        <div className={mStyle.subContentRight}>
                            <div className={mStyle.addList}>
                            </div>
                        </div>
                    </div>
                </Content>
                <FootBar />
            </div>
        );

    }

}

export {MoreContainer};