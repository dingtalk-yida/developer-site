"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[7055],{99278:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(59301);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(22376),r=n(91262),i=(n(59301),n(99278)),l=["components"],o={title:"\u521b\u5efa\u65e5\u7a0b",order:25},p=void 0,c={unversionedId:"examples/connector/createSchedule",id:"examples/connector/createSchedule",title:"\u521b\u5efa\u65e5\u7a0b",description:"\u4f7f\u7528\u573a\u666f",source:"@site/docs/examples/connector/createSchedule.mdx",sourceDirName:"examples/connector",slug:"/examples/connector/createSchedule",permalink:"/developer-site/docs/examples/connector/createSchedule",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/connector/createSchedule.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647522908,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u521b\u5efa\u65e5\u7a0b",order:25},sidebar:"examples",previous:{title:"\u63d0\u4ea4\u62a5\u9500\u5355\u89e6\u53d1\u6d88\u606f\u901a\u77e5",permalink:"/developer-site/docs/examples/connector/submitTriggerMessage"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u5165\u804c\u53ca\u8d44\u4ea7\u9886\u7528",permalink:"/developer-site/docs/examples/connector/useOfentryAssets"}},m={},s=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa4 1\uff1a\u8868\u5355\u7684\u521b\u5efa\u4e0e\u914d\u7f6e",id:"\u6b65\u9aa4-1\u8868\u5355\u7684\u521b\u5efa\u4e0e\u914d\u7f6e",level:3},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u96c6\u6210&amp;\u81ea\u52a8\u5316",id:"\u6b65\u9aa4-2\u521b\u5efa\u96c6\u6210\u81ea\u52a8\u5316",level:3},{value:"\u6b65\u9aa4 3\uff1a\u65b0\u5efa\u96c6\u6210&amp;\u81ea\u52a8\u5316",id:"\u6b65\u9aa4-3\u65b0\u5efa\u96c6\u6210\u81ea\u52a8\u5316",level:3},{value:"\u6b65\u9aa4 4\uff1a\u914d\u7f6e\u96c6\u6210&amp;\u81ea\u52a8\u5316",id:"\u6b65\u9aa4-4\u914d\u7f6e\u96c6\u6210\u81ea\u52a8\u5316",level:3},{value:"\u6b65\u9aa4 5\uff1a\u914d\u7f6e\u5f85\u529e\u4efb\u52a1\u5185\u5bb9",id:"\u6b65\u9aa4-5\u914d\u7f6e\u5f85\u529e\u4efb\u52a1\u5185\u5bb9",level:3}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u5982\u516c\u53f8\u6bcf\u6708\u6708\u5e95\u90fd\u9700\u8981\u53ec\u5f00\u5168\u5458\u603b\u7ed3\u5927\u4f1a\uff0c\u9700\u8981\u63d0\u524d\u8fdb\u884c\u4f1a\u52a1\u51c6\u5907\u3002\u4f1a\u52a1\u7ec4\u6210\u5458\u9700\u8981\u4e3a\u81ea\u5df1\u521b\u5efa\u65e5\u7a0b\u4fbf\u4e8e\u63d0\u9192\u3002\u73b0\u5728\u901a\u8fc7\u5b9c\u642d\u7684\u8868\u5355\u7684\u586b\u5199\u4e0e\u63d0\u4ea4\uff0c\u5373\u53ef\u81ea\u52a8\u4e3a\u5176\u5728\u9489\u9489\u4e0a\u521b\u5efa\u65e5\u7a0b\u3002\u53ef\u5c06\u5f85\u529e\u4e8b\u9879\u5199\u5165\u5230\u9489\u9489\u65e5\u5386\u5e76\u5728\u9489\u9489\u65e5\u5386\u4e2d\u5c55\u793a\u3002"),(0,i.kt)("h2",{id:"\u6548\u679c\u6f14\u793a"},"\u6548\u679c\u6f14\u793a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01Nl5iXC28fH1poZpVb_!!6000000007959-2-tps-1920-1042.png_.webp",alt:null})),(0,i.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,i.kt)("h3",{id:"\u6b65\u9aa4-1\u8868\u5355\u7684\u521b\u5efa\u4e0e\u914d\u7f6e"},"\u6b65\u9aa4 1\uff1a\u8868\u5355\u7684\u521b\u5efa\u4e0e\u914d\u7f6e"),(0,i.kt)("p",null,"\u521b\u5efa\u8868\u5355\uff0c\u7528\u4e8e\u5f55\u5165\u65e5\u7a0b\u76f8\u5173\u4fe1\u606f\uff0c\u5e76\u4f5c\u4e3a\u89e6\u53d1\u8fde\u63a5\u5668\u529f\u80fd\u7684\u6570\u636e\u6765\u6e90\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u8868\u5355\uff0c\u547d\u540d\u4e3a\u300c\u65e5\u7a0b\u4fe1\u606f\u767b\u8bb0\u300d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u8868\u5355\u5185\u5206\u522b\u6dfb\u52a0\u4e24\u4e2a\u65e5\u671f\u7ec4\u4ef6\uff0c\u5206\u522b\u547d\u540d\u4e3a\u300c\u65e5\u7a0b\u5f00\u59cb\u65f6\u95f4\u300d\u548c\u300c\u65e5\u7a0b\u7ed3\u675f\u65f6\u95f4\u300d\uff0c\u5c06\u683c\u5f0f\u8bbe\u7f6e\u4e3a\u300c\u5e74-\u6708-\u65e5 \u65f6:\u5206\u300d\uff0c\u8bbe\u7f6e\u4e3a\u5fc5\u586b\u9879\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN01ZOe3ip1pQBHJBSMc6_!!6000000005354-2-tps-1920-952.png_.webp",alt:null}),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u5728\u8fdb\u884c\u8868\u5355\u6570\u636e\u586b\u5199\u65f6\uff0c\u5e94\u4fdd\u6301",(0,i.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u65f6\u95f4\u665a\u4e8e\u7ed3\u675f\u65f6\u95f4"),"\uff0c\u5426\u5219\u8fde\u63a5\u5668\u5c06\u4e0d\u4f1a\u6267\u884c\u3002")))),(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a\u6210\u5458\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u65e5\u7a0b\u53c2\u4e0e\u4eba\u300d\uff0c\u5f00\u542f\u591a\u9009\u6a21\u5f0f\uff0c\u8bbe\u7f6e\u4e3a\u5fc5\u586b\u9879\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01jXYURN1wiEC2nnGv6_!!6000000006341-2-tps-1920-951.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a\u5355\u884c\u6587\u672c\u7ec4\u4ef6\uff0c\u547d\u540d\u4e3a\u300c\u65e5\u7a0b\u6807\u9898\u300d\uff0c\u8bbe\u7f6e\u4e3a\u5fc5\u586b\u9879\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN01opsfmw28bbrRYdhQ2_!!6000000007951-2-tps-1920-949.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u591a\u884c\u6587\u672c\u7ec4\u4ef6\uff0c\u70b9\u51fb\u4fdd\u5b58\uff0c\u5373\u53ef\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01YSIhoD1QfQ3o04BCK_!!6000000002003-2-tps-1920-951.png_.webp",alt:null}))),(0,i.kt)("h3",{id:"\u6b65\u9aa4-2\u521b\u5efa\u96c6\u6210\u81ea\u52a8\u5316"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u96c6\u6210&\u81ea\u52a8\u5316"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u62d3\u5c55\u9605\u8bfb\uff1a"),"\u83b7\u53d6\u8be6\u7ec6\u7684\u8fde\u63a5\u5668\u4ecb\u7ecd\uff0c\u8bf7\u79fb\u6b65",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/concept/connector"},"\u96c6\u6210&\u81ea\u52a8\u5316-\u8fde\u63a5\u5668")))),(0,i.kt)("p",null,"\u63d0\u4ea4\u8868\u5355\u65f6\uff0c\u7cfb\u7edf\u81ea\u52a8\u4e3a\u6307\u5b9a\u4eba\u5458\u53d1\u8d77\u65e5\u7a0b\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u914d\u7f6e\u8fde\u63a5\u5668\u3002"),(0,i.kt)("h3",{id:"\u6b65\u9aa4-3\u65b0\u5efa\u96c6\u6210\u81ea\u52a8\u5316"},"\u6b65\u9aa4 3\uff1a\u65b0\u5efa\u96c6\u6210&\u81ea\u52a8\u5316"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u540e\u53f0\u7ba1\u7406\u9875\u9762>>\u96c6\u6210&\u81ea\u52a8\u5316>>\u300c\u65b0\u5efa\u96c6\u6210&\u81ea\u52a8\u5316\u300d\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01rjHvan1pbAmed1pzt_!!6000000005378-2-tps-2878-1590.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u300c\u65b0\u5efa\u96c6\u6210&\u81ea\u52a8\u5316\u300d\u5bf9\u8bdd\u6846>>\u5c06\u8fde\u63a5\u5668\u547d\u540d\u4e3a\u300c\u521b\u5efa\u65e5\u7a0b\u300d>>\u9009\u62e9\u89e6\u53d1\u7c7b\u578b\u4e3a\u300c\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\u300d\u5e76\u6307\u5b9a\u89e6\u53d1\u8868\u5355>>\u70b9\u51fb\u786e\u8ba4\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN010LpOj21o2zbcEfmMl_!!6000000005168-2-tps-2878-1592.png_.webp",alt:null}))),(0,i.kt)("h3",{id:"\u6b65\u9aa4-4\u914d\u7f6e\u96c6\u6210\u81ea\u52a8\u5316"},"\u6b65\u9aa4 4\uff1a\u914d\u7f6e\u96c6\u6210&\u81ea\u52a8\u5316"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8868\u5355\u89e6\u53d1\u4e8b\u4ef6\n\u70b9\u51fb\u9009\u4e2d\u300c\u8868\u5355\u4e8b\u4ef6\u89e6\u53d1\u300d\uff0c\u5728\u89e6\u53d1\u4e8b\u4ef6\u4e2d\u9009\u62e9\u300c\u521b\u5efa\u6210\u529f\u300d\uff0c \u6570\u636e\u8fc7\u6ee4\u9009\u62e9\u300c\u5168\u90e8\u6570\u636e\u300d\u3002\u6700\u540e\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u4fdd\u5b58\u6309\u94ae\uff0c\u5373\u53ef\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i2/O1CN01I2M4o925NSmAv7giK_!!6000000007514-2-tps-1920-947.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8fde\u63a5\u5668"),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u300c\u8fde\u63a5\u5668\u300d\u8282\u70b9\uff0c\u5728\u9009\u62e9\u5e94\u7528\u4e2d\u9009\u4e2d\u300c\u65e5\u7a0b\u300d\uff0c\u5e76\u70b9\u51fb\u4e0b\u4e00\u6b65\u6309\u94ae\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN018y11bF1nK6nGsurm7_!!6000000005070-2-tps-1920-949.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u5728\u9009\u62e9\u6267\u884c\u52a8\u4f5c\u4e2d\u9009\u4e2d\u300c\u521b\u5efa\u65e5\u7a0b\u300d\u6267\u884c\u52a8\u4f5c\uff0c\u70b9\u51fb\u4e0b\u4e00\u6b65\u6309\u94ae\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i1/O1CN01QqD6wy1qFw1soSvBZ_!!6000000005467-2-tps-1920-951.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u6267\u884c\u52a8\u4f5c\u4e2d\u5bf9\u5404\u4e2a\u914d\u7f6e\u9879\u8fdb\u884c\u914d\u7f6e\uff0c\u70b9\u51fb\u4fdd\u5b58\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"li",src:"https://img.alicdn.com/imgextra/i3/O1CN01J0YoYU1rJt4Bou4ZY_!!6000000005611-2-tps-1920-950.png_.webp",alt:null})),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u4fdd\u5b58\u540e\uff0c\u70b9\u51fb\u53d1\u5e03\u5373\u53ef\u3002")),(0,i.kt)("h3",{id:"\u6b65\u9aa4-5\u914d\u7f6e\u5f85\u529e\u4efb\u52a1\u5185\u5bb9"},"\u6b65\u9aa4 5\uff1a\u914d\u7f6e\u5f85\u529e\u4efb\u52a1\u5185\u5bb9"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4e24\u4e2a\u6b65\u9aa4\uff0c\u6211\u4eec\u5b9e\u73b0\u529f\u80fd\u7684\u914d\u7f6e\u5de5\u4f5c\u5df2\u7ecf\u5b8c\u6210\uff0c\u63a5\u4e0b\u6765\uff0c\u53ea\u9700\u63d0\u4ea4\u8868\u5355\u5373\u53ef\u89e6\u53d1\u8fde\u63a5\u5668\uff0c\u4ece\u800c\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8282\u70b9\u4e3a\u6307\u5b9a\u7684\u4eba\u5458\u521b\u5efa\u65e5\u7a0b\uff0c\u5e76\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8282\u70b9\u5173\u95ed\u65e5\u7a0b\u3002\n\u586b\u5199\u8868\u5355\u5185\u5bb9\uff0c\u70b9\u51fb\u63d0\u4ea4\uff0c\u5373\u53ef\u3002\uff08\u64cd\u4f5c\u5982\u56fe\u6240\u793a\uff09\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01U7E2XN1TYxJqHHnXM_!!6000000002395-2-tps-1920-955.png_.webp",alt:null})))}u.isMDXComponent=!0}}]);