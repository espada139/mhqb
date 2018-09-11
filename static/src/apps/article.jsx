import React, {Component} from 'react';
import {ArticleContainer} from '../containers/article';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class App extends Component {

    constructor(props){
        super(props);
        console.log('app article staticProps='+window.staticProps.id);
    }

    render() {

        return (
            <LocaleProvider locale={zhCN}>
                <ArticleContainer store={{id:window.staticProps.id}} />
            </LocaleProvider>
        );

    }
}

export {App};