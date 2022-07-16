const { getPath } = require('./utils')
const { getProjectSidebar } = require('./sidebar/project')
const { getFrameworkSidebar } = require('./sidebar/framework');
const { getToolSidebar } = require('./sidebar/tool');
const { getBasicSidebar } = require('./sidebar/basic');
const { getWeixinSidebar } = require('./sidebar/weixin');
const { getNodeSidebar } = require('./sidebar/node');

module.exports = {
  [getPath('/basic/')]: getBasicSidebar(),
  [getPath('/framework/')]: getFrameworkSidebar(),
  [getPath('/project/')]: getProjectSidebar(),
  [getPath('/node/')]: getNodeSidebar(),
  [getPath('/weixin/')]: getWeixinSidebar(),
  [getPath('/tool/')]: getToolSidebar(),
  [getPath('/other/')]: 'auto',
}

