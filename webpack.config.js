const HTMLWeebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'css-loader', 'postcss-loader', 'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    before(app, server, compiler) {
      app.get('/list', function(req, res) {
        res.json({ list: [{
          id: 0,
          name: 'Earth'
        }, {
          id: 1,
          name: 'Jupiter'
        }, {
          id: 2,
          name: 'Saturn'
        }, {
          id: 3,
          name: 'Venus'
        }, {
          id: 4,
          name: 'Mercury'
        }] });
      });
    }
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
