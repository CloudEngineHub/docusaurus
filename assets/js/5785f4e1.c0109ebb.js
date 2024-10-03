"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11386],{15995:(e,s,a)=>{a.d(s,{A:()=>r});var n=a(62540);a(63696);var t=a(11750);function r({children:e,hidden:s,className:a}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)("tabItem_pnkT",a),hidden:s,children:e})}},27446:(e,s,a)=>{a.d(s,{A:()=>N});var n=a(62540),t=a(63696),r=a(11750),l=a(7846),i=a(49519),c=a(96439),m=a(19739),h=a(66904),o=a(79244);function d(e){var s,a;return null!==(a=null===(s=t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===s?void 0:s.filter(Boolean))&&void 0!==a?a:[]}function x({value:e,tabValues:s}){return s.some(s=>s.value===e)}var p=a(10709);function j(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(s){var n;n=a[s],s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n})}return e}function u(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a.push.apply(a,n)}return a})(Object(s)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}),e}function g({className:e,block:s,selectedValue:a,selectValue:t,tabValues:i}){let c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.a_)(),h=e=>{let s=e.currentTarget,n=i[c.indexOf(s)].value;n!==a&&(m(s),t(n))},o=e=>{var s,a;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=null!==(s=c[a])&&void 0!==s?s:c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=null!==(a=c[s])&&void 0!==a?a:c[c.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},e),children:i.map(({value:e,label:s,attributes:t})=>(0,n.jsx)("li",u(j({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>c.push(e),onKeyDown:o,onClick:h},t),{className:(0,r.A)("tabs__item","tabItem_AQgk",null==t?void 0:t.className,{"tabs__item--active":a===e}),children:null!=s?s:e}),e))})}function f({lazy:e,children:s,selectedValue:a}){let l=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===a);return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a}))})}function y(e){let s=function(e){let{defaultValue:s,queryString:a=!1,groupId:n}=e,r=function(e){let{values:s,children:a}=e;return(0,t.useMemo)(()=>{let e=null!=s?s:d(a).map(({props:{value:e,label:s,attributes:a,default:n}})=>({value:e,label:s,attributes:a,default:n}));return!function(e){let s=(0,h.XI)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,a])}(e),[l,p]=(0,t.useState)(()=>(function({defaultValue:e,tabValues:s}){var a;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(a=s.find(e=>e.default))&&void 0!==a?a:s[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:s,tabValues:r})),[j,u]=function({queryString:e=!1,groupId:s}){let a=(0,i.W6)(),n=function({queryString:e=!1,groupId:s}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:e,groupId:s});return[(0,m.aZ)(n),(0,t.useCallback)(e=>{var s,t;if(!n)return;let r=new URLSearchParams(a.location.search);r.set(n,e),a.replace((s=function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(s){var n;n=a[s],s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n})}return e}({},a.location),t=t={search:r.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a.push.apply(a,n)}return a})(Object(t)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(t,e))}),s))},[n,a])]}({queryString:a,groupId:n}),[g,f]=function({groupId:e}){let s=e?`docusaurus.tab.${e}`:null,[a,n]=(0,o.Dv)(s);return[a,(0,t.useCallback)(e=>{s&&n.set(e)},[s,n])]}({groupId:n}),y=(()=>{let e=null!=j?j:g;return x({value:e,tabValues:r})?e:null})();return(0,c.A)(()=>{y&&p(y)},[y]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!x({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);p(e),u(e),f(e)},[u,f,r]),tabValues:r}}(e);return(0,n.jsxs)("div",{className:(0,r.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(g,j({},s,e)),(0,n.jsx)(f,j({},s,e))]})}function N(e){let s=(0,p.A)();return(0,n.jsx)(y,u(j({},e),{children:d(e.children)}),String(s))}},70361:(e,s,a)=>{a.d(s,{A:()=>i});var n=a(62540);a(63696);var t=a(11750);let r="dot_giz1",l="bar_rrRL";function i({children:e,minHeight:s,url:a="http://localhost:3000",style:i,bodyStyle:c}){var m,h;return(0,n.jsxs)("div",{className:"browserWindow_my1Q",style:(m=function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(s){var n;n=a[s],s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n})}return e}({},i),h=h={minHeight:s},Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(h)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a.push.apply(a,n)}return a})(Object(h)).forEach(function(e){Object.defineProperty(m,e,Object.getOwnPropertyDescriptor(h,e))}),m),children:[(0,n.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,n.jsxs)("div",{className:"buttons_uHc7",children:[(0,n.jsx)("span",{className:r,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:r,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:r,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,t.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:a}),(0,n.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:l}),(0,n.jsx)("span",{className:l}),(0,n.jsx)("span",{className:l})]})})]}),(0,n.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:e})]})}},73075:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>h,default:()=>p,frontMatter:()=>m,metadata:()=>n,toc:()=>d});let n=JSON.parse('{"id":"guides/markdown-features/math-equations","title":"Math Equations","description":"Writing LaTeX Math Equations","source":"@site/docs/guides/markdown-features/markdown-features-math-equations.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/math-equations","permalink":"/docs/markdown-features/math-equations","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-math-equations.mdx","tags":[],"version":"current","lastUpdatedBy":"Flix","lastUpdatedAt":1727958179000,"frontMatter":{"id":"math-equations","description":"Writing LaTeX Math Equations","slug":"/markdown-features/math-equations"},"sidebar":"docs","previous":{"title":"MDX Plugins","permalink":"/docs/markdown-features/plugins"},"next":{"title":"Diagrams","permalink":"/docs/markdown-features/diagrams"}}');var t=a(62540),r=a(43023),l=a(27446),i=a(15995),c=a(70361);let m={id:"math-equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},h="Math Equations",o={},d=[{value:"Usage",id:"usage",level:2},{value:"Inline",id:"inline",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Enabling math equations",id:"configuration",level:2},{value:"Self-hosting KaTeX assets",id:"self-hosting-katex-assets",level:2}];function x(e){let s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",msubsup:"msubsup",msup:"msup",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"math-equations",children:"Math Equations"})}),"\n","\n",(0,t.jsxs)(s.p,{children:["Mathematical equations can be rendered using ",(0,t.jsx)(s.a,{href:"https://katex.org",children:"KaTeX"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["Please read ",(0,t.jsx)(s.a,{href:"https://katex.org",children:"KaTeX"})," documentation for more details."]}),"\n",(0,t.jsx)(s.h3,{id:"inline",children:"Inline"}),"\n",(0,t.jsxs)(s.p,{children:["Write inline math equations by wrapping LaTeX equations between ",(0,t.jsx)(s.code,{children:"$"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-latex",children:"Let $f\\colon[a,b]\\to\\R$ be Riemann integrable. Let $F\\colon[a,b]\\to\\R$ be\n$F(x)=\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.\n"})}),"\n",(0,t.jsx)(c.A,{children:(0,t.jsxs)(s.p,{children:["Let ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"f"}),(0,t.jsx)(s.mspace,{}),(0,t.jsx)(s.mspace,{width:"0.1111em"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0.17em"}),(0,t.jsx)(s.mtext,{children:"\u2009\u2063"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:":"}),(0,t.jsx)(s.mspace,{width:"0.3333em"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"["}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(s.mo,{children:"\u2192"}),(0,t.jsx)(s.mi,{mathvariant:"double-struck",children:"R"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"f\\colon[a,b] \\to \\R"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(s.span,{className:"mspace nobreak"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1111em"}}),(0,t.jsx)(s.span,{className:"mpunct"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mrel",children:":"})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.3333em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"["}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mclose",children:"]"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6889em"}}),(0,t.jsx)(s.span,{className:"mord mathbb",children:"R"})]})]})]})," be Riemann integrable. Let ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"F"}),(0,t.jsx)(s.mspace,{}),(0,t.jsx)(s.mspace,{width:"0.1111em"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0.17em"}),(0,t.jsx)(s.mtext,{children:"\u2009\u2063"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:":"}),(0,t.jsx)(s.mspace,{width:"0.3333em"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"["}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(s.mo,{children:"\u2192"}),(0,t.jsx)(s.mi,{mathvariant:"double-struck",children:"R"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F\\colon[a,b]\\to\\R"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,t.jsx)(s.span,{className:"mspace nobreak"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1111em"}}),(0,t.jsx)(s.span,{className:"mpunct"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mrel",children:":"})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.3333em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"["}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mclose",children:"]"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6889em"}}),(0,t.jsx)(s.span,{className:"mord mathbb",children:"R"})]})]})]})," be ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"F"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsxs)(s.msubsup,{children:[(0,t.jsx)(s.mo,{children:"\u222B"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"x"})]}),(0,t.jsx)(s.mi,{children:"f"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mtext,{children:"\u2009"}),(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F(x)=\n\\int_{a}^{x} f(t)\\,dt"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.2151em",verticalAlign:"-0.3558em"}}),(0,t.jsxs)(s.span,{className:"mop",children:[(0,t.jsx)(s.span,{className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"},children:"\u222B"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"0.8593em"},children:[(0,t.jsxs)(s.span,{style:{top:"-2.3442em",marginLeft:"-0.1945em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"})})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.2579em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.3558em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})]})]}),". Then ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"F"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," is continuous, and at all ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"x"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," such that ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"f"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"f"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]})," is continuous at ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"x"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),", ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"F"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," is differentiable at ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"x"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," with ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"F"}),(0,t.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsx)(s.mi,{children:"f"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F'(x)=f(x)"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"."]})}),"\n",(0,t.jsx)(s.h3,{id:"blocks",children:"Blocks"}),"\n",(0,t.jsxs)(s.p,{children:["For equation block or display mode, use line breaks and ",(0,t.jsx)(s.code,{children:"$$"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-latex",children:"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$\n"})}),"\n",(0,t.jsx)(c.A,{children:(0,t.jsx)(s.span,{className:"katex-display",children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"I"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsxs)(s.msubsup,{children:[(0,t.jsx)(s.mo,{children:"\u222B"}),(0,t.jsx)(s.mn,{children:"0"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsx)(s.mi,{children:"\u03C0"})]})]}),(0,t.jsx)(s.mi,{children:"sin"}),(0,t.jsx)(s.mo,{children:"\u2061"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mtext,{children:"\u2009"}),(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"x"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"I = \\int_0^{2\\pi} \\sin(x)\\,dx"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"2.476em",verticalAlign:"-0.9119em"}}),(0,t.jsxs)(s.span,{className:"mop",children:[(0,t.jsx)(s.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222B"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"1.564em"},children:[(0,t.jsxs)(s.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"0"})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mtight",children:"2"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"\u03C0"})]})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.9119em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mop",children:"sin"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})]})]})})}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Enabling math equations"}),"\n",(0,t.jsx)(s.p,{children:"Enable KaTeX:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Install the ",(0,t.jsx)(s.code,{children:"remark-math"})," and ",(0,t.jsx)(s.code,{children:"rehype-katex"})," plugins:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save remark-math@6 rehype-katex@7\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add remark-math@6 rehype-katex@7\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add remark-math@6 rehype-katex@7\n"})})})]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["Make sure to use ",(0,t.jsx)(s.code,{children:"remark-math 6"})," and ",(0,t.jsx)(s.code,{children:"rehype-katex 7"})," for Docusaurus v3 (using MDX v3). We can't guarantee other versions will work."]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["These 2 plugins are ",(0,t.jsx)(s.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:(0,t.jsx)(s.strong,{children:"only available as ES Modules"})}),". We recommended to use an ",(0,t.jsx)(s.a,{href:"https://flaviocopes.com/es-modules/",children:(0,t.jsx)(s.strong,{children:"ES Modules"})})," config file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="ES module docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\n// highlight-start\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(s.p,{children:["Using a\n",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",children:(0,t.jsx)(s.strong,{children:"CommonJS"})}),"\nconfig file?"]})}),(0,t.jsx)(s.p,{children:"If you decide to use a CommonJS config file, it is possible to load those ES module plugins thanks to dynamic imports and an async config creator function:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="CommonJS module docusaurus.config.js"',children:"// highlight-start\nmodule.exports = async function createConfigAsync() {\n  // highlight-end\n  return {\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [(await import('remark-math')).default],\n            rehypePlugins: [(await import('rehype-katex')).default],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n  };\n};\n"})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Include the KaTeX CSS in your config under ",(0,t.jsx)(s.code,{children:"stylesheets"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  //...\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n};\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"See a config file example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\nexport default {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n  // highlight-start\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n  // highlight-end\n};\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"self-hosting-katex-assets",children:"Self-hosting KaTeX assets"}),"\n",(0,t.jsxs)(s.p,{children:["Loading stylesheets, fonts, and JavaScript libraries from CDN sources is a good practice for popular libraries and assets, since it reduces the amount of assets you have to host. In case you prefer to self-host the ",(0,t.jsx)(s.code,{children:"katex.min.css"})," (along with required KaTeX fonts), you can download the latest version from ",(0,t.jsx)(s.a,{href:"https://github.com/KaTeX/KaTeX/releases",children:"KaTeX GitHub releases"}),", extract and copy ",(0,t.jsx)(s.code,{children:"katex.min.css"})," and ",(0,t.jsx)(s.code,{children:"fonts"})," directory (only ",(0,t.jsx)(s.code,{children:".woff2"})," font types should be enough) to your site's ",(0,t.jsx)(s.code,{children:"static"})," directory, and in ",(0,t.jsx)(s.code,{children:"docusaurus.config.js"}),", replace the stylesheet's ",(0,t.jsx)(s.code,{children:"href"})," from the CDN URL to your local path (say, ",(0,t.jsx)(s.code,{children:"/katex/katex.min.css"}),")."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  stylesheets: [\n    {\n      href: '/katex/katex.min.css',\n      type: 'text/css',\n    },\n  ],\n};\n"})})]})}function p(e={}){let{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var n=a(63696);let t={},r=n.createContext(t);function l(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);