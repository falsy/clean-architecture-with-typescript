const koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const Router = require('koa-router');

const run = async () => {
  const app = new koa();
  const router = new Router();

  app.use(cors());
  app.use(logger());
  app.use(koaBody());

  router.get('/boards', (ctx, next) => {
    ctx.body = {
      results: {
        list: [{
          id: 1,
          author: 'falsy',
          content: 'hello',
          createAt: new Date().getTime()
        }, {
          id: 2,
          author: 'falsy',
          content: 'world',
          createAt: new Date().getTime()
        }]
      }
    };
  });

  app.use(router.routes());

  const port = 7777;
  const server = await app.listen(port);
  console.log(`server run ${port}`);
  return server;
}

run();