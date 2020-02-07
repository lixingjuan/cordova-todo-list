/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-01-29 11:20:01
 * @copyright: Copyright (c) 2019, Hand
 */
// const webpack = require('webpack')  // 引入webpack
// const path = require("path"); // node
// const appData = require('./data.json')  //
// const seller = appData.seller

// function resolve(dir) {             // 拼接路径
//   return path.join(__dirname, dir)
// }

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      },
      sass: {
        data: `@import "@/assets/styles/general.scss";`
      }
    }
  },
  publicPath: "./",
  //这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  outputDir: "./../hello/www",
  //将打包目录指向/cordova-projec下的www
  productionSourceMap: true
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // chainWebpack(config) {
  // // 别名
  // config.resolve.alias
  //   .set('components', resolve('src/components'))
  //   .set('common', resolve('src/common'))
  //   .set('api', resolve('src/api'))

  // config.plugin('context')
  //   .use(webpack.ContextReplacementPlugin,
  //     [/moment[/\\]locale$/, /zh-cn/])
  // },
};
