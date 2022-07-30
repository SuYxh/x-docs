exports.getFrameworkSidebar = function () {
  return [
    {
      text: 'Vue组件',
      children: [
        {
          text: '进度条组件',
          link: '/framework/vue-component/进度条组件',
        },
        {
          text: 'Tabs 标签页',
          link: '/framework/tabs',
        },
      ],
    },
    {
      text: 'Vue文章',
      children: [
        {
          text: '最详细的 Vue3 + TypeScript 使用教程',
          link: '/framework/vue-article/最详细的 Vue3 + TypeScript 使用教程',
        },
        {
          text: 'Vue项目性能优化实战总结',
          link: '/framework/vue-article/Vue项目性能优化实战总结',
        },
      ],
    },
  ]
}
