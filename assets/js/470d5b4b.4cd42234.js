"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5686],{94579:function(e,t,r){var i=r(97218),o=r(59301),n=(r(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(i.Z,{dataSource:e.dataSource,columns:n,pagination:!1})}},75502:function(e,t,r){r.d(t,{Z:function(){return c}});var i=r(44117),o=r(59301),n=r(12708),a=r.n(n),d=r(41481),c=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new d.Z,r.recevier.on("updateHeight",(function(e,t,i){r.iframe&&i===r.iframe.contentWindow&&(r.container.style.height=(e.msg||0)+"px",r.props.onUpdateHeight(e.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,i.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(e){var t=e.url,r=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),r!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var e=this,t=this.props,r=t.className,i=t.id,n=t.style,a=t.url;return a?o.createElement("div",{className:"bg-iframe "+r,id:i,style:Object.assign({height:800,width:"100%"},n),ref:function(t){e.container=t}},o.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);c.displayName="bg-iframe",c.propTypes={className:a().string,disableHeightSync:a().bool,id:a().string,onUpdateHeight:a().func,style:a().object,url:a().string.isRequired},c.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},48810:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=r(21810),o=r(86919),n=(r(59301),r(99278)),a=r(75502),d=r(94579),c=["components"],l={title:"\u5355\u9009",order:2},s="\u5355\u9009",u={unversionedId:"components/form/radio",id:"components/form/radio",title:"\u5355\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/radio.mdx",sourceDirName:"components/form",slug:"/components/form/radio",permalink:"/developer-site/docs/components/form/radio",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/radio.mdx",tags:[],version:"current",frontMatter:{title:"\u5355\u9009",order:2},sidebar:"components",previous:{title:"\u6570\u5b57\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/number"},next:{title:"\u4e0b\u62c9\u9009\u62e9",permalink:"/developer-site/docs/components/form/select"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,n.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5355\u9009"},"\u5355\u9009"),(0,n.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,n.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,n.kt)(a.Z,{url:"https://www.aliwork.com/developer/radio-v2?isRenderNav=false",mdxType:"Iframe"}),(0,n.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,n.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:'{dataType:"CHANGED", value:"moon"}',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u6307\u5b9a\u9009\u9879", param: "function validateRule(value) { return value === "test" }"}'},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"function(value){ console.log(value); }",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);