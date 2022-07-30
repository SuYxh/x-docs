你知道你的项目的首次加载时间需要多久吗？你有给自己的项目做过性能优化吗？

据统计53%的用户不会等待超过3秒就会关闭掉网页，所以对于项目的性能优化尤为的重要。

闲话少说，今天我们来详细了解如何优化Vue项目的性能。

## 分析项目bundle大小

打包后的文件大小直接影响我们访问的加载速度，所以我们要知道哪些打包文件存在性能问题。

查看bundle大小主要有两种方法

### report

使用`webpack-bundle-analyzer`来生成一个报告，可以清晰直观的看出每个打包后文件的大小

我们在Vue项目的package.json文件中加入下面的命令

```json
"build-report": "vue-cli-service build --report"
```

然后，在命令行中运行

```bash
npm run build-report
```

等待一段时间后，会在dist文件中生成一个report.html文件，我们在浏览器中打开它

![](https://pic4.zhimg.com/v2-e3ccf46ccf4ddcd3e00ff26dc69dc01b_r.jpg)

### build

在本地使用build打包命令

```text
npm run build
```

然后看终端的输出信息

![](https://pic4.zhimg.com/v2-ba075b82d1a3577fb0bd5ee9a30b5027_r.jpg)

可以看到主要的文件从大到小的排序

在查看完关键的信息后，我们可以做一些优化手段

## 1\. 懒加载模块

比如Echarts图标的包和编辑器的包，都是很大的有45百kb，但并不是所有的页面都需要图表和编辑器，只有少量页面需要，所以我们可以把Echarts和编辑器放到需要的页面中去加载，不要放到全局里面，这样其他页面就省去加载他们的时间。

要查看浏览器加载文件的顺序，我们打开浏览器的开发者工具，点击Network，勾选上Disable cache，这样不会从浏览器的缓存中去加载文件，然后重新去刷新页面，可以看到所有文件的加载顺序

![](https://pic1.zhimg.com/v2-69b18d29a72047bd8f55b25e2b559708_r.jpg)

一般我引入模块是这样写

```js
// demo.js
const Demo = {
  testDemo: function () {
    console.log("这是DEMO")
  }
}
export default Demo

// app.js
import Demo from './demo.js'
Demo.testDemo()
```

使用懒加载这样写

```js
// app.js
const getDemo = () => import('./demo.js')

// 延迟加载
getDemo()
  .then({ testDemo } => testDemo())
```

懒加载能够非常好的解决bundle过大的问题，把一些用户并不常用的功能放到懒加载里，当用户点击或者滚动可视区再进行加载。

## 2\. 路由懒加载拆分

一般我们的路由可能这样写，这样写在打包时把Dashboard组件和Contact组件的代码全部打包到JS中。

```js
// routing.js
import Dashboard from './Dashboard.vue'
import Contact from './Contact.vue'

const routes = [
  { path: '/', component: Dashboard }
  { path: '/contact', component: Contact }
]
```

我们可以按路由去懒加载，改成下面这样

```js
// routing.js 
const routes = [
  { path: '/', component: () => import('./Dashboard.vue') }
  { path: '/contact', component: () => import('./Contact.vue') }
]
```

这样的好处就是，我们没有访问路由时`/contact`，就不会去加载`Contact.vue`的代码，只有访问到时才会去加载组件的代码。

通过webpackChunkName来聚合打包多个页面到一个bundle中

一般我们的一个页面的bundle可能非常的小，我们可以把一个模块的所有路由的页面都打包到一个bundle中，在import函数加入`/* webpackChunkName:'group-superAdmin' */`，其中webpackChunkName的名称需要自己定义。

```js
const router = [
  {
    path: 'superAdminAccountList',
    name: 'SuperAdminAccountList',
    component: () => import(/* webpackChunkName:'group-superAdmin' */ '@/activity/superAdmin/AccountList'),
  },
  {
    path: 'superAdminCreateAccount',
    name: 'SuperAdminCreateAccount',
    component: () => import(/* webpackChunkName:'group-superAdmin' */ '@/activity/superAdmin/CreateAccount'),
  },
  {
    path: 'superAdminRoleList',
    name: 'SuperAdminRoleList',
    component: () => import(/* webpackChunkName:'group-superAdmin' */ '@/activity/superAdmin/RoleList'),
  },
  {
    path: 'superAdminCreateRole/:id?/:look?',
    name: 'SuperAdminCreateRole',
    component: () => import(/* webpackChunkName:'group-superAdmin' */ '@/activity/superAdmin/CreateRole'),
  },
];
```

## 3\. prefetch预渲染组件

> prefetch是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制；通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度；  

通过webpack我们可以非常方便的实现组件的预渲染，通过加入`/* webpackPrefetch: true */`，webpack会自动在页面中加入 的标签。

```js
components: {
  ModalView: () => import(/* webpackPrefetch: true */ './ModalView.vue')
}
```

## 4\. 优化三方库依赖

一般我们在项目中都会用到一些三方的依赖库，比如lodash

![](https://pic4.zhimg.com/v2-8bfb7808bd2a205c610f3072357bc427_r.jpg)

如果我们全量的引入的话会很大，但我们可能只用到一两个函数，我们只需要引用我们需要的就好

```text
import isEmpty from 'lodash/isEmpty`
```

## 5\. 善用浏览器缓存

我们都知道我们访问一个网站后，浏览器会对JS和CSS去进行缓存，在下次访问的时候会从缓存中去获取文件，不用再去请求。你可能会问浏览器缓存我们也控制不了？我们怎么做呢？

一般我们打包后的文件像这样

-   main.\[hash\].js – 根组件
-   common.\[hash\].js – 公共组件
-   dashboard.\[hash\].js – dashboard页面
-   contact.\[hash\].js – contact页面

其实我们可以把一些很长时间都不需要的公共代码依赖放到common.\[hash\].js中，这样一次缓存后，以后再次访问就不会去发请求。

## 6\. 优化压缩图片

图片的大小对于项目的性能也至关重要，一般webpack会帮助我们把小的图片直接转为base64来减少网络请求。对其他图片来说我们也要进行压缩，一般压缩方式有两种

1.  使用软件进行压缩
2.  使用CDN进行文件压缩

使用软件压缩我推荐使用TinyPNG，一个在线网站，使用它压缩几乎不损失清晰度而且压缩效果特别好。

使用CDN压缩，一般专业的文件存储都会提供图片的处理功能比如京东的图片地址，中间的`s280x280`可以去修改图片宽高，后面的.webp后缀把jpg图片转换成webp格式，进一步的来缩小文件的大小。

```text
https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/187871/40/5785/69529/60b4af7dE5a50eaff/c235bb87f19c1698.jpg.webp
```

## 7\. 静态文件上CDN

一般小公司可能为了方便直接把CSS、JS、图片等文件直接传到服务器上进行访问，使用CDN的优势在于CDN时全国的各个地方都会有服务节点，而且CDN也会缓存文件，所以通过CDN访问静态文件和直接访问服务器文件要快上几倍。

淘宝的图片访问，有98%的流量都走了CDN缓存。只有2%会回源到源站，节省了大量的服务器资源。

## 总结

通过上面的一波操作，我们的项目首屏加载和淘宝京东网站几乎差不多了，还有其他更多优化办法，欢迎您再评论区告诉我，我们相互学习。

> 如果本文有帮助，微信搜索【小帅的编程笔记】，每天一个小知识