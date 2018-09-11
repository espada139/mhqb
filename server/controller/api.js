var http = require('http');
var httpRequest = require('../utils/net/http-request');
var httpsRequest = require('../utils/net/https-request');
var mhData = require('../utils/util/mh-data');
var apiUrls = require('../utils/common/urls');
var apiModel = require('../model/api');
const apiController = {
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
    },
    async getRecommendNews(ctx) {
        var recommendNewses = await apiModel.queryAllRecommendNews();
        console.log("getRecommendNews size="+recommendNewses.length);
        var resp = {
            status : 1,
            data : {
                recommendNewses : recommendNewses,
            }
        }
        ctx.body = JSON.stringify(resp);
    },
    async getRecentUpdates(ctx) {
        var recentUpdates = await apiModel.queryRecentUpdates();
        var resp = {
            status : 1,
            data : {
                recentUpdates : recentUpdates
            }
        };

        ctx.body = JSON.stringify(resp);
    },
    async getRecommendCartoons(ctx) {
        var recommendCartoons = await apiModel.queryRecommendCartoons();
        var resp = {
            status : 1,
            data : {
                recommendCartoons : recommendCartoons
            }
        };

        ctx.body = JSON.stringify(resp);
    },
    async getArticle(ctx) {
        var articleId = ctx.params.id;
        var article = await apiModel.queryArticleById(articleId);
        var resp = {
            status : 1,
            data : {
                article : article
            }
        }

        ctx.body = JSON.stringify(resp);
    },
    async getAnimations(ctx) {
        console.log("controller api getAnimations query="+ctx.request.query.page);
        var page = ctx.request.query.page;
        var pageSize = ctx.request.query.pagesize;
        var pageOffset = (page - 1) * pageSize;
        var url = apiUrls.exp.ApiOutAnimation + "page=" + page + "&pagesize=" + pageSize;
        var resp;
        await httpsRequest.getBySync(url).then((result) => {
            var resultJson = JSON.parse(result);
            console.log("controller api getAnimations result="+resultJson.code);
            if (resultJson.code === 0 && resultJson.result.data !== null) {
                var comics = resultJson.result.data.map((item,index) => {
                    var comic = {
                        id: pageOffset,
                        title: item.title,
                        description: item.index_show,
                        thumbUrl: item.cover,
                        url: item.link
                    }
                    return comic;
                });
                resp = {
                    status : 1,
                    data : {
                        comics : comics,
                        total : resultJson.result.page.total
                    }
                }
                ctx.body = JSON.stringify(resp);
            } else {
                resp = {
                    status : 1,
                    data : null
                }
                ctx.body = JSON.stringify(resp);
            }
        }).catch((err) => {
            resp = {
                status : 0,
                error : {
                    code : err.code,
                    msg : err.msg
                }
            }
            ctx.body = JSON.stringify(resp);
        })
    }
}

module.exports = apiController;