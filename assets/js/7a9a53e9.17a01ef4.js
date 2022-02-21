"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[3648],{94579:function(e,t,o){var a=o(97218),n=o(59301),r=(o(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return n.createElement(a.Z,{dataSource:e.dataSource,columns:r,pagination:!1})}},75502:function(e,t,o){o.d(t,{Z:function(){return l}});var a=o(44117),n=o(59301),r=o(12708),d=o.n(r),i=o(41481),l=function(e){function t(t){var o;return(o=e.call(this,t)||this).createRecevier=function(){o.destroyRecevier(),o.recevier=new i.Z,o.recevier.on("updateHeight",(function(e,t,a){o.iframe&&a===o.iframe.contentWindow&&(o.container.style.height=(e.msg||0)+"px",o.props.onUpdateHeight(e.msg||"#"))}))},o.destroyRecevier=function(){o.recevier&&(o.recevier.destroy(),o.recevier=null)},o.container=null,o.iframe=null,o}(0,a.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},o.componentDidUpdate=function(e){var t=e.url,o=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),o!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},o.componentWillUnmount=function(){this.destroyRecevier()},o.render=function(){var e=this,t=this.props,o=t.className,a=t.id,r=t.style,d=t.url;return d?n.createElement("div",{className:"bg-iframe "+o,id:a,style:Object.assign({height:800,width:"100%"},r),ref:function(t){e.container=t}},n.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):n.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(n.PureComponent);l.displayName="bg-iframe",l.propTypes={className:d().string,disableHeightSync:d().bool,id:d().string,onUpdateHeight:d().func,style:d().object,url:d().string.isRequired},l.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},69547:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var a=o(21810),n=o(86919),r=(o(59301),o(99278)),d=o(75502),i=o(94579),l=["components"],c={title:"\u4e0b\u62c9\u9009\u62e9",order:3},s="\u4e0b\u62c9\u9009\u62e9",u={unversionedId:"components/form/select",id:"components/form/select",title:"\u4e0b\u62c9\u9009\u62e9",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/select.mdx",sourceDirName:"components/form",slug:"/components/form/select",permalink:"/developer-site/docs/components/form/select",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/select.mdx",tags:[],version:"current",frontMatter:{title:"\u4e0b\u62c9\u9009\u62e9",order:3},sidebar:"components",previous:{title:"\u5355\u9009",permalink:"/developer-site/docs/components/form/radio"},next:{title:"\u591a\u9009",permalink:"/developer-site/docs/components/form/checkbox"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,o=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e0b\u62c9\u9009\u62e9"},"\u4e0b\u62c9\u9009\u62e9"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(d.Z,{url:"https://www.aliwork.com/developer/select-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(i.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:'"\u4e0b\u62c9\u5355\u9009"',dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:'\u5355\u9009\uff1a{value: "1"}\uff1b\u591a\u9009\uff1a{value: ["1"]}',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"top"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top", "inset"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"right"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u63d0\u793a\u6587\u5b57",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9"',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"} '},{attr:"\u6a21\u5f0f",code:"mode",type:"String",demo:'"single"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u5355\u9009"single"\u3001\u591a\u9009"multiple"\u3001\u6807\u7b7e"tag"'},{attr:"\u4e0b\u62c9\u7bad\u5934",code:"hasArrow",type:"Boolean",demo:"true",dafault:"",desc:""},{attr:"\u8fb9\u6846",code:"hasBorder",type:"Boolean",demo:"true",dafault:"",desc:""},{attr:"\u6e05\u9664\u6309\u94ae",code:"hasClear",type:"Boolean",demo:"true",dafault:"",desc:"\u5355\u9009\u6a21\u5f0f\u65f6\u624d\u6709"},{attr:"\u5168\u9009\u529f\u80fd",code:"hasSelectAll",type:"Boolean",demo:"true ",dafault:"",desc:"\u591a\u9009\u6a21\u5f0f\u65f6\u624d\u6709\u6548"},{attr:"\u4e0b\u62c9\u83dc\u5355\u662f\u5426\u4e0e\u9009\u62e9\u5668\u5bf9\u9f50",code:"autoWidth",type:"Boolean",demo:"true",dafault:"",desc:""},{attr:"\u5c55\u5f00\u540e\u662f\u5426\u80fd\u641c\u7d22",code:"showSearch",type:"Boolean",demo:" true ",dafault:"",desc:"tag \u6a21\u5f0f\u4e0b\u56fa\u5b9a\u4e3a true"},{attr:"\u9009\u9879",code:"dataSource",type:"Array",demo:"  [{ text: { zh_CN: '\u9009\u9879\u4e00', en_US: 'Option 1', type: 'i18n', }, value: '1', }] ",dafault:"",desc:"\u8bbe\u7f6e\u9009\u9879"},{attr:"\u5f39\u5c42\u5185\u5bb9\u4e3a\u7a7a\u7684\u6587\u6848",code:"noFoundContent",type:"Boolean",demo:" true ",dafault:"",desc:""},{attr:"\u672c\u5730\u8fc7\u6ee4",code:"filterLocal",type:"Boolean",demo:" true ",dafault:"",desc:"\u5728\u6570\u636e\u6e90\u4e3a\u8fdc\u7a0b\u7684\u65f6\u5019\u9700\u8981\u5173\u95ed\u6b64\u9879"},{attr:"\u5f00\u542f\u672c\u5730\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u65b9\u6cd5",code:"isFilter",type:"Function",demo:" function filter(value, data){ return true;} ",dafault:"",desc:"\u5f00\u542f\u672c\u5730\u8fc7\u6ee4\u65f6\u624d\u6709"},{attr:"\u672c\u5730\u8fc7\u6ee4\u65b9\u6cd5",code:"filterLocal",type:"Function",demo:" function filter(value, data){ return true;} ",dafault:"",desc:"\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u786e\u5b9a\u662f\u5426\u4fdd\u7559"},{attr:"\u9009\u9879",code:"dataSource",type:"object",demo:'\u5355\u9009 { "options": [ { "text": { "zh_CN": "\u9009\u9879\u4e00", "en_US": "Option 1", "type": "i18n", }], "value": "1", }, \u591a\u9009\uff1a{ "multiOptions":[], "value":[]}',dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"function(value, actionType, item){ console.log(value); } ",dafault:"",desc:"\u9009\u9879\u7684\u663e\u793a\u503c\u53ef\u901a\u8fc7 `item.label` \u6765\u83b7\u53d6"},{attr:"\u5f39\u5c42\u663e\u793a\u6216\u9690\u85cf\u65f6\u89e6\u53d1\u7684\u56de\u8c03",code:"onVisibleChange",type:"Function",demo:' function onVisibleChange(visible) { console.log("onVisibleChange", visible); }',dafault:"",desc:"\u8fd4\u56de\u4e00\u4e2a Boolean \u503c\u786e\u5b9a\u662f\u5426\u4fdd\u7559"},{attr:"tag \u5220\u9664\u56de\u8c03",code:"onRemove",type:"Function",demo:' function onRemove(item) { console.log("onRemove", item.value); } ',dafault:"",desc:""},{attr:"\u5f53\u641c\u7d22\u6846\u503c\u53d8\u5316\u65f6\u56de\u8c03",code:"onSearch",type:"Function",demo:' function onSearch(value) { console.log("onSearch", value); }  ',dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);