import React, {Component} from 'react';
import {IndexContainer} from '../containers/index';
import {IndexStore} from '../store/IndexStore';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class App extends Component{

    indexStore = new IndexStore();

    render(){
        console.log("app showcard="+this.indexStore.showCard.showCards);
        return(
            <LocaleProvider locale={zhCN}>
                <IndexContainer store={this.indexStore} />
            </LocaleProvider>
        );
    }
}


export {App};