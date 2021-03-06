const { getPath } = require('./utils')

module.exports = [
  { text: '基础', link: '/basic/' },
  { text: '框架', link: '/framework/index', activeMatch: getPath('^/framework/') },
  { text: '工程化', link: '/project/' },
  { text: 'Node', link: '/node/' },
  { text: '微信相关', link: '/weixin/' },
  { text: '工具', link: '/tool/' },
  { text: '其他', link: '/other/' },
  // {
  //   text: '更新日志',
  //   link:
  //     'https://github.com/SuYxh/x-docss'
  // }
]
