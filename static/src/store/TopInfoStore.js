import {observable} from 'mobx';
import {TopInfo} from "../model/TopInfo";

class TopInfoStore{
    TAG = "TopInfoStore";
    topInfo = new TopInfo();

    constructor(){
        console.log("topinfostore constructor");
    }

    onNavItemClickHandle(id){
        console.log("onNavItemClickHandle id="+id);
        this.topInfo.currentNavTabId = id;
    }
}

export {TopInfoStore}