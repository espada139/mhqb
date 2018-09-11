import {observable} from 'mobx';
class TopInfo{
    @observable navTabs = [
        {
            id:"home",
            title:"首页"
        },
        {
            id:"cartoon",
            title:"漫画"
        },
        {
            id:"animation",
            title:"动画"
        }
    ]

    @observable currentNavTabId = "home";

    constructor(){
    }
}

export {TopInfo};