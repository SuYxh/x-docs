# 4 个JavaScript 中 array.reduce() 数组方法的使用实例

![图片](https://qn.huat.xyz/mac/20220724210903.jpeg)

英文 | https://javascript.plainenglish.io/4-practices-to-help-you-understand-array-reduce-f3138cfef095

翻译 | 杨小爱



Array.prototype.reduce() 是数组中最强大的方法之一，也是 JavaScript 函数式编程中一个吸引人的特性。但不幸的是，我发现很多朋友不习惯使用它。

今天请让我详细介绍一下这个方法，希望对你有帮助。

这是 reduce 的基本用法：

```js
var arr = [1, 2, 3]
function reducer(parmar1, parmar2) {}
arr.reduce(reducer)
```

reduce是数组原型对象上的一个方法，可以帮助我们操作数组。它将另一个函数作为其参数，可以称为reducer。

reducer 有两个参数。第一个参数 param1 是最后一次 reducer 运行的结果。如果这是第一次运行 reducer，则 param1 的默认值是数组第一个元素的值。

reduce 方法循环遍历数组中的每个元素，就像在 for 循环中一样。并将循环中的当前值作为参数2。

遍历完数组，reduce会返回最后一个reducer计算的结果。

我们来看一个详细的例子。

```js

var arr = ['a', 'b', 'c', 'd', 'e'];

function add(x, y) {
  return x + y;
}

arr.reduce(add)
```

![图片](https://qn.huat.xyz/mac/20220724210858.png)

接下来，我们来探索一下上面的代码是如何执行的。

在这段代码中，reducer 是 add 。

首先，因为我们是第一次执行add，所以数组中的第一个元素'a'会被当作add的第一个参数，然后循环会从数组的第二个元素'b'开始。这一次，'b' 是 add 的第二个参数。

![图片](https://qn.huat.xyz/mac/20220724210915.png)

第一次计算后，我们得到结果'ab'。此结果将被缓存并在下一次添加计算中用作 param1。同时，数组中的第三个参数'c'将用作add的param2。

![图片](https://qn.huat.xyz/mac/20220724210924.png)

同样，reduce 会继续遍历数组中的元素，运行 'abc' 和 'd' 作为 add 的参数。

![图片](https://qn.huat.xyz/mac/20220724210931.png)

最后，遍历数组中最后一个元素后，返回计算结果。

![图片](https://qn.huat.xyz/mac/20220724210939.png)

现在我们有了结果：'abcde'。

所以，我们可以看到reduce也是一种遍历数组的方式！它依次取数组中每个元素的值并执行reducer函数。

但我们可以看到，上面的循环并没有那种和谐的美感。因为我们把数组的第一个元素，也就是'a'作为初始的param1，然后从数组的第二个元素循环得到param2。

实际上，我们可以将reduce中的第二个参数指定为reducer函数的param1的初始值，这样param2就会从数组的第一个元素开始循环获取。

代码如下：

```js

var arr = ['a', 'b', 'c', 'd', 'e'];

function add(x, y) {
  return x + y;
}

arr.reduce(add, 's')
```

![图片](https://qn.huat.xyz/mac/20220724211007.png)

这一次，我们第一次调用reducer时将's'作为param1，然后从第一个元素开始依次遍历数组。

![图片](https://qn.huat.xyz/mac/20220724211016.png)

所以我们可以使用这个语法来重写我们的第一个代码片段。

```js

var arr = ['a', 'b', 'c', 'd', 'e'];
function add(x, y) {
    return x + y;
}
arr.reduce(add, '')
```

接下来，我们将进入实际编程章节，体验reduce的强大威力。

**1、累加和累积乘法**

如果我们想得到数组中所有元素的总和，你会怎么做？

一般来说，你可能会这样写：

```js
function accumulation(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
```

当然，你可能还有其他的写法，但是只要使用for循环，代码就会显得多余。

那我们看看上面的累加函数是做什么的：

- 将初始总和设置为零
- 取出数组中的第一个元素并求和
- 在 sum 中缓存上一步的结果
- 依次取出数组中的其他元素，进行上述操作
- 返回最终结果

我们可以看到，当我们用文字描述上述步骤时，很明显它符合reduce的使用。所以我们可以使用reduce来重写上面的代码：

```js
function accumulation(arr) {
  function reducer(x, y) {
    return x + y
  }

  return arr.reduce(reducer, 0);
}
```

如果你习惯使用箭头函数，上面的代码看起来会更简洁：

```js
function accumulation(arr) {
  return arr.reduce((x, y) => x + y, 0);
}
```

一行代码搞定！

![图片](https://qn.huat.xyz/mac/20220724211345.png)

当然，累积乘法和累加是完全一样的：

```js
function multiplication(arr) {
    return arr.reduce((x, y) => x * y, 1);
}
```

很多时候，我们在求和的时候需要加上一个权重，这样更能体现reduce的优雅。

```js
const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 }
];
const result = scores.reduce((x, y) => x + y.score * y.weight, 0); // 89
```

**2、获取一个数组的最大值和最小值**

如果要获取数组的最大值和最小值，可以这样写：

```js
function max(arr){
  let max = arr[0];
  for (let ele of arr) {
    if(ele > max) {
      max = ele;
    }
  }
  return max;
}
```

这和以前一样，如果我们使用reduce，我们可以在一行代码中完成。

```js
const arr = [3.24, 2.78, 999];
arr.reduce((x, y) => Math.max(x, y));
arr.reduce((x, y) => Math.min(x, y));
```

![图片](https://qn.huat.xyz/mac/20220724211559.png)



**3、计算数组中元素出现的频率**

我们经常需要统计数组中每个元素出现的次数。reduce 方法可以帮助我们实现这一点。

```js
function countFrequency(arr) {
  return arr.reduce(function(result, ele){
    // Judge whether this element has been counted before
    if (result.get(ele) != undefined) {
      /**
        * If this element has been counted before,
        * increase the frequency of its occurrence by 1
        */
      result.set(ele, result.get(ele) + 1)
    } else {
      /**
        * If this element has not been counted before,
        * set the frequency of its occurrence to 1
        */
      result.set(ele, 1);
    }
    return result;
  }, new Map());
}
```

注意，我们使用map对象而不是对象来存储统计后的频率，因为数组中的元素可能是对象类型，而对象的key只能是字符串或符号类型。

这里有两个例子：

![图片](https://qn.huat.xyz/mac/20220724211624.png)



![图片](https://qn.huat.xyz/mac/20220724211915.png)

同样，如果要统计字符串中每个字符出现的频率，可以先将字符串转换为字符数组，然后按照上面的方法。

```js
const str = 'helloworld';

str.split('').reduce((result, currentChar) => {
    result[currentChar] ? result[currentChar] ++ : result[currentChar] = 1;
    return result;                           
}, {})
```



![图片](https://qn.huat.xyz/mac/20220724211959.png)

因为字符类型可以用作对象的键，所以我们这里不使用 Map。

**4、多个数组的展平**

```js
function flat(arr = []) {
    return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
}
```



![图片](https://qn.huat.xyz/mac/20220724212026.png)



通过reduce依次访问数组中的每个元素。如果我们发现元素还是一个数组，就递归调用 flat 方法。

**总结**

以上就是我今天跟你分享的4个关于数组reduce的用法，希望对你有所帮助。