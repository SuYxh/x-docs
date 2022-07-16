# css选择器:nth-child()的用法

## :nth-child()

:nth-child() [选择器](https://so.csdn.net/so/search?q=%E9%80%89%E6%8B%A9%E5%99%A8&spm=1001.2101.3001.7020)，该选择器选取父元素的第 N 个子元素，与类型无关。

## 一、选择列表中的偶数标签`:nth-child(2n)`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013113346788.png)

## 二、选择列表中的奇数标签 `:nth-child(2n-1)`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013113409894.png)

## 三、选择从第6个开始的，直到最后`:nth-child(n+6)`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013113424502.png)

## 四、选择第1个到第6个 `:nth-child(-n+6)`

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101311343862.png)

## 五、两者结合使用，可以限制选择某一个范围，选择第6个到第9个 `:nth-child(n+6):nth-child(-n+9)`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013113456231.png)

## :nth-last-child() 选择器

:nth-last-child(n) 选择器匹配属于其元素的第 N 个子元素的每个元素，不论元素的类型，从最后一个子元素开始计数。

n 可以是数字、关键词或公式。

提示：请参阅 :nth-last-of-type() 选择器，该选择器选取父元素的第 N 个指定类型的子元素，从最后一个子元素开始计数。

```css
/*选择列表中的倒数第n个标签 n为数字*/
:nth-last-child(n) 

/*选择倒数最后n个*/
item:nth-last-child(-n+2){}
```

## :nth-of-type(n)

:nth-of-type(n) 选择器匹配属于父元素的`特定类型`的第 N 个子元素的每个元素.

n 可以是数字、关键词或公式。

```css
p:nth-of-type(2)
{
	background:#ff0000;
}
```

```html
<body>
	<h1>这是标题</h1>
	<p>第一个段落。</p>
	<div>测试</div>
	<p>第二个段落。</p>
	<p>第三个段落。</p>
	<p>第四个段落。</p>
	<p>第五个段落。</p>
</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201013114711811.png#pic_center)

```css
/* 选择第n个，n位数字  */
:nth-child(n)

/* 选择列表中的偶数标签 */
:nth-child(2n)

/*选择列表中的奇数标签 */
:nth-child(2n-1)

/*选择前几个元素 */
/*【负方向范围】选择第1个到第6个 */
:nth-child(-n+6){}

/*从第几个开始选择*/
/*【正方向范围】选择从第6个开始的，直到最后  */
:nth-child(n+6){}

/*两者结合使用，可以限制选择某一个范围 */
/*【限制范围】选择第6个到第9个，取两者的交集【感谢小伙伴的纠正~】 */
 :nth-child(n+6):nth-child(-n+9)

/*选择列表中的倒数第n个标签 n为数字 */
:nth-last-child(n) 

/*选择倒数最后n个 */
item:nth-last-child(-n+2){}
```