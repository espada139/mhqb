import React, {Component} from 'react';
import {Layout,Carousel} from 'antd';
import {HeadBar} from "../components/HeadBar";
import {FootBar} from "../components/FootBar";
import {TopInfoStore} from "../store/TopInfoStore";
import {PageDetailStore} from "../store/PageDetailStore";
import {get} from '../common/net/request';
import styles from '../assert/style/Article.css';
import {autorun} from 'mobx';
import {observer} from 'mobx-react';

const {Content} = Layout;

@observer
class ArticleContainer extends Component {

    pageDetailStore = new PageDetailStore();

    constructor(props){
        super(props);
        console.log("articlecontainer page id="+this.props.store.id);
        // get("http://api.ishuhui.com/article/post/ver/69243370/id/2583.json",{
        //     "Accept" : "application/json"
        // });

        this.pageDetailStore.loadPageDetail(this.props.store.id);
        autorun(() => {
            console.log("articlecontainer article title="+this.pageDetailStore.pageDetail.detail.title);
        })

    }

    render() {

        var imageBlock = this.pageDetailStore.pageDetail.detail.images.split(',').map((image, index) => {
            console.log("article image="+image);
            return (
                <div className={styles.articleMainImgFrame} key={index}>
                    <img className={styles.articleMainImg} src={image} />
                </div>
            );
        });

        return(
            <div>
                <HeadBar topInfoStore={new TopInfoStore()}/>
                <Content>
                    <div className={styles.content}>
                        <div className={styles.subContentLeft}>
                            <div className={styles.articleContent}>
                                <h1 className={styles.articleTitle}>{this.pageDetailStore.pageDetail.detail.title}</h1>
                                <div className={styles.articleMain}>
                                    <div className={styles.articleMainImgs}>
                                        <Carousel
                                            autoplay={true}
                                            dots={true}
                                            vertical={true}
                                        >
                                            {imageBlock}
                                        </Carousel>
                                    </div>
                                    <div className={styles.articleMainText} dangerouslySetInnerHTML={{__html : this.pageDetailStore.pageDetail.detail.content}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subContentRight}>
                        </div>
                    </div>
                </Content>
                <FootBar/>
            </div>
        );

    }

}

export {ArticleContainer};