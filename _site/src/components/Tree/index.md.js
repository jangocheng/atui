webpackJsonp([15,194],{543:function(n,a){"use strict";n.exports={content:["section",["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u7ec4\u4ef6\u5fc5\u987b\u7ed1\u5b9a\u6570\u636e\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">let</span> treeData <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'My Tree\'</span><span class="token punctuation">,</span>\n  children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'hello\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'wat\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'child folder\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'child folder\'</span><span class="token punctuation">,</span>\n          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'hello\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'wat\'</span> <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'hello\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'wat\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'child folder\'</span><span class="token punctuation">,</span>\n          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'hello\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'wat\'</span> <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span> <span class="token string">\'body\'</span><span class="token punctuation">,</span>\n  components<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    tree<span class="token punctuation">:</span> atui<span class="token punctuation">.</span>Tree\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      dataSource<span class="token punctuation">:</span> treeData\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>'},["code","let treeData = {\n  name: 'My Tree',\n  children: [\n    { name: 'hello' },\n    { name: 'wat' },\n    {\n      name: 'child folder',\n      children: [\n        {\n          name: 'child folder',\n          children: [\n            { name: 'hello' },\n            { name: 'wat' }\n          ]\n        },\n        { name: 'hello' },\n        { name: 'wat' },\n        {\n          name: 'child folder',\n          children: [\n            { name: 'hello' },\n            { name: 'wat' }\n          ]\n        }\n      ]\n    }\n  ]\n}\n\nnew Vue({\n  el: 'body',\n  components: {\n    tree: atui.Tree\n  },\n  data: {\n    return {\n      dataSource: treeData\n    }\n  }\n})"]]],meta:{category:"Components",type:"Views",title:"Tree",subtitle:"\u6811\u5f62\u63a7\u4ef6",filename:"src/components/Tree/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h3","Tree"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","dataSource"],["td","\u6570\u636e\u6e90"],["td","Object"],["td"]],["tr",["td","@expand"],["td","\u5c55\u5f00/\u6536\u8d77\u4e8b\u4ef6"],["td","Function(status, model)"],["td"]]]]]}}});