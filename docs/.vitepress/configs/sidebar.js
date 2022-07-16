const { getPath } = require('./utils')
const { getProjectSidebar } = require('./sidebar/project')
const { getFrameworkSidebar } = require('./sidebar/framework');
const { getToolSidebar } = require('./sidebar/tool');
const { getBasicSidebar } = require('./sidebar/basic');

module.exports = {
  [getPath('/basic/')]: getBasicSidebar(),
  [getPath('/framework/')]: getFrameworkSidebar(),
  [getPath('/project/')]: getProjectSidebar(),
  [getPath('/tool/')]: getToolSidebar(),
  [getPath('/other/')]: 'auto',
}

