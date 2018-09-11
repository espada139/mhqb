import {observable,autorun} from 'mobx';

class ShowCard{

    /**
     * {
     *      id:0,
     *      title:"",
     *      img:"",
     *      url:""
     *  }
     * @type {[null]}
     */
    @observable showCards = [
    ]

    /**
     * {
     *      id:0,
     *      title:"",
     *      num:"",
     *      updateDate:"",
     *      icon:"",
     *      url:""
     *  }
     * @type {[null]}
     */
    @observable recentUpdates = [
    ]

    /**
     *
     * @type {{title: string, img: string, url: string, article_id: string}}
     */
    @observable recommendCartoons = []

    constructor(){
    }
    
}

export {ShowCard};