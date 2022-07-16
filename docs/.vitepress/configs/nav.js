const { getPath } = require('./utils')

module.exports = [
  { text: '基础', link: '/basic/' },
  { text: '框架', link: '/framework/vue', activeMatch: getPath('^/framework/') },
  { text: '工程化', link: '/project/' },
  {
    text: '更新日志',
    link:
      'https://github.com/SuYxh/x-docss'
  }
]
