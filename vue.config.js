const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
   publicPath:"./",
    outputDir:"dist",
    
    assetsDir: "assets",
    chainWebpack: config => {
      config.module
      .rule("image-webpack-loader")
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use("file-loader")
      .loader("image-webpack-loader")
      .tap(() => ({
        disable: process.env.NODE_ENV !== "production"
      }))
      .end();
    
    config.resolve.alias.set('@', resolve('src'))
    // // 用cdn方式引入
    config.externals({
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'axios': 'axios',
    })
    },
    css: {
        extract: true
    }
}