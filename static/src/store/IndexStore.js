import {autorun,action} from 'mobx';
import {ShowCard} from "../model/ShowCard";
import {get} from '../common/net/request';

class IndexStore{

    showCard = new ShowCard();

    constructor(){
        this.showCard.showCards = [
            {
                id:1,
                title:"海贼王",
                img:"http://www.hanhande.com/upload/180403/1283574_151T3161.jpg",
                url:"http://www.ishuhui.com/article/post/2495"
            }
        ];
        autorun(() => {
            console.log("indexstore showcards="+this.showCard.showCards);
        })
    }

    loadShowCards(){
        get("http://localhost:3000/api/getRecommendnews", (result) => {
            if (result.status === 1 && result.data !== null && result.data.recommendNewses !== null) {
                this.showCard.showCards = result.data.recommendNewses;
            }
        })
        console.log("indexstore showcards="+this.showCard.showCards);
    }

    loadRecentUpdates() {
        get("http://localhost:3000/api/getRecentUpdates", (result) => {
            if(result.status === 1 && result.data !== null && result.data.recentUpdates !== null) {
                this.showCard.recentUpdates = result.data.recentUpdates;
            }
        })
    }

    loadRecommendCartoons() {
        get("http://localhost:3000/api/getRecommendCartoons", (result) => {
            if(result.status === 1 && result.data !== null && result.data.recommendCartoons !== null) {
                this.showCard.recommendCartoons = result.data.recommendCartoons;
            }
        })
    }

    @action
    addShowCards(){
        this.showCard.showCards.push({
            id:1,
            title:"海贼王",
            img:"http://pic01.ishuhui.com/setting/index/slide/jPRX-ZqzB8TkwQRRAd6am7nT.jpg",
            url:"http://www.ishuhui.com/article/post/2495"
        });
    }

}

export {IndexStore};