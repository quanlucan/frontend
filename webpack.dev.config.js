const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const path = require('path');
module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',


   output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "[name].[hash].bundle.js", // string
    // the filename template for entry chunks
    // publicPath: "https://s.thsi.cn/js/xiaocaishen/", // string
    // the url to the output directory resolved relative to the HTML page
    // library: "MyLibrary", // string,
    // the name of the exported library
    // libraryTarget: "umd", // universal module definition
    // the type of the exported library
    /* Advanced output configuration (click to show) */
    /* Expert output configuration (on own risk) */
  },

    // optimization:{
    //   splitChunks:{
    //     chunks: 'all'
    //   }
    // }

   // devServer: {
   //   contentBase: './dist'
   // }
});
