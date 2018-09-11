import {observable} from 'mobx';

class MoreInfo {

    /**
     *
     * @type [{id: string, title: string, description: string, thumbUrl: string, url: string}]
     */
    @observable comics = [
    ];

}

export {MoreInfo};