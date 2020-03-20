const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: {
    // index:"./index.js",
    test:"./test.js",
    // testCopy:'./testCopy.js',
    // guidePage:'./guidePage.js',
    // createGamePage:'./createGamePage.js',
    // joinGamePage:'./joinGamePage.js',
    // gameDetail:'./gameDetail.js',
    // homeGamePage:'./homeGamePage.js',
    // middlePage:'./middlePage.js'
    // secretKeyPage:'./secretKeyPage.js'
  },


  

 
  output: {
    
    path: path.resolve(__dirname, "dist"), // string
    
    filename: "[name].[contenthash].bundle.js", // string
    
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      // {
      //   test: /\.m?js|jsx$/, 
      //   loader: 'babel-loader', // ES6
      //   exclude: /(node_modules|libs|ppweb\\libs\\webpack|ppweb\/libs\/webpack)/
      // },
      {
        test: /\.m?js|jsx$/,
        // include: [
        //   path.resolve(__dirname, "app")
        // ],
        exclude: /(node_modules|bower_components)/,

        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },

      },

        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader',"sass-loader"],
        },
   
    ],
    /* Advanced module configuration (click to show) */
  },
 
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    // assetFilter: function(assetFilename) {
    //   // Function predicate that provides asset filenames
    //   return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    // }
  },

  //  devServer: {
  //    contentBase: './dist',
  //    // hot: true,
  //    // hot: true,
  //    // index: 'interviewList.html',
  //     openPage: 'index.html',

  //  },

  
  target: "web", // enum
 
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "commons",
                chunks: 'all',
                minChunks: 20,
                priority: -10
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: 'all',
              minChunks: 20,
              priority: -20
            }
        }
    }
},

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '首页',
      template:'index.html',
      chunks:['commons','vendor','runtime','test'],
      filename: path.resolve(__dirname, "dist")+'/index.html',
    }),
  
    // new HtmlWebpackPlugin({
    //   title: '首页',
    //   template:'index.html',
    //   chunks:['commons','vendor','runtime','index'],
    //   filename: path.resolve(__dirname, "dist")+'/index.html',
    // }),
  

    // new HtmlWebpackPlugin({
    //   title: '引导页',
    //   template:'guidePage.html',
    //   chunks:['commons','vendor','runtime','guidePage'],
    //   filename: path.resolve(__dirname, "dist")+'/guidePage.html',
    // }),
    // new HtmlWebpackPlugin({
    //   title: '创建比赛页',
    //   template:'createGamePage.html',
    //   chunks:['commons','vendor','runtime','createGamePage'],
    //   filename: path.resolve(__dirname, "dist")+'/createGamePage.html',
    // }),
    // new HtmlWebpackPlugin({
    //   title: '加入比赛页',
    //   template:'joinGamePage.html',
    //   chunks:['commons','vendor','runtime','joinGamePage'],
    //   filename: path.resolve(__dirname, "dist")+'/joinGamePage.html',
    // }),
    // new HtmlWebpackPlugin({
    //   title: '加入比赛页',
    //   template:'gameDetail.html',
    //   chunks:['commons','vendor','runtime','gameDetail'],
    //   filename: path.resolve(__dirname, "dist")+'/gameDetail.html',
    // }),
 

      // new HtmlWebpackPlugin({
      //     title: '实盘竞技',
      //     template:'homeGamePage.html',
      //     chunks:['commons','vendor','runtime','homeGamePage'],
      //     filename: path.resolve(__dirname, "dist")+'/homeGamePage.html',
      // }),
    //   new HtmlWebpackPlugin({
    //     title: '实盘竞技',
    //     template:'middlePage.html',
    //     chunks:['runtime','middlePage'],
    //     filename: path.resolve(__dirname, "dist")+'/middlePage.html',
    // }),
    //   new HtmlWebpackPlugin({
    //     title: '实盘竞技',
    //     template:'secretKeyPage.html',
    //     chunks:['runtime','secretKeyPage'],
    //     filename: path.resolve(__dirname, "dist")+'/secretKeyPage.html',
    // }),

  ],

}