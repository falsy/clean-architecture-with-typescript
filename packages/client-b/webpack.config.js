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
    compress: true,
    port: 3100,
    historyApiFallback: true
  }
}
