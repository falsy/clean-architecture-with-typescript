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
    entry: "./index.ts",
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