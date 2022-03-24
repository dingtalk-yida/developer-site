"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[7918],{61086:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var n=a(59301),l=a(44927),r=a(22376),i=a(51855),s=a(2691);function c(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(s.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,r.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,r.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(2185),m=a(46796),u=a(95663);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,r=e.versionMetadata,i=(0,d.Z)().siteConfig.title,s=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(s).savePreferredVersionName,o=(0,m.Jo)(s),v=o.latestDocSuggestion,p=o.latestVersionSuggestion,g=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:p.label,to:g.path,onClick:function(){return c(p.name)}})))}function g(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function E(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(97340);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(91262),L="iconEdit_kA8l",C=["className"];function T(e){var t=e.className,a=(0,_.Z)(e,C);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(T,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y="tag_GxPd",w="tagRegular__I91",A="tagWithCount_draF";function M(e){var t,a=e.permalink,r=e.name,i=e.count;return n.createElement(s.Z,{href:a,className:(0,l.Z)(y,(t={},t[w]=!i,t[A]=i,t))},r,i&&n.createElement("span",null,i))}var x="tags_usbU",H="tag_CB8n";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:H},n.createElement(M,{name:t,permalink:a}))}))))}var S="lastUpdated_L5nK";function D(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",S)},(a||r)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function V(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||s);return o||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(D,{tags:c}),d&&n.createElement(I,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var F=a(71979);function O(e){return n.createElement(n.Fragment,null,n.createElement(F.Z,{filePath:e.content.metadata.source.replace("@site",""),showTitle:!0}),n.createElement(V,e))}var P=a(91824),z="tocCollapsible_Z12J",R="tocCollapsibleButton_SDRv",W="tocCollapsibleContent_bFf9",q="tocCollapsibleExpanded_oCqQ",J=a(12463);function K(e){var t,a=e.toc,r=e.className,s=e.minHeadingLevel,c=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),d=o.collapsed,m=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(z,(t={},t[q]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",R),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:W,collapsed:d},n.createElement(J.Z,{toc:a,minHeadingLevel:s,maxHeadingLevel:c})))}var Q=a(31371),G="docItemContainer_pbVp",X="docItemCol_e0kl",j="tocMobile_89K3",Y="breadcrumbsContainer_XToD",$="breadcrumbsItemLink_Dxx7",ee=a(72362);function te(e){var t=e.children,a=e.href,r=(0,l.Z)("breadcrumbs__link",$);return a?n.createElement(s.Z,{className:r,href:a},t):n.createElement("span",{className:r},t)}function ae(e){var t=e.children,a=e.active;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function ne(){var e=(0,ee.Z)("/");return n.createElement(ae,null,n.createElement(te,{href:e},"\ud83c\udfe0"))}function le(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,Y),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(ne,null),e.map((function(t,a){return n.createElement(ae,{key:a,active:a===e.length-1},n.createElement(te,{href:t.href},t.label))})))):null}function re(e){var t,a,r=e.content,i=r.metadata,s=r.frontMatter,c=r.assets,d=s.keywords,m=s.hide_title,v=s.hide_table_of_contents,h=s.toc_min_heading_level,b=s.toc_max_heading_level,p=i.description,N=i.title,k=null!=(t=c.image)?t:s.image,Z=!m&&void 0===r.contentTitle,_=(0,u.iP)(),L=!v&&r.toc&&r.toc.length>0,C=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:N,description:p,keywords:d,image:k}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(a={},a[X]=!v,a))},n.createElement(g,null),n.createElement("div",{className:G},n.createElement("article",null,n.createElement(le,null),n.createElement(E,null),L&&n.createElement(K,{toc:r.toc,minHeadingLevel:h,maxHeadingLevel:b,className:(0,l.Z)(u.kM.docs.docTocMobile,j)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},Z&&n.createElement("header",null,n.createElement(Q.Z,{as:"h1"},N)),n.createElement(r,null)),n.createElement(O,e)),n.createElement(o,{previous:i.previous,next:i.next}))),C&&n.createElement("div",{className:"col col--3"},n.createElement(P.Z,{toc:r.toc,minHeadingLevel:h,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}},31371:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(22376),l=a(91262),r=a(59301),i=a(44927),s=a(51855),c=a(95663),o="anchorWithStickyNavbar_pmdp",d="anchorWithHideOnScrollNavbar_FzNZ",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),h=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,i.Z)("anchor",(t={},t[d]=h,t[o]=!h,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function h(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}},91824:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22376),l=a(91262),r=a(59301),i=a(44927),s=a(12463),c="tableOfContents_kQWm",o=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},12463:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(22376),l=a(91262),r=a(59301),i=a(95663),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,b=e.maxHeadingLevel,p=(0,l.Z)(e,s),g=(0,i.LU)(),E=null!=h?h:g.tableOfContents.minHeadingLevel,f=null!=b?b:g.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),k=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:f}}),[m,v,E,f]);return(0,i.Si)(k),r.createElement(c,(0,n.Z)({toc:N,className:o,linkClassName:m},p))}},71979:function(e,t,a){var n=a(27472),l=a(59301),r=a(84459),i=a.n(r);a(83836);t.Z=function(e){var t=e.filePath,a=e.showTitle,r=e.size,s=(0,l.useState)([]),c=s[0],o=s[1];return(0,l.useEffect)((function(){t?i().get("https://proapi.azurewebsites.net/doc/getAvatarList?filename="+t+"&owner=dingtalk-yida&repo=developer-site").then((function(e){e&&e.data&&o(e.data)})):i().get("https://api.github.com/repos/dingtalk-yida/developer-site/contributors").then((function(e){e&&e.data&&o(e.data.map((function(e){return{username:e.login,url:e.avatar_url}})))}))}),[]),c&&0!==c.length?l.createElement("div",{className:"contributors "+(r||"medium")},a&&l.createElement("h3",null,"\u6587\u6863\u8d21\u732e\u8005"),(c||[]).map((function(e){return l.createElement(n.default,{title:""+e.username},l.createElement("a",{className:"avatar",href:"https://github.com/"+e.username,style:{backgroundImage:"url("+e.url+")"},target:"_blank"}))}))):null}}}]);