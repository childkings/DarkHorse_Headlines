const path = require('path')
const themePath = path.join(__dirname, './src/assets/theme.less')
module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          /* 'text-color': '#111',
          'border-color': '#eee',
          'tabbar-background-color': 'red' */
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }

      }
    }
  }
}
