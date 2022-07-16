const { getPath } = require('./utils')

module.exports = [
  { text: '基础', link: '/basic/' },
  { text: '框架', link: '/components/button', activeMatch: getPath('^/components/') },
  { text: '工程化', link: '/api/' },
  {
    text: '更新日志',
    link:
      'https://github.com/SuYxh/x-docss'
  }
]
