> 最近在做需要展示文章详情的功能，详情打算用Markdown展示，发现微信小程序在支持Markdown方面不是很友好，小蛋我无意中发现一个好用的组件，Towxml，完美支持Markdown,下面就带大家手把手实现Markdown功能

# Towxml 介绍

｜Towxml 官网 [github.com/sbfkcel/tow…](https://github.com/sbfkcel/towxml "https://github.com/sbfkcel/towxml")

Towxml是一个可将HTML、Markdown转为微信小程序WXML的渲染库，支持以下功能：

![image-20211009115933414](https://img-blog.csdnimg.cn/img_convert/151d3652e4ba35603becfdbbd0c4a99f.webp?x-oss-process=image/format,png)

使用Towxml可以实现如下的Markdown效果

![image-20211009120021299](https://img-blog.csdnimg.cn/img_convert/3ad3314f60545857da1ad92f1ac9fe90.webp?x-oss-process=image/format,png)

# 在小程序中引入Twoxml

## 构建Twoxml

-   克隆项目到本地

```auto
git clone https://github.com/sbfkcel/towxml.git
复制代码
12
```

-   如果没有安装过npm依赖，先安装依赖
    
    ```auto
    npm install 或 yarn
    复制代码
    12
    ```
    
-   编辑配置文件towxml/config.js
    
    根据自己的实际需求保留你需要的功能即可
    
-   运行 **npm run build** 或 **yarn run build** 即可
    
    > 构建好后出来的文件在dist目录下，将dist目录复制到小程序项目根目录中并将目录名称改为towxml即可使用
    

![image-20211009121010136](https://img-blog.csdnimg.cn/img_convert/e4c556e0abccb067018887d463206bdc.webp?x-oss-process=image/format,png)

# 在小程序中使用Twoxml

上一步我们已经把towxml文件夹引入到小程序中：

![image-20211009121918059](https://img-blog.csdnimg.cn/img_convert/da84fef7f9ceed71fa0a5ce89d264f34.webp?x-oss-process=image/format,png)

## 1\. 引入库 /app.js

```auto
// app.js
App({
  // 引入`towxml3.0`解析方法
  towxml:require('/towxml/index'),
})
复制代码
123456
```

## 2\. 在具体页面的配置文件中引入twoxml组件

```auto
// pages/content-detail/content-detail.json
{
  "usingComponents": {
    "towxml":"/towxml/towxml"
  }
}
复制代码
1234567
```

## 3\. 在页面中插入组件

```auto
// pages/content-detail/content-detail.wxml
<view class="content-info">
  <towxml nodes="{{article}}"/>
</view>
复制代码
12345
```

## 4\. 在js中解析内容

解析内容的方式我这边给出了两种版本，一种是plus无忧版，一种是基础版，我先说说plus版

### plus无忧版

正常来说，markdown源数据都应该是从服务端获取，那我们就先封装一个请求方法(我是在App.js中进行封装)

```auto
App({
  // 引入`towxml3.0`解析方法
  towxml:require('/towxml/index'),
    //声明一个数据请求方法
  getText: (url, callback) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        if (typeof callback === 'function') {
          callback(res);
        };
      }
    });
  }
  })
复制代码
12345678910111213141516171819
```

然后在具体页面的js文件中处理解析内容

```auto
// pages/content-detail/content-detail.js
const app = getApp();
Page({
​
  /**
   * 页面的初始数据
   */
  data: {
   article:{}
  },
​
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getText('https://www.vvadd.com/wxml_demo/demo.txt?v=2',res => {
      let obj = app.towxml(res.data,'markdown',{
        theme:'light', //主题 dark 黑色，light白色，不填默认是light
        base:"www.xxx.com",
        events:{      //为元素绑定的事件方法
          tap:e => {
            console.log('tap',e);
          },
          change:e => {
            console.log('todo',e);
          }
        }
      });
      //更新解析数据
      this.setData({
        article:obj,
      });
    });
  },
})
复制代码
123456789101112131415161718192021222324252627282930313233343536
```

这里我是请求一个网址[www.vvadd.com/wxml\_demo/d…](https://www.vvadd.com/wxml_demo/demo.txt?v=2 "https://www.vvadd.com/wxml_demo/demo.txt?v=2")，这个网址会给我返回markdown源数据，我们先来看下这个请求地址里面有啥

![image-20211009124700542](https://img-blog.csdnimg.cn/img_convert/0eb9cd0b8891197279b54dfa24650ce2.webp?x-oss-process=image/format,png)

我们获取到markdown数据后将其进行赋值，然后在页面就能直接展示出来，激动人心的时候到来了，看下最终的效果

![image-20211009125002811](https://img-blog.csdnimg.cn/img_convert/8e304a2ef3e95235a901946a6669e074.webp?x-oss-process=image/format,png)

效果是不是很完美，完美实现markdown展示

### 基础版

说完plus版本再来说说基础版，因为大家可能会有对markdown数据源的自定义处理的操作，所以就再来看看基础版的实现

```auto
// pages/content-detail/content-detail.js
const app = getApp();
Page({
​
  /**
   * 页面的初始数据
   */
  data: {
   article:{}
  },
​
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //markdown数据源
      let content= "<h1>h1h1h1h1h1h1</h1><h2>h2h2h2h2</h2><h3>123456</h3>"
    let result = app.towxml(content,'markdown',{
       base:'www.xxx.com',             // 相对资源的base路径
       theme:'light',                   // 主题，默认`light`
      events:{                    // 为元素绑定的事件方法
           tap:(e)=>{
               console.log('h4',e);
           }
       }
   });
   // 更新解析数据
   this.setData({
      article:result
   });
  },
})
复制代码
123456789101112131415161718192021222324252627282930313233
```

基础版就写完了，也很简单，其实和plus版的区别也不大，plus版就是把数据请求进行了一层封装，让我们来看下效果

![image-20211009130048088](https://img-blog.csdnimg.cn/img_convert/658883b4eb423d7c325e065e730249ea.webp?x-oss-process=image/format,png)

# 总结

使用Towxml来实现markdown其实比较简单，不仅支持了丰富的markdown语法，还支持图表，流程图，数学公式，在真正的开发中，markdown数据源是从服务端进行获取，建议最好是由服务端将markdown数据源进行解析出来，前端获取后直接进行赋值就行，避免造成性能问题

> 学无止境，我虽然是服务端开发，但对小程序开发的热爱促使我不断的对其学习，如果大家觉得我写的不错，烦请给我点个赞，关注一波，一起交流学习，一个人可以走的很快，一群人会走的更远