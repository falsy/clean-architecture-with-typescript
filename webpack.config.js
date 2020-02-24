const HTMLWeebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = (env, options) => {
  return {
    entry: "./src/frameworks/web/index.tsx",
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }, 'sass-loader']
        },
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: { 
        "@adapters": path.resolve(__dirname, "src/adapters/"),
        "@domains": path.resolve(__dirname, "src/domains/"),
        "@frameworks": path.resolve(__dirname, "src/frameworks/"),
        "@interfaces": path.resolve(__dirname, "src/interfaces/"),
        "@presenters": path.resolve(__dirname, "src/adapters/presenters/")
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
      }),
      new MiniCssExtractPlugin({
        filename: `style.css`
      })
    ],
    devServer: {
      historyApiFallback: true,
      setup(app) {
        var bodyParser = require('body-parser');    
        app.use(bodyParser.json());

        let autoInc = 3;
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
          content: 'comment',
          createAt: new Date()
        }, {
          id: 2,
          boardId: 2,
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

        app.get('/boards/:id/comments', (req, res) => {
          const id = req.params.id;
          const idx = comments.findIndex(comment => comment.id === Number(id));
          
          res.json({
            results: {
              list: comments[idx]
            }
          });
        });

        app.post('/boards', bodyParser.json(), (req, res) => {
          const { author, content } = req.body;
          boards.push({
            id: autoInc,
            author,
            content,
            createAt: new Date().getTime()
          });
          autoInc += 1;
          res.send(true);
        });
      
        app.post('/login', (req, res) => {
          res.json({
            results: {
              token: 'token...'
            }
          });
        });
      }
    }
  }
};