const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('@koa/router')
const cors = require('@koa/cors')

const app = new koa()

app.use(bodyParser())
app.use(cors())

const router = new Router()

let boardAutoInc = 3

const boards = [{
  id: 1,
  author: 'falsy',
  content: 'hello',
  createAt: new Date()
}, {
  id: 2,
  author: 'falsy',
  content: 'world',
  createAt: new Date()
}]

const comments = [{
  id: 1,
  boardId: 1,
  author: 'falsy2',
  content: 'comment',
  createAt: new Date()
}, {
  id: 2,
  boardId: 2,
  author: 'falsy2',
  content: 'comment2',
  createAt: new Date()
}]

router.post('/login', (ctx) => {
  ctx.body = {
    token: 'token...'
  }
})

router.get('/boards', (ctx) => {
  ctx.body = {
    boards
  }
})

router.get('/comments', (ctx) => {
  ctx.body = {
    comments
  }
})

router.post('/boards', (ctx) => {
  const { author, content } = ctx.request.body

  boards.push({
    id: boardAutoInc,
    author,
    content,
    createAt: new Date()
  })

  boardAutoInc += 1
  ctx.body = true
})


app.use(router.routes())

const port = 7777

app.listen(port)
console.log('server start port:' + port)