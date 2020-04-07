const Koa = require('koa');
const Router = require('koa-router');
// const views = require('koa-views');
const ejs = require('koa-ejs');
const path = require('path');
const app = new Koa();

// app.use(
//   views(path.resolve(__dirname, 'template'), {
//     extension: 'ejs'
//   })
// );
ejs(app, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});
const router = new Router();
router.get('/', async cxt => {
  await cxt.render('index', {
    title: 'ssr',
    list: [
      {
        name: 'ldy',
        num: 1
      },
      {
        name: 'ldy2',
        num: 2
      }
    ]
  });
});
app.use(router.routes());
app.listen(3002);
