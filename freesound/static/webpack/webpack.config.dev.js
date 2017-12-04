const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common');

module.exports = {
  devtool: 'source-map',
  entry: common.entries,
  output: common.output,
  module: {
    loaders: [
      common.loaders.jsLoader,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', common.loaders.postCssLoader],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', common.loaders.postCssLoader, 'sass-loader'],
      },
    ],
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Front page',
      filename: 'front.html',
      template: path.join(__dirname, '..', 'dev-templates/front.html'),
    }),
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    open: true,
    openPage: 'front.html',
    contentBase: path.join(__dirname, '..', 'public'),
  },
};
