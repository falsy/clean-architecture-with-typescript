const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      domains: path.resolve(__dirname, "../domains/src/"),
      adapters: path.resolve(__dirname, "../adapters/src/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      const posts = []
      const comments = []

      devServer.app.use(require("express").json())

      devServer.app.get("/api/posts", (req, res) => {
        setTimeout(() => {
          res.json(posts)
        }, 200)
      })

      devServer.app.delete("/api/posts/:postId", (req, res) => {
        setTimeout(() => {
          const index = posts.findIndex((post) => post.id === req.params.postId)
          posts.splice(index, 1)
          res.json(true)
        }, 200)
      })

      devServer.app.post("/api/posts", (req, res) => {
        setTimeout(() => {
          posts.push({
            id: String(Date.now()),
            title: req.body.title,
            content: req.body.content,
            author: {
              userId: "1",
              userName: "sample"
            },
            createdAt: new Date(),
            updatedAt: new Date()
          })
          res.json(true)
        }, 200)
      })

      devServer.app.get("/api/posts/:postId", (req, res) => {
        setTimeout(() => {
          res.json(posts.find((post) => post.id === req.params.postId))
        }, 200)
      })

      devServer.app.get("/api/posts/:postId/comments", (req, res) => {
        setTimeout(() => {
          res.json(
            comments.filter((comment) => comment.postId === req.params.postId)
          )
        }, 200)
      })

      devServer.app.delete("/api/comments/:commentId", (req, res) => {
        setTimeout(() => {
          const index = comments.findIndex(
            (comment) => comment.id === req.params.commentId
          )
          comments.splice(index, 1)
          res.json(true)
        }, 200)
      })

      devServer.app.post("/api/posts/:postId/comments", (req, res) => {
        setTimeout(() => {
          comments.push({
            id: String(Date.now()),
            postId: req.params.postId,
            content: req.body.content,
            author: {
              userId: "1",
              userName: "sample"
            },
            createdAt: new Date(),
            updatedAt: new Date()
          })
          res.json(true)
        }, 200)
      })

      return middlewares
    }
  }
}
