const Router = require('koa-router');

const homeController = require('../controller/home');

var router = new Router();

const index = router.get('/',homeController.index)
    .get('/article/:id',homeController.article)
    .get('/more/:category',homeController.more)
    .get('/getComics',homeController.getComics);

module.exports = index;