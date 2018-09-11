const routers = require('./routers/index');

const Koa = require('koa');
// const Router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

app.use(bodyParser());

const staticPath = './../static';

app.use(static(path.join(__dirname,staticPath)));

app.use(views(path.join(__dirname,'./views'),{
    extension : 'ejs'
}));

app.use(async (ctx,next) => {
    console.log('[debug] app request url='+ctx.request.url);
    await next();
});

// Router.get('/',async (ctx,next) => {
//     let title = "Index";
//
//     await ctx.render('index',{
//         title
//     })
// });

// Router.get('/home/:id',async (ctx,next) => {
//     var id = ctx.params.id;
//     console.log('[debug app home id:'+id);
//     ctx.response.body = '<h1>Home${id}</h1>';
//     ctx.response.status = 404;
// });

app.use(routers.routes());
app.use(routers.allowedMethods())

app.listen(3000);
