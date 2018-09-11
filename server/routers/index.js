// import {home} from './home';
const home = require('./home');
const api = require('./api');
const Router = require('koa-router');

var routers = new Router();

routers.use('/home',home.routes(),home.allowedMethods());
routers.use('/api',api.routes(), api.allowedMethods());

module.exports = routers;

