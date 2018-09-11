const Router = require('koa-router');

const apiController = require('../controller/api');

var router = new Router();

const api = router.get('/getComics',apiController.getComics)
    .get('/getRecommendNews', apiController.getRecommendNews)
    .get('/getRecentUpdates', apiController.getRecentUpdates)
    .get('/getRecommendCartoons', apiController.getRecommendCartoons)
    .get('/getArticle/:id', apiController.getArticle)
    .get('/getAnimations', apiController.getAnimations);

module.exports = api;