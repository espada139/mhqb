import {observable} from 'mobx';

class PageDetail{
    /**
     *
     * @type {{title: string, content: string, images: string, category: number, author: string, post_time}}
     */
    @observable detail = {}
}

export {PageDetail};