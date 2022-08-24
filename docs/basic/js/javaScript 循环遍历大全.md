# javaScript 循环遍历大全

## **1、关于JS循环遍历**

写下这篇文章的目的，主要是想总结一下关于JS对于集合对象遍历的方式方法，以及在实际应用场景中怎样去使用它们。本文会主要介绍：while,for,forEach,every,some,filter,reduce,map,indexOf…

## **2、while/do while循环**

while、do while主要的功能是，当满足while后边所跟的条件时，来执行相关业务。这两个的区别是，while会先判断是否满足条件，然后再去执行花括号里面的任务，而do while则是先执行一次花括号中的任务，再去执行while条件，判断下次还是否再去执行do里面的操作。也就是说 **do while至少会执行一次操作**，生产中这个就可能用的比较少了，因为他与接下来要讲的for循环相比，个人觉得可读性上差了一点。

```js
while(条件){
     执行...
}
------------
do{
    执行...
}
while(条件)
```



## **3、for循环** 

普通for循环，经常用的数组遍历

```js
// let arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```



优化版for循环:使用变量，将长度缓存起来，避免重复获取长度，数组很大时优化效果明显

```javascript
for(let j = 0,len = arr.length; j < len; j++){
    console.log(arr[j]);
}
```

## **4、for…in**

for....in 是es5标准， 此方法遍历数组效率低，主要是用来循环遍历对象的属性

for…in的作用主要是去遍历对象的**可枚举属性**。即for-in是为遍历对象而设计的，不适用于遍历数组。

遍历数组的缺点：数组的下标index值是数字，for-in遍历的index值"0","1","2"等是字符串

```js
 var foo = {
    name: 'bar',
    sex: 'male'
}
Object.defineProperty(foo, "age", { value : 18})
for(var a in foo){
    console.log(`可枚举属性：${a}`)
}
console.log(`age属性：${foo.age}`)
```



因为Object.defineProperty，建立的属性，默认不可枚举，因此在浏览器中打印的结果为：   

