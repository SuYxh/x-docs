# Egg实现上传文件到阿里云OSS

## 用到的包

- `egg-multipart`【egg中默认使用】

- `ali-oss`
- `crypto`
- `path`

## File模式

### Egg配置

```js
 exports.multipart = {
    mode: 'file',
    allowArrayField: true,
    fileSize: '5mb',
   	// 如果报错 Invalid filename ，egg-multipart有对上传文件的后缀名限制的白名单(whitelist)，.md后缀没有在默认whitelist中，导致上传失败。
    fileExtensions: ['.md'],
}
```



### 代码

```js
'use strict'

const Controller = require('egg').Controller
const path = require('path')
const OSS = require('ali-oss')
const fs = require('mz/fs')
const crypto = require('crypto')

class UploadController extends Controller {
  // file 模式
  async upload() {
    const { ctx } = this
    const file = ctx.request.files[0]
		
    // 请查看阿里云OSS使用文档
    const client = new OSS({
      region: 'oss-cn-beijing',
      bucket: 'yxh-test-bucket',
      accessKeyId: '----',
      accessKeySecret: '----',
    })

    // 获取后缀
    const extname = path.extname(file.filename).toLocaleLowerCase()
    // 获取源文件的文件名（不包含后缀名）
    const originFileName = path.basename(file.filename, extname)

    // 生成唯一的文件名
    const md5 = crypto.createHash('md5')
    const timestamp = new Date().getTime() // 当前时间戳
    const randomNum = Math.ceil(Math.random() * 1000) // 取1000以下的随机数
    const filename =
      md5
        .update(path.basename(file.filename, extname) + timestamp + randomNum)
        .digest('hex') + extname

    try {
      // 处理文件,上传到OSS
      const result = await client.put(
        '(' + originFileName + ')' + filename,
        file.filepath
      )
      ctx.body = {
        code: 200,
        result,
      }
    } catch (e) {
      // 需要删除临时文件
      await fs.unlink(file.filepath)
      ctx.body = {
        code: 110,
        msg: e,
      }
    }
  }
}

module.exports = UploadController
```



## Stream 模式

如果你对于 Node 中的 Stream 模式非常熟悉，那么你可以选择此模式。在 Controller 中，我们可以通过 `ctx.getFileStream()` 接口能获取到上传的文件流。



### Egg配置

```js
 exports.multipart = {
    mode: 'file',
    allowArrayField: true,
    fileSize: '5mb',
   	// 如果报错 Invalid filename ，egg-multipart有对上传文件的后缀名限制的白名单(whitelist)，.md后缀没有在默认whitelist中，导致上传失败。
    fileExtensions: ['.md'],
}
```



### 代码

```js
'use strict'

const Controller = require('egg').Controller
const path = require('path')
const OSS = require('ali-oss')
const fs = require('mz/fs')
const crypto = require('crypto')
const sendToWormhole = require('stream-wormhole')

class UploadController extends Controller {
  // stream 模式，需要在 config.default.js 中修改 multipart.mode = 'stream'
  async uploadStream() {
    const { ctx } = this
    const stream = await ctx.getFileStream()

    // 获取参数
    console.log(stream)

    if (!stream.filename) {
      ctx.body = {
        code: 110,
        msg: '上传失败，请重新尝试',
      }
      return
    }

    const client = new OSS({
      region: 'oss-cn-beijing',
      bucket: 'yxh-test-bucket',
      accessKeyId: '---',
      accessKeySecret: '---',
    })

    // 获取后缀
    const extname = path.extname(stream.filename).toLocaleLowerCase()
    // 获取源文件的文件名（不包含后缀名）
    const originFileName = path.basename(stream.filename, extname)

    // 生成唯一的文件名
    const md5 = crypto.createHash('md5')
    const timestamp = new Date().getTime() // 当前时间戳
    const randomNum = Math.ceil(Math.random() * 1000) // 取1000以下的随机数
    const filename =
      md5
        .update(path.basename(stream.filename, extname) + timestamp + randomNum)
        .digest('hex') + extname

    try {
      const result = await client.putStream(
        '(' + originFileName + ')' + filename,
        stream
      )
      ctx.body = {
        code: 200,
        result,
      }
    } catch (err) {
      console.log(err)
      await sendToWormhole(stream)
      ctx.body = {
        code: 110,
        msg: '上传失败',
      }
    }
  }
}

module.exports = UploadController

```

更详细的使用方式请参考官网。

## 踩坑(报错记录)

1、`filetype undefined ` （图片可以上传，不报错）

**原因：**没有给egg指定上传文件的类型

**解决方法：** 在`config`中添加如下配置

```js
// config/config.default.js
config.multipart = {
  mode: 'file',  // 对应文件类型 
}
```



2、`Invalid filename`

在上传markdown文件或者txt或者apk的时候会出现

**原因：**`egg-multipart`有对上传文件的后缀名限制的白名单(whitelist)，`.txt`后缀没有在默认whitelist中，导致上传失败。

**解决方法：** 在`config`中添加如下配置

```js
// config/config.default.js
config.multipart = {
  fileExtensions: [
    '.txt',
  ],
}
```

后缀名限制的白名单: https://www.eggjs.org/zh-CN/basics/controller#%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6



3、`Reach fileSize limit`

**原因：**超出文件限制的大小

**解决方法：** 在`config`中添加如下配置

```js
// config/config.default.js
config.multipart = {
  fileSize: '100mb',  // Max file size (in bytes), default is 10mb
}
```

## 参考

1、阿里云OSS使用文档

https://help.aliyun.com/document_detail/111265.html.



2、Egg官方-获取上传的文件

https://www.eggjs.org/zh-CN/basics/controller#%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6