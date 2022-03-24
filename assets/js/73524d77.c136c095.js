"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[7063],{35472:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(47003),r=n(59301),o=n(56925),s=n(64695),a=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],d=(n(36844),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return r.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[s.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[s.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?r.createElement(o.D,{children:e,remarkPlugins:[s.Z]}):r.createElement("div",null," - ")}}]);var c=function(e){var t=e.category,n=e.dataSource,o=("form"===t?[].concat(a,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return r.createElement(i.Z,{className:"attr-table",dataSource:o,pagination:!1,columns:d})}},50199:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(31538),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,o=t.style,s=t.url;return s?r.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);s.displayName="bg-iframe"},74718:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var i=n(22376),r=n(91262),o=(n(59301),n(99278)),s=n(50199),a=n(35472),d=["components"],c={title:"Timeline \u65f6\u95f4\u8f74",order:14},l="Timeline \u65f6\u95f4\u8f74",p={unversionedId:"components/advanced/timeLine",id:"components/advanced/timeLine",title:"Timeline \u65f6\u95f4\u8f74",description:"\u5782\u76f4\u5c55\u793a\u7684\u65f6\u95f4\u6d41\u4fe1\u606f\u3002",source:"@site/docs/components/advanced/timeLine.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/timeLine",permalink:"/developer-site/docs/components/advanced/timeLine",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/timeLine.mdx",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1647242294,formattedLastUpdatedAt:"2022/3/14",frontMatter:{title:"Timeline \u65f6\u95f4\u8f74",order:14},sidebar:"components",previous:{title:"Progress \u8fdb\u5ea6\u6761",permalink:"/developer-site/docs/components/advanced/progress"},next:{title:"Steps \u6b65\u9aa4\u6761",permalink:"/developer-site/docs/components/advanced/steps"}},u={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"timeline-\u65f6\u95f4\u8f74"},"Timeline \u65f6\u95f4\u8f74"),(0,o.kt)("p",null,"\u5782\u76f4\u5c55\u793a\u7684\u65f6\u95f4\u6d41\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53\u6709\u4e00\u7cfb\u5217\u4fe1\u606f\u9700\u8981\u4ece\u4e0a\u81f3\u4e0b\u6309\u65f6\u95f4\u6392\u5217\u65f6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u6709\u4e00\u6761\u65f6\u95f4\u8f74\u8fdb\u884c\u89c6\u89c9\u4e0a\u7684\u4e32\u8054\u65f6\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(s.Z,{url:"https://www.aliwork.com/developer/timeLine-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(a.Z,{dataSource:[{code:"dataSource",type:"[TimelineDataSource[]](/docs/components/interface#timelinedatasource)",default:'~~~json\n[\n  {\n    title: {\n      zh_CN: "\u6625\u5929",\n      en_US: "Spring",\n      type: "i18n",\n    },\n    time: "2021-03-10",\n  },\n  {\n    title: {\n      zh_CN: "\u590f\u5929",\n      en_US: "Summer",\n      type: "i18n",\n    },\n    time: "2016-06-11",\n  },\n  {\n    title: {\n      zh_CN: "\u79cb\u5929",\n      en_US: "Autumn",\n      type: "i18n",\n    },\n    time: "2016-09-09",\n  },\n  {\n    title: {\n      zh_CN: "\u51ac\u5929",\n      en_US: "Winter",\n      type: "i18n",\n    },\n    time: "2016-12-08",\n  },\n]',desc:"\u7528\u4e8e\u914d\u7f6e\u65f6\u95f4\u8f74\u6570\u636e"},{code:"fold",type:"any[]",default:"~~~json \n[\n  {\n    foldArea: [1, 2],\n    foldShow: false,\n  },\n]",desc:"\u7528\u4e8e\u914d\u7f6e\u6570\u636e\u6298\u53e0"},{code:"animation",type:"boolean",default:"true",desc:"\u662f\u5426\u5f00\u542f\u52a8\u753b"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);