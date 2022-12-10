const HTMLWeebPackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  module: {
    rules: [{ 
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/,
      options: {
        configFile: path.resolve(__dirname, "./tsconfig.json")
      }
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}