import{o as t,c as e,e as r}from"./app.ed9436e4.js";const i='{"title":"前言","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"函数库","slug":"函数库"},{"level":2,"title":"动画库","slug":"动画库"},{"level":2,"title":"滚动库","slug":"滚动库"},{"level":2,"title":"轮播图","slug":"轮播图"},{"level":2,"title":"滚屏","slug":"滚屏"},{"level":2,"title":"弹出框","slug":"弹出框"},{"level":2,"title":"消息通知","slug":"消息通知"},{"level":2,"title":"下拉框","slug":"下拉框"},{"level":2,"title":"级联选择器","slug":"级联选择器"},{"level":2,"title":"颜色选择器","slug":"颜色选择器"},{"level":2,"title":"时间选择器","slug":"时间选择器"},{"level":2,"title":"时间日期处理","slug":"时间日期处理"},{"level":2,"title":"表单验证","slug":"表单验证"},{"level":2,"title":"分页插件","slug":"分页插件"},{"level":2,"title":"富文本编辑器","slug":"富文本编辑器"},{"level":2,"title":"Markdown 编辑器","slug":"markdown-编辑器"},{"level":2,"title":"树插件","slug":"树插件"},{"level":2,"title":"图片懒加载","slug":"图片懒加载"},{"level":2,"title":"瀑布流","slug":"瀑布流"},{"level":2,"title":"相册（图片滑动切换展示效果）","slug":"相册（图片滑动切换展示效果）"},{"level":2,"title":"导航插件","slug":"导航插件"},{"level":2,"title":"视频播放器","slug":"视频播放器"},{"level":2,"title":"弹幕视频播放器","slug":"弹幕视频播放器"},{"level":2,"title":"复制粘贴插件","slug":"复制粘贴插件"},{"level":2,"title":"条形码插件","slug":"条形码插件"},{"level":2,"title":"二维码插件","slug":"二维码插件"},{"level":2,"title":"拖拽","slug":"拖拽"},{"level":2,"title":"手机端事件","slug":"手机端事件"},{"level":2,"title":"文件上传","slug":"文件上传"},{"level":2,"title":"代码高亮","slug":"代码高亮"},{"level":2,"title":"前端国际化 i18n","slug":"前端国际化-i18n"},{"level":2,"title":"地图","slug":"地图"},{"level":2,"title":"网页即时通讯","slug":"网页即时通讯"},{"level":2,"title":"数据可视化","slug":"数据可视化"},{"level":2,"title":"PDF 阅读器","slug":"pdf-阅读器"},{"level":2,"title":"主题色提取","slug":"主题色提取"},{"level":2,"title":"前端存储","slug":"前端存储"},{"level":2,"title":"数据 Mock","slug":"数据-mock"},{"level":2,"title":"分享","slug":"分享"},{"level":2,"title":"评论","slug":"评论"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"tool/index.md","lastUpdated":1657969904951}',l={},o=[r('<h2 id="前言">前言</h2><p>在开发中，我们经常会将一些常用的代码块、功能块进行封装，为的是更好的复用。那么，被抽离出来独立完成功能，通过API或配置项和其他部分交互，便形成了插件。</p><p>下面这些是我在工作中积累的一些常用的前端开源插件，这里只是罗列出来，详细的用法各个插件官网或者Gayhub都有介绍。注意：往往一个解决方案会有多个插件，需要读者根据自己的实际业务需求进行甄别选用，欢迎留言交流和补充。<code>^_^</code></p><p>可以先加个收藏（Ctrl + D），以后遇到类似的场景就来看看具体的插件及其用法。</p><p>另外，不要重复造轮子，把精力放在业务逻辑上！</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/24/166079d2288fa279~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt=""></p><h2 id="函数库">函数库</h2><p>Lodash（推荐）：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Flodash%2Flodash" title="https://github.com/lodash/lodash" target="_blank" rel="noopener noreferrer">github.com/lodash/loda…</a></p><p>Underscore：<a href="https://link.juejin.cn/?target=https%3A%2F%2Funderscorejs.org%2F" title="https://underscorejs.org/" target="_blank" rel="noopener noreferrer">underscorejs.org/</a></p><p>Ramda：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Framda%2Framda" title="https://github.com/ramda/ramda" target="_blank" rel="noopener noreferrer">github.com/ramda/ramda</a></p><p>outils：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FproYang%2Foutils" title="https://github.com/proYang/outils" target="_blank" rel="noopener noreferrer">github.com/proYang/out…</a></p><p>30-seconds-of-code：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FChalarangelo%2F30-seconds-of-code" title="https://github.com/Chalarangelo/30-seconds-of-code" target="_blank" rel="noopener noreferrer">github.com/Chalarangel…</a></p><h2 id="动画库">动画库</h2><p>Animate.css</p><ul><li>CSS3 动画库，也是目前最通用的动画库。</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fdaneden.github.io%2Fanimate.css%2F" title="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">daneden.github.io/animate.css…</a></li></ul><p>Anime.js：</p><ul><li>一个强大的、轻量级的用来制作动画的javascript库</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fanimejs.com%2F" title="http://animejs.com/" target="_blank" rel="noopener noreferrer">animejs.com/</a></li></ul><p>Hover.css：</p><ul><li>CSS hover 悬停效果，可以应用于链接、按钮、图片等等。</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FIanLunn%2FHover" title="https://github.com/IanLunn/Hover" target="_blank" rel="noopener noreferrer">github.com/IanLunn/Hov…</a></li></ul><p>wow.js:</p><ul><li>滚动展示动画</li><li>WOW.js 依赖 animate.css，所以它支持 animate.css 多达 60 多种的动画效果。</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmatthieua%2FWOW" title="https://github.com/matthieua/WOW" target="_blank" rel="noopener noreferrer">github.com/matthieua/W…</a></li></ul><p>scrollReveal.js：</p><ul><li>类似 wow.js</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjlmakes%2Fscrollreveal" title="https://github.com/jlmakes/scrollreveal" target="_blank" rel="noopener noreferrer">github.com/jlmakes/scr…</a></li></ul><p>Magic.css：</p><ul><li>css3 animation动画库</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FminiMAC%2Fmagic" title="https://github.com/miniMAC/magic" target="_blank" rel="noopener noreferrer">github.com/miniMAC/mag…</a></li></ul><p>Waves：</p><ul><li>点击波纹效果</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffians%2FWaves" title="https://github.com/fians/Waves" target="_blank" rel="noopener noreferrer">github.com/fians/Waves</a></li></ul><p>move.js：</p><ul><li>一个小型的JavaScript库，通过JS来控制一系列的CSS动画顺序执行，使CSS3动画变得非常简单和优雅。</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvisionmedia%2Fmove.js" title="https://github.com/visionmedia/move.js" target="_blank" rel="noopener noreferrer">github.com/visionmedia…</a></li></ul><p>Velocity.js：</p><ul><li>一个功能齐全的 JavaScript 动画套件，包括诸如淡入淡出、滚动、滚动、停止、结束、翻转等动画效果。</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjulianshapiro%2Fvelocity" title="https://github.com/julianshapiro/velocity" target="_blank" rel="noopener noreferrer">github.com/julianshapi…</a></li></ul><h2 id="滚动库">滚动库</h2><p>iscroll - 平滑滚动插件：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcubiq%2Fiscroll" title="https://github.com/cubiq/iscroll" target="_blank" rel="noopener noreferrer">github.com/cubiq/iscro…</a></p><p>BetterScroll：</p><ul><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fbetter-scroll" title="https://github.com/ustbhuangyi/better-scroll" target="_blank" rel="noopener noreferrer">github.com/ustbhuangyi…</a></li><li>iscroll 的优化版，使移动端滑动体验更加流畅</li></ul><p>mescroll：</p><ul><li>移动端上拉刷新下拉加载</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.mescroll.com%2Fapi.html" title="http://www.mescroll.com/api.html" target="_blank" rel="noopener noreferrer">www.mescroll.com/api.html</a></li></ul><p>animatescroll：</p><ul><li>jQuery滚动到指定位置</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fplugins.compzets.com%2Fanimatescroll%2F" title="https://plugins.compzets.com/animatescroll/" target="_blank" rel="noopener noreferrer">plugins.compzets.com/animatescro…</a></li></ul><p>crossfade.js：</p><ul><li>jQuery图片模糊插件crossfade.js</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F104.html" title="http://www.dowebok.com/104.html" target="_blank" rel="noopener noreferrer">www.dowebok.com/104.html</a></li></ul><p>jQuery Scrollbox：</p><ul><li>图片文字滚动插件</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info1890" title="http://www.jq22.com/jquery-info1890" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></li></ul><p>liMarquee：</p><ul><li>jQuery无缝滚动插件</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F188.html" title="http://www.dowebok.com/188.html" target="_blank" rel="noopener noreferrer">www.dowebok.com/188.html</a></li></ul><h2 id="轮播图">轮播图</h2><p>Swiper：</p><ul><li>常用于移动端网站的内容触摸滑动</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.swiper.com.cn%2F" title="https://www.swiper.com.cn/" target="_blank" rel="noopener noreferrer">www.swiper.com.cn/</a></li></ul><p>iSlider：</p><ul><li>移动端滑动组件</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Feux.baidu.com%2FiSlider%2Fdemo%2Findex_chinese.html" title="http://eux.baidu.com/iSlider/demo/index_chinese.html" target="_blank" rel="noopener noreferrer">eux.baidu.com/iSlider/dem…</a></li></ul><p>slip.js：</p><ul><li>移动端跟随手指滑动组件，零依赖。</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbinnng%2Fslip.js" title="https://github.com/binnng/slip.js" target="_blank" rel="noopener noreferrer">github.com/binnng/slip…</a></li></ul><p>OwlCarousel2：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fowlcarousel2.github.io%2FOwlCarousel2%2F" title="http://owlcarousel2.github.io/OwlCarousel2/" target="_blank" rel="noopener noreferrer">owlcarousel2.github.io/OwlCarousel…</a></p><p>slick：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info406" title="http://www.jq22.com/jquery-info406" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></p><p>myFocus：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.cosmissy.com%2Fmyfocus%2Ftutorials.html" title="http://www.cosmissy.com/myfocus/tutorials.html" target="_blank" rel="noopener noreferrer">www.cosmissy.com/myfocus/tut…</a></p><p>WebSlides：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebslides%2Fwebslides%2F" title="https://github.com/webslides/webslides/" target="_blank" rel="noopener noreferrer">github.com/webslides/w…</a></p><p>jQuery轮播插件slider：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info889" title="http://www.jq22.com/jquery-info889" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></p><h2 id="滚屏">滚屏</h2><p>fullpage：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info1124" title="http://www.jq22.com/jquery-info1124" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></p><h2 id="弹出框">弹出框</h2><p>layer：</p><ul><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Flayer.layui.com%2F" title="http://layer.layui.com/" target="_blank" rel="noopener noreferrer">layer.layui.com/</a></li><li>layui 独立维护的三大组件之一（layDate、layer、layim）</li><li>尽管 layui 中包含了这些组件，但因为它们受众群体广泛或应用广泛，特从 layui 中抽取出来个副本，可独立引用。我们也会对它们进行同步维护。</li></ul><p>Bootbox.js：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fbootboxjs.com%2F" title="http://bootboxjs.com/" target="_blank" rel="noopener noreferrer">bootboxjs.com/</a></p><p>dialogBox：</p><ul><li>基于 jQuery</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info4822" title="http://www.jq22.com/jquery-info4822" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></li></ul><p>easyDialog：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.h-ui.net%2Feasydialog-v2.0%2Findex.html" title="http://www.h-ui.net/easydialog-v2.0/index.html" target="_blank" rel="noopener noreferrer">www.h-ui.net/easydialog-…</a></p><h2 id="消息通知">消息通知</h2><p>Notyf：</p><ul><li>简单的响应式纯js消息通知插件</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.htmleaf.com%2FjQuery%2FLightbox-Dialog%2F201609123990.html" title="http://www.htmleaf.com/jQuery/Lightbox-Dialog/201609123990.html" target="_blank" rel="noopener noreferrer">www.htmleaf.com/jQuery/Ligh…</a></li></ul><p>PNotify：</p><ul><li>页面右上角的提示信息（非弹框提示）</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fsciactive.com%2Fpnotify%2F" title="https://sciactive.com/pnotify/" target="_blank" rel="noopener noreferrer">sciactive.com/pnotify/</a></li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fsciactive.github.io%2Fpnotify%2F" title="http://sciactive.github.io/pnotify/" target="_blank" rel="noopener noreferrer">sciactive.github.io/pnotify/</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fsciactive%2Fpnotify" title="https://github.com/sciactive/pnotify" target="_blank" rel="noopener noreferrer">github.com/sciactive/p…</a></li></ul><p>overhang.js：</p><ul><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info9193" title="http://www.jq22.com/jquery-info9193" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></li><li>overhang.js 是一个JQuery插件显示即时通知、 确认或给定元素中的提示。</li></ul><h2 id="下拉框">下拉框</h2><p>select2：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fselect2.org%2F" title="https://select2.org/" target="_blank" rel="noopener noreferrer">select2.org/</a></p><h2 id="级联选择器">级联选择器</h2><p>ustbhuangyi/picker</p><ul><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fpicker" title="https://github.com/ustbhuangyi/picker" target="_blank" rel="noopener noreferrer">github.com/ustbhuangyi…</a></li><li>移动端最好用的的筛选器组件、联动筛选</li></ul><p>jQueryDistpicker：</p><ul><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Ffengyuanchen.github.io%2Fdistpicker%2F" title="http://fengyuanchen.github.io/distpicker/" target="_blank" rel="noopener noreferrer">fengyuanchen.github.io/distpicker/</a></li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fdemo%2FjQueryDistpicker20160621%2F" title="http://www.jq22.com/demo/jQueryDistpicker20160621/" target="_blank" rel="noopener noreferrer">www.jq22.com/demo/jQuery…</a></li></ul><h2 id="颜色选择器">颜色选择器</h2><p>Bootstrap Colorpicker 2：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffarbelous%2Fbootstrap-colorpicker" title="https://github.com/farbelous/bootstrap-colorpicker" target="_blank" rel="noopener noreferrer">github.com/farbelous/b…</a></p><h2 id="时间选择器">时间选择器</h2><p>layDate：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.layui.com%2Flaydate%2F" title="https://www.layui.com/laydate/" target="_blank" rel="noopener noreferrer">www.layui.com/laydate/</a></p><p>wdatepicker</p><h2 id="时间日期处理">时间日期处理</h2><p>Moment.js：</p><ul><li>Moment.js 是一个解析，验证，操作和显示日期和时间的 JavaScript 类库。</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fmomentjs.com" title="http://momentjs.com" target="_blank" rel="noopener noreferrer">momentjs.com</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmoment%2Fmoment" title="https://github.com/moment/moment" target="_blank" rel="noopener noreferrer">github.com/moment/mome…</a></li></ul><p>timeago.js：</p><ul><li>轻量级的时间转换 Javascript 库</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhustcc%2Ftimeago.js" title="https://github.com/hustcc/timeago.js" target="_blank" rel="noopener noreferrer">github.com/hustcc/time…</a></li></ul><h2 id="表单验证">表单验证</h2><p>validator.js：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchriso%2Fvalidator.js" title="https://github.com/chriso/validator.js" target="_blank" rel="noopener noreferrer">github.com/chriso/vali…</a></p><p>jQuery Validation</p><ul><li>jQuery 表单校验</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjquery-validation%2Fjquery-validation" title="https://github.com/jquery-validation/jquery-validation" target="_blank" rel="noopener noreferrer">github.com/jquery-vali…</a></li></ul><p>Validation Plugin：</p><ul><li>jQuery插件</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.imooc.com%2Flearn%2F385" title="http://www.imooc.com/learn/385" target="_blank" rel="noopener noreferrer">www.imooc.com/learn/385</a></li></ul><p>Validform：</p><ul><li>一行代码搞定整站的表单验证！- Jquery表单验证插件</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fvalidform.rjboy.cn%2F" title="http://validform.rjboy.cn/" target="_blank" rel="noopener noreferrer">validform.rjboy.cn/</a></li></ul><h2 id="分页插件">分页插件</h2><p>pagination：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FsuperRaytin%2Fpaginationjs" title="https://github.com/superRaytin/paginationjs" target="_blank" rel="noopener noreferrer">github.com/superRaytin…</a></p><h2 id="富文本编辑器">富文本编辑器</h2><p>wangEditor：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.wangeditor.com%2F" title="http://www.wangeditor.com/" target="_blank" rel="noopener noreferrer">www.wangeditor.com/</a></p><p>百度UEditor：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fueditor.baidu.com%2Fwebsite%2F" title="https://ueditor.baidu.com/website/" target="_blank" rel="noopener noreferrer">ueditor.baidu.com/website/</a></p><p>CKEditor：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fckeditor.com%2F" title="https://ckeditor.com/" target="_blank" rel="noopener noreferrer">ckeditor.com/</a></p><p>KindEditor：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fkindeditor.net%2Fdemo.php" title="http://kindeditor.net/demo.php" target="_blank" rel="noopener noreferrer">kindeditor.net/demo.php</a></p><p>MediumEditor：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fyabwe.github.io%2Fmedium-editor%2F" title="http://yabwe.github.io/medium-editor/" target="_blank" rel="noopener noreferrer">yabwe.github.io/medium-edit…</a></p><p>Simditor：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fsimditor.tower.im%2F" title="http://simditor.tower.im/" target="_blank" rel="noopener noreferrer">simditor.tower.im/</a></p><p>Summernote：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fsummernote.org%2F" title="https://summernote.org/" target="_blank" rel="noopener noreferrer">summernote.org/</a></p><p>Quill：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fquilljs.com%2F" title="https://quilljs.com/" target="_blank" rel="noopener noreferrer">quilljs.com/</a></p><p>Slate：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fianstormtaylor%2Fslate" title="https://github.com/ianstormtaylor/slate" target="_blank" rel="noopener noreferrer">github.com/ianstormtay…</a></p><h2 id="markdown-编辑器">Markdown 编辑器</h2><p><a href="https://link.juejin.cn/?target=http%3A%2F%2FEditor.md" title="http://Editor.md" target="_blank" rel="noopener noreferrer">Editor.md</a>：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fpandao.github.io%2Feditor.md%2F" title="https://pandao.github.io/editor.md/" target="_blank" rel="noopener noreferrer">pandao.github.io/editor.md/</a></p><h2 id="树插件">树插件</h2><p><a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.treejs.cn" title="http://www.treejs.cn" target="_blank" rel="noopener noreferrer">www.treejs.cn</a></p><h2 id="图片懒加载">图片懒加载</h2><p>lazyload：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftuupola%2Fjquery_lazyload" title="https://github.com/tuupola/jquery_lazyload" target="_blank" rel="noopener noreferrer">github.com/tuupola/jqu…</a></p><h2 id="瀑布流">瀑布流</h2><p>Masonry：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fcjc917%2Fp%2F7402026.html" title="https://www.cnblogs.com/cjc917/p/7402026.html" target="_blank" rel="noopener noreferrer">www.cnblogs.com/cjc917/p/74…</a></p><p>Metro风兼瀑布流布局效果http://www.lanrenzhijia.com/jquery/1985.html</p><h2 id="相册（图片滑动切换展示效果）">相册（图片滑动切换展示效果）</h2><p>PC端：Viewer.js：<a href="https://link.juejin.cn/?target=https%3A%2F%2Ffengyuanchen.github.io%2Fviewerjs%2F" title="https://fengyuanchen.github.io/viewerjs/" target="_blank" rel="noopener noreferrer">fengyuanchen.github.io/viewerjs/</a></p><p>PC端：photoviewer</p><p>移动端：PhotoSwipe：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.helloweba.net%2Fjavascript%2F460.html" title="https://www.helloweba.net/javascript/460.html" target="_blank" rel="noopener noreferrer">www.helloweba.net/javascript/…</a></p><h2 id="导航插件">导航插件</h2><p>okayNav：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F204.html" title="http://www.dowebok.com/204.html" target="_blank" rel="noopener noreferrer">www.dowebok.com/204.html</a></p><h2 id="视频播放器">视频播放器</h2><p>Chimee</p><ul><li>组件化H5播放器框架</li><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fchimee.org%2F" title="http://chimee.org/" target="_blank" rel="noopener noreferrer">chimee.org/</a></li><li><a href="https://juejin.cn/post/6844903509582675981" title="https://juejin.cn/post/6844903509582675981" target="_blank" rel="noopener noreferrer">juejin.cn/post/684490…</a></li></ul><p>flv.js</p><ul><li>Bilibili开源纯JavaScript编写的FLV播放器</li><li>Flash 视频（FLV）播放器</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FBilibili%2Fflv.js" title="https://github.com/Bilibili/flv.js" target="_blank" rel="noopener noreferrer">github.com/Bilibili/fl…</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.toutiao.com%2Fa6478550535417889293" title="https://www.toutiao.com/a6478550535417889293" target="_blank" rel="noopener noreferrer">www.toutiao.com/a6478550535…</a></li></ul><p>ckplayer：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.ckplayer.com%2F" title="http://www.ckplayer.com/" target="_blank" rel="noopener noreferrer">www.ckplayer.com/</a></p><p>jplayer：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jplayer.cn%2F" title="http://www.jplayer.cn/" target="_blank" rel="noopener noreferrer">www.jplayer.cn/</a></p><p>html5player：<a href="https://juejin.cn/post/6844903487910723592" title="https://juejin.cn/post/6844903487910723592" target="_blank" rel="noopener noreferrer">juejin.cn/post/684490…</a></p><p>Video.js</p><ul><li>开源、免费的HTML5和Flash视频播放器</li><li>Video.js - 开源、免费的HTML5和Flash视频播放器</li></ul><p>多青：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdogeek.net%2F" title="https://dogeek.net/" target="_blank" rel="noopener noreferrer">dogeek.net/</a></p><h2 id="弹幕视频播放器">弹幕视频播放器</h2><p>DanmuPlayer - Html5弹幕视频播放器插件：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchiruom%2FDanmuPlayer" title="https://github.com/chiruom/DanmuPlayer" target="_blank" rel="noopener noreferrer">github.com/chiruom/Dan…</a></p><p>jquery.danmu.js - jQuery弹幕插件：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchiruom%2Fjquery.danmu.js" title="https://github.com/chiruom/jquery.danmu.js" target="_blank" rel="noopener noreferrer">github.com/chiruom/jqu…</a></p><p>scroxt - 字幕字体滚动插件：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchenjianfang%2Fscroxt" title="https://github.com/chenjianfang/scroxt" target="_blank" rel="noopener noreferrer">github.com/chenjianfan…</a></p><h2 id="复制粘贴插件">复制粘贴插件</h2><p>clipboard.js：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzenorocha%2Fclipboard.js%2F" title="https://github.com/zenorocha/clipboard.js/" target="_blank" rel="noopener noreferrer">github.com/zenorocha/c…</a></p><p>ZeroClipboard：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzeroclipboard%2Fzeroclipboard" title="https://github.com/zeroclipboard/zeroclipboard" target="_blank" rel="noopener noreferrer">github.com/zeroclipboa…</a></p><h2 id="条形码插件">条形码插件</h2><p>barcode</p><h2 id="二维码插件">二维码插件</h2><p>jquery.qrcode.js：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjeromeetienne%2Fjquery-qrcode" title="https://github.com/jeromeetienne/jquery-qrcode" target="_blank" rel="noopener noreferrer">github.com/jeromeetien…</a></p><h2 id="拖拽">拖拽</h2><p>Draggabilly：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info293" title="http://www.jq22.com/jquery-info293" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></p><p>dragula：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.toutiao.com%2Fa6491847196890104334" title="https://www.toutiao.com/a6491847196890104334" target="_blank" rel="noopener noreferrer">www.toutiao.com/a6491847196…</a></p><h2 id="手机端事件">手机端事件</h2><p>touch.js</p><h2 id="文件上传">文件上传</h2><p>uploader</p><p>WebUploader：</p><ul><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffex-team%2Fwebuploader%2F" title="https://github.com/fex-team/webuploader/" target="_blank" rel="noopener noreferrer">github.com/fex-team/we…</a></li><li>HTML5 &amp; FLASH 文件上传</li></ul><h2 id="代码高亮">代码高亮</h2><p>hightlight：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fhighlightjs.org%2F" title="https://highlightjs.org/" target="_blank" rel="noopener noreferrer">highlightjs.org/</a></p><h2 id="前端国际化-i18n">前端国际化 i18n</h2><p>i18next：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fi18next%2Fi18next" title="https://github.com/i18next/i18next" target="_blank" rel="noopener noreferrer">github.com/i18next/i18…</a></p><p>vue-i18n：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fkazupon%2Fvue-i18n" title="https://github.com/kazupon/vue-i18n" target="_blank" rel="noopener noreferrer">github.com/kazupon/vue…</a></p><p>前端系列——jquery.i18n.properties前端国际化解决方案“填坑日记”：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.cnblogs.com%2Flandeanfen%2Fp%2F7581609.html" title="http://www.cnblogs.com/landeanfen/p/7581609.html" target="_blank" rel="noopener noreferrer">www.cnblogs.com/landeanfen/…</a></p><p>基于jQuery.i18n.properties 实现前端页面的资源国际化：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fm.blog.csdn.net%2Faixiaoyang168%2Farticle%2Fdetails%2F49336709" title="http://m.blog.csdn.net/aixiaoyang168/article/details/49336709" target="_blank" rel="noopener noreferrer">m.blog.csdn.net/aixiaoyang1…</a></p><h2 id="地图">地图</h2><p>百度地图：<a href="https://link.juejin.cn/?target=http%3A%2F%2Flbsyun.baidu.com%2F" title="http://lbsyun.baidu.com/" target="_blank" rel="noopener noreferrer">lbsyun.baidu.com/</a></p><p>谷歌地图：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.runoob.com%2Fgoogleapi%2Fgoogle-maps-api-key.html" title="http://www.runoob.com/googleapi/google-maps-api-key.html" target="_blank" rel="noopener noreferrer">www.runoob.com/googleapi/g…</a></p><p>高德地图：<a href="https://link.juejin.cn/?target=https%3A%2F%2Flbs.amap.com%2F" title="https://lbs.amap.com/" target="_blank" rel="noopener noreferrer">lbs.amap.com/</a></p><p>腾讯地图：<a href="https://link.juejin.cn/?target=https%3A%2F%2Flbs.qq.com%2F" title="https://lbs.qq.com/" target="_blank" rel="noopener noreferrer">lbs.qq.com/</a></p><h2 id="网页即时通讯">网页即时通讯</h2><p>LayIM：<a href="https://link.juejin.cn/?target=http%3A%2F%2Flayim.layui.com%2F" title="http://layim.layui.com/" target="_blank" rel="noopener noreferrer">layim.layui.com/</a></p><p>闲聊么：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.xianliao.me%2F" title="https://www.xianliao.me/" target="_blank" rel="noopener noreferrer">www.xianliao.me/</a></p><h2 id="数据可视化">数据可视化</h2><p>ECharts ：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fecharts.baidu.com%2Findex.html" title="http://echarts.baidu.com/index.html" target="_blank" rel="noopener noreferrer">echarts.baidu.com/index.html</a></p><p>阿里云 DataV</p><h2 id="pdf-阅读器">PDF 阅读器</h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmozilla%2Fpdf.js" title="https://github.com/mozilla/pdf.js" target="_blank" rel="noopener noreferrer">github.com/mozilla/pdf…</a></p><h2 id="主题色提取">主题色提取</h2><p>RGBaster：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbriangonzalez%2Frgbaster.js" title="https://github.com/briangonzalez/rgbaster.js" target="_blank" rel="noopener noreferrer">github.com/briangonzal…</a></p><p>Color Thief</p><p>vibrant.js</p><h2 id="前端存储">前端存储</h2><p>ustbhuangyi/storage：</p><ul><li>封装了sessionStorage和localStorage</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fstorage" title="https://github.com/ustbhuangyi/storage" target="_blank" rel="noopener noreferrer">github.com/ustbhuangyi…</a></li></ul><p>store.js</p><ul><li>本地存储localstorage的封装</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjaywcjlove%2Fstore.js" title="https://github.com/jaywcjlove/store.js" target="_blank" rel="noopener noreferrer">github.com/jaywcjlove/…</a></li></ul><p>localForage：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FlocalForage%2FlocalForage" title="https://github.com/localForage/localForage" target="_blank" rel="noopener noreferrer">github.com/localForage…</a></p><h2 id="数据-mock">数据 Mock</h2><p>Easy Mock：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Feasy-mock%2Feasy-mock" title="https://github.com/easy-mock/easy-mock" target="_blank" rel="noopener noreferrer">github.com/easy-mock/e…</a></p><p>Mockjs：</p><ul><li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fmockjs.com" title="http://mockjs.com" target="_blank" rel="noopener noreferrer">mockjs.com</a></li><li>生成任意随机数据，拦截 Ajax 请求</li></ul><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/24/166079d224e4e7da~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt=""></p><p>json-server + fakerjs：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fjson-server" title="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer">github.com/typicode/js…</a></p><h2 id="分享">分享</h2><p>bShare</p><p>JiaThis（关闭了！！！）</p><p>QQ分享组件</p><p>百度分享</p><h2 id="评论">评论</h2><p>Gitalk</p><p>gitment</p><p>畅言</p><p>来必力</p><p>友言（关闭了！！！）</p><p>网易云跟贴（关闭了！！！）</p><h2 id="其他">其他</h2><p>IE浏览器版本过低提示插件IEalert.js：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jqueryfuns.com%2Fresource%2F455" title="http://www.jqueryfuns.com/resource/455" target="_blank" rel="noopener noreferrer">www.jqueryfuns.com/resource/45…</a></p><p>lyric-parser - QQ音乐歌词解析：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Flyric-parser" title="https://github.com/ustbhuangyi/lyric-parser" target="_blank" rel="noopener noreferrer">github.com/ustbhuangyi…</a></p><p>holder.js - 图片占位符插件：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fimsky%2Fholder" title="https://github.com/imsky/holder" target="_blank" rel="noopener noreferrer">github.com/imsky/holde…</a></p><p>jQuery放大镜插件jqzoom.js：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.jq22.com%2Fjquery-info648" title="http://www.jq22.com/jquery-info648" target="_blank" rel="noopener noreferrer">www.jq22.com/jquery-info…</a></p><p>Zooming – JavaScript图片缩放库：<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.dowebok.com%2F223.html" title="http://www.dowebok.com/223.html" target="_blank" rel="noopener noreferrer">www.dowebok.com/223.html</a></p><p>fastclick - 消除 click 移动浏览器300ms延迟：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fftlabs%2Ffastclick" title="https://github.com/ftlabs/fastclick" target="_blank" rel="noopener noreferrer">github.com/ftlabs/fast…</a></p><p>jsonp - 一个简单的JSONP实现：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebmodules%2Fjsonp" title="https://github.com/webmodules/jsonp" target="_blank" rel="noopener noreferrer">github.com/webmodules/…</a></p><p>js-base64 - Base64 编码解码：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdankogai%2Fjs-base64" title="https://github.com/dankogai/js-base64" target="_blank" rel="noopener noreferrer">github.com/dankogai/js…</a></p><p>新手引导：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Feaselinc%2Ftourist" title="https://github.com/easelinc/tourist" target="_blank" rel="noopener noreferrer">github.com/easelinc/to…</a></p>',214)];l.render=function(r,i,l,n,a,p){return t(),e("div",null,o)};export default l;export{i as __pageData};
