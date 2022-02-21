"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[6015],{94579:function(e,t,i){var n=i(97218),r=i(59301),o=(i(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(n.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},75502:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(44117),r=i(59301),o=i(12708),a=i.n(o),c=i(41481),s=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new c.Z,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){var t=e.url,i=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),i!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,o=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);s.displayName="bg-iframe",s.propTypes={className:a().string,disableHeightSync:a().bool,id:a().string,onUpdateHeight:a().func,style:a().object,url:a().string.isRequired},s.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},96079:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=i(21810),r=i(86919),o=(i(59301),i(99278)),a=i(75502),c=i(94579),s=["components"],d={title:"\u6587\u672c",order:3},l="\u6587\u672c",p={unversionedId:"components/basic/text",id:"components/basic/text",title:"\u6587\u672c",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/basic/text.mdx",sourceDirName:"components/basic",slug:"/components/basic/text",permalink:"/developer-site/docs/components/basic/text",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/basic/text.mdx",tags:[],version:"current",frontMatter:{title:"\u6587\u672c",order:3},sidebar:"components",previous:{title:"\u6309\u94ae",permalink:"/developer-site/docs/components/basic/button"},next:{title:"\u56fe\u7247",permalink:"/developer-site/docs/components/basic/image"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6587\u672c"},"\u6587\u672c"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/text-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(c.Z,{dataSource:[{attr:"\u5185\u5bb9",code:"content",type:"String",demo:'"\u6807\u9898"',dafault:"",desc:"\u652f\u6301\u56fd\u9645\u5316"},{attr:"\u662f\u5426\u663e\u793a HTML \u5f62\u5f0f\u7684\u6807\u9898",code:"showTitle",type:"bool",demo:"false",dafault:"",desc:"\u5c06\u5185\u5bb9\u663e\u793a\u4e3a html \u6807\u7b7e\u7684 title"},{attr:"\u9ed8\u8ba4\u72b6\u6001",code:"defaultBehavior",type:"enum",demo:"NORMAL",dafault:"",desc:"NORMAL/HIDDEN"},{attr:"\u70b9\u51fb\u4e8b\u4ef6",code:"onClick",type:"function",demo:"",dafault:"",desc:""}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);