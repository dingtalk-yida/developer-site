"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[3045],{59604:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(2307),i=n(67294),d=n(52263),a=n(91431),r=n(38849);const o=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}];n(5743);const c=function(e){const{category:t,dataSource:n}=e,{siteConfig:c}=(0,d.Z)(),l=e=>e.replace(/\[(.*)\]\(\/docs\/(.*)\)/g,((e,t,n)=>`[${t}](${c.baseUrl}docs/${n})`)),p=[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:e=>i.createElement("div",{style:{fontWeight:600}},e)},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:e=>i.createElement(a.D,{children:l(e),remarkPlugins:[r.Z]})},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:e=>i.createElement(a.D,{children:l(e),remarkPlugins:[r.Z]})},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:e=>"-"!==e&&e?i.createElement(a.D,{children:l(e),remarkPlugins:[r.Z]}):i.createElement("div",null," - ")}],u=("form"===t?[...o,...n||[]]:[...n||[]]).sort(((e,t)=>e.code<t.code?-1:1));return i.createElement(s.Z,{className:"attr-table",dataSource:u,pagination:!1,columns:p})}},9652:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(67294);class i{subscriptions={};constructor(){window.addEventListener("message",this.handleMsg.bind(this),!1)}on(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)}off(e,t){if(!this.subscriptions[e])return;const n=this.subscriptions[e].findIndex((e=>e===t));this.subscriptions[e].splice(n,1)}handleMsg(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((t=>{t(e.data,e.origin,e.source)}))}destroy(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}class d extends s.PureComponent{static displayName="bg-iframe";constructor(e){super(e),this.container=null,this.iframe=null}componentDidMount(){this.props.disableHeightSync||this.createRecevier()}componentDidUpdate(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())}componentWillUnmount(){this.destroyRecevier()}createRecevier=()=>{this.destroyRecevier(),this.recevier=new i,this.recevier.on("updateHeight",((e,t,n)=>{this.iframe&&n===this.iframe.contentWindow&&(this.container.style.height=(e.msg||0)+"px",this.props.onUpdateHeight&&this.props.onUpdateHeight(e.msg||"#"))}))};destroyRecevier=()=>{this.recevier&&(this.recevier.destroy(),this.recevier=null)};render(){const{className:e,id:t,style:n,url:i}=this.props;return i?s.createElement("div",{className:"bg-iframe "+e,id:t,style:{height:400,width:"100%",...n},ref:e=>{this.container=e}},s.createElement("iframe",{src:i,style:{border:"none",width:"100%",height:"100%"},ref:e=>{this.iframe=e}})):s.createElement("div",{className:"bg-iframe empty"},"Iframe")}}},15303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(87462),i=(n(67294),n(3905)),d=n(9652),a=n(59604);const r={title:"Menu \u83dc\u5355",order:11},o="Menu \u83dc\u5355",c={unversionedId:"components/advanced/menu",id:"components/advanced/menu",title:"Menu \u83dc\u5355",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/menu.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/menu",permalink:"/developer-site/docs/components/advanced/menu",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/menu.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1646578019,formattedLastUpdatedAt:"2022\u5e743\u67086\u65e5",frontMatter:{title:"Menu \u83dc\u5355",order:11},sidebar:"components",previous:{title:"Tree \u6811\u5f62\u63a7\u4ef6",permalink:"/developer-site/docs/components/advanced/tree"},next:{title:"Search \u641c\u7d22",permalink:"/developer-site/docs/components/advanced/search"}},l={},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"menu-\u83dc\u5355"},"Menu \u83dc\u5355"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u822a\u83dc\u5355\u662f\u4e00\u4e2a\u7f51\u7ad9\u7684\u7075\u9b42\uff0c\u7528\u6237\u4f9d\u8d56\u5bfc\u822a\u5728\u5404\u4e2a\u9875\u9762\u4e2d\u8fdb\u884c\u8df3\u8f6c\u3002\u4e00\u822c\u5206\u4e3a\u9876\u90e8\u5bfc\u822a\u548c\u4fa7\u8fb9\u5bfc\u822a\uff0c\u9876\u90e8\u5bfc\u822a\u63d0\u4f9b\u5168\u5c40\u6027\u7684\u7c7b\u76ee\u548c\u529f\u80fd\uff0c\u4fa7\u8fb9\u5bfc\u822a\u63d0\u4f9b\u591a\u7ea7\u7ed3\u6784\u6765\u6536\u7eb3\u548c\u6392\u5217\u7f51\u7ad9\u67b6\u6784\u3002")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(d.Z,{url:"https://www.aliwork.com/developer/menu-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(a.Z,{dataSource:[{code:"dataSource",type:"[MenuDataSource[]](/docs/components/interface#menudatasource)",default:'~~~json\n[\n  {\n    label: "\u83dc\u5355\u9879\u4e00",\n    key: "key1",\n      children: [\n        {\n          label: "\u9009\u9879\u4e00",\n          key: "key1-1",\n          tag: {\n            text: "\u521d\u59cb\u5316",\n            color: "blue",\n          },\n        },\n        {\n          label: "\u9009\u9879\u4e8c",\n          key: "key1-2",\n        },\n      ],\n    },\n    {\n      isDivider: true,\n    },\n    {\n      label: "\u83dc\u5355\u9879\u4e8c",\n      key: "key2",\n      children: [\n        {\n          label: "\u9009\u9879\u4e00",\n          key: "key2-1",\n        },\n        {\n          label: "\u9009\u9879\u4e8c",\n          key: "key2-2",\n        },\n      ],\n    },\n    {\n      label: "\u83dc\u5355\u9879\u4e09",\n      key: "key3",\n      disabled: true,\n    },\n  ]      \n',desc:"\u83dc\u5355\u7684\u6570\u636e\u6e90"},{code:"popupAlign",type:"'follow' | 'outside'",default:"'follow'",desc:"\u5f39\u5c42\u7684\u5bf9\u9f50\u65b9\u5f0f"},{code:"onItemClick",type:"(key: string,item: MenuDataSource, event: any) => void",default:"-",desc:"\u70b9\u51fb\u83dc\u5355\u9879\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"mode",type:"'inline' | 'popup'",default:"inline",desc:"\u8bbe\u7f6e\u5b50\u83dc\u5355\u6253\u5f00\u7684\u6a21\u5f0f"},{code:"triggerType",type:"'click' | 'hover'",default:"'click'",desc:"\u8bbe\u7f6e\u5b50\u83dc\u5355\u6253\u5f00\u7684\u89e6\u53d1\u884c\u4e3a"},{code:"onSelect",type:"(selectedKeys: string[] ,extraObj: any) => void",default:"-",desc:"\u9009\u4e2d\u6216\u53d6\u6d88\u9009\u4e2d\u83dc\u5355\u9879\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"selectMode",type:"'single' | 'multiple' | false ",default:"false",desc:"\u83dc\u5355\u7ec4\u4ef6\u7684\u9009\u62e9\u6a21\u5f0f"},{code:"direction",type:"'ver' | 'hoz'",default:"-",desc:"\u83dc\u5355\u7b2c\u4e00\u5c42\u5c55\u793a\u65b9\u5411"},{code:"header",type:"string",default:"-",desc:"\u81ea\u5b9a\u4e49\u83dc\u5355\u5934\u90e8"},{code:"footer",type:"string",default:"-",desc:"\u81ea\u5b9a\u4e49\u83dc\u5355\u5c3e\u90e8"}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);