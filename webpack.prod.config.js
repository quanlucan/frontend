const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const path = require('path');
module.exports = merge(common, {
   // mode: 'production',
   mode: 'production',
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
      publicPath: "//s.thsi.cn/js/xiaocaishen/calendarPage/middlepage", // string
      
      // publicPath: "//s.thsi.cn/js/xiaocaishen/realactive/1.0.4", // string
      
    },

});