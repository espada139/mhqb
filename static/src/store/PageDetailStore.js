import {PageDetail} from '../model/PageDetail';
import {get} from '../common/net/request';
import {exp} from "../common/net/urls";

class PageDetailStore{

    pageDetail = new PageDetail();

    constructor(){
        this.pageDetail.detail = {
            title : '',
            author : '',
            content : '',
            images : '',
            category : 0,
            post_time : 0
        };
    }

    loadPageDetail(id){
        var pageUrl = exp.ApiGetArticle + id;

        get(pageUrl,(result) => {
            if (result !== null && result.status === 1 && result.data !== null && result.data.article !== null) {
                Object.assign(this.pageDetail.detail, {
                    title : result.data.article.title,
                    author : result.data.article.author,
                    content : result.data.article.content,
                    images : result.data.article.images,
                    category : result.data.article.category,
                    post_time : result.data.article.post_time
                });
            }
        });
    }

}

export {PageDetailStore};