module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-examples' : './',
  css: { extract: false },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].filename = 'vue-examples.html'
          args[0].template = './public/vue-examples.html'
        }
        return args
      })
  }
}
