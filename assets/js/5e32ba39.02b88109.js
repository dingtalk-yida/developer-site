"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[5186],{99278:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(59301);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),u=l,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(g,r(r({ref:e},m),{},{components:a})):n.createElement(g,r({ref:e},m))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93618:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(22376),l=a(91262),i=(a(59301),a(99278)),r=["components"],o={title:"\u8868\u683c\u5b9e\u73b0\u589e\u5220\u6539\u67e5",order:20},p=void 0,s={unversionedId:"examples/customPage/crud",id:"examples/customPage/crud",title:"\u8868\u683c\u5b9e\u73b0\u589e\u5220\u6539\u67e5",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/examples/customPage/crud.mdx",sourceDirName:"examples/customPage",slug:"/examples/customPage/crud",permalink:"/developer-site/docs/examples/customPage/crud",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/customPage/crud.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u8868\u683c\u5b9e\u73b0\u589e\u5220\u6539\u67e5",order:20},sidebar:"examples",previous:{title:"\u6279\u91cf\u5ba1\u6279",permalink:"/developer-site/docs/examples/customPage/batchApproval"},next:{title:"\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u63d0\u4ea4\u548c\u67e5\u770b",permalink:"/developer-site/docs/examples/customPage/submitForm"}},m={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u793a\u4f8b\u6f14\u793a\u4e00",id:"\u793a\u4f8b\u6f14\u793a\u4e00",level:3},{value:"\u6b65\u9aa41\uff1a\u8c03\u7528\u63a5\u53e3\u5904\u7406\u6570\u636e\u5c55\u793a\u5230\u8868\u683c\u4e2d",id:"\u6b65\u9aa41\u8c03\u7528\u63a5\u53e3\u5904\u7406\u6570\u636e\u5c55\u793a\u5230\u8868\u683c\u4e2d",level:3},{value:"\u793a\u4f8b\u6f14\u793a\u4e8c",id:"\u793a\u4f8b\u6f14\u793a\u4e8c",level:3},{value:"\u6b65\u9aa42\uff1a\u65b0\u589e\u6570\u636e",id:"\u6b65\u9aa42\u65b0\u589e\u6570\u636e",level:3},{value:"\u793a\u4f8b\u6f14\u793a\u4e09",id:"\u793a\u4f8b\u6f14\u793a\u4e09",level:3},{value:"\u6b65\u9aa43\uff1a\u8df3\u8f6c\u8be6\u60c5\u9875\u9762\u67e5\u770b\u8be6\u60c5",id:"\u6b65\u9aa43\u8df3\u8f6c\u8be6\u60c5\u9875\u9762\u67e5\u770b\u8be6\u60c5",level:3},{value:"\u793a\u4f8b\u6f14\u793a\u56db",id:"\u793a\u4f8b\u6f14\u793a\u56db",level:3},{value:"\u6b65\u9aa44\uff1a\u5220\u9664\u6570\u636e",id:"\u6b65\u9aa44\u5220\u9664\u6570\u636e",level:3},{value:"\u793a\u4f8b\u6f14\u793a\u4e94",id:"\u793a\u4f8b\u6f14\u793a\u4e94",level:3},{value:"\u6b65\u9aa45\uff1a\u7f16\u8f91\u4fee\u6539\u6570\u636e",id:"\u6b65\u9aa45\u7f16\u8f91\u4fee\u6539\u6570\u636e",level:3},{value:"\u793a\u4f8b\u6f14\u793a\u516d",id:"\u793a\u4f8b\u6f14\u793a\u516d",level:3},{value:"\u6b65\u9aa46",id:"\u6b65\u9aa46",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u5f53\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u65f6\uff0c\u63a7\u5236\u53f0\u62a5 \u201c500\u201d \u9519\u8bef\uff0c\u63d0\u793a \u201c\u53c2\u6570\u6821\u9a8c\u5931\u8d25 formUuid \u6216 formInstId \u201d\uff0c\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u7684\uff1f",id:"\u5f53\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u65f6\u63a7\u5236\u53f0\u62a5-500-\u9519\u8bef\u63d0\u793a-\u53c2\u6570\u6821\u9a8c\u5931\u8d25-formuuid-\u6216-forminstid-\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u7684",level:3}],d={toc:c};function u(t){var e=t.components,a=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u5728\u7528\u6237\u65b9\u6536\u96c6\u4e86\u4e00\u6279\u7528\u6237\u4fe1\u606f\u8868\uff0c\u586b\u5199\u8868\u5355\u540e\uff0c\u5e0c\u671b\u53ef\u4ee5\u76f4\u89c2\u7684\u5bf9\u6570\u636e\u8fdb\u884c\u7ba1\u7406\uff0c\u4ee5\u5f80\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u521b\u5efa\u6570\u636e\u7ba1\u7406\u9875\u6765\u5b9e\u73b0\uff0c\u7136\u800c\u6570\u636e\u7ba1\u7406\u9875\u4f1a\u7a0d\u5fae\u6709\u4e00\u4e9b\u5c40\u9650\u6027\uff0c\u4e0d\u80fd\u76f4\u63a5\u5bf9\u6570\u636e\u8fdb\u884c\u4fee\u6539\u65b0\u589e\u7b49\u64cd\u4f5c\uff0c\u90a3\u4e48\u8fd9\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u9875\u9762\u4e2d\u7684\u8868\u683c\u7ec4\u4ef6\u6765\u5b9e\u73b0\uff0c\u5c06\u6570\u636e\u8fdb\u884c\u5c55\u793a\u540e\uff0c\u53ef\u4ee5\u5bf9\u5176\u64cd\u4f5c\u5217\u8fdb\u884c\u7f16\u8f91\uff0c\u4ece\u800c\u5b9e\u73b0\u589e\u5220\u6539\u67e5\u7684\u6548\u679c\u3002"),(0,i.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,i.kt)("h3",{id:"\u793a\u4f8b\u6f14\u793a\u4e00"},"\u793a\u4f8b\u6f14\u793a\u4e00"),(0,i.kt)("video",{width:"100%",controls:!0},(0,i.kt)("source",{src:"https://cloud.video.taobao.com/play/u/12803658/p/1/d/hd/e/6/t/1/313025628706.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiY2FkZWRiNjY4ZThiMzIxYjIxNjdhMzc1ZWRlZTI4NDYifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDc1MjE5MzM=",type:"video/mp4"})),(0,i.kt)("h3",{id:"\u6b65\u9aa41\u8c03\u7528\u63a5\u53e3\u5904\u7406\u6570\u636e\u5c55\u793a\u5230\u8868\u683c\u4e2d"},"\u6b65\u9aa41\uff1a\u8c03\u7528\u63a5\u53e3\u5904\u7406\u6570\u636e\u5c55\u793a\u5230\u8868\u683c\u4e2d"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u6570\u636e\u6e90\u5904\u589e\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90 \u53c2\u8003\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/support/aql605?view=doc_embed&inner=936pox"},"\u5b9c\u642d\u5e73\u53f0\u63a5\u53e3\uff08\u9875\u9762\u6570\u636e\u6e90\u53ef\u76f4\u63a5\u8c03\u7528\uff09"),"\n(1). \u8c03\u7528\u6839\u636e\u6761\u4ef6\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5\u5217\u8868\u63a5\u53e3 \u63a5\u53e3\u914d\u7f6e\u5982\u56fe\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN01hE5r281Gvm2wvKVPD_!!6000000000685-2-tps-2754-1246.png_.webp",alt:null}),"\n(2). \u8bf7\u6c42\u8fd4\u56de\u6570\u636e\u5728 didFetch \u51fd\u6570\u4e2d\u5904\u7406\uff0c\u5904\u7406\u540e\u7684\u683c\u5f0f\u53ef\u4ee5\u53c2\u8003\u8868\u683c\u53f3\u4fa7\u300c\u7f16\u8f91\u4ee3\u7801\u300d\u91cc\u9762\u7684\u683c\u5f0f\uff0c\u9700\u8981\u7684\u6bcf\u4e00\u6761\u6570\u636e\u90fd\u8981\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7edf\u4e00\u653e\u5230\u4e00\u4e2a\u6570\u7ec4\u91cc\u9762\uff0c\u6700\u540e\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4e2d\u6709\u4e09\u4e2a\u5c5e\u6027\uff0c\u5176\u4e2d\u4e00\u4e2a\u5c5e\u6027\u662f\ndata \uff0c\u5bf9\u5e94\u7684\u503c\u662f\u5904\u7406\u597d\u7684\u6570\u7ec4 PS: \u5982\u679c\u8fd4\u56de\u7684\u6570\u636e\u662f proxy \u5f62\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528 JSON.parse(JSON.stringify(proxy \u5c5e\u6027\u7684\u6570\u636e ))")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function didFetch(content) {\n  // content.b = 1; \u4fee\u6539\u8fd4\u56de\u6570\u636e\u7ed3\u6784\u4e2d\u7684 b \u5b57\u6bb5\u4e3a1\n  // const value = [];\n\n  const data = content.data.map((item) => {\n    let arr = {\n      name: item.formData.textField_hr9o6eq,\n      sex: item.formData.textField_62lufhf,\n      age: item.formData.textField_0nibhpr,\n      study: item.formData.textField_97okczu,\n      work: item.formData.textField_456c4b7,\n      instid: item.formInstId,\n    };\n    value.push(arr);\n    console.log(arr);\n  });\n  let result = {\n    data: value,\n    currentPage: content.currentPage,\n    totalCount: content.totalCount,\n  };\n  return result; // \u91cd\u8981\uff0c\u9700\u8fd4\u56de content\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u8868\u683c\u6570\u636e\u6e90\u4e2d\u7ed1\u5b9a\u8fdc\u7a0b\u6570\u636e\u6e90\n\u914d\u7f6e\u5982\u56fe\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oMVSF4294vCsuS1Vt_!!6000000008015-2-tps-2854-1316.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539\u6570\u636e\u4e3b\u952e\u503c\n\u8868\u683c\u4e2d\u6bcf\u884c\u6570\u636e\u552f\u4e00\uff0c\u56e0\u6b64\u914d\u7f6e\u5b9e\u4f8b id \u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u5c06\u6570\u636e\u4e3b\u952e\u503c\u914d\u7f6e\u4e3a\u83b7\u53d6\u7684\u5b9e\u4f8b id\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01bb68GW1gLIVcwNwRN_!!6000000004125-2-tps-2782-1308.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7ed1\u5b9a\u6570\u636e\u6e90\u540e\uff0c\u9700\u914d\u7f6e\u5206\u9875\u529f\u80fd\uff0c\u5728\u8868\u683c\u5c5e\u6027\u4e2d\u6dfb\u52a0\u52a8\u4f5c\u4e8b\u4ef6\uff0c\u52a0\u8f7d\u6570\u636e\u6e90\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN019MLDXI1qjhm8BqgH9_!!6000000005532-2-tps-2870-1310.png_.webp",alt:null})))),(0,i.kt)("h3",{id:"\u793a\u4f8b\u6f14\u793a\u4e8c"},"\u793a\u4f8b\u6f14\u793a\u4e8c"),(0,i.kt)("video",{width:"100%",controls:!0},(0,i.kt)("source",{src:"https://cloud.video.taobao.com/play/u/12803658/p/1/d/hd/e/6/t/1/311643446551.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYmZiYjVmZTVhNDM2N2E2YWRmMDhmMjgzZWY5MDllNGMifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDYxMjAyNjg=",type:"video/mp4"})),(0,i.kt)("h3",{id:"\u6b65\u9aa42\u65b0\u589e\u6570\u636e"},"\u6b65\u9aa42\uff1a\u65b0\u589e\u6570\u636e"),(0,i.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://www.yuque.com/yida/support/aql605?view=doc_embed&inner=oi5tzg"},"\u5b9c\u642d\u5e73\u53f0\u63a5\u53e3\uff08\u9875\u9762\u6570\u636e\u6e90\u53ef\u76f4\u63a5\u8c03\u7528\uff09")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u6570\u636e\u6e90\u5904\u6dfb\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u8c03\u7528\u65b0\u589e\u8868\u5355\u5b9e\u4f8b\u63a5\u53e3 \u63a5\u53e3\u914d\u7f6e\u5982\u56fe\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN011bDI4R1S1EXeadxCK_!!6000000002186-2-tps-2878-1320.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5f39\u7a97\u7ec4\u4ef6\uff0c\u914d\u7f6e\u65b0\u589e\u5185\u5bb9\u7684\u7ec4\u4ef6\u5230\u5f39\u7a97\u4e2d \u914d\u7f6e\u5982\u56fe\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN01VwHloU1mqnRoRZyIi_!!6000000005006-2-tps-2878-1302.png_.webp",alt:null}),"\n\u6dfb\u52a0\u5bf9\u8bdd\u6846\u7ec4\u4ef6 3. \u5728\u300c\u9876\u90e8\u64cd\u4f5c >> \u64cd\u4f5c\u6761\u300d\u6dfb\u52a0\u65b0\u589e\u7684\u64cd\u4f5c\u6309\u94ae\uff0c\u7ed9\u6309\u94ae\u6dfb\u52a0\u5f39\u7a97\u4e8b\u4ef6\uff0c\u5176\u4e2d\u4f7f\u7528 this.$(fieldId).show() \u6765\u5c55\u793a\u5bf9\u8bdd\u6846\uff0c\u62ec\u53f7\u4e2d\u586b\u5165\u7684\u4e3a\u5bf9\u8bdd\u6846\u7684\u552f\u4e00\u6807\u8bc6\u7b26{' '}")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onActionBarItemClick() {\n  this.$('dialog_kp3mxni9').show();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01tOBOas1SdhoNmyPhM_!!6000000002270-2-tps-2876-1302.png_.webp",alt:null})," 4. \u6dfb\u52a0\u5bf9\u8bdd\u6846\u70b9\u51fb\u786e\u8ba4\u65f6\u6267\u884c\u51fd\u6570\uff0c\u70b9\u51fb\u786e\u8ba4\u540e\uff0c\u6267\u884c Insert \u8fdc\u7a0b\u6570\u636e\u6e90\u8c03\u7528\u63a5\u53e3\u5728\u8868\u5355\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u7531\u4e8e\u81ea\u5b9a\u4e49\u9875\u9762\u672c\u8eab\u4e0d\u5177\u5907\u5b58\u50a8\u6570\u636e\u529f\u80fd\uff0c\u56e0\u6b64\u9700\u8981\u505a\u5ef6\u65f6\u64cd\u4f5c\u91cd\u65b0\u52a0\u8f7d\u83b7\u53d6\u8868\u5355\u5b9e\u4f8b\u63a5\u53e3\u7684\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u4f7f\u5f97\u63d2\u5165\u6570\u636e\u540e\u76f4\u63a5\u5c06\u65b0\u6570\u636e\u5c55\u793a\u51fa\u6765\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN0182W3cu1rKLSoCOevX_!!6000000005612-2-tps-2874-1310.png_.webp",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onOk() {\n  const data1 = {\n    textField_hr9o6eq: this.$('textField_kp3mxnia').getValue(),\n    textField_62lufhf: this.$('textField_kp3mxnib').getValue(),\n    textField_0nibhpr: this.$('textField_kp3mxnic').getValue(),\n    textField_97okczu: this.$('textField_kp3mxnie').getValue(),\n    textField_456c4b7: this.$('textField_kp3mxnid').getValue(),\n  };\n  const param = {\n    formUuid: 'FORM-HC9660C1TGFQ8927Y6905OPBO30Y1I9YOD3PKH',\n    appType: 'APP_J587XYX1VEUP7XTTIJVV',\n    formDataJson: JSON.stringify(data1),\n  };\n  this.dataSourceMap['insert'].load(param).then((res) => {\n    this.utils.toast({\n      title: '\u65b0\u589e\u6210\u529f',\n      type: 'success',\n      size: 'large',\n    });\n  });\n  this.$('dialog_kp3mxni9').hide();\n  setTimeout(() => {\n    this.dataSourceMap['getDatas'].load();\n  }, 2000);\n\n  console.log('onOk');\n}\n")),(0,i.kt)("h3",{id:"\u793a\u4f8b\u6f14\u793a\u4e09"},"\u793a\u4f8b\u6f14\u793a\u4e09"),(0,i.kt)("video",{width:"100%",controls:!0},(0,i.kt)("source",{src:"https://cloud.video.taobao.com/play/u/12803658/p/1/d/hd/e/6/t/1/311302569779.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYmZiYjVmZTVhNDM2N2E2YWRmMDhmMjgzZWY5MDllNGMifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDYxMjAyNjg=",type:"video/mp4"})),(0,i.kt)("h3",{id:"\u6b65\u9aa43\u8df3\u8f6c\u8be6\u60c5\u9875\u9762\u67e5\u770b\u8be6\u60c5"},"\u6b65\u9aa43\uff1a\u8df3\u8f6c\u8be6\u60c5\u9875\u9762\u67e5\u770b\u8be6\u60c5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u64cd\u4f5c\u5217\u4e2d\u7684\u8be6\u60c5\u64cd\u4f5c\u9879 \u5982\u56fe\u6240\u793a\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN011dwyq91xYtjxVXcdM_!!6000000006456-2-tps-2768-1192.png_.webp",alt:null}),(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN01Fo7C2l1DPlW8dkqTw_!!6000000000209-2-tps-2876-1304.png_.webp",alt:null})," 2. \u4f7f\u7528 this.utils.router.push(path,\nparams?, blank?, isUrl?) \u914d\u7f6e\u53c2\u6570\uff0c\u8df3\u8f6c\u5230\u8be6\u60c5\u9875\u4e2d\uff0c\u53c2\u8003\u4ee3\u7801\u5982\u4e0b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onActionClick(rowData) {\n  const id = rowData.instid;\n  this.utils.router.push(\n    'https://www.aliwork.com/APP_J587XYX1VEUP7XTTIJVV/formDetail/FORM-HC9660C1TGFQ8927Y6905OPBO30Y1I9YOD3PKH',\n    { formInstId: id },\n    true,\n    true\n  );\n  console.log(rowData);\n}\n")),(0,i.kt)("h3",{id:"\u793a\u4f8b\u6f14\u793a\u56db"},"\u793a\u4f8b\u6f14\u793a\u56db"),(0,i.kt)("video",{width:"100%",controls:!0},(0,i.kt)("source",{src:"https://cloud.video.taobao.com/play/u/12803658/p/1/d/hd/e/6/t/1/311311221399.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYmZiYjVmZTVhNDM2N2E2YWRmMDhmMjgzZWY5MDllNGMifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDYxMjAyNjg=",type:"video/mp4"})),(0,i.kt)("h3",{id:"\u6b65\u9aa44\u5220\u9664\u6570\u636e"},"\u6b65\u9aa44\uff1a\u5220\u9664\u6570\u636e"),(0,i.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/openAPI"},"\u5b9c\u642d\u5e73\u53f0\u63a5\u53e3\uff08\u9875\u9762\u6570\u636e\u6e90\u53ef\u76f4\u63a5\u8c03\u7528\uff09")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6570\u636e\u6e90\u5904\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u8c03\u7528\u5220\u9664\u8868\u5355\u5b9e\u4f8b\u63a5\u53e3 \u63a5\u53e3\u914d\u7f6e\u5982\u56fe\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i4/O1CN01MS8mzk22jxNw95kdf_!!6000000007157-2-tps-2878-1318.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5220\u9664\u64cd\u4f5c\u5217 ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01XpXn3C1QYY7ZJumEU_!!6000000001988-2-tps-2780-1260.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u52a8\u4f5c\u4e8b\u4ef6\uff0c\u9700\u52a0\u8f7d Delete \u6570\u636e\u6e90\uff0c\u8c03\u7528\u5220\u9664\u8868\u5355\u5b9e\u4f8b\u63a5\u53e3\uff0c\u5e76\u914d\u7f6e\u5ef6\u65f6\u5728\u5220\u9664\u540e\u91cd\u65b0\u8c03\u7528\u67e5\u8be2\u8868\u5355\u5b9e\u4f8b\u63a5\u53e3\uff0c\u5c06\u6570\u636e\u52a0\u8f7d\u5c55\u793a\uff0c\u53c2\u8003\u4ee3\u7801\u5982\u4e0b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onDeleteClick(rowData) {\n  const id = rowData.instid;\n  const param2 = {\n    formInstId: id,\n  };\n  this.dataSourceMap['Delete'].load(param2).then((res) => {\n    this.utils.toast({\n      title: '\u5220\u9664\u6210\u529f',\n      type: 'success',\n      size: 'large',\n    });\n    setTimeout(() => {\n      this.dataSourceMap['getDatas'].load();\n    }, 2000);\n  });\n  console.log(rowData);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN014Az0wX26ehITnjeXV_!!6000000007687-2-tps-2866-1318.png_.webp",alt:null})),(0,i.kt)("h3",{id:"\u793a\u4f8b\u6f14\u793a\u4e94"},"\u793a\u4f8b\u6f14\u793a\u4e94"),(0,i.kt)("video",{width:"100%",controls:!0},(0,i.kt)("source",{src:"https://cloud.video.taobao.com/play/u/12803658/p/1/d/hd/e/6/t/1/311317093769.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYmZiYjVmZTVhNDM2N2E2YWRmMDhmMjgzZWY5MDllNGMifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDYxMjAyNjg=",type:"video/mp4"})),(0,i.kt)("h3",{id:"\u6b65\u9aa45\u7f16\u8f91\u4fee\u6539\u6570\u636e"},"\u6b65\u9aa45\uff1a\u7f16\u8f91\u4fee\u6539\u6570\u636e"),(0,i.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/openAPI"},"\u5b9c\u642d\u5e73\u53f0\u63a5\u53e3\uff08\u9875\u9762\u6570\u636e\u6e90\u53ef\u76f4\u63a5\u8c03\u7528\uff09")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u6570\u636e\u6e90\u5904\u6dfb\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u8c03\u7528\u4fee\u6539\u8868\u5355\u7ec4\u4ef6\u503c\u7684\u63a5\u53e3 \u63a5\u53e3\u914d\u7f6e\u5982\u56fe\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01gvwJUe1hwgSSSu3P4_!!6000000004342-2-tps-2878-1312.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u65b0\u589e\u7f16\u8f91\u64cd\u4f5c\u5217\u4ee5\u53ca\u4fdd\u5b58\u64cd\u4f5c\u5217\uff0c\u7531\u4e8e\u7f16\u8f91\u540e\u4f1a\u8fdb\u5165\u7f16\u8f91\u6001\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u4fdd\u5b58\u6309\u94ae\u653e\u7f6e\u5728\u7f16\u8f91\u6001\u4e2d \u914d\u7f6e\u5982\u56fe\uff1a ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN018lhHQr1MDFEOMOjxO_!!6000000001400-2-tps-2772-1296.png_.webp",alt:null}),(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN01wnMtoi1GL8MUhloyd_!!6000000000605-2-tps-2868-1248.png_.webp",alt:null})," 3. \u6dfb\u52a0\u7f16\u8f91\u4e8b\u4ef6\uff0c\u53c2\u8003\u4ee3\u7801\u5982\u4e0b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onTableRowEdit(rowData, action, table) {\n  console.log(rowData);\n  return table.editRow(rowData);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01EKWt0T1JKclWOFQWW_!!6000000001010-2-tps-2870-1272.png_.webp",alt:null})," 4. \u6dfb\u52a0\u4fdd\u5b58\u4e8b\u4ef6\uff0c\u5728\u4fdd\u5b58\u4e8b\u4ef6\u4e2d\u52a0\u8f7d Update \u6570\u636e\u6e90\uff0c\u8c03\u7528\u63a5\u53e3\uff0c\u5e76\u914d\u7f6e\u5ef6\u65f6\u5728\u4fee\u6539\u540e\u91cd\u65b0\u8c03\u7528\u67e5\u8be2\u8868\u5355\u5b9e\u4f8b\u63a5\u53e3\uff0c\u5c06\u65b0\u6570\u636e\u52a0\u8f7d\u5c55\u793a\uff0c\u53c2\u8003\u4ee3\u7801\u5982\u4e0b\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01gSNmPS27cEmsAcSnz_!!6000000007817-2-tps-2878-1312.png_.webp",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onTabeRowSave(rowData, action, table) {\n  console.log(rowData, action, table);\n  return table.saveRow(rowData).then((...args) => {\n    console.log(args);\n    const id = rowData.instid;\n    const somejson = {\n      textField_hr9o6eq: args[0].name,\n      textField_62lufhf: args[0].sex,\n      textField_0nibhpr: args[0].age,\n      textField_97okczu: args[0].study,\n      textField_456c4b7: args[0].work,\n    };\n    const param3 = {\n      formInstId: args[0].instid,\n      updateFormDataJson: JSON.stringify(somejson),\n    };\n    this.dataSourceMap['Update'].load(param3).then((res) => {\n      this.utils.toast({\n        title: '\u4fee\u6539\u6210\u529f',\n        type: 'success',\n        size: 'large',\n      });\n      setTimeout(() => {\n        this.dataSourceMap['getDatas'].load();\n      }, 2000);\n    });\n  });\n}\n")),(0,i.kt)("h3",{id:"\u793a\u4f8b\u6f14\u793a\u516d"},"\u793a\u4f8b\u6f14\u793a\u516d"),(0,i.kt)("video",{width:"100%",controls:!0},(0,i.kt)("source",{src:"https://cloud.video.taobao.com/play/u/12803658/p/1/d/hd/e/6/t/1/313025628706.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiYmZiYjVmZTVhNDM2N2E2YWRmMDhmMjgzZWY5MDllNGMifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDYxMjAyNjg=",type:"video/mp4"})),(0,i.kt)("h3",{id:"\u6b65\u9aa46"},"\u6b65\u9aa46"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u6570\u636e\u6e90\u5904\u589e\u52a0\u53d8\u91cf\u6570\u636e\u6e90\uff0c\u5e76\u5728\u8fdc\u7a0b\u6570\u636e\u6e90 getDatas \u914d\u7f6e\u53d8\u91cf\u53c2\u6570 (1)\u914d\u7f6e\u53d8\u91cf\u6570\u636e\u6e90 page \u53ca searchKey ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01RZdzU61xTrNtHf7L8_!!6000000006445-2-tps-1608-1068.png_.webp",alt:null}),(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN019qaVUb1ycONW3W7YI_!!6000000006599-2-tps-1543-837.png_.webp",alt:null})," (2)\u5728\u8fdc\u7a0b\u6570\u636e\u6e90\ngetDatas \u914d\u7f6e\u53d8\u91cf\u53c2\u6570\uff1b\u5e76\u5c06\u53d8\u91cf\u6570\u636e\u6e90 searchKey \u4f5c\u4e3a\u67e5\u8be2\u6570\u636e\u7684\u53c2\u6570 searchFieldJson ",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN01yBKfBf1hYrrdtFoOc_!!6000000004290-2-tps-1562-816.png_.webp",alt:null}),(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i4/O1CN01RJNQWa1tQPwRS8585_!!6000000005896-2-tps-1622-1172.png_.webp",alt:null}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  searchFieldJson: JSON.stringify({\n    textField_456c4b7: state.searchKey\n  }),\n  formUuid: "FORM-HC9660C1TGFQ8927Y6905OPBO30Y1I9YOD3PKH",\n  currentPage: state.page,\n  pageSize: 10\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u7684\u5206\u9875\u52a8\u4f5c\u4e8b\u4ef6\u4e2d\uff0c\u7ed9\u53d8\u91cf\u6570\u636e\u6e90\u8d4b\u503c\uff0c\u5f53\u641c\u7d22\u65f6\u89e6\u53d1\uff0c\u53d8\u91cf\u6570\u636e\u6e90\u8d4b\u503c\u540e\uff0c\u641c\u7d22\u7b26\u5408 searchFieldJson \u6761\u4ef6\u7684\u6570\u636e\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN01jTLTH31RWY0IRR7Kq_!!6000000002119-2-tps-2864-1260.png_.webp",alt:null}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onFetchData(params) {\n  // \u5982\u679c\u662f\u641c\u7d22\u7684\u8bdd\u7ffb\u9875\u91cd\u7f6e\u5230 1\n  if (params.from === 'search') {\n    params.currentPage = 1;\n  }\n\n  // \u5982\u679c\u4f60\u9700\u8981\u628a\u8868\u683c\u67e5\u8be2\u6761\u4ef6\u4fdd\u5b58\u8d77\u6765\uff0c\u53ef\u4ee5\u53d6\u6d88\u4e0b\u4e00\u884c\u6ce8\u91ca\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a params \u7684\u53d8\u91cf\u7c7b\u578b\u6570\u636e\u6e90\n  // this.setState({ tableParams: params });\n  // \u5982\u679c\u4f7f\u7528\u8fdc\u7a0b\u63a5\u53e3\u4f5c\u4e3a\u8868\u683c\u6570\u636e\u6e90\uff0c\u7406\u8bba\u4e0a\u4f60\u53ea\u9700\u8981\u5c06\u4e0b\u65b9\u7684\u201cdataSourceName\u201d\u6539\u4e3a\u5b9e\u9645\u7684\u6570\u636e\u6e90\u540d\u79f0\u5373\u53ef\n  // this.dataSourceMap['getDatas'].load(params);\n  this.setState({\n    searchKey: params.searchKey,\n    page: params.currentPage,\n  });\n}\n")),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"\u5f53\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u65f6\u63a7\u5236\u53f0\u62a5-500-\u9519\u8bef\u63d0\u793a-\u53c2\u6570\u6821\u9a8c\u5931\u8d25-formuuid-\u6216-forminstid-\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u7684"},"\u5f53\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u65f6\uff0c\u63a7\u5236\u53f0\u62a5 \u201c500\u201d \u9519\u8bef\uff0c\u63d0\u793a \u201c\u53c2\u6570\u6821\u9a8c\u5931\u8d25 formUuid \u6216 formInstId \u201d\uff0c\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u7684\uff1f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01sEYnO128hZ0aYvCeg_!!6000000007964-2-tps-2876-1412.png_.webp",alt:null}),"\n\u7b54\uff1a\u7531\u4e8e insert\uff0cupdate \u7b49\u6570\u636e\u6e90\u662f\u5728\u70b9\u51fb\u64cd\u4f5c\u5217\u6309\u94ae\u65f6\u8fdb\u884c\u52a0\u8f7d\uff0c\u800c\u521b\u5efa\u6570\u636e\u6e90\u540e\uff0c\u672a\u5173\u95ed\u81ea\u52a8\u52a0\u8f7d\uff0c\u5bfc\u81f4\u9875\u9762\u6253\u5f00\u540e\u81ea\u52a8\u52a0\u8f7d\u6570\u636e\u6e90\u65f6\u53c2\u6570\u6821\u9a8c\u5931\u8d25\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN017ta4MH1LuSzcJqSWM_!!6000000001359-2-tps-2876-1328.png_.webp",alt:null})))}u.isMDXComponent=!0}}]);