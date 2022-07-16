## pm2自动部署node项目

1、安装git

需要在服务器上安装git ， 且生成 `ssh-keygen -t rsa -C "xxx@xxx.com"` 密钥。

在 .ssh 文件夹下添加 config 文件，并且添加配置：

```
#default gitee 如果项目放在码云上，将 puk 公钥 放在 码云上，这样就可以拉取代码了
Host gitee.com
HostName gitee.com
IdentityFile ~/.ssh/aliyun_rsa
```

> 首先需要配置好公钥，保证服务器可以拉取GitHub等仓库的代码
>
> 保证本地可以和服务器进行通信，可通过 ssh root@8.11.90.23 



2、在项目根目录下新建一个 deploy.yaml 文件

```yaml
# deploy.yaml
apps:
  - script: ./app.js       # 入口文件
    name: 'app'              # 程序名称
    env:                     # 环境变量
      COMMON_VARIABLE: true
    env_production:
      NODE_ENV: production

deploy:                     # 部署脚本
  production:               # 生产环境
    user: root            # 服务器的用户名
    host: 10.1.124.96    # 服务器的ip地址
    port: 22                # ssh端口
    ref: origin/master      # 要拉取的git分支
    ssh_options: StrictHostKeyChecking=yes # SSH 公钥检查
    repo: git@gitee.com:dahuang/deploy_test.git # 远程仓库地址
    path: /www/demo/deploy_test             # 拉取到服务器某个目录下
    pre-deploy: git pull # 部署前执行
    post-deploy: npm install && pm2 start app # 部署后执行
    env:
      NODE_ENV: production 
```

### 使用pm2部署项目

- 首次部署

```shell
pm2 deploy deploy.yaml production setup 
```

 部署完成后，既可登陆服务器查看配置的目录下是否从git上拉取了项目 

- 再次部署

部署完成后，将 `post-deploy` 改成 `npm install && pm2 restart app` ，部署前执行的是 `pm2 start app`

```
pm2 deploy deploy.yaml production
```

> 该部署流程同样适用前端项目
>
> 如vue-cli的项目，自动部署到服务器，自动执行npm run build 命令，生成的dist目录，指定到nginx的静态文件目录下



### 可能会遇到的坑

1、在window系统下 vscode的命令行程序，以及powershell执行部署的命令时，出现部署失败

![](http://qn.huat.xyz/content/20210315122255.png)

 解决方案：使用git命令行来执行 



2、 pm2 command not found post-deploy hook failed Deploy failed 1

> 如果使用 宝塔搭的环境可能存在这个问题

**原因**

这个提示是找不到npm 跟pm2 命令， 但是我们在服务器上使用 npm -v   pm2 -v 是可以查看到版本好的， 也就是安装好的。这个时候提示  command not found 是因为在自动部署的时候 使用的全局下的npm pm2 命令，在全局环境下 找不到这两个命令， 自然就报错了，为了验证， 可以执行 `sudo npm -v`  `sudo pm2 -v`  也会提示 `command not found`

**解决方案**

为了解决这个问题需要让npm pm2 建立软连接，相当于放在环境变量中。首先查看 npm 的安装位置，可以使用 `whereis npm` 查看npm 的安装路径， 如果 `whereis npm`  显示路径为空，则使用 `which npm` 比如 这里显示的路径是 `/usr/local/src/node-v10.16.3-linux-x64/bin/npm` ，然后执行

```
sudo ln -s  /usr/local/src/node-v10.16.3-linux-x64/bin/npm  /usr/bin/npm
```

这就相当于把npm 链接到了 全局环境变量中，这时候在执行 sudo npm -v  就不报错了。

> 注意：
>
> 需要先将node和npm链接到全局环境变量中，在将pm2链接到全局环境变量中，再去使用 `sudo npm -v ` 测试

### 测试部署代码

 https://wwa.lanzous.com/iFlDomye3ud 



### 参考

> https://www.cnblogs.com/yalong/p/13935503.html
>
> https://www.cnblogs.com/lentoo/p/9539137.html
>
> GitHub action 部署vue项目：https://www.bilibili.com/video/BV1vX4y1K7bQ?p=15





