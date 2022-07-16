exports.getNodeSidebar = function () {
  return [
    {
      text: 'index',
      link: '/node/index',
    },
    {
      text: 'Egg',
      children: [
        {
          text: 'Egg实现文件上传',
          link: '/node/egg/Egg实现文件上传',
        },
      ],
    },
    {
      text: 'Sequelize',
      children: [
        {
          text: 'Sequelize简单使用',
          link: '/node/sequelize/Sequelize简单使用',
        },
      ],
    },
    {
      text: 'pm2自动部署node项目',
      link: '/node/pm2自动部署node项目',
    },
    {
      text: 'zx使用教程',
      link: '/node/zx使用教程',
    },
  ]
}
