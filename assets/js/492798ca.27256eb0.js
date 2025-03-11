"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1790"],{86266:function(e,n,i){i.r(n),i.d(n,{frontMatter:()=>o,default:()=>m,contentTitle:()=>c,assets:()=>u,toc:()=>h,metadata:()=>r});var r=JSON.parse('{"id":"api/plugins/plugin-ideal-image","title":"\uD83D\uDCE6 plugin-ideal-image","description":"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).","source":"@site/docs/api/plugins/plugin-ideal-image.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-ideal-image","permalink":"/docs/api/plugins/@docusaurus/plugin-ideal-image","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-ideal-image.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1741652967000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"slug":"/api/plugins/@docusaurus/plugin-ideal-image"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-google-tag-manager","permalink":"/docs/api/plugins/@docusaurus/plugin-google-tag-manager"},"next":{"title":"\uD83D\uDCE6 plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa"}}'),t=i(85893),l=i(80980),a=i(15398),s=i(58636),d=i(32240);let o={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},c="\uD83D\uDCE6 plugin-ideal-image",u={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-plugin-ideal-image",children:"\uD83D\uDCE6 plugin-ideal-image"})}),"\n","\n",(0,t.jsx)(n.p,{children:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["By default, the plugin is ",(0,t.jsx)(n.strong,{children:"inactive in development"})," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,t.jsx)(n.a,{href:"#disableInDev",children:(0,t.jsx)(n.code,{children:"disableInDev"})})," option to ",(0,t.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-ideal-image\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-ideal-image\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-ideal-image\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"This plugin supports the PNG and JPG formats only."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["This plugin registers a ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/loaders/",children:"Webpack loader"})," that changes the type of imported/require images:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["After: ",(0,t.jsx)(n.code,{children:'{preSrc: string, src: import("@theme/IdealImage").SrcImage}'})]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,t.jsx)(d.Z,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ideal-img/[name].[hash:hex:7].[width].[ext]"})}),(0,t.jsx)(n.td,{children:"Filename template for output files."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sizes"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"original size"})}),(0,t.jsx)(n.td,{children:"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"size"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"original size"})}),(0,t.jsx)(n.td,{children:"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"min"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["As an alternative to manually specifying ",(0,t.jsx)(n.code,{children:"sizes"}),", you can specify ",(0,t.jsx)(n.code,{children:"min"}),", ",(0,t.jsx)(n.code,{children:"max"})," and ",(0,t.jsx)(n.code,{children:"steps"}),", and the sizes will be generated for you."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"max"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.code,{children:"min"})," above"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"steps"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"4"})}),(0,t.jsxs)(n.td,{children:["Configure the number of images generated between ",(0,t.jsx)(n.code,{children:"min"})," and ",(0,t.jsx)(n.code,{children:"max"})," (inclusive)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"quality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"85"})}),(0,t.jsx)(n.td,{children:"JPEG compression quality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"disableInDev"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["You can test ideal image behavior in dev mode by setting this to ",(0,t.jsx)(n.code,{children:"false"}),". ",(0,t.jsx)(n.strong,{children:"Tip"}),": use ",(0,t.jsx)(n.a,{href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome",children:"network throttling"})," in your browser to simulate slow networks."]})]})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},58636:function(e,n,i){i.d(n,{Z:()=>l});var r=i(85893);i(67294);var t=i(90496);function l(e){let{children:n,hidden:i,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",l),hidden:i,children:n})}},15398:function(e,n,i){i.d(n,{Z:()=>j});var r=i(85893),t=i(67294),l=i(90496),a=i(54947),s=i(3620),d=i(844),o=i(97486),c=i(32263),u=i(16971);function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:i}=e;return i.some(e=>e.value===n)}var m=i(71607);function g(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:d}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{let n=e.currentTarget,i=d[o.indexOf(n)].value;i!==t&&(c(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{let i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},n),children:d.map(e=>{let{value:n,label:i,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:u,...a,className:(0,l.Z)("tabs__item","tabItem_AQgk",a?.className,{"tabs__item--active":t===n}),children:i??n},n)})})}function x(e){let{lazy:n,children:i,selectedValue:a}=e,s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===a);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:i=!1,groupId:r}=e,l=function(e){let{values:n,children:i}=e;return(0,t.useMemo)(()=>{let e=n??h(i).map(e=>{let{props:{value:n,label:i,attributes:r,default:t}}=e;return{value:n,label:i,attributes:r,default:t}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,i])}(e),[a,m]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=i.find(e=>e.default)??i[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:l})),[g,x]=function(e){let{queryString:n=!1,groupId:i}=e,r=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o._X)(l),(0,t.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})},[l,r])]}({queryString:i,groupId:r}),[f,j]=function(e){let{groupId:n}=e,i=n?`docusaurus.tab.${n}`:null,[r,l]=(0,u.Nk)(i);return[r,(0,t.useCallback)(e=>{i&&l.set(e)},[i,l])]}({groupId:r}),b=(()=>{let e=g??f;return p({value:e,tabValues:l})?e:null})();return(0,d.Z)(()=>{b&&m(b)},[b]),{selectedValue:a,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),j(e)},[x,j,l]),tabValues:l}}(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(x,{...n,...e})]})}function j(e){let n=(0,m.Z)();return(0,r.jsx)(f,{...e,children:h(e.children)},String(n))}},32240:function(e,n,i){i.d(n,{Z:()=>d});var r=i(85893),t=i(67294),l=i(96700),a=i(3620);let s=t.forwardRef(function(e,n){let{name:i,children:s}=e,d=function(e){let n=e;for(;(0,t.isValidElement)(n);)[n]=t.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(s),o=i?`${i}-${d}`:d,c=`#${o}`,u=(0,a.k6)();return(0,l.Z)().collectAnchor(o),(0,r.jsx)("tr",{id:o,tabIndex:0,ref:u.location.hash===c?n:void 0,onClick:e=>{let n="TD"===e.target.tagName.toUpperCase(),i=!!window.getSelection()?.toString();n&&!i&&u.push(c)},onKeyDown:e=>{"Enter"===e.key&&u.push(c)},children:s.props.children})});function d(e){let{children:n,name:i}=e;if("table"!==n.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[l,a]=t.Children.toArray(n.props.children),d=(0,t.useRef)(null);(0,t.useEffect)(()=>{d.current?.focus()},[d]);let o=t.Children.map(a.props.children,e=>(0,r.jsx)(s,{name:i,ref:d,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[l,(0,r.jsx)("tbody",{children:o})]})}},80980:function(e,n,i){i.d(n,{Z:()=>s,a:()=>a});var r=i(67294);let t={},l=r.createContext(t);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);