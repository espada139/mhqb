var http = require('http');
var httpRequest = require('../utils/net/http-request');
var mhData = require('../utils/util/mh-data');
const apiModel = require('../model/api');
const languageDefault = require('../utils/common/language');
const homeController = {
    async index(ctx) {
        let title = languageDefault.webTitle;
        await ctx.render('index',{
            title
        });
    },
    async article(ctx){
        let title = "article";
        let id=ctx.params.id;
        console.log("c home id="+ctx.params.id);
        await ctx.render('article',{
            title:title,
            id:id
        })
    },
    async more(ctx){
        let title = "more";
        let category = ctx.params.category;
        await  ctx.render('more',{
            title:title,
            category:category
        })
    },
    async getComics(ctx) {
        var resp;
        await httpRequest.getBySync("http://www.1kkk.com/manhua-rank/?t=2").then((result) => {
            var comics = mhData.getComics(result);
            console.log("home getcomics success comics size="+comics.length);
            resp = {
                status : 1,
                data : {
                    comics : comics,
                    total : comics.length
                }
            }
            console.log("home getComics resp="+JSON.stringify(resp));
            ctx.body = JSON.stringify(resp);
        }).catch((err) => {
            resp = {
                status : 0,
                error : {
                    code : err.code,
                    msg : err.msg
                }
            }
            console.log("home getComics resp="+JSON.stringify(resp));
            ctx.body = JSON.stringify(resp);
        });
    }
}

module.exports = homeController;