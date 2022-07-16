# Sequelize简单实用

## 正向创建数据表

请参考Egg官方的示例

https://www.eggjs.org/zh-CN/tutorials/sequelize#完整示例

## 新增数据表字段

1、先执行一次命令,表示要变更的操作

```
npx sequelize-cli migration:generate --name updateUser
```



2、在migrations中生成了新的js文件之后,可以根据自己项目的代码方式替换里面自动生成的内容

```js
'use strict'

// 如果title字段不存在，就在users表中插入title字段
module.exports = {
  async up(queryInterface, Sequelize) {
    const fields = await queryInterface.describeTable('users') // 放到这个表中
    const t = await queryInterface.sequelize.transaction()

    try {
      if (!fields.hasOwnProperty('title')) {
        await queryInterface.addColumn(
          'users',
          'title',
          {
            type: Sequelize.STRING(30), // 字段数据类型
            allowNull: true, // 不允许为空
            defaultValue: 'this is a title', // 默认,没有为0
            comment: '这里填写标题', // 字段描述
            after: 'age', // 字段放到这个字段之后
          },
          { transaction: t }
        )
      }
      await t.commit()
    } catch (err) {
      throw err
    }
  },

  async down(queryInterface) {
    const t = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn('users', 'title', { transaction: t })

      await t.commit()
    } catch (err) {
      await t.rollback()
      throw err
    }
  },
}

```



3、执行升级命令

```js
npx sequelize-cli db:migrate
```



更多sequelize关于migrations的一些方法,可以看[sequelize的migrations](https://sequelize.org/v5/manual/migrations.html)



## 自动生成model

1、安装 `egg-sequelize-auto` ,如果数据库驱动没有还需要安装，此处使用的是mysql，所以安装 mysql2

```
npm install egg-sequelize-auto
npm install mysql2
```



2、配置npm脚本

```
"auto:model": "egg-sequelize-auto -o './app/model' -d egg-example-demo -h 127.0.0.1 -u root -p 3306 -x 123456 -e mysql"
```

 参数说明：

```
egg-sequelize-auto -o 导出地址 -d 数据库名 -h 数据库地址 -u 账号 -p 端口 -x 密码 -t 表名 -e 数据库类型
```



3、运行命令 `npm run auto:model`

自动生成的例图：

```js
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: 'this is a title'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });

  Model.associate = function() {

  }

  return Model;
};

```

自动生成后的需要进行一些简单的修改：

1、主键一般是自动递增，需要自己添加`autoIncrement: true,`，否则某些情况下会报错.

2、若自定义table名字则tableName那一块需要删掉

3、若有定义created_at等需要自己添加或删除

4、导出的model最好与表名一样



修改如下

```js
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize

  const User = app.model.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: 'this is a title',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'users',
    }
  )

  User.associate = function () {}

  return User
}

```



参考

https://www.cnblogs.com/alexander3714/p/14158613.html#%E5%88%9B%E5%BB%BA%E6%A8%A1%E5%9E%8B