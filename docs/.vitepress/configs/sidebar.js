const { getPath } = require('./utils')

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/framework/')]: getFrameworkSidebar(),
  [getPath('/basic/')]: getBasicSidebar()
}


function getFrameworkSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/framework/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/framework/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/framework/modal'
        },
        {
          text: 'Tag 标签',
          link: '/framework/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/framework/vue'
        },
        {
          text: 'Vue Script',
          link: '/framework/vue-script'
        }
      ]
    }
  ]
}

function getBasicSidebar() {
  return [
    {
      text: '指南',
      children: [
        {
          text: '文档1',
          link: '/basic/button'
        },
        {
          text: '文档2',
          link: '/basic/modal'
        }
      ]
    },
    {
      text: '教程',
      children: [
        {
          text: '教程1',
          link: '/basic/button'
        },
        {
          text: '教程2',
          link: '/basic/modal'
        }
      ]
    }
  ]
}

