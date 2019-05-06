webpackJsonp([112,194],{446:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u7eb5\u5411\u6392\u5217","en-US":"Type"},filename:"src/components/Form/demo/basic.md",id:"src-components-Form-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>aaa.do<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">required</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u59d3\u540d:<span class="token punctuation">"</span></span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token attr-name">has-icon</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6211\u662f\u63d0\u793a<span class="token punctuation">"</span></span> <span class="token attr-name">tips-mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popup<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u5728\u6b64\u533a\u57df\u6b63\u786e\u8f93\u5165\u60a8\u7684\u59d3\u540d\u54e6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d<span class="token punctuation">"</span></span>  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">required-tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7528\u6237\u540d\u4e3a\u5fc5\u586b\u9879<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token attr-name">minlength</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">minlength-tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7528\u6237\u540d\u4e0d\u80fd\u5c11\u4e8e2\u4e2a\u5b57\u7b26<span class="token punctuation">"</span></span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6211\u662f\u63d0\u793a<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>validResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">required</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7535\u8bdd:<span class="token punctuation">"</span></span> <span class="token attr-name">valid-status</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token attr-name">has-icon</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6211\u662f\u63d0\u793a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801<span class="token punctuation">"</span></span> <span class="token attr-name">valid-status</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">required</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6027\u522b:<span class="token punctuation">"</span></span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sexy<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span> <span class="token punctuation">/></span></span>\u7537<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sexy<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u5973<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">required</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u559c\u597d:<span class="token punctuation">"</span></span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tw<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span> <span class="token punctuation">/></span></span>\u8df3\u821e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u753b\u753b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tq<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u5f39\u7434<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">required</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u884c\u4e1a:<span class="token punctuation">"</span></span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-select</span> <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arr<span class="token punctuation">"</span></span> <span class="token attr-name">:close-on-select</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>computer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u8ba1\u7b97\u673a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>networdk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7f51\u7edc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>math<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6570\u5b66<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">required</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6a21\u677f\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token attr-name">tips-mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popup<span class="token punctuation">"</span></span> <span class="token attr-name">:description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>testDescription<span class="token punctuation">"</span></span> <span class="token attr-name">description-width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">description-space</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-textarea</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u53d8\u91cf\u683c\u5f0f\uff1a${name};</span> <span class="token attr-name">\u793a\u4f8b\uff1a\u5c0a\u656c\u7684${name}\uff0c\u60a8\u7684\u5feb\u9012\u5df2\u5728\u98de\u5954\u7684\u8def\u4e0a\uff0c\u5c06\u5728\u4eca\u5929$[time]\u9001\u8fbe\u60a8\u7684\u624b\u91cc\uff0c\u8bf7\u7559\u610f\u67e5\u6536\u3002"</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-textarea</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form-item</span> <span class="token attr-name">label-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">wrapper-col</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">primary</span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>validFun<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-right</span><span class="token punctuation">:</span><span class="token number">10</span>px</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u786e\u5b9a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span> <span class="token attr-name">tertiary</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u91cd\u7f6e\u6761\u4ef6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-form</span><span class="token punctuation">></span></span>'}],preview:'<v-form action="aaa.do" method="post">\n  <form-item required label="\u59d3\u540d:" label-col="4" wrapper-col="12" has-icon tips="\u6211\u662f\u63d0\u793a" tips-mode="popup" description="\u8bf7\u5728\u6b64\u533a\u57df\u6b63\u786e\u8f93\u5165\u60a8\u7684\u59d3\u540d\u54e6">\n    <v-input type="text" placeholder="\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"  :value="username" required required-tips="\u7528\u6237\u540d\u4e3a\u5fc5\u586b\u9879" maxlength="12" minlength="2" minlength-tips="\u7528\u6237\u540d\u4e0d\u80fd\u5c11\u4e8e2\u4e2a\u5b57\u7b26" tips="\u6211\u662f\u63d0\u793a" :valid-result="validResult"></v-input>\n  </form-item>\n  <form-item required label="\u7535\u8bdd:" valid-status="error" label-col="4" wrapper-col="12" has-icon tips="\u6211\u662f\u63d0\u793a">\n    <v-input type="text" placeholder="\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801" valid-status="error" :value="tel"></v-input>\n  </form-item>\n  <form-item required label="\u6027\u522b:" label-col="4" wrapper-col="12">\n    <label><input type="radio" name="sexy" checked />\u7537</label>\n    <label><input type="radio" name="sexy" />\u5973</label>\n  </form-item>\n  <form-item required label="\u559c\u597d:" label-col="4" wrapper-col="12">\n    <label><input type="checkbox" name="tw" checked />\u8df3\u821e</label>\n    <label><input type="checkbox" name="hh" />\u753b\u753b</label>\n    <label><input type="checkbox" name="tq" />\u5f39\u7434</label>\n  </form-item>\n  <form-item required label="\u884c\u4e1a:" label-col="4" wrapper-col="12">\n    <v-select :default-value="arr" :close-on-select="true">\n      <v-option value="computer">\u8ba1\u7b97\u673a</v-option>\n      <v-option value="networdk">\u7f51\u7edc</v-option>\n      <v-option value="math">\u6570\u5b66</v-option>\n    </v-select>\n  </form-item>\n  <form-item required label="\u6a21\u677f\u5185\u5bb9" label-col="4" wrapper-col="12" tips-mode="popup" :description="testDescription" description-width="500" description-space="500">\n    <v-textarea placeholder="\u53d8\u91cf\u683c\u5f0f\uff1a${name}; \u793a\u4f8b\uff1a\u5c0a\u656c\u7684${name}\uff0c\u60a8\u7684\u5feb\u9012\u5df2\u5728\u98de\u5954\u7684\u8def\u4e0a\uff0c\u5c06\u5728\u4eca\u5929$[time]\u9001\u8fbe\u60a8\u7684\u624b\u91cc\uff0c\u8bf7\u7559\u610f\u67e5\u6536\u3002"></v-textarea>\n  </form-item>\n  <form-item label-col="4" wrapper-col="12">\n    <v-button type="submit" primary @click.native="validFun" style="margin-right:10px">\u786e\u5b9a</v-button><v-button type="reset" tertiary value="\u91cd\u7f6e\u6761\u4ef6"></v-button>\n  </form-item>\n</v-form>',vueScript:"new Vue({\n  el: 'body',\n  data() {\n    return {\n      testDescription: '\u77ed\u4fe1\u7b7e\u540d\u5efa\u8bae\u4e3a\u7528\u6237\u771f\u5b9e\u5e94\u7528\u540d/\u7f51\u7ad9\u540d/\u516c\u53f8\u540d\u3002\u82e5\u7b7e\u540d/\u6a21\u677f\u5185\u5bb9\u4fb5\u72af\u5230\u7b2c\u4e09\u65b9\u6743\u76ca\u987b\u83b7\u5f97\u7b2c\u4e09\u65b9\u7684\u771f\u5b9e\u6388\u6743,\u6388\u6743\u59d4\u6258\u4e66\u7b49\u51ed\u8bc1\u4e0a\u4f20\u7ba1\u7406\u4e2d\u5fc3 \u5355\u4e2a\u7b7e\u540d\u957f\u5ea6\u4ecb\u4e8e2\u52308\u4e2a\u5b57\u7b26\u4e4b\u95f4 \u53ef\u4ee5\u5305\u542b\u6c49\u5b57\u3001\u6570\u5b57\u3001\u82f1\u6587\uff0c\u4e0d\u80fd\u4e3a\u7eaf\u6570\u5b57\u3001\u7eaf\u82f1\u6587\u3001\u6570\u5b57\u82f1\u6587\u7ec4\u5408 \u65e0\u987b\u6dfb\u52a0\u3010\u3011\u3001()\u3001[]\u7b26\u53f7\uff0c\u77ed\u4fe1\u53d1\u9001\u4f1a\u81ea\u5e26\u3010\u3011\u3001()\u3001[]\u7b26\u53f7\uff0c\u907f\u514d\u91cd\u590d \u7b7e\u540d/\u6a21\u677f\u7533\u8bf7\u89c4\u8303\u8be6\u89c1 http://tb.cn/OKCGyWx'\n    }\n  },\n  components: {\n    vForm: atui.Form,\n    formItem: atui.Form.FormItem,\n    vInput: atui.Input,\n    vTextarea: atui.Textarea,\n    vSelect: atui.Select,\n    vOption: atui.Select.Option,\n    vButton: atui.Button,\n    datePicker: atui.DatePicker\n  },\n  data:{\n    username: '',\n    tel: '',\n    arr: [],\n    testDescription: '',\n    validResult: {\n      requiredValid: {\n        validStatus: 'error',\n        tips: ''\n      },\n      isPhoneValid: {\n        validStatus: 'success',\n        tips: ''\n      }\n    }\n  },\n  methods: {\n    validFun () {}\n  }\n})"}}});