var t=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,e=(n,a,s)=>a in n?t(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s;import{V as o,r as l,o as p,c,a as u,w as d,d as r,e as i,b as k}from"./app.b985380d.js";var b={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:l,withCtx:p,createVNode:c,openBlock:u,createElementBlock:d}=o,r=t("默认按钮"),i=t("主要按钮"),k=t("成功按钮"),b=t("信息按钮"),g=t("警告按钮"),m=t("危险按钮");return((t,o)=>{for(var l in o||(o={}))a.call(o,l)&&e(t,l,o[l]);if(n)for(var l of n(o))s.call(o,l)&&e(t,l,o[l]);return t})({render:function(t,n){const a=l("xl-button");return u(),d("div",null,[c(a,null,{default:p((()=>[r])),_:1}),c(a,{type:"primary"},{default:p((()=>[i])),_:1}),c(a,{type:"success"},{default:p((()=>[k])),_:1}),c(a,{type:"info"},{default:p((()=>[b])),_:1}),c(a,{type:"warning"},{default:p((()=>[g])),_:1}),c(a,{type:"danger"},{default:p((()=>[m])),_:1})])}},{})}()}};const g='{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"Attributes","slug":"attributes"}],"relativePath":"components/tabs.md","lastUpdated":1657965662260}',m=r("h1",{id:"tabs-标签页"},"Tabs 标签页",-1),x=r("p",null,"分隔内容上有关联但属于不同类别的数据集合。",-1),y=r("h2",{id:"基础用法"},"基础用法",-1),f=r("p",null,"基础的、简洁的标签页。",-1),h=r("div",{class:"language-vue"},[r("pre",null,[r("code",null,[r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("template")]),r("span",{class:"token punctuation"},">")]),i("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("默认按钮"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),i("primary"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),i("主要按钮"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),i("success"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),i("成功按钮"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),i("info"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),i("信息按钮"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),i("warning"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),i("警告按钮"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("\n  "),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),r("span",{class:"token attr-name"},"type"),r("span",{class:"token attr-value"},[r("span",{class:"token punctuation attr-equals"},"="),r("span",{class:"token punctuation"},'"'),i("danger"),r("span",{class:"token punctuation"},'"')]),r("span",{class:"token punctuation"},">")]),i("危险按钮"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("xl-button")]),r("span",{class:"token punctuation"},">")]),i("\n"),r("span",{class:"token tag"},[r("span",{class:"token tag"},[r("span",{class:"token punctuation"},"</"),i("template")]),r("span",{class:"token punctuation"},">")]),i("\n")])])],-1),v=k('<h2 id="attributes">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值，选中选项卡的 name</td><td>string</td><td>—</td><td>第一个选项卡的 name</td></tr><tr><td>type</td><td>风格类型</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>标签是否同时可增加和关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>选项卡所在位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>标签的宽度是否自撑开</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>',2);b.render=function(t,n,a,s,e,o){const r=l("render-demo-0"),i=l("demo");return p(),c("div",null,[m,x,y,f,u(i,{sourceCode:'<template>\n  <xl-button>默认按钮</xl-button>\n  <xl-button type="primary">主要按钮</xl-button>\n  <xl-button type="success">成功按钮</xl-button>\n  <xl-button type="info">信息按钮</xl-button>\n  <xl-button type="warning">警告按钮</xl-button>\n  <xl-button type="danger">危险按钮</xl-button>\n</template>\n'},{highlight:d((()=>[h])),default:d((()=>[u(r)])),_:1}),v])};export default b;export{g as __pageData};