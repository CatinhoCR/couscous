const Path = require('path')
const Webpack = require('webpack')
const { merge } = require('webpack-merge')
const StylelintPlugin = require('stylelint-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    inline: true,
    hot: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new StylelintPlugin({
      files: Path.join('assets/styles', '**/*.s?(a|c)ss'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../app'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../app'),
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader?sourceMap=true',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
})