![img](https://qn.huat.xyz/mac/20220822124413.jpeg)

   在JS当中，数组也算作对象，但一般不推荐把for…in用在数组遍历上面，如果for…in普通数组的话，a返回数组的索引。

**增强for…in循环：**

```js
var obj = {a: 1, b: 2, c: 3}; 
 
for (var i in obj) { 
    console.log('键名：', i); 
    console.log('键值：', obj[i]); 
} 
// 键名：a   //键值：1             //键名：b   //键值：2
 
// 其中 obj为循环的对象， i 为对象中的“键名”。如果对象是数组，那么i就是坐标。
```



**注意：fo…in循环一般用于对象的遍历，但是这里有一个坑需要注意：**

​    **任何对象都继承了Object对象，或者其它对象，继承的类的属性是默认不可遍历的，for... in循环遍历的时候会跳过，但是这个属性是可以更改为可以遍历的，那么就会造成遍历到不属于自身的属性。**

**举例来说，对象都继承了toString属性，但是for...in循环不会遍历到这个属性。**



```js
var obj = {};// toString 属性是存在的obj.toString 
// toString() { [native code] }
for (var p in obj) { 
     console.log(p);
} // 没有任何输出
```

**如果继承的属性是可遍历的，那么就会被`for...in`循环遍历到。但如果只想遍历自身的属性，使用`for...in`的时候，应该结合使用`hasOwnProperty`方法，在循环内部判断一下，某个属性是否为对象自身的属性。否则就可以产生遍历失真的情况。**

```js
var person = { name: '老张' };
for (var key in person) {  
    if (person.hasOwnProperty(key)) {   
         console.log(key);
      }
}// name
```

## **5、for…of**

for…of是ES6新增的方法，但是for…of不能去遍历普通的对象，**for…of的好处是可以使用break跳出循环。**

- for-of这个方法避开了for-in循环的所有缺陷
- 与forEach()不同的是，它可以正确响应break、continue和return语句 

for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM [NodeList对象](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)。

for-of循环也支持字符串遍历

```js
// for of 循环 直接得到的就是值  !!!
for (var v of arr) {
 console.log(v)
}
```

## **6、every/some**

**返回一个布尔值**。当我们需要判定数组中的元素是否满足某些条件时，可以使用every/some。这两个的区别是，every会去判断判断数组中的每一项，而some则是当某一项满足条件时返回。例如：

```javascript
let foo=[5,1,3,7,4].every(function (item,index) {
    console.log(`索引：${index}，数值：${item}`)
    return item>2
})
console.log(foo)
```



打印结果为：   

![img](https://qn.huat.xyz/mac/20220822124534.png)

   当第二项不满足条件式跳出循环，返回false。

```javascript
let foo=[5,1,3,7,4].some(function (item,index) {
    console.log(`索引：${index}，数值：${item}`)
    return item>2
})
console.log(foo)
```



打印结果为：   

![img](https://qn.huat.xyz/mac/20220822124538.png)

 当数组的某项满足条件时跳出循环，返回true.   

 在按照约定条件**筛选数组**时，every/some是非常方便的方法。



**every/some方法详解**

 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

​    它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。

​         **some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。(一真必真  相当于||)**

```js
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true   
```

​     **而every方法则相反，所有成员的返回值都是true，整个every方法才返回true，否则返回false。两相比较，some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false. (一假必假  相当于&&)**



## **7、filter**

**筛选出一个满足相关条件的新数组。**

**filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。**

```javascript
let foo=[5,1,3,7,4].filter(function (item,index) {
    console.log(`索引：${index}，数值：${item}`)
    return item>2
})
console.log(foo)
```



![img](https://qn.huat.xyz/mac/20220822124641.png)

  将满足返回值条件的item组成一个新的数组。过滤器，顾名思义，比较好理解。在按照约定条件**筛选数组元素**时，filter比较方便。filter() 不会改变原始数组。

```js
var ages = [16, 17, 18, 19, 20];
var newAges = ages.filter(function (v, i) {
    // console.log(v, i)
    return v >= 18;
})
console.log(newAges)
```



```js
[1, 2, 3, 4, 5].filter(function (elem) {
     return (elem > 3); 
}) // [4, 5]
 
// 上面代码将大于3的数组成员，作为一个新数组返回。
 
var arr = [0, 1, 'a', false]; 
arr.filter(Boolean) // [1, "a"]
```



**filter方法的参数函数也可以接受三个参数：当前成员，当前位置和整个数 组。**

```js
[1, 2, 3, 4, 5].filter(function (elem, index, arr) { 
    return index % 2 === 0; 
}); // [1, 3, 5]
```



**此外，filter方法也可以接受第二个参数，用来绑定参数函数内部的this变量。**

```js
var obj = { MAX: 3 };
var myFilter = function (item) {
     if (item > this.MAX) return true; 
}; 
var arr = [2, 8, 3, 4, 1, 3, 2, 9]; 
arr.filter(myFilter, obj) // [8, 4, 9]
```



上面代码中，过滤器myFilter内部有this变量，它可以被filter方法的第二个参数obj绑定，返回大于3的成员。

## **8、map**

map即是 “映射”的意思 ，原数组被“映射”成对应新数组

map：支持return，相当与原数组克隆了一份，把克隆的每项改变了，也不影响原数组

```javascript
let foo=[5,1,3,7,4].map(function (item,index) {
                console.log(`索引：${index}，数值：${item}`)
                return item+2
            })
            console.log(foo)
```



![img](https://qn.huat.xyz/mac/20220822124710.png)

 **返回一个将每个元素进行“二次加工”的新数组**，map与filter都是返回一个新的数组，区别则是filter是将原数组，通过相关条件筛选出合法的item，来组成一个新的数组，而map则是将每个item通过再加工来返回一个新的数组。

 **map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。**

注意：是返回一个新数组，而不会改变原数组。

```js
var numbers = [1, 2, 3];
 
var newArr=numbers.map(function (v, i) { 
     // console.log(v, i)
     return v + 1; 
}); 
// newArr   [2, 3, 4] 
 
numbers // [1, 2, 3]
```



**map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。**

```js
[1, 2, 3].map(function(elem, index, arr) { 
    return elem * index; 
}); 
// [0, 2, 6]
```



**此外，map()循环还可以接受第二个参数，用来绑定回调函数内部的this变量，将回调函数内部的this对象，指向第二个参数，间接操作这个参数（一般是数组）。**

```js
var arr = ['a', 'b', 'c'];
 
[1, 2].map(function (e) {
    return this[e];
}, arr)
 // ['b', 'c']
```





## **9、reduce**

**将数组元素做“叠加”处理，返回一个值。**

```javascript
let foo=[5,1,3,7,4].reduce(function (pre,cur) {
  console.log(`索引：${pre}，数值：${cur}`)
  return pre+cur
})
console.log(foo)
```



打印结果为：   

![img](https://qn.huat.xyz/mac/20220822124733.png)

   pre为累加值，cur为当前值。reduce函数值得注意的是，reduce(fn,init)第二个参数，可以传一个初始值，如果代码改成这样：

```javascript
let foo=[5,1,3,7,4].reduce(function (pre,cur) {
    console.log(`索引：${pre}，数值：${cur}`)
    return pre+cur
},'')
console.log(foo)
```



则为：   

![img](https://qn.huat.xyz/mac/20220822124810.png)

`**reduce**`**方法和**`**reduceRight**`**方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，**`**reduce**`**是从左到右处理（从第一个成员到最后一个成员），**`**reduceRight**`**则是从右到左（从最后一个成员到第一个成员），其他完全一样。**

```js
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```



`**reduce**`**方法和**`**reduceRight**`**方法的第一个参数都是一个函数。该函数接受以下四个参数。**

1. **累积变量，默认为数组的第一个成员**
2. **当前变量，默认为数组的第二个成员**
3. **当前位置（从0开始）**
4. **原数组**

   **这四个参数之中，只有前两个是必须的，后两个则是可选的**。

如果要对累积变量指定初值，可以把它放在`reduce`方法和`reduceRight`方法的第二个参数。

```js
[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
```

## **10.Object,keys**遍历对象的属性

`**Object.keys**`**方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名，且只返回可枚举的属性。**

```js
var obj = {
  p1: 123,
  p2: 456
};
 
Object.keys(obj) // ["p1", "p2"]
```

## 11、**Object.getOwnPropertyNames()  遍历对象的属性**

`**Object.getOwnPropertyNames**`**方法与**`**Object.keys**`**类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。但它能返回不可枚举的属性。**

```js
var a = ['Hello', 'World'];
 
Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]
```



**上面代码中，数组的`length`属性是不可枚举的属性，所以只出现在`Object.getOwnPropertyNames`方法的返回结果中。**

**由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。**

```js
var obj = {
  p1: 123,
  p2: 456
};
 
Object.keys(obj).length // 2
Object.getOwnPropertyNames(obj).length // 2
```



**使用Object.getOwnPropertyNames(obj)遍历**       

 **返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).**

```js
var obj = {'0':'a','1':'b','2':'c'};
Object.getOwnPropertyNames(obj).forEach(function(key){

    console.log(key,obj[key]);

});
```





![img](https://qn.huat.xyz/mac/20220822124844.png)

## **11、indexOf**

**返回指定字符串首次出现的位置**

```javascript
 let foo=['57','17','37','7','4'].indexOf('7')
 console.log(foo)
```



![img](https://qn.huat.xyz/mac/20220822124852.png)

   这个函数比较常用的应用场景是，在做if判断时，可以代替||，&&等关系符。比如：   

![img](https://ask.qcloudimg.com/http-save/yehe-4630018/iwhexlrfd9.png?imageView2/2/w/1620)

   可以代替   if（value==’next’||value==’pre’）的这种写法，当判断元素较多时，这种写法比较划算。



## 12、循环特征（相同与不同）

```js
以上循环特征（相同与不同）：

一：map()，foreach，filter循环的共同之处：

      1.foreach，map，filter循环中途是无法停止的，总是会将所有成员遍历完。

      2.他们都可以接受第二个参数，用来绑定回调函数内部的this变量，将回调函数内部的this对象，指向第二个参数，间接操作这个参数（一般是数组）。

二：map()循环和forEach循环的不同：

           forEach循环没有返回值；map，filter循环有返回值。

三：map(环和filter()循环都会跳过空位，for和while不会


四：some()和every():

       some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false.

五：reduce()，reduceRight()：

       reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员）。

六：Object对象的两个遍历Object.keys与Object.getOwnPropertyNames：

   他们都是遍历对象的属性，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。但Object.keys不能返回不可枚举的属性；Object.getOwnPropertyNames能返回不可枚举的属性。
```



## **13、总结**

**个人非常喜欢filter/map/reduce，但是看到身边的同学一言不合就foreach,替这三个函数心疼几秒。。。不过低版本浏览器也确实不支持这些函数。。。根据自己需要去选择合适的遍历方式可以大大提升效率。哦耶**