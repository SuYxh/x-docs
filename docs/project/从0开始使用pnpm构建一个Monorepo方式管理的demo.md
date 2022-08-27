## 🍍 写在前面

Monorepo这个词你应该不止一次听说了，像Vue3、Vite、ElementPlus等优秀开源项目都是使用Monorepo的方式管理项目，且这里说到的这几个项目都是采用pnpm作为包管理工具。

这篇文章就使用pnpm构建一个简单的Monorepo方式管理的项目。

## 🍊 什么是Monorepo？什么是pnpm？

Q：什么是Monorepo？

A：Monorepo是一种项目管理方式，就是把多个项目放在一个仓库里面，可以参考神三元大佬的一篇文章：[现代前端工程为什么越来越离不开 Monorepo?](https://juejin.cn/post/6944877410827370504 "https://juejin.cn/post/6944877410827370504")，这篇文章中介绍了Monorepo的概念、收益以及MulitRepo的弊端。

Q：什么是pnpm？

A：pnpm就是一个包管理工具，原生支持Monorepo，比npm和yarn更快一些，其他的可以参考[官网](https://link.juejin.cn/?target=https%3A%2F%2Fpnpm.io%2Fzh%2F "https://pnpm.io/zh/")和神三元大佬的另一篇文章：[为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://juejin.cn/post/6932046455733485575 "https://juejin.cn/post/6932046455733485575")

## 🍌 搞一个Monorepo的demo玩玩

现在我们就开始使用pnpm来构建一个Monorepo，在正事开始之前，你先需要保证你的电脑中具有Node.js，我的版本的是`16.9.0`。

首先你需要有pnpm这个工具，安装的话可以从官网找方法，或者直接使用npm安装，命令如下：

```
npm i pnpm -g
```

现在我们开始搞事情。

第一步，创建一个项目的根目录，这里就叫`monorepo-demo`，咋创建都可，这里使用的是命令：

```
mkdir monorepo-demo
```

第二步，初始化`package.json`，这个没啥说的，命令如下：

```
pnpm init
```

这里我对内容做了一点修改，`package.json`的内容如下：

```
{
  "name": "monorepo-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "ywanzhou",
  "license": "MIT"
}
```

这里我主要添加了一个`type`字段，这里我使用ESModule模块化规范。

第三步，创建`pnpm-workspace.yaml`文件，这个文件定义了工作空间的根目录，内容如下：

```
packages:
  - 'packages/*'
```

现在我们就可以在`packages`中创建多个项目了，目录结构如下：

```
monorepo-demo
├── package.json
├── packages
│   ├── components
│   │   ├── index.js
│   │   └── package.json
│   ├── core
│   │   ├── index.js
│   │   └── package.json
│   ├── utils
│   │   ├── index.js
│   │   └── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

第四步，编写每个项目的`package.json`，其实主要是编写一下名称，方便以后使用，这里我的如下：

```
{
  "name": "@packages/components",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "ISC",
  "dependencies": {}
}
```

剩余的两个名称分别为`@packages/core`和`@packages/utils`。

其实到这基本工作就准备好了，现在介绍一下如何安装依赖，如何在packageA中引用packageB。

### 🍋 安装依赖

就这个demo来说，我们如果在根目录下安装依赖的话，这个依赖可以在所有的packages中使用，如果我们需要为具体的一个package安装依赖怎么办？

cd到package的所在目录嘛？漏，大漏特漏，我们可以通过下面这个命令：

```
pnpm --filter <package_selector> <command>
```

例如我们需要在`@packages/components`安装[lodash](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Flodash "https://www.npmjs.com/package/lodash")，命令如下：

```
pnpm -F @packages/components add lodash
```

> `-F`等价于`--filter`

现在我们在往`@packages/utils`中安装一个`dayjs`，命令如下：

```
pnpm --filter @packages/utils add dayjs
```



### 🍋 移除依赖

```
pnpm -F @packages/components remove lodash
```



### 🍌 packageA中引用packageB

现在我们就来实现package间的相互引用，首先我们在`@packages/utils/index.js`中写入如下内容：

```js
import dayjs from 'dayjs'
export function format(time, f = 'YYYY-MM-DD') {
  return dayjs(time).format(f)
}
```

然后我们执行如下命令：

```js
pnpm -F @packages/components add @packages/utils@*
```

这个命令表示在`@packages/components`安装`@packages/utils`，其中的`@*`表示默认同步最新版本，省去每次都要同步最新版本的问题。

安装完成后`@packages/components/package.json`内容如下：

```json
{
  "name": "@packages/components",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "ISC",
  "dependencies": {
    "@packages/utils": "workspace: *",
    "lodash": "^4.17.21"
  }
}
```

然后我们在`@packages/components/index.js`写入如下内容：

```js
import { format } from '@packages/utils'
console.log(format(new Date()))
```

然后我们在项目根目录运行如下命令

```js
node packages/components
```

即可打印出当前的日期。

## 🍍 写在最后

到这这篇文章就结束了，文中的内容比较简答，可以说仅仅是Monorepo的入门，毕竟只有，入门之后才能继续深入学习嘛。

> https://developer.aliyun.com/article/950982#slide-7