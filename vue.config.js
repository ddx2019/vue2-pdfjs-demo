// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  publicPath: './', // 基本路径
  // outputDir: 'dist', // 构建时的输出目录
  // assetsDir: 'static', // 放置静态资源的目录
  productionSourceMap: false
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         from: path.resolve(__dirname, 'public/pdfjs'),
  //         context: path.resolve(__dirname, 'dist/static'),
  //         ignore: ['.*']
  //       }
  //     ]
  //   })
  // ]
  // devServer: {
  //     proxy: {
  //         '/api':{
  //             target:'http://xxx.xx.com',
  //             changeOrigin:true,
  //             pathRewrite:{
  //                 '/api':''
  //             }
  //         }
  //     }
  // }
};
