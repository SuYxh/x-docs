# zx 使用教程



![google/zx: A tool for writing better scripts](https://qn.huat.xyz/mac/20220421220104.webp)

> zx 是 Google 公司推出的一个更方便、更友好帮助开发者写脚本的工具 。有 Google 背书，在短短几天内，该工具在 GitHub 的 Star 数就破万了。

## 简介

Bash 很好，但是在编写脚本的时候，人们通常会选择一种更方便的编程语言，JavaScript 就是一个很完美的选择。但是标准的 Node.js 库在使用之前需要许多额外的操作，比如安装、引入库等，zx 提供一个包装器 `child_process`，用于转义参数并提供合并的默认值。

```js
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`

await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`,
  $`sleep 3; echo 3`,
])

let name = 'foo bar'
await $`mkdir /tmp/${name}`
```

## 安装及使用方法

要安装 zx 工具，请执行下面这行命令（全局安装）：

```shell
$ npm i -g zx
```

安装好 zx 之后，将编写的脚本放在 `.mjs` 后缀的文件中，或者使用 `.js` 后缀，但是需要使用 `void async function () {...}()` 对脚本进行包装。

使用时需注意以下几点：

**1、脚本需要包含以下文件头：**

```shell
#!/usr/bin/env zx
```

**2、为脚本添加执行权限再运行**

```shell
$ chmod +x ./script.mjs
$ ./script.mjs

# 或者使用这个命令
$ zx ./script.mjs
```

## zx 常用命令

使用 `child_process` 包中提供的 `exec` 函数，可以把字符串当做命令执行，并返回一个 `Promise<ProcessOutput>` 对象。

```JavaScript
let count = parseInt(await $`ls -1 | wc -l`)
console.log(`Files count: ${count}`)
```

要并行上传文件，可以使用下面的脚本：

```JavaScript
let hosts = [...]
await Promise.all(hosts.map(host =>
  $`rsync -azP ./src ${host}:/var/www`  
))
```

如果执行脚本返回非 0 状态码，将会抛出 `ProcessOutput` 对象：

```JavaScript
try {
  await $`exit 1`
} catch (p) {
  console.log(`Exit code: ${p.exitCode}`)
  console.log(`Error: ${p.stderr}`)
}
```

抛出的 `ProcessOutput` 对象结构如下：

```TypeScript
class ProcessOutput {
  readonly exitCode: number
  readonly stdout: string
  readonly stderr: string
  toString(): string
}
```

要修改工作路径，可以使用 `cd()` 方法：

```JavaScript
cd('/tmp')
// 将输出 /tmp
await $`pwd`
```

`fetch()` 方法是对 `node-fetch` 包的包装：

```JavaScript
let resp = await fetch('http://wttr.in')
if (resp.ok) {
  console.log(await resp.text())
}
```

`question()` 方法是对 `readline` 包的包装：

```TypeScript
type QuestionOptions = { choices: string[] }
function question(query: string, options?: QuestionOptions): Promise<string>
```

用法：

```JavaScript
let username = await question('What is your username? ')
let token = await question('Choose env variable: ', {
  choices: Object.keys(process.env)
})
```

对于 `chalk` 包，不需要导入就可以直接用：

```JavaScript
console.log(chalk.blue('Hello world!'))
```

`fs` 包，导入就可以直接用：

```JavaScript
let content = await fs.readFile('./package.json')
```

`Promisified` 默认被引入了，等同于以下代码：

```JavaScript
import {promises as fs} from 'fs'
```

`os` 包，导入就可以直接用：

```JavaScript
await $`cd ${os.homedir()} && mkdir example`
```

zx 还可以从其他脚本导入：

```JavaScript
#!/usr/bin/env node
import {$} from 'zx'
await $`date`
```

传递环境变量：

```JavaScript
process.env.FOO = 'bar'
await $`echo $FOO`
```

执行远程脚本：

```JavaScript
zx https://your-remote-server.com/example-script.mjs
```

全文完，更多用法，请参考 zx 官方文档。

zx 项目地址：https://github.com/google/zx



参考

https://juejin.cn/post/6979989936137043999