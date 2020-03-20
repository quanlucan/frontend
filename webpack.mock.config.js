const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');
const path = require('path');
module.exports = merge(common, {
   // mode: 'production',
   optimization:{
      // runtimeChunk: 'single',
      // splitChunks: {
      //   cacheGroups: {
      //      vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendors',
      //       chunks: ['react']
      //      }
      //   }
      // splitChunks:{
      //   chunks: 'all'
      // }

    },
    output: {
      path: path.resolve(__dirname, "dist"), // string
      filename: "[name].bundle.js", // string
      // publicPath: "https://s.thsi.cn/js/xiaocaishen/aip08/1.0.2", // string
      
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"mork"'
            }
        }),
    ]
});