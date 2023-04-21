"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[7918],{63239:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(94055),s=a(67294),n=a(9669),r=a.n(n);a(47211);const u=function(e){let{filePath:t,showTitle:a,size:n}=e;const[u,c]=(0,s.useState)([]);return(0,s.useEffect)((()=>{t?r().get(`https://proapi.azurewebsites.net/doc/getAvatarList?filename=${t}&owner=dingtalk-yida&repo=developer-site`).then((e=>{e&&e.data&&c(e.data)})):r().get("https://api.github.com/repos/dingtalk-yida/developer-site/contributors").then((e=>{e&&e.data&&c(e.data.map((e=>({username:e.login,url:e.avatar_url}))))}))}),[]),u&&0!==u.length?s.createElement("div",{className:`contributors ${n||"medium"}`},a&&s.createElement("h3",null,"\u6587\u6863\u8d21\u732e\u8005"),(u||[]).map((e=>s.createElement(l.default,{title:`${e.username}`,key:e.username},s.createElement("a",{className:"avatar",href:`https://github.com/${e.username}`,style:{backgroundImage:`url(${e.url})`},target:"_blank"}))))):null}},43475:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),s=a(97887),n=a(65130),r=a(63239),u=a(3513),c=a(65400),m=a(51024),o=a(31059),i=a(99913),d=a(54815),f=a(89739),v=a(79910);a(10365),a(27648),a(15551),a(52798);const E=[{label:"\u5185\u5bb9\u6709\u8bef",value:"reason1"},{label:"\u66f4\u65b0\u4e0d\u53ca\u65f6",value:"reason2"},{label:"\u7f3a\u4e4f\u6848\u4f8b",value:"reason3"},{label:"\u65e0\u6cd5\u7406\u89e3",value:"reason4"},{label:"\u5176\u4ed6",value:"other"}];const p=function(){const[e,t]=(0,l.useState)("normal"),[a,s]=(0,l.useState)([]),[n,r]=(0,l.useState)(""),p=e=>{"usefulResult"===e?(0,v.V)("feedback","useful"):"useless"===e?(0,v.V)("feedback","useless"):"uselessResult"===e&&(0,v.V)("feedback","uselessReason",{reasons:a,otherReason:n}),t(e)};return l.createElement(u.Z,{offsetBottom:0},l.createElement("div",{className:"feedback"},"normal"===e&&l.createElement("div",{className:"feedback-header"},l.createElement("span",null,"\u672c\u6587\u6863\u5bf9\u60a8\u662f\u5426\u6709\u5e2e\u52a9\uff1f"),l.createElement("div",{className:"use-icon",onClick:()=>p("usefulResult")},l.createElement(i.Z,null)," \u6709\u7528"),l.createElement("div",{className:"use-icon",onClick:()=>p("useless")},l.createElement(d.Z,null)," \u6ca1\u7528")),"useless"===e&&l.createElement("div",{className:"feedback-form"},l.createElement("div",{className:"label"},"\u60a8\u662f\u5426\u9047\u5230\u4ee5\u4e0b\u95ee\u9898\uff1f"),l.createElement(o.default.Group,{options:E,value:a,onChange:e=>s(e)}),a.includes("other")&&l.createElement(m.default,{value:n,onChange:e=>r(e.target.value)}),a.length>0&&l.createElement("div",null,l.createElement(c.default,{type:"primary",onClick:()=>p("uselessResult")},"\u63d0\u4ea4\u53cd\u9988"))),["uselessResult","usefulResult"].includes(e)&&(h="usefulResult"===e,l.createElement("div",{className:"feedback-result"},h?l.createElement(l.Fragment,null,"\ud83d\ude18 \u611f\u89c9\u6709\u7528\uff01\u8c22\u8c22\u60a8\u7684\u53cd\u9988\uff0c\u6211\u4eec\u4f1a\u52aa\u529b\u505a\u7684\u66f4\u597d\uff01"):l.createElement(l.Fragment,null,"\ud83d\ude15 \u611f\u89c9\u6ca1\u7528\uff01\u8c22\u8c22\u60a8\u7684\u53cd\u9988\uff0c\u6211\u4eec\u4f1a\u52aa\u529b\u505a\u7684\u66f4\u597d\uff01"),l.createElement("div",{className:"success-message"},l.createElement(f.Z,null)," \u63d0\u4ea4\u6210\u529f"))),l.createElement("div",{className:"feedback-footer"},"\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u6b22\u8fce\u524d\u5f80\xa0",l.createElement("a",{onClick:()=>{(0,v.V)("feedback","aliyun"),window.open("https://developer.aliyun.com/group/yida#/?_k=4qgqh5")}},"\u5b9c\u642d\u793e\u533a"),"\xa0 \u4ea4\u6d41\u3002")));var h};function h(e){const t=(0,n.k)();return l.createElement(l.Fragment,null,l.createElement(r.Z,{filePath:t.metadata.source.replace("@site",""),showTitle:!0}),l.createElement(s.Z,e),l.createElement(p,null))}}}]);