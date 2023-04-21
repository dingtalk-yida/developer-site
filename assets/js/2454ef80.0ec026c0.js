"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[5774],{59604:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(2307),n=s(67294),o=s(52263),r=s(91431),a=s(38849);const d=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}];s(5743);const c=function(e){const{category:t,dataSource:s}=e,{siteConfig:c}=(0,o.Z)(),l=e=>e.replace(/\[(.*)\]\(\/docs\/(.*)\)/g,((e,t,s)=>`[${t}](${c.baseUrl}docs/${s})`)),p=[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:e=>n.createElement("div",{style:{fontWeight:600}},e)},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:e=>n.createElement(r.D,{children:l(e),remarkPlugins:[a.Z]})},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:e=>n.createElement(r.D,{children:l(e),remarkPlugins:[a.Z]})},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:e=>"-"!==e&&e?n.createElement(r.D,{children:l(e),remarkPlugins:[a.Z]}):n.createElement("div",null," - ")}],u=("form"===t?[...d,...s||[]]:[...s||[]]).sort(((e,t)=>e.code<t.code?-1:1));return n.createElement(i.Z,{className:"attr-table",dataSource:u,pagination:!1,columns:p})}},9652:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(67294);class n{subscriptions={};constructor(){window.addEventListener("message",this.handleMsg.bind(this),!1)}on(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)}off(e,t){if(!this.subscriptions[e])return;const s=this.subscriptions[e].findIndex((e=>e===t));this.subscriptions[e].splice(s,1)}handleMsg(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((t=>{t(e.data,e.origin,e.source)}))}destroy(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}class o extends i.PureComponent{static displayName="bg-iframe";constructor(e){super(e),this.container=null,this.iframe=null}componentDidMount(){this.props.disableHeightSync||this.createRecevier()}componentDidUpdate(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())}componentWillUnmount(){this.destroyRecevier()}createRecevier=()=>{this.destroyRecevier(),this.recevier=new n,this.recevier.on("updateHeight",((e,t,s)=>{this.iframe&&s===this.iframe.contentWindow&&(this.container.style.height=(e.msg||0)+"px",this.props.onUpdateHeight&&this.props.onUpdateHeight(e.msg||"#"))}))};destroyRecevier=()=>{this.recevier&&(this.recevier.destroy(),this.recevier=null)};render(){const{className:e,id:t,style:s,url:n}=this.props;return n?i.createElement("div",{className:"bg-iframe "+e,id:t,style:{height:400,width:"100%",...s},ref:e=>{this.container=e}},i.createElement("iframe",{src:n,style:{border:"none",width:"100%",height:"100%"},ref:e=>{this.iframe=e}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")}}},11059:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(87462),n=(s(67294),s(3905)),o=s(9652);s(59604);const r={title:"\u5bb9\u5668",order:3},a=void 0,d={unversionedId:"components/layout/container",id:"components/layout/container",title:"\u5bb9\u5668",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/layout/container.mdx",sourceDirName:"components/layout",slug:"/components/layout/container",permalink:"/developer-site/docs/components/layout/container",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/layout/container.mdx",tags:[],version:"current",lastUpdatedBy:"zhangyingjie",lastUpdatedAt:1655114013,formattedLastUpdatedAt:"2022\u5e746\u670813\u65e5",frontMatter:{title:"\u5bb9\u5668",order:3},sidebar:"components",previous:{title:"ColumnsLayout \u5e03\u5c40\u5bb9\u5668",permalink:"/developer-site/docs/components/layout/regionalContainer"},next:{title:"Icon \u56fe\u6807",permalink:"/developer-site/docs/components/basic/icon"}},c={},l=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u5bf9\u7ec4\u4ef6\u5185\u5bb9\u5185\u5bb9\u8fdb\u884c\u5305\u88f9\u6216\u533a\u9694\u65f6\u4f7f\u7528\u3002")),(0,n.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,n.kt)(o.Z,{url:"https://www.aliwork.com/developer/container-v2?isRenderNav=false",mdxType:"Iframe"}),(0,n.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"))}h.isMDXComponent=!0}}]);