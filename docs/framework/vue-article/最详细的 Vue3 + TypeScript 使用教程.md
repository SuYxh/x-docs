点击下方“前端开发爱好者”，选择“设为星标”

第一时间关注技术干货！

![](https://qn.huat.xyz/mac/20220725204331.png)

**前端开发爱好者**

分享 web 前端相关技术文章、工具资源、精选课程、视频教程资源、热点资讯

60篇原创内容

公众号

> 哈喽,大家好 我是`xy`👨🏻‍💻。最近技术栈刚刚由之前的 `React` 转向 `Vue3`了，由于之前多多少少也接触过 `Vue`，所以这次只用了一个上午的时间就上手 `Vue3` 了，如果大家有关于`vue`或者`react`上的问题，欢迎来滴滴我，一起交流学习 💪

至于技术栈为什么由 `react` 转向 `vue3`，也是因为今年换了新工作，公司技术栈以`vue3`为主，刚好前段时间又接手了一个项目，就直接采用 `Vue3` `script setup` `typescript` 开发，于是今天就想给大家分享下 `script setup` 结合 `typescript` 使用的一些技巧，如果这些技巧能够帮助到你，记得给我点个赞呦 👍

## 环境搭建

环境搭建这里就不详细介绍了，可以直接使用官方的方式创建

```auto
npm init vue@latest
```

这一指令将会安装并执行 `create-vue`，它是 `Vue` 官方的项目脚手架工具。你将会看到一些诸如 `TypeScript` 和`测试`支持之类的可选功能提示：

```auto
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

如果不确定是否要开启某个功能，你可以直接按下回车键选择 `No`。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```auto
cd <your-project-name>
npm install
npm run dev
```

想看更多的`详细配置`的同学，可以移步到我之前的一篇文章中：[![图片](https://qn.huat.xyz/mac/20220725204336.jpeg)](http://mp.weixin.qq.com/s?__biz=MzUzNTk3MjE2Ng==&mid=2247490197&idx=1&sn=df6b58af594299ffda15483df3c082c0&chksm=fafc0abccd8b83aa2fb4371aa21dc4f1f0719697b123991b562709cf1920bc79f5452512f289&scene=21#wechat_redirect)

[](https://mp.weixin.qq.com/s?__biz=MzUzNTk3MjE2Ng==&mid=2247490197&idx=1&sn=df6b58af594299ffda15483df3c082c0&scene=21#wechat_redirect)

这里就不做过多的讲解了，这篇文章的重点还是在 `script setup` `typescript` 结合使用上

## ref()

`ref()`接受一个内部值，返回一个响应式的、可更改的 `ref` 对象，此对象只有一个指向其内部值的 `property .value`。

### 类型定义

```auto
function ref<T>(value: T): Ref<UnwrapRef<T>>
interface Ref<T> {
  value: T
}
```

### 为 ref() 标注类型

`ref()` 标注类型有三种方式：

1.  通过泛型参数的形式来给 `ref()`增加类型
    

```auto
import { ref } from 'vue'

const initCode = ref<string | number>('200')
```

2.  如果是遇到复杂点的类型，可以自定义 `interface` 然后泛型参数的形式传入
    

```auto
import { ref } from 'vue'

interface User {
  name: string
  age: string | number
}

const user = ref<User>({
  name:'前端开发爱好者',
  age: 20
})
```

3.  通过使用 `Ref` 这个类型为 `ref` 内的值指定一个更复杂的类型
    

```auto
import { ref } from 'vue'
import type { Ref } from 'vue'

const initCode: Ref<string | number> = ref('200')
```

### 三种方式推荐

比较推荐使用`前两种`方式，前两种方式其实都是以`泛型`的形式来标注类型的

第三种方式需要额外的引入：

```auto
import type { Ref } from 'vue'
```

所以不是很推荐(本着能少写一行是一行原则)

## reactive()

`reactive()` 返回一个对象的响应式代理。

### 类型定义

```auto
function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
```

### 为 reactive() 标注类型

`reactive()`标注类型有两种方式：

1.  直接给声明的变量添加类型
    

```auto
import { reactive } from 'vue'

interface User {
  name: string
  age: string | number
}

const user:User = reactive({
  name:"前端开发爱好者",
  age:'20'
})
```

2.  通过泛型参数的形式来给 `reactive()`增加类型
    

```auto
import { reactive } from 'vue'

interface User {
  name: string
  age: string | number
}

const user = reactive<User>({
  name:"前端开发爱好者",
  age:'20'
})
```

### 两种方式推荐

`不推荐`使用 `reactive()` 的泛型参数,因为处理了深层次 ref 解包的返回值与泛型参数的类型不同。`推荐直接给声明的变量添加类型`。

## computed ()

接受一个 `getter` 函数，返回一个只读的响应式 `ref` 对象，即 `getter` 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 `ref` 对象。

### 类型定义

```auto
// 只读
function computed<T>(
  getter: () => T,
  debuggerOptions?: DebuggerOptions
): Readonly<Ref<Readonly<T>>>

// 可写的
function computed<T>(
  options: {
    get: () => T
    set: (value: T) => void
  },
  debuggerOptions?: DebuggerOptions
): Ref<T>
```

### 为 computed() 标注类型

`computed()`标注类型有两种方式：

1.  从其计算函数的返回值上推导出类型
    

```auto
import { ref, computed } from 'vue'

const count = ref<number>(0)

// 推导得到的类型：ComputedRef<string>
const user = computed(() => count.value + '前端开发爱好者')
```

2.  通过泛型参数显式指定 `computed()` 类型
    

```auto
const user = computed<string>(() => {
  // 若返回值不是 string 类型则会报错
  return '前端开发爱好者'
})
```

### 两种方式推荐

自动推导类型虽然简单快捷，但是还是希望`手动`的去`指定`其类型，这样更加利于代码的可维护性，所以这里推荐大家使用通过泛型参数显式指定 `computed()` 类型

## defineProps()

为了在声明 `props` 选项时获得完整的类型推断支持，我们可以使用 `defineProps` API，它将自动地在 `script setup` 中使用

### 为 defineProps() 标注类型

1.  从它的参数中推导类型:
    

```auto
const props = defineProps({
  name: { type: String, required: true },
  age: Number
})
```

2.  通过泛型参数来定义 `props` 的类型
    

```auto
const props = defineProps<{
  name: string
  age?: number
}>()
```

当然了,我们也可以把以上的泛型参数定义成一个单独的 `interface`

```auto
interface Props {
  name: string
  age?: number
}

const props = defineProps<Props>()
```

> 以上的两种方式虽然都可以很方便的`标注类型`, 但是失去了对 `props` 定义默认值的能力

目前官方也给出了解决方案,但是目前这个方案还处于实验性,并且需要`显式地选择开启`。

```auto
// vite.config.js
export default {
  plugins: [
    vue({
      reactivityTransform: true
    })
  ]
}
```

通过对 `defineProps()` 的响应性解构来添加默认值:

```auto
<script setup lang="ts">
interface Props {
  name: string
  age?: number
}

const { name = '前端开发爱好者', age = 100 } = defineProps<Props>()
</script>
```

## defineEmits()

为了在声明 `emits` 选项时获得完整的类型推断支持，我们可以使用 `defineEmits` API，它将自动地在 `script setup` 中使用

### 为 defineEmits() 标注类型

`defineEmits()` 标注类型直接推荐`泛型`形式

```auto
import type { GlobalTheme } from 'naive-ui'

const emit = defineEmits<{
  (e: 'setThemeColor', val: GlobalTheme): void
}>()
```

虽然官方还推荐了`运行时`自动推导的一种形式,但是本人不是很推荐

## defineExpose()

`defineExpose()` 编译器宏来显式指定在 `script setup` 组件中要暴露出去的 `property`,使得父组件通过`模板ref`的方式获取到当前组件的实例

### 为 defineExpose() 标注类型

`defineExpose()` 类型推导直接使用参数类型自动推导即可

```auto
<script setup>
import { ref } from 'vue'

const name = ref<string>('前端开发爱好者')

defineExpose({
  name
})
```

## provide()

`provide()`供给一个值，可以被后代组件注入

### 类型定义

```auto
function provide<T>(key: InjectionKey<T> | string, value: T): void
```

### 为 provide() 标注类型

为 `provide()` 标注类型, Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型

```auto
import type { InjectionKey } from 'vue'

// 建议声明 key (name) 放到公共的文件中
// 这样就可以在 inject 的时候直接导入使用
const name = Symbol() as InjectionKey<string>

provide(name, '前端开发爱好者') // 若提供的是非字符串值会导致错误
```

以上方式是通过定义 key 的类型来标注类型的,还有一种方式直接 `key` 采用`字符串`的形式添加

```auto
provide('name', '前端开发爱好者')
```

## inject()

`inject()`注入一个由祖先组件或整个应用供给的值

### 类型定义

```auto
// 没有默认值
function inject<T>(key: InjectionKey<T> | string): T | undefined

// 带有默认值
function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T

// 使用工厂函数
function inject<T>(
  key: InjectionKey<T> | string,
  defaultValue: () => T,
  treatDefaultAsFactory: true
): T
```

### 为 inject() 标注类型

`provide()` 的 `key` 的类型是声明式提供的话(provide()类型标注的第一种形式)

`inject()` 可以直接导入声明的 `key` 来获取父级组件提供的值

```auto
// 由外部导入
const name = Symbol() as InjectionKey<string>

const injectName = inject(name)
```

如果 `provide()` 的 `key` 直接使用的`字符串`形式添加的, 需要通过泛型参数声明

```auto
const injectName = inject<string>('name')
```

## 模板 ref

模板 `ref` 需要通过一个显式指定的`泛型参数`和一个`初始值 null` 来创建：

```auto
<img ref="el" class="logo" :src="Logo" alt="" />

const el = ref<HTMLImageElement | null>(null)
```

## 组件 ref

有时，你可能需要为一个子组件添加一个模板 ref，以便调用它公开的方法

```auto
<!-- Child.vue -->
<script setup lang="ts">
const handleLog = () => console.log('前端开发爱好者')

defineExpose({
  open
})
</script>
```

为了获取 `MyModal` 的类型，我们首先需要通过 `typeof` 得到其类型，再使用 `TypeScript` 内置的 `InstanceType` 工具类型来获取其实例类型：

```auto
<!-- parent.vue -->
<script setup lang="ts">
import Child from './Child.vue'

// 为子组件 ref 声明类型
const child = ref<InstanceType<typeof Child> | null>(null)

// 调用子组件中的方法
const getChildHandleLog = () => {
  child.value?.handleLog()
}
</script>
```

## 事件处理器

原生的 DOM 事件标注类型

```auto
<template>
  <input type="text" @change="handleChange" />
</template>

<script setup lang="ts">
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
</script>
```

## 写在最后

> `公众号`：`前端开发爱好者` 专注分享 `web` 前端相关`技术文章`、`视频教程`资源、热点资讯等，如果喜欢我的分享，给 🐟🐟 点一个`赞` 👍 或者 ➕`关注` 都是对我最大的支持。



关注公众号后，在首页：

-   回复`面试题`，获取最新大厂面试资料。
    
-   回复`简历`，获取 3200 套 简历模板。
    
-   回复`React实战`，获取 React 最新实战教程。
    
-   回复`Vue实战`，获取 Vue 最新实战教程。
    
-   回复`ts`，获取 TypeScript 精讲课程。
    
-   回复`vite`，获取 精讲课程。
    
-   回复`uniapp`，获取 uniapp 精讲课程。
    
-   回复`js书籍`，获取 js 进阶 必看书籍。
    
-   回复`Node`，获取 Nodejs+koa2 实战教程。
    
-   回复`数据结构算法`，获取数据结构算法教程。
    
-   回复`架构师`，获取 架构师学习资源教程。
    
-   更多教程资源应有尽有，欢迎`关注获取`