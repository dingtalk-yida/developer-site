"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[1157],{41481:function(e,t){var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return r(e,[{key:"on",value:function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)}},{key:"off",value:function(e,t){if(this.subscriptions[e]){var r=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(r,1)}}},{key:"handleMsg",value:function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),e}(),i=n;t.Z=i;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(i,"default","src/recevier.js"))},99278:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59301);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75502:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(44117),i=r(59301),o=r(12708),c=r.n(o),s=r(41481),a=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new s.Z,r.recevier.on("updateHeight",(function(e,t,n){r.iframe&&n===r.iframe.contentWindow&&(r.container.style.height=(e.msg||0)+"px",r.props.onUpdateHeight(e.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(e){var t=e.url,r=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),r!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var e=this,t=this.props,r=t.className,n=t.id,o=t.style,c=t.url;return c?i.createElement("div",{className:"bg-iframe "+r,id:n,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:c,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);a.displayName="bg-iframe",a.propTypes={className:c().string,disableHeightSync:c().bool,id:c().string,onUpdateHeight:c().func,style:c().object,url:c().string.isRequired},a.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},88309:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(21810),i=r(86919),o=(r(59301),r(99278)),c=r(75502),s=["components"],a={title:"\u5bcc\u6587\u672c\u7f16\u8f91",order:14},l="\u5bcc\u6587\u672c\u7f16\u8f91",u={unversionedId:"components/form/editorField",id:"components/form/editorField",title:"\u5bcc\u6587\u672c\u7f16\u8f91",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/editorField.mdx",sourceDirName:"components/form",slug:"/components/form/editorField",permalink:"/developer-site/docs/components/form/editorField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/editorField.mdx",tags:[],version:"current",frontMatter:{title:"\u5bcc\u6587\u672c\u7f16\u8f91",order:14},sidebar:"components",previous:{title:"\u8bc4\u5206",permalink:"/developer-site/docs/components/form/rateField"},next:{title:"\u7ea7\u8054\u9009\u62e9",permalink:"/developer-site/docs/components/form/cascadeSelectField"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5bcc\u6587\u672c\u7f16\u8f91"},"\u5bcc\u6587\u672c\u7f16\u8f91"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(c.Z,{url:"https://www.aliwork.com/developer/editor-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"))}f.isMDXComponent=!0}}]);