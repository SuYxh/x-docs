   

# 如何解决flex文本溢出问题

## 前言

___

   一个小姑娘问了我关于flex文本溢出的问题，事后我觉得这个问题还挺有意思的，所以简单的研究下和大家分享分享。

## 问题

用一个简化的css和html为例

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .box {
    display: flex;
    height: 200px;
    margin-top: 20px;
    width: 400px;
    margin: 20px auto 0 auto;
  }
  .left {
    width: 100px;
    height: 100%;
    background: red;
  }
  .right {
    flex: auto;
    height: 100%;
    background: blue;
    color: #fff;
  }
  .text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

<div class="box">
  <div class="left">123</div>
  <div class="right">
    <p class="text">
      这是一段很长长长长长长长长长长长长长长长长长长文字，这是一段很长长长长长长长长长长长长长长长长长长文字
    </p>
  </div>
</div>
<div class="box" style="background: green">正常的box</div>
```

   上面是一个flex容器，包括着两个容器，其中右边的容器中我们希望的应该是正常展示，且文本显示省略号，但总是事与愿违。页面展示如下，左边红色区域被压缩，蓝色的区域拉伸了，并将父容器撑开。

![1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71508a79d30e4d73b6410d87c982900e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

那么，我们该如何解决怎么这个问题呢？

## 解决方法

___

方法有三，如下

1.  蓝色容器设置 `overflow: hidden`
2.  蓝色容器设置 `width: 0`
3.  蓝色容器设置 `min-width: 0`

第一种 overflow超出截断比较好理解。我们看看剩下的两种。

  

## 法二 width

第二种，首先看下flex属性

```
<!-- 缩写 -->
flex: auto; 

flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;

<!--默认值为-->
flex: 0 1 auto;
```

flex: auto是flex: 1 1 auto的缩写

其中

-   flex-grow：表示放大比例
-   flex-shrink：表示缩小比例
-   flex-basis：作用于子元素的主轴上的宽度属性，并且优先级比默认的宽/高要高。 这个属性决定CSS如何给可伸缩项在容器中分配初始大小.

上面作妖的属性就是flex-basis。flex-basis的值有 `content` | `\<width\>`

flex-basis: 会检索项目的width 或 height 值作为 flex-basis 的值。如果 width 或 height 值为 `auto`，则 flex-basis 设置为 `content`，也就是基于 flex 的元素的内容自动调整大小。

注意： flex-basis设置 `0` 和 `0%` 上有所区别, 如果`flex-basis`的值为百分数，且它flex容器的尺寸没有被显式设置，此时flex-basis的值会被解析为`content`, 值会根据flex子项的内容（指flex子项的子元素尺寸）来计算实际尺寸，多数情况下效果与 max-content 值一致，就是说flex子项的子元素有多长其主轴初始值就有多长。

这里蓝色容器的flex-basis为默认值0项目总宽度小于容器宽度，计算如下：

**项目总宽度100px + 0px = 100px**

**待分配宽度400px - 100px = 300px**

**放大比例0 + 1 = 1 , 这是项目的flex-grow之和**

每个项目得到自身的grow/总的grow之和比例的剩余空间。

**红色容器得到0/1 \* 300px = 0，最终宽度100px + 0px = 100px**

**蓝色容器得到 1/1 \* 300px = 300px，最终宽度300px**

将蓝色容器的宽度设为0，验证下我们的结果，结果如下，解决成功。

![f1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/738852074da243ac9cd8142c5627df6d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

  

## 法三 min-width

   一般情况下 min-width 属性默认值是 0 ，但是 Flexbox 容器中的 flex 项的 `min-width` 属性默认值是 `auto` ，这样能为 Flexbox 布局指明更合理的默认表现。将min-width设置成0，width未设置默认值为auto。这个时候会使用`shrink-to-fit`算法去计算宽度(文献3中说明flexbox中也会使用到该算法), 算法如下：

```
width = min(max(preferred minimum width, available width), preferred width)
```

其中

-   最小宽度（preferred minimum width）也就是min-width
-   可用宽度（available width） ，这个宽度为包含块减去margin、border、padding以及所有相关滚动条的宽度。
-   发生明确的换行外不发生换行的时 首选宽度（preferred width） 即content-box的宽度

那么计算如下: (816是当时浏览器获取的宽度)

**min(max(0, 400px - 100px), 816px) = 300px**

所以，设置最小宽度也能解决我们的问题。

  

## flex再算一题

___

html的内容如下，我们需要计算左右两个容器的宽度。

```
<style>
  .box {
    display: flex;
    height: 200px;
    margin-top: 20px;
    width: 400px;
    margin: 20px auto 0 auto;
  }
  .item-1 {
    background: red;
    width: 200px;
    flex-shrink: 2;
  }
  .item-2 {
    background: blue;
    width: 300px;
    flex-shrink: 3;
  }
</style>
<div class="box">
  <div class="item-1">设置200px，实际169.23</div>
  <div class="item-2">设置300px，实际230.77</div>
</div>
复制代码
```

开始计算，此时项目总宽度超过父容器时，这个时候需要使用flex-shrink计算

1.  先要去计算项目的虚拟总宽度Total = 各项目flex-basic \* flex-strink 之和，这里左右项目都设置了宽度，所以flex-basis=width
2.  再计算单个项目的占比P = flex \* flex-strink / Total
3.  最后计算项目应该减去的大小 = 真实超出部分 \* P

Total = 200 \* 2 + 300 \* 3 = 1300

P1 = 200 \* (2 / VS)

P2 = 300 \* (3 / VS)

最终得出：

item-1的宽度为：200 - (500 - 400) \* P1 = 169.23px

item-2 的宽度为：300 - (500 - 400) \* P2 = 230.77px

![6.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe33c13298d3450d807f47741fd57842~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

  

## 结尾

___

借这个问题还加深了对flex的认识，赚了赚了。欢迎大家关注我的[github](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzty1205 "https://github.com/zty1205")，(面经，算法，设计模式等都有一点点)

## 参考文献

___

1.  【flex-basic】 [www.w3.org/TR/2018/CR-…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.w3.org%2FTR%2F2018%2FCR-css-flexbox-1-20181119%2F%23flex-basis-property "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-basis-property")
2.  【shrink-to-fit算法】 [www.w3.org/TR/CSS21/vi…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.w3.org%2FTR%2FCSS21%2Fvisudet.html%23float-width "https://www.w3.org/TR/CSS21/visudet.html#float-width")
3.  【flex初始大小】 [www.w3.org/TR/2018/CR-…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.w3.org%2FTR%2F2018%2FCR-css-flexbox-1-20181119%2F%23intrinsic-sizes "https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#intrinsic-sizes")
4.  【flex-更多计算案例】 [segmentfault.com/a/119000002…](https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000023908961 "https://segmentfault.com/a/1190000023908961")

