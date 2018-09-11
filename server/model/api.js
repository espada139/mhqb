const model = require('../utils/db/model');

function addRecommendNews(recommendNews) {
    let recommendNewsAddHandler = model.RecommendNews.create({
        title : recommendNews.title,
        img : recommendNews.img,
        url : recommendNews.url
    });

    return recommendNewsAddHandler;
}

function queryAllRecommendNews() {
    let recommendNewsHandler = model.RecommendNews.findAll({limit : 5});

    return recommendNewsHandler;
}

function addRecentUpdates(recentUpdates) {
    let recentUpdatesAddHandler = model.RecentUpdates.create({
        title : recentUpdates.title,
        num : recentUpdates.num,
        updateDate : recentUpdates.updateDate,
        icon : recentUpdates.icon,
        url : recentUpdates.url
    });

    return recentUpdatesAddHandler;
}

function queryRecentUpdates() {
    let recentUpdateQueryHandler = model.RecentUpdates.findAll({limit : 8});

    return recentUpdateQueryHandler;
}

function addRecommendCartoons(recommendCartoons) {
    let recommendCartoonsAddHandler = model.ApiModels.recommendCartoons.create({
        title : recommendCartoons.title,
        img : recommendCartoons.img,
        url :recommendCartoons.url,
        article_id : recommendCartoons.article_id
    });

    return recommendCartoons;
}

function queryRecommendCartoons() {
    let recommendCartoonsQueryHandler = model.ApiModels.recommendCartoons.findAll({limit : 12});

    return recommendCartoonsQueryHandler;
}

function addArticle(article) {
    let articleAddHandler = model.ApiModels.article.create({
        title : article.title,
        content : article.content,
        images : article.images,
        category : article.category,
        author : article.author,
        post_time : article.post_time
    });

    return articleAddHandler;
}

function queryArticleById(articleId) {
    let articleQueryHandler = model.ApiModels.article.findOne({
        where : {
            id : articleId
        }
    });

    return articleQueryHandler;
}

var exp = {
    addRecommendNews : addRecommendNews,
    queryAllRecommendNews : queryAllRecommendNews,
    addRecentUpdates : addRecentUpdates,
    queryRecentUpdates : queryRecentUpdates,
    addRecommendCartoons : addRecommendCartoons,
    queryRecommendCartoons : queryRecommendCartoons,
    addArticle : addArticle,
    queryArticleById : queryArticleById
}

module.exports = exp;