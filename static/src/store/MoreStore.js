import {get} from '../common/net/request';
import {MoreInfo} from "../model/MoreInfo";
import {exp} from '../common/net/urls';
class MoreStore {

    moreInfo = new MoreInfo();

    allComic = [];
    total = 1;

    loadComics(page, pageSize) {

        if(page <= this.total) {
            this.moreInfo.comics = this.allComic.slice((page - 1) * pageSize, page * pageSize);
        }

    }

    getComics(callback) {
        get("http://localhost:3000/api/getComics", (result) => {
            console.log("MoreStore getComics status="+result.status);
            if(result.status === 1 && result.data !== null && result.data.comics !== null) {
                this.allComic = result.data.comics;
                this.total = result.data.total;
                callback(result.data.total);
            }
        })
    }

    getAnimations(page, pageSize, callback) {
        console.log("MoreStore getAnimations pageSize=" + pageSize);
        let requestUrl = exp.ApiGetAnimations + '?page=' + page + '&pagesize=' + pageSize;
        get(requestUrl, (result) => {
            console.log("MoreStore getAnimations status=" + result.status + " size=" + result.data.comics.length);
            if(result.status === 1 && result.data !== null && result.data.comics != null) {
                this.moreInfo.comics = result.data.comics;
                this.total = result.data.total;
                callback(this.total);
            }
        })
    }

}

export {MoreStore};