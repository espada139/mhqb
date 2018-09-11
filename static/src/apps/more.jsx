import React, {Component} from 'react';
import {MoreContainer} from "../containers/more";
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class More extends Component {

    constructor(props){
        super(props);
        console.log('app more staticProps category='+window.staticProps.category);
    }

    render() {

        return (
            <LocaleProvider locale={zhCN}>
                <MoreContainer store={{category:window.staticProps.category}}/>
            </LocaleProvider>
        )

    }

}

export {More};