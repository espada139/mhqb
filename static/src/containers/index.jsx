import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Pagination,Icon,Layout,Carousel,Card,List,Divider} from 'antd';
import {HeadBar} from '../components/HeadBar';
import {FootBar} from "../components/FootBar";
import {TitleBar} from '../components/TitleBar';
import {TopInfoStore} from "../store/TopInfoStore";
import mStyles from '../assert/style/Index.css';
import {topInfoStore} from "../common/data/base_data";
import {DateUtils} from '../common/utils/date-utils';

const {Content} = Layout;
const {Meta} = Card;

@observer
class IndexContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            linkState : {
                hover : false,
            }
        }
        this.props.store.loadShowCards();
        this.props.store.loadRecentUpdates();
        this.props.store.loadRecommendCartoons();
        console.log("indexcontainer showcard="+this.props.store.showCard.showCards+" recentupdate="+this.props.store.showCard.recentUpdates);
    }

    handleImgClick = (url, e) => {
        console.log("indexcontainer handleImgClick");
        window.open(url, '_blank');
    }

    handleRecentUpdateClick = (url, e) => {
        window.open(url, '_blank');
    }

    handleRecommendCartoonClick = (articleId, e) => {
        let url = "http://localhost:3000/home/article/" + articleId
        window.open(url, '_blank');
    }

    render() {
        const showCardsElement = this.props.store.showCard.showCards.map((showCard) => {
            console.log("showcardselement showcard img="+showCard.img);
            return (
                <div
                    style={styles.showCard}
                    key={showCard.id}
                >
                    <img onClick={(e) => this.handleImgClick(showCard.url,  e)} style={styles.showCardImg} src={showCard.img} />
                    <div style={styles.showCardMeta}>
                        <a className={mStyles.showCardMetaTitleLink} target='_blank' href={showCard.url}>{showCard.title}</a>
                    </div>
                </div>
            );
        })
        return (
            <div style={styles.container}>
                <HeadBar topInfoStore={topInfoStore} />
                <Content style={styles.content}>
                    <div style={styles.subContentA}>
                        <div style={styles.subContentALeft}>
                            <Carousel autoplay dot={true}>
                                {showCardsElement}
                            </Carousel>
                        </div>
                        <div style={styles.subContentARight}>
                            <p className={mStyles.recent_update_title}>即将更新</p>
                            <List
                                grid={{gutter:0,column:2}}
                                size={6}
                                dataSource={this.props.store.showCard.recentUpdates}
                                renderItem={item => (
                                    <List.Item>
                                        <div className={mStyles.recent_update_item} onClick={(e) => {this.handleRecentUpdateClick(item.url, e)}}>
                                            <img className={mStyles.recent_update_item_icon} src={item.icon} />
                                            <div className={mStyles.recent_update_item_content}>
                                                <span className={mStyles.recent_update_item_content_title}>{item.title}</span>
                                                <span className={mStyles.recent_update_item_content_num}>{item.num + "话"}</span>
                                                <span className={mStyles.recent_update_item_content_date}>{DateUtils.transDateToMD(item.updateDate)}</span>
                                            </div>
                                        </div>
                                    </List.Item>
                                )}
                            >
                            </List>
                        </div>
                    </div>
                    <Divider></Divider>
                    <div className={mStyles.subContent}>
                        <div className={mStyles.subContentLeft}>
                            <TitleBar value={{iconDefault:false,iconVisible:true,title:"漫画推荐",linkTitle:"全部",linkUrl:""}} />
                            <List
                                grid={{gutter:4,column:4}}
                                size={12}
                                dataSource={this.props.store.showCard.recommendCartoons}
                                renderItem={item => (
                                    <List.Item>
                                        <Card
                                            hoverable={true}
                                            cover={<img className={mStyles.recommendImg} src={item.img} />}
                                            onClick={(e) => {this.handleRecommendCartoonClick(item.article_id, e)}}
                                        >
                                            <Meta
                                                title={item.title}
                                            />
                                        </Card>
                                    </List.Item>
                                )}
                            >
                            </List>
                        </div>
                        <div className={mStyles.subContentRight}>
                        </div>
                    </div>
                </Content>
                <FootBar/>
            </div>
        );
    }
}

const styles = {
    container:{
        flexDirection:'column',
    },
    content:{
        padding:'65px 50px 0 50px',
        flexDirection:'column'
    },
    subContentA:{
        display:'flex',
        flexDirection:'row'
    },
    subContentALeft:{
        width:'70%'
    },
    subContentARight:{
        width:'30%'
    },
    showCard:{
        flexDirection:'column',
        width:'100%'
    },
    showCardImg:{
        width:'100%',
        height:'300px'
    },
    showCardMeta:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:'60px',
        marginTop:'-60px',
        background:'#000000',
        opacity:'0.8'
    }
}

export {IndexContainer};