const HTMLWeebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/frameworks/web/index.tsx",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: { 
      "@adapters": path.resolve(__dirname, "src/adapters/"),
      "@domains": path.resolve(__dirname, "src/domains/"),
      "@frameworks": path.resolve(__dirname, "src/frameworks/"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/"),
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: "./src/frameworks/web/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    setup(app) {
      var bodyParser = require('body-parser');    
      app.use(bodyParser.json());

      let boardAutoInc = 3;
      let commentAutoInc = 3;

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
      }];

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
      }];

      app.get('/boards', (req, res) => {
        res.json({
          results: {
            list: boards
          }
        });
      });

      app.get('/comments', (req, res) => {
        res.json({
          results: {
            list: comments
          }
        });
      });

      app.post('/boards', bodyParser.json(), (req, res) => {
        const { author, content } = req.body;

        boards.push({
          id: boardAutoInc,
          author,
          content,
          createAt: new Date()
        });

        boardAutoInc += 1;
        res.send(true);
      });
    
      app.post('/login', (req, res) => {
        res.json({
          results: {
            token: 'token...'
          }
        });
      });

      app.post('/boards/:boardId/comments', (req, res) => {
        const { boardId } = req.params;
        const { author, content } = req.body;

        comments.push({
          id: commentAutoInc,
          boardId,
          author,
          content,
          createAt: new Date()
        });

        commentAutoInc += 1;
        res.send(true);
      });

    }
  }
};