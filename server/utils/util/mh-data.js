const crawler = require('./crawler');

const mhBaseUrl = "http://www.1kkk.com";
const mhMoreUrl = "http://www.1kkk.com/manhua-rank/?t=2";

function getComics(text) {
    var comics = [];
    var handler = crawler.getHandler(text)
    var mhList = handler('.mh-list li .mh-item');
    console.log("html"+mhList.length);
    mhList.each(function (i, elem) {
        let _this = handler(elem);
        let title = _this.children('.mh-item-detali').children('.title').text();
        let description = _this.children('.mh-item-detali').children('.bottom').children('.chapter').children('a').text();
        let url = mhBaseUrl + _this.children('.mh-item-detali').children('.bottom').children('.chapter').children('a').attr('href');
        var thumbUrl =  getThumbUrl(_this.children('.mh-cover').attr('style'));
        console.log("crawler getMhlist i="+i+" elemtext title="+title+" des="+description+" url="+url+" thumbUrl="+thumbUrl);
        comics.push({
            id : i,
            title : title,
            description : description,
            url : url,
            thumbUrl : thumbUrl
        })
    });
    return comics;
}

function getThumbUrl(url) {
    if(url != null) {
        return url.substring(url.indexOf('(') + 1,url.indexOf(')'));
    }
}

module.exports = {getComics}