"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19669],{15995:(e,r,n)=>{n.d(r,{A:()=>l});var t=n(62540);n(63696);var i=n(11750);function l({children:e,hidden:r,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_pnkT",n),hidden:r,children:e})}},27446:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(62540),i=n(63696),l=n(11750),a=n(7846),s=n(49519),o=n(96439),c=n(19739),u=n(66904),d=n(79244);function p(e){var r,n;return null!==(n=null===(r=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function h({value:e,tabValues:r}){return r.some(r=>r.value===e)}var f=n(10709);function b(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function g(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}function m({className:e,block:r,selectedValue:n,selectValue:i,tabValues:s}){let o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{let r=e.currentTarget,t=s[o.indexOf(r)].value;t!==n&&(c(r),i(t))},d=e=>{var r,n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;t=null!==(r=o[n])&&void 0!==r?r:o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=null!==(n=o[r])&&void 0!==n?n:o[o.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},e),children:s.map(({value:e,label:r,attributes:i})=>(0,t.jsx)("li",g(b({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},i),{className:(0,l.A)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e))})}function v({lazy:e,children:r,selectedValue:n}){let a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=a.find(e=>e.props.value===n);return e?(0,i.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n}))})}function y(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,l=function(e){let{values:r,children:n}=e;return(0,i.useMemo)(()=>{let e=null!=r?r:p(n).map(({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t}));return!function(e){let r=(0,u.XI)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[a,f]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:l})),[b,g]=function({queryString:e=!1,groupId:r}){let n=(0,s.W6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,c.aZ)(t),(0,i.useCallback)(e=>{var r,i;if(!t)return;let l=new URLSearchParams(n.location.search);l.set(t,e),n.replace((r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},n.location),i=i={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))}),r))},[t,n])]}({queryString:n,groupId:t}),[m,v]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[n,t]=(0,d.Dv)(r);return[n,(0,i.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:t}),y=(()=>{let e=null!=b?b:m;return h({value:e,tabValues:l})?e:null})();return(0,o.A)(()=>{y&&f(y)},[y]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),v(e)},[g,v,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(m,b({},r,e)),(0,t.jsx)(v,b({},r,e))]})}function j(e){let r=(0,f.A)();return(0,t.jsx)(y,g(b({},e),{children:p(e.children)}),String(r))}},59273:(e,r,n)=>{n.d(r,{A:()=>o});var t=n(62540),i=n(63696),l=n(52711),a=n(49519);let s=i.forwardRef(function({name:e,children:r},n){let s=function(e){let r=e;for(;(0,i.isValidElement)(r);)[r]=i.Children.toArray(r.props.children);if("string"!=typeof r)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return r}(r),o=e?`${e}-${s}`:s,c=`#${o}`,u=(0,a.W6)();return(0,l.A)().collectAnchor(o),(0,t.jsx)("tr",{id:o,tabIndex:0,ref:u.location.hash===c?n:void 0,onClick:e=>{var r;let n="TD"===e.target.tagName.toUpperCase(),t=!!(null===(r=window.getSelection())||void 0===r?void 0:r.toString());n&&!t&&u.push(c)},onKeyDown:e=>{"Enter"===e.key&&u.push(c)},children:r.props.children})});function o({children:e,name:r}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[n,l]=i.Children.toArray(e.props.children),a=(0,i.useRef)(null);(0,i.useEffect)(()=>{var e;null===(e=a.current)||void 0===e||e.focus()},[a]);let o=i.Children.map(l.props.children,e=>(0,t.jsx)(s,{name:r,ref:a,children:e}));return(0,t.jsxs)("table",{className:"apiTable_e8hp",children:[n,(0,t.jsx)("tbody",{children:o})]})}},30321:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>t,toc:()=>p});let t=JSON.parse('{"id":"api/plugins/plugin-vercel-analytics","title":"\u{1F4E6} plugin-vercel-analytics","description":"Vercel Analytics provides comprehensive insights into your website\'s visitors, tracking top pages, referrers, and demographics like location, operating systems, and browser info.","source":"@site/docs/api/plugins/plugin-vercel-analytics.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-vercel-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-vercel-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-vercel-analytics.mdx","tags":[],"version":"current","lastUpdatedBy":"Flix","lastUpdatedAt":1727958179000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"slug":"/api/plugins/@docusaurus/plugin-vercel-analytics"},"sidebar":"api","previous":{"title":"\u{1F4E6} plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap"},"next":{"title":"Themes overview","permalink":"/docs/api/themes"}}');var i=n(62540),l=n(43023),a=n(27446),s=n(15995),o=n(59273);let c={sidebar_position:11,slug:"/api/plugins/@docusaurus/plugin-vercel-analytics"},u="\u{1F4E6} plugin-vercel-analytics",d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function h(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"-plugin-vercel-analytics",children:"\u{1F4E6} plugin-vercel-analytics"})}),"\n","\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://vercel.com/docs/analytics",children:"Vercel Analytics"})," provides comprehensive insights into your website's visitors, tracking top pages, referrers, and demographics like location, operating systems, and browser info."]}),"\n",(0,i.jsx)(r.admonition,{title:"production only",type:"warning",children:(0,i.jsxs)(r.p,{children:["This plugin is always inactive in development and ",(0,i.jsx)(r.strong,{children:"only active in production"})," (",(0,i.jsx)(r.code,{children:"docusaurus build"}),") to avoid polluting the analytics statistics."]})}),"\n",(0,i.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,i.jsx)(s.A,{value:"npm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-vercel-analytics\n"})})}),(0,i.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-vercel-analytics\n"})})}),(0,i.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-vercel-analytics\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(r.p,{children:"Accepted fields:"}),"\n",(0,i.jsx)(o.A,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"mode"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"'auto'"})}),(0,i.jsxs)(r.td,{children:["Override the automatic environment detection. Read the ",(0,i.jsx)(r.a,{href:"https://vercel.com/docs/analytics/package#mode",children:"official docs"})," for details."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"debug"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"boolean"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"undefined"})}),(0,i.jsxs)(r.td,{children:["Enable browser console logging of analytics events. Read the ",(0,i.jsx)(r.a,{href:"https://vercel.com/docs/analytics/package#debug",children:"official docs"})," for details."]})]})]})]})}),"\n",(0,i.jsx)(r.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,i.jsx)(r.p,{children:"You can configure this plugin through plugin options."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      'vercel-analytics',\n      {\n        debug: true,\n        mode: 'auto',\n      },\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>s});var t=n(63696);let i={},l=t.createContext(i);function a(e){let r=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);