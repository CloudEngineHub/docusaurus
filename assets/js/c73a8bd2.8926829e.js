"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["30165"],{40623:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>u,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"guides/markdown-features/diagrams","title":"Diagrams","description":"Writing diagrams with Mermaid","source":"@site/docs/guides/markdown-features/markdown-features-diagrams.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/diagrams","permalink":"/docs/markdown-features/diagrams","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-diagrams.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1735224247000,"frontMatter":{"id":"diagrams","title":"Diagrams","description":"Writing diagrams with Mermaid","slug":"/markdown-features/diagrams"},"sidebar":"docs","previous":{"title":"Math Equations","permalink":"/docs/markdown-features/math-equations"},"next":{"title":"Head metadata","permalink":"/docs/markdown-features/head-metadata"}}'),t=a("85893"),i=a("80980"),s=a("46291"),d=a("67860");let l={id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},o="Diagrams",u={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Theming",id:"theming",level:2},{value:"Mermaid Config",id:"configuration",level:2},{value:"Dynamic Mermaid Component",id:"component",level:2}];function m(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"diagrams",children:"Diagrams"})}),"\n",(0,t.jsxs)(n.p,{children:["Diagrams can be rendered using ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/",children:"Mermaid"})," in a code block."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(d.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(d.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(d.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Enable Mermaid functionality by adding plugin ",(0,t.jsx)(n.code,{children:"@docusaurus/theme-mermaid"})," and setting ",(0,t.jsx)(n.code,{children:"markdown.mermaid"})," to ",(0,t.jsx)(n.code,{children:"true"})," in your ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Add a code block with language ",(0,t.jsx)(n.code,{children:"mermaid"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",metastring:'title="Example Mermaid diagram"',children:"```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"})}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference",children:"Mermaid syntax documentation"})," for more information on the Mermaid syntax."]}),"\n",(0,t.jsx)(n.h2,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)(n.p,{children:["The diagram dark and light themes can be changed by setting ",(0,t.jsx)(n.code,{children:"mermaid.theme"})," values in the ",(0,t.jsx)(n.code,{children:"themeConfig"})," in your ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),". You can set themes for both light and dark mode."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/#/theming",children:"Mermaid theme documentation"})," for more information on theming Mermaid diagrams."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Mermaid Config"}),"\n",(0,t.jsxs)(n.p,{children:["Options in ",(0,t.jsx)(n.code,{children:"mermaid.options"})," will be passed directly to ",(0,t.jsx)(n.code,{children:"mermaid.initialize"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://mermaid-js.github.io/mermaid/#/./Setup?id=configuration",children:"Mermaid config documentation"})," and the ",(0,t.jsx)(n.a,{href:"https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts",children:"Mermaid config types"})," for the available config options."]}),"\n",(0,t.jsx)(n.h2,{id:"component",children:"Dynamic Mermaid Component"}),"\n",(0,t.jsxs)(n.p,{children:["To generate dynamic diagrams, you can use the ",(0,t.jsx)(n.code,{children:"Mermaid"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mdx",metastring:'title="Example of dynamic Mermaid component"',children:"import Mermaid from '@theme/Mermaid';\n\n<Mermaid\n  value={`graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;`}\n/>\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},67860:function(e,n,a){a.d(n,{Z:()=>s});var r=a("85893");a("67294");var t=a("90496");let i="tabItem_pnkT";function s(e){let{children:n,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i,s),hidden:a,children:n})}},46291:function(e,n,a){a.d(n,{Z:()=>v});var r=a("85893"),t=a("67294"),i=a("90496"),s=a("12451"),d=a("3620"),l=a("89637"),o=a("74417"),u=a("46918"),c=a("58247");function m(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var p=a("8903");let f="tabList_Qoir",g="tabItem_AQgk";function x(e){let{className:n,block:a,selectedValue:t,selectValue:d,tabValues:l}=e,o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{let n=e.currentTarget,a=l[o.indexOf(n)].value;a!==t&&(u(n),d(a))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{let a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n),children:l.map(e=>{let{value:n,label:a,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:m,onClick:c,...s,className:(0,i.Z)("tabs__item",g,s?.className,{"tabs__item--active":t===n}),children:a??n},n)})})}function j(e){let{lazy:n,children:a,selectedValue:s}=e,d=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=d.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:d.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:r}=e,i=function(e){let{values:n,children:a}=e;return(0,t.useMemo)(()=>{let e=n??m(a).map(e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[s,p]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=a.find(e=>e.default)??a[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[f,g]=function(e){let{queryString:n=!1,groupId:a}=e,r=(0,d.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),s=(0,o._X)(i);return[s,(0,t.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:a,groupId:r}),[x,j]=function(e){var n;let{groupId:a}=e;let r=(n=a)?`docusaurus.tab.${n}`:null,[i,s]=(0,c.Nk)(r);return[i,(0,t.useCallback)(e=>{if(!!r)s.set(e)},[r,s])]}({groupId:r}),b=(()=>{let e=f??x;return h({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{b&&p(b)},[b]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),j(e)},[g,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,r.jsx)(x,{...n,...e}),(0,r.jsx)(j,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,r.jsx)(b,{...e,children:m(e.children)},String(n))}},80980:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var r=a(67294);let t={},i=r.createContext(t);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);