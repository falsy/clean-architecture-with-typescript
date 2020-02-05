const dotenv = require('dotenv');
const webpack = require('webpack');
const HTMLWeebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = (env, options) => {

  dotenv.config({
    path: `./env/${options.stage || 'local'}.env`
  });

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
        { test: /\.tsx?$/, loader: "babel-loader" },
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
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
          createAt: new Date().getTime()
        }, {
          id: 2,
          author: 'falsy',
          content: 'world',
          createAt: new Date().getTime()
        }];

        app.get('/boards', (req, res) => {
          res.json({
            results: {
              list: boards
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
    },
    plugins: [
      new HTMLWeebPackPlugin({
        template: "./src/frameworks/web/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: `style.css`
      }),
      new webpack.DefinePlugin({
        'process.env.STAGE': JSON.stringify(process.env.STAGE),
        'process.env.API_ORIGIN': JSON.stringify(process.env.API_ORIGIN)
      }),
      new webpack.EnvironmentPlugin(['STAGE', 'API_ORIGIN'])
    ]
  }
};