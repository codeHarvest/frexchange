const webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry : [
      './client/src/index.js'
    ],
    devtool: 'inline-source-map',
    output: {
      filename : 'bundle.js',
      path: __dirname + '/dist/bundle/',
      publicPath: '/static/'
    },
    module : {
      rules : [
        {
          test : /\.(js)$/,
          exclude: /node_modules/,
          use: {loader: 'babel-loader'}
        },
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
  },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      })
  ]
}