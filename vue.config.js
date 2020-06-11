module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'notwork': '@/notwork',
        'views': '@/views'
      }
    }
  }
}