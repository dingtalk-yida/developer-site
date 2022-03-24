"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[5073],{35472:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(47003),i=n(59301),r=n(56925),d=n(64695),s=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],a=(n(36844),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return i.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return i.createElement(r.D,{children:e,remarkPlugins:[d.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return i.createElement(r.D,{children:e,remarkPlugins:[d.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?i.createElement(r.D,{children:e,remarkPlugins:[d.Z]}):i.createElement("div",null," - ")}}]);var c=function(e){var t=e.category,n=e.dataSource,r=("form"===t?[].concat(s,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return i.createElement(o.Z,{className:"attr-table",dataSource:r,pagination:!1,columns:a})}},50199:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(31538),i=n(59301),r=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new r,n.recevier.on("updateHeight",(function(e,t,o){n.iframe&&o===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,o=t.id,r=t.style,d=t.url;return d?i.createElement("div",{className:"bg-iframe "+n,id:o,style:Object.assign({height:400,width:"100%"},r),ref:function(t){e.container=t}},i.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);d.displayName="bg-iframe"},37370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var o=n(22376),i=n(91262),r=(n(59301),n(99278)),d=n(50199),s=n(35472),a=["components"],c={title:"SelectField \u4e0b\u62c9\u9009\u62e9",order:3},l="SelectField \u4e0b\u62c9\u9009\u62e9",u={unversionedId:"components/form/selectField",id:"components/form/selectField",title:"SelectField \u4e0b\u62c9\u9009\u62e9",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/selectField.mdx",sourceDirName:"components/form",slug:"/components/form/selectField",permalink:"/developer-site/docs/components/form/selectField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/form/selectField.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646573209,formattedLastUpdatedAt:"2022/3/6",frontMatter:{title:"SelectField \u4e0b\u62c9\u9009\u62e9",order:3},sidebar:"components",previous:{title:"RadioField \u5355\u9009",permalink:"/developer-site/docs/components/form/radioField"},next:{title:"CheckboxField \u591a\u9009",permalink:"/developer-site/docs/components/form/checkboxField"}},p={},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selectfield-\u4e0b\u62c9\u9009\u62e9"},"SelectField \u4e0b\u62c9\u9009\u62e9"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u66ff\u4ee3\u539f\u751f select\uff0c\u5728\u9650\u5b9a\u7684\u53ef\u9009\u9879\u5185\u8fdb\u884c\u9009\u62e9\uff0c\u6838\u5fc3\u80fd\u529b\u662f \u9009\u62e9\u3002")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(d.Z,{url:"https://www.aliwork.com/developer/select-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(s.Z,{category:"form",dataSource:[{code:"placeholder",type:"string",default:"'\u8bf7\u9009\u62e9'",desc:"\u8868\u5355\u7ec4\u4ef6\u5360\u4f4d\u63d0\u793a\u4fe1\u606f"},{code:"value",type:"string",default:"",desc:"\u5f53\u524d\u7ec4\u4ef6\u9ed8\u8ba4\u503c"},{code:"hasArrow",type:"boolean",default:"true",desc:"\u662f\u5426\u6709\u4e0b\u62c9\u7bad\u5934"},{code:"hasBorder",type:"boolean",default:"true",desc:"\u662f\u5426\u6709\u8fb9\u6846"},{code:"hasClear",type:"boolean",default:"true",desc:"\u662f\u5426\u6709\u6e05\u9664\u6309\u94ae"},{code:"useDetailValue",type:"boolean",default:"false",desc:"\u8bbe\u7f6evalue \u4f7f\u7528\u5bf9\u8c61\u7c7b\u578b{label, value}"},{code:"autoWidth",type:"boolean",default:"true",desc:"\u4e0b\u62c9\u83dc\u5355\u662f\u5426\u4e0e\u9009\u62e9\u5668\u5bf9\u9f50"},{code:"showSearch",type:"boolean",default:"true",desc:"\u5c55\u5f00\u540e\u662f\u5426\u80fd\u641c\u7d22\uff0ctag \u6a21\u5f0f\u4e0b\u56fa\u5b9a\u4e3a true"},{code:"searchDelay",type:"number",default:"300",desc:"\u641c\u7d22\u5ef6\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms"},{code:"dataSource",type:"[DataSource[]](/docs/components/interface#datasource)",default:'~~~json\n[\n  {\n    "text": {\n      "zh_CN": "\u9009\u9879\u4e00",\n      "en_US": "Option 1",\n      "type": "i18n"\n    },\n    "value": "1"\n  },\n  {\n    "text": {\n      "zh_CN": "\u9009\u9879\u4e8c",\n      "en_US": "Option 2",\n      "type": "i18n"\n    },\n    "value": "2"\n  },\n  {\n    "text": {\n      "zh_CN": "\u9009\u9879\u4e09",\n      "en_US": "Option 3",\n      "type": "i18n"\n    },\n    "value": "3"\n  }\n]\n      ',desc:"\u8bbe\u7f6e\u9009\u9879"},{code:"notFoundContent",type:"string",default:"'\u8bf7\u8f93\u5165'",desc:"\u4e3a\u7a7a\u6587\u6848"},{code:"filter",type:"(value: string, data: DataSource) => boolean",default:"",desc:"\u672c\u5730\u8fc7\u6ee4\u65b9\u6cd5\uff0c\u5f00\u542f\u672c\u5730\u8fc7\u6ee4\u65f6\u624d\u6709"},{code:"filterLocal",type:"boolean",default:"",desc:"\u652f\u6301\u672c\u5730\u8fc7\u6ee4\uff0c\u5728\u6570\u636e\u6e90\u4e3a\u8fdc\u7a0b\u7684\u65f6\u5019\u9700\u8981\u5173\u95ed\u6b64\u9879"},{code:"onChange",type:"(value: string) => void",default:"",desc:"\u7ec4\u4ef6\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6"},{code:"onVisibleChange",type:"(visible: boolean) => void",default:"",desc:"\u5f39\u5c42\u663e\u793a\u6216\u9690\u85cf\u65f6\u89e6\u53d1\u4e8b\u4ef6"},{code:"onRemove",type:"(item: object) => void",default:"",desc:"\u503c\u5220\u9664\u65f6\u4e8b\u4ef6"},{code:"onSearch",type:"(keyword: string) => void",default:"",desc:"\u641c\u7d22\u6846\u503c\u53d8\u5316\u65f6\u4e8b\u4ef6"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);