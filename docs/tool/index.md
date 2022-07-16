## 前言

在开发中，我们经常会将一些常用的代码块、功能块进行封装，为的是更好的复用。那么，被抽离出来独立完成功能，通过API或配置项和其他部分交互，便形成了插件。

下面这些是我在工作中积累的一些常用的前端开源插件，这里只是罗列出来，详细的用法各个插件官网或者Gayhub都有介绍。注意：往往一个解决方案会有多个插件，需要读者根据自己的实际业务需求进行甄别选用，欢迎留言交流和补充。`^_^`

可以先加个收藏（Ctrl + D），以后遇到类似的场景就来看看具体的插件及其用法。

另外，不要重复造轮子，把精力放在业务逻辑上！

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/24/166079d2288fa279~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 函数库

Lodash（推荐）：[github.com/lodash/loda…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Flodash%2Flodash "https://github.com/lodash/lodash")

Underscore：[underscorejs.org/](https://link.juejin.cn/?target=https%3A%2F%2Funderscorejs.org%2F "https://underscorejs.org/")

Ramda：[github.com/ramda/ramda](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Framda%2Framda "https://github.com/ramda/ramda")

outils：[github.com/proYang/out…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FproYang%2Foutils "https://github.com/proYang/outils")

30-seconds-of-code：[github.com/Chalarangel…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FChalarangelo%2F30-seconds-of-code "https://github.com/Chalarangelo/30-seconds-of-code")

## 动画库

Animate.css

-   CSS3 动画库，也是目前最通用的动画库。
-   [daneden.github.io/animate.css…](https://link.juejin.cn/?target=https%3A%2F%2Fdaneden.github.io%2Fanimate.css%2F "https://daneden.github.io/animate.css/")

Anime.js：

-   一个强大的、轻量级的用来制作动画的javascript库
-   [animejs.com/](https://link.juejin.cn/?target=http%3A%2F%2Fanimejs.com%2F "http://animejs.com/")

Hover.css：

-   CSS hover 悬停效果，可以应用于链接、按钮、图片等等。
-   [github.com/IanLunn/Hov…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FIanLunn%2FHover "https://github.com/IanLunn/Hover")

wow.js:

-   滚动展示动画
-   WOW.js 依赖 animate.css，所以它支持 animate.css 多达 60 多种的动画效果。
-   [github.com/matthieua/W…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmatthieua%2FWOW "https://github.com/matthieua/WOW")

scrollReveal.js：

-   类似 wow.js
-   [github.com/jlmakes/scr…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjlmakes%2Fscrollreveal "https://github.com/jlmakes/scrollreveal")

Magic.css：

-   css3 animation动画库
-   [github.com/miniMAC/mag…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FminiMAC%2Fmagic "https://github.com/miniMAC/magic")

Waves：

-   点击波纹效果
-   [github.com/fians/Waves](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffians%2FWaves "https://github.com/fians/Waves")

move.js：

-   一个小型的JavaScript库，通过JS来控制一系列的CSS动画顺序执行，使CSS3动画变得非常简单和优雅。
-   [github.com/visionmedia…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvisionmedia%2Fmove.js "https://github.com/visionmedia/move.js")

Velocity.js：

-   一个功能齐全的 JavaScript 动画套件，包括诸如淡入淡出、滚动、滚动、停止、结束、翻转等动画效果。
-   [github.com/julianshapi…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjulianshapiro%2Fvelocity "https://github.com/julianshapiro/velocity")

## 滚动库

iscroll - 平滑滚动插件：[github.com/cubiq/iscro…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcubiq%2Fiscroll "https://github.com/cubiq/iscroll")

BetterScroll：

-   [github.com/ustbhuangyi…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fbetter-scroll "https://github.com/ustbhuangyi/better-scroll")
-   iscroll 的优化版，使移动端滑动体验更加流畅

mescroll：

-   移动端上拉刷新下拉加载
-   [www.mescroll.com/api.html](https://link.juejin.cn/?target=http%3A%2F%2Fwww.mescroll.com%2Fapi.html "http://www.mescroll.com/api.html")

animatescroll：

-   jQuery滚动到指定位置
-   [plugins.compzets.com/animatescro…](https://link.juejin.cn/?target=https%3A%2F%2Fplugins.compzets.com%2Fanimatescroll%2F "https://plugins.compzets.com/animatescroll/")

crossfade.js：

-   jQuery图片模糊插件crossfade.js
-   [www.dowebok.com/104.html](https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F104.html "http://www.dowebok.com/104.html")

jQuery Scrollbox：

-   图片文字滚动插件
-   [www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info1890 "http://www.jq22.com/jquery-info1890")

liMarquee：

-   jQuery无缝滚动插件
-   [www.dowebok.com/188.html](https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F188.html "http://www.dowebok.com/188.html")

## 轮播图

Swiper：

-   常用于移动端网站的内容触摸滑动
-   [www.swiper.com.cn/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.swiper.com.cn%2F "https://www.swiper.com.cn/")

iSlider：

-   移动端滑动组件
-   [eux.baidu.com/iSlider/dem…](https://link.juejin.cn/?target=http%3A%2F%2Feux.baidu.com%2FiSlider%2Fdemo%2Findex_chinese.html "http://eux.baidu.com/iSlider/demo/index_chinese.html")

slip.js：

-   移动端跟随手指滑动组件，零依赖。
-   [github.com/binnng/slip…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbinnng%2Fslip.js "https://github.com/binnng/slip.js")

OwlCarousel2：[owlcarousel2.github.io/OwlCarousel…](https://link.juejin.cn/?target=http%3A%2F%2Fowlcarousel2.github.io%2FOwlCarousel2%2F "http://owlcarousel2.github.io/OwlCarousel2/")

slick：[www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info406 "http://www.jq22.com/jquery-info406")

myFocus：[www.cosmissy.com/myfocus/tut…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.cosmissy.com%2Fmyfocus%2Ftutorials.html "http://www.cosmissy.com/myfocus/tutorials.html")

WebSlides：[github.com/webslides/w…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebslides%2Fwebslides%2F "https://github.com/webslides/webslides/")

jQuery轮播插件slider：[www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info889 "http://www.jq22.com/jquery-info889")

## 滚屏

fullpage：[www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info1124 "http://www.jq22.com/jquery-info1124")

## 弹出框

layer：

-   [layer.layui.com/](https://link.juejin.cn/?target=http%3A%2F%2Flayer.layui.com%2F "http://layer.layui.com/")
-   layui 独立维护的三大组件之一（layDate、layer、layim）
-   尽管 layui 中包含了这些组件，但因为它们受众群体广泛或应用广泛，特从 layui 中抽取出来个副本，可独立引用。我们也会对它们进行同步维护。

Bootbox.js：[bootboxjs.com/](https://link.juejin.cn/?target=http%3A%2F%2Fbootboxjs.com%2F "http://bootboxjs.com/")

dialogBox：

-   基于 jQuery
-   [www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info4822 "http://www.jq22.com/jquery-info4822")

easyDialog：[www.h-ui.net/easydialog-…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.h-ui.net%2Feasydialog-v2.0%2Findex.html "http://www.h-ui.net/easydialog-v2.0/index.html")

## 消息通知

Notyf：

-   简单的响应式纯js消息通知插件
-   [www.htmleaf.com/jQuery/Ligh…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.htmleaf.com%2FjQuery%2FLightbox-Dialog%2F201609123990.html "http://www.htmleaf.com/jQuery/Lightbox-Dialog/201609123990.html")

PNotify：

-   页面右上角的提示信息（非弹框提示）
-   [sciactive.com/pnotify/](https://link.juejin.cn/?target=https%3A%2F%2Fsciactive.com%2Fpnotify%2F "https://sciactive.com/pnotify/")
-   [sciactive.github.io/pnotify/](https://link.juejin.cn/?target=http%3A%2F%2Fsciactive.github.io%2Fpnotify%2F "http://sciactive.github.io/pnotify/")
-   [github.com/sciactive/p…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fsciactive%2Fpnotify "https://github.com/sciactive/pnotify")

overhang.js：

-   [www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info9193 "http://www.jq22.com/jquery-info9193")
-   overhang.js 是一个JQuery插件显示即时通知、 确认或给定元素中的提示。

## 下拉框

select2：[select2.org/](https://link.juejin.cn/?target=https%3A%2F%2Fselect2.org%2F "https://select2.org/")

## 级联选择器

ustbhuangyi/picker

-   [github.com/ustbhuangyi…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fpicker "https://github.com/ustbhuangyi/picker")
-   移动端最好用的的筛选器组件、联动筛选

jQueryDistpicker：

-   [fengyuanchen.github.io/distpicker/](https://link.juejin.cn/?target=http%3A%2F%2Ffengyuanchen.github.io%2Fdistpicker%2F "http://fengyuanchen.github.io/distpicker/")
-   [www.jq22.com/demo/jQuery…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fdemo%2FjQueryDistpicker20160621%2F "http://www.jq22.com/demo/jQueryDistpicker20160621/")

## 颜色选择器

Bootstrap Colorpicker 2：[github.com/farbelous/b…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffarbelous%2Fbootstrap-colorpicker "https://github.com/farbelous/bootstrap-colorpicker")

## 时间选择器

layDate：[www.layui.com/laydate/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.layui.com%2Flaydate%2F "https://www.layui.com/laydate/")

wdatepicker

## 时间日期处理

Moment.js：

-   Moment.js 是一个解析，验证，操作和显示日期和时间的 JavaScript 类库。
-   [momentjs.com](https://link.juejin.cn/?target=http%3A%2F%2Fmomentjs.com "http://momentjs.com")
-   [github.com/moment/mome…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmoment%2Fmoment "https://github.com/moment/moment")

timeago.js：

-   轻量级的时间转换 Javascript 库
-   [github.com/hustcc/time…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhustcc%2Ftimeago.js "https://github.com/hustcc/timeago.js")

## 表单验证

validator.js：[github.com/chriso/vali…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchriso%2Fvalidator.js "https://github.com/chriso/validator.js")

jQuery Validation

-   jQuery 表单校验
-   [github.com/jquery-vali…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjquery-validation%2Fjquery-validation "https://github.com/jquery-validation/jquery-validation")

Validation Plugin：

-   jQuery插件
-   [www.imooc.com/learn/385](https://link.juejin.cn/?target=http%3A%2F%2Fwww.imooc.com%2Flearn%2F385 "http://www.imooc.com/learn/385")

Validform：

-   一行代码搞定整站的表单验证！- Jquery表单验证插件
-   [validform.rjboy.cn/](https://link.juejin.cn/?target=http%3A%2F%2Fvalidform.rjboy.cn%2F "http://validform.rjboy.cn/")

## 分页插件

pagination：[github.com/superRaytin…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FsuperRaytin%2Fpaginationjs "https://github.com/superRaytin/paginationjs")

## 富文本编辑器

wangEditor：[www.wangeditor.com/](https://link.juejin.cn/?target=http%3A%2F%2Fwww.wangeditor.com%2F "http://www.wangeditor.com/")

百度UEditor：[ueditor.baidu.com/website/](https://link.juejin.cn/?target=https%3A%2F%2Fueditor.baidu.com%2Fwebsite%2F "https://ueditor.baidu.com/website/")

CKEditor：[ckeditor.com/](https://link.juejin.cn/?target=https%3A%2F%2Fckeditor.com%2F "https://ckeditor.com/")

KindEditor：[kindeditor.net/demo.php](https://link.juejin.cn/?target=http%3A%2F%2Fkindeditor.net%2Fdemo.php "http://kindeditor.net/demo.php")

MediumEditor：[yabwe.github.io/medium-edit…](https://link.juejin.cn/?target=http%3A%2F%2Fyabwe.github.io%2Fmedium-editor%2F "http://yabwe.github.io/medium-editor/")

Simditor：[simditor.tower.im/](https://link.juejin.cn/?target=http%3A%2F%2Fsimditor.tower.im%2F "http://simditor.tower.im/")

Summernote：[summernote.org/](https://link.juejin.cn/?target=https%3A%2F%2Fsummernote.org%2F "https://summernote.org/")

Quill：[quilljs.com/](https://link.juejin.cn/?target=https%3A%2F%2Fquilljs.com%2F "https://quilljs.com/")

Slate：[github.com/ianstormtay…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fianstormtaylor%2Fslate "https://github.com/ianstormtaylor/slate")

## Markdown 编辑器

[Editor.md](https://link.juejin.cn/?target=http%3A%2F%2FEditor.md "http://Editor.md")：[pandao.github.io/editor.md/](https://link.juejin.cn/?target=https%3A%2F%2Fpandao.github.io%2Feditor.md%2F "https://pandao.github.io/editor.md/")

## 树插件

[www.treejs.cn](https://link.juejin.cn/?target=http%3A%2F%2Fwww.treejs.cn "http://www.treejs.cn")

## 图片懒加载

lazyload：[github.com/tuupola/jqu…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftuupola%2Fjquery_lazyload "https://github.com/tuupola/jquery_lazyload")

## 瀑布流

Masonry：[www.cnblogs.com/cjc917/p/74…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fcjc917%2Fp%2F7402026.html "https://www.cnblogs.com/cjc917/p/7402026.html")

Metro风兼瀑布流布局效果http://www.lanrenzhijia.com/jquery/1985.html

## 相册（图片滑动切换展示效果）

PC端：Viewer.js：[fengyuanchen.github.io/viewerjs/](https://link.juejin.cn/?target=https%3A%2F%2Ffengyuanchen.github.io%2Fviewerjs%2F "https://fengyuanchen.github.io/viewerjs/")

PC端：photoviewer

移动端：PhotoSwipe：[www.helloweba.net/javascript/…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.helloweba.net%2Fjavascript%2F460.html "https://www.helloweba.net/javascript/460.html")

## 导航插件

okayNav：[www.dowebok.com/204.html](https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F204.html "http://www.dowebok.com/204.html")

## 视频播放器

Chimee

-   组件化H5播放器框架
-   [chimee.org/](https://link.juejin.cn/?target=http%3A%2F%2Fchimee.org%2F "http://chimee.org/")
-   [juejin.cn/post/684490…](https://juejin.cn/post/6844903509582675981 "https://juejin.cn/post/6844903509582675981")

flv.js

-   Bilibili开源纯JavaScript编写的FLV播放器
-   Flash 视频（FLV）播放器
-   [github.com/Bilibili/fl…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FBilibili%2Fflv.js "https://github.com/Bilibili/flv.js")
-   [www.toutiao.com/a6478550535…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.toutiao.com%2Fa6478550535417889293 "https://www.toutiao.com/a6478550535417889293")

ckplayer：[www.ckplayer.com/](https://link.juejin.cn/?target=http%3A%2F%2Fwww.ckplayer.com%2F "http://www.ckplayer.com/")

jplayer：[www.jplayer.cn/](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jplayer.cn%2F "http://www.jplayer.cn/")

html5player：[juejin.cn/post/684490…](https://juejin.cn/post/6844903487910723592 "https://juejin.cn/post/6844903487910723592")

Video.js

-   开源、免费的HTML5和Flash视频播放器
-   Video.js - 开源、免费的HTML5和Flash视频播放器

多青：[dogeek.net/](https://link.juejin.cn/?target=https%3A%2F%2Fdogeek.net%2F "https://dogeek.net/")

## 弹幕视频播放器

DanmuPlayer - Html5弹幕视频播放器插件：[github.com/chiruom/Dan…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchiruom%2FDanmuPlayer "https://github.com/chiruom/DanmuPlayer")

jquery.danmu.js - jQuery弹幕插件：[github.com/chiruom/jqu…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchiruom%2Fjquery.danmu.js "https://github.com/chiruom/jquery.danmu.js")

scroxt - 字幕字体滚动插件：[github.com/chenjianfan…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchenjianfang%2Fscroxt "https://github.com/chenjianfang/scroxt")

## 复制粘贴插件

clipboard.js：[github.com/zenorocha/c…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzenorocha%2Fclipboard.js%2F "https://github.com/zenorocha/clipboard.js/")

ZeroClipboard：[github.com/zeroclipboa…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzeroclipboard%2Fzeroclipboard "https://github.com/zeroclipboard/zeroclipboard")

## 条形码插件

barcode

## 二维码插件

jquery.qrcode.js：[github.com/jeromeetien…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjeromeetienne%2Fjquery-qrcode "https://github.com/jeromeetienne/jquery-qrcode")

## 拖拽

Draggabilly：[www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info293 "http://www.jq22.com/jquery-info293")

dragula：[www.toutiao.com/a6491847196…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.toutiao.com%2Fa6491847196890104334 "https://www.toutiao.com/a6491847196890104334")

## 手机端事件

touch.js

## 文件上传

uploader

WebUploader：

-   [github.com/fex-team/we…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffex-team%2Fwebuploader%2F "https://github.com/fex-team/webuploader/")
-   HTML5 & FLASH 文件上传

## 代码高亮

hightlight：[highlightjs.org/](https://link.juejin.cn/?target=https%3A%2F%2Fhighlightjs.org%2F "https://highlightjs.org/")

## 前端国际化 i18n

i18next：[github.com/i18next/i18…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fi18next%2Fi18next "https://github.com/i18next/i18next")

vue-i18n：[github.com/kazupon/vue…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fkazupon%2Fvue-i18n "https://github.com/kazupon/vue-i18n")

前端系列——jquery.i18n.properties前端国际化解决方案“填坑日记”：[www.cnblogs.com/landeanfen/…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.cnblogs.com%2Flandeanfen%2Fp%2F7581609.html "http://www.cnblogs.com/landeanfen/p/7581609.html")

基于jQuery.i18n.properties 实现前端页面的资源国际化：[m.blog.csdn.net/aixiaoyang1…](https://link.juejin.cn/?target=http%3A%2F%2Fm.blog.csdn.net%2Faixiaoyang168%2Farticle%2Fdetails%2F49336709 "http://m.blog.csdn.net/aixiaoyang168/article/details/49336709")

## 地图

百度地图：[lbsyun.baidu.com/](https://link.juejin.cn/?target=http%3A%2F%2Flbsyun.baidu.com%2F "http://lbsyun.baidu.com/")

谷歌地图：[www.runoob.com/googleapi/g…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.runoob.com%2Fgoogleapi%2Fgoogle-maps-api-key.html "http://www.runoob.com/googleapi/google-maps-api-key.html")

高德地图：[lbs.amap.com/](https://link.juejin.cn/?target=https%3A%2F%2Flbs.amap.com%2F "https://lbs.amap.com/")

腾讯地图：[lbs.qq.com/](https://link.juejin.cn/?target=https%3A%2F%2Flbs.qq.com%2F "https://lbs.qq.com/")

## 网页即时通讯

LayIM：[layim.layui.com/](https://link.juejin.cn/?target=http%3A%2F%2Flayim.layui.com%2F "http://layim.layui.com/")

闲聊么：[www.xianliao.me/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.xianliao.me%2F "https://www.xianliao.me/")

## 数据可视化

ECharts ：[echarts.baidu.com/index.html](https://link.juejin.cn/?target=http%3A%2F%2Fecharts.baidu.com%2Findex.html "http://echarts.baidu.com/index.html")

阿里云 DataV

## PDF 阅读器

[github.com/mozilla/pdf…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmozilla%2Fpdf.js "https://github.com/mozilla/pdf.js")

## 主题色提取

RGBaster：[github.com/briangonzal…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbriangonzalez%2Frgbaster.js "https://github.com/briangonzalez/rgbaster.js")

Color Thief

vibrant.js

## 前端存储

ustbhuangyi/storage：

-   封装了sessionStorage和localStorage
-   [github.com/ustbhuangyi…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fstorage "https://github.com/ustbhuangyi/storage")

store.js

-   本地存储localstorage的封装
-   [github.com/jaywcjlove/…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjaywcjlove%2Fstore.js "https://github.com/jaywcjlove/store.js")

localForage：[github.com/localForage…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FlocalForage%2FlocalForage "https://github.com/localForage/localForage")

## 数据 Mock

Easy Mock：[github.com/easy-mock/e…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Feasy-mock%2Feasy-mock "https://github.com/easy-mock/easy-mock")

Mockjs：

-   [mockjs.com](https://link.juejin.cn/?target=http%3A%2F%2Fmockjs.com "http://mockjs.com")
-   生成任意随机数据，拦截 Ajax 请求

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/24/166079d224e4e7da~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

json-server + fakerjs：[github.com/typicode/js…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fjson-server "https://github.com/typicode/json-server")

## 分享

bShare

JiaThis（关闭了！！！）

QQ分享组件

百度分享

## 评论

Gitalk

gitment

畅言

来必力

友言（关闭了！！！）

网易云跟贴（关闭了！！！）

## 其他

IE浏览器版本过低提示插件IEalert.js：[www.jqueryfuns.com/resource/45…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jqueryfuns.com%2Fresource%2F455 "http://www.jqueryfuns.com/resource/455")

lyric-parser - QQ音乐歌词解析：[github.com/ustbhuangyi…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Flyric-parser "https://github.com/ustbhuangyi/lyric-parser")

holder.js - 图片占位符插件：[github.com/imsky/holde…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fimsky%2Fholder "https://github.com/imsky/holder")

jQuery放大镜插件jqzoom.js：[www.jq22.com/jquery-info…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info648 "http://www.jq22.com/jquery-info648")

Zooming – JavaScript图片缩放库：[www.dowebok.com/223.html](https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F223.html "http://www.dowebok.com/223.html")

fastclick - 消除 click 移动浏览器300ms延迟：[github.com/ftlabs/fast…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fftlabs%2Ffastclick "https://github.com/ftlabs/fastclick")

jsonp - 一个简单的JSONP实现：[github.com/webmodules/…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebmodules%2Fjsonp "https://github.com/webmodules/jsonp")

js-base64 - Base64 编码解码：[github.com/dankogai/js…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdankogai%2Fjs-base64 "https://github.com/dankogai/js-base64")

新手引导：[github.com/easelinc/to…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Feaselinc%2Ftourist "https://github.com/easelinc/tourist")