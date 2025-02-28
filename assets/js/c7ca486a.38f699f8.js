"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["35836"],{87771:function(e,s,n){n.r(s),n.d(s,{PageRoute:()=>g,metadata:()=>t,frontMatter:()=>c,FilePath:()=>p,assets:()=>h,contentTitle:()=>d,URLPath:()=>u,default:()=>j,toc:()=>x});var t=JSON.parse('{"id":"advanced/routing","title":"Routing","description":"Docusaurus\' routing system follows single-page application conventions: one route, one component.","source":"@site/docs/advanced/routing.mdx","sourceDirName":"advanced","slug":"/advanced/routing","permalink":"/docs/advanced/routing","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/routing.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1740769799000,"frontMatter":{"description":"Docusaurus\' routing system follows single-page application conventions: one route, one component."},"sidebar":"docs","previous":{"title":"Plugins","permalink":"/docs/advanced/plugins"},"next":{"title":"Static site generation","permalink":"/docs/advanced/ssg"}}'),o=n(85893),r=n(80980);n(35363);var i=n(90158),a=n(3620),l=n(14522);let c={description:"Docusaurus' routing system follows single-page application conventions: one route, one component."},d="Routing",h={},u=()=>(0,o.jsx)("code",{children:(0,a.TH)().pathname}),p=()=>{let e=(0,i.Iw)("default").activeVersion.name;return(0,o.jsxs)("code",{children:["current"===e?"./docs/":`./versioned_docs/version-${e}/`,"advanced/routing.md"]})};function g(){let e=(0,a.TH)();return(0,o.jsxs)("span",{children:["We are currently on ",(0,o.jsx)("code",{children:e.pathname})]})}let x=[{value:"Routing in content plugins",id:"routing-in-content-plugins",level:2},{value:"Pages routing",id:"pages-routing",level:3},{value:"Blog routing",id:"blog-routing",level:3},{value:"Docs routing",id:"docs-routing",level:3},{value:"File paths and URL paths",id:"file-paths-and-url-paths",level:3},{value:"Routes become HTML files",id:"routes-become-html-files",level:2},{value:"Generating and accessing routes",id:"generating-and-accessing-routes",level:2},{value:"Escaping from SPA redirects",id:"escaping-from-spa-redirects",level:2}];function m(e){let s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"routing",children:"Routing"})}),"\n","\n",(0,o.jsx)(s.p,{children:"Docusaurus' routing system follows single-page application conventions: one route, one component. In this section, we will begin by talking about routing within the three content plugins (docs, blog, and pages), and then go beyond to talk about the underlying routing system."}),"\n",(0,o.jsx)(s.h2,{id:"routing-in-content-plugins",children:"Routing in content plugins"}),"\n",(0,o.jsxs)(s.p,{children:["Every content plugin provides a ",(0,o.jsx)(s.code,{children:"routeBasePath"})," option. It defines where the plugins append their routes to. By default, the docs plugin puts its routes under ",(0,o.jsx)(s.code,{children:"/docs"}),"; the blog plugin, ",(0,o.jsx)(s.code,{children:"/blog"}),"; and the pages plugin, ",(0,o.jsx)(s.code,{children:"/"}),". You can think about the route structure like this:"]}),"\n",(0,o.jsx)(s.mermaid,{value:'graph LR;\n    A(["https://example.com/"])\n    B(["/base-url/"])\n    C(["/docs/"])\n    D(["/blog/"])\n    E(["/"])\n    F["All docs <br/>routes"]\n    G["All blog <br/>routes"]\n    H["All pages <br/>routes"]\n    A---B;\n    B---C;\n    B---D;\n    B---E;\n    C---F;\n    D---G;\n    E---H;'}),"\n",(0,o.jsxs)(s.p,{children:["Any route will be matched against this nested route config until a good match is found. For example, when given a route ",(0,o.jsx)(s.code,{children:"/docs/configuration"}),", Docusaurus first enters the ",(0,o.jsx)(s.code,{children:"/docs"})," branch, and then searches among the subroutes created by the docs plugin."]}),"\n",(0,o.jsxs)(s.p,{children:["Changing ",(0,o.jsx)(s.code,{children:"routeBasePath"})," can effectively alter your site's route structure. For example, in ",(0,o.jsx)(s.a,{href:"/docs/docs-introduction#docs-only-mode",children:"Docs-only mode"}),", we mentioned that configuring ",(0,o.jsx)(s.code,{children:"routeBasePath: '/'"})," for docs means that all routes that the docs plugin create would not have the ",(0,o.jsx)(s.code,{children:"/docs"})," prefix, yet it doesn't prevent you from having more subroutes like ",(0,o.jsx)(s.code,{children:"/blog"})," created by other plugins."]}),"\n",(0,o.jsx)(s.p,{children:'Next, let\'s look at how the three plugins structure their own "boxes of subroutes".'}),"\n",(0,o.jsx)(s.h3,{id:"pages-routing",children:"Pages routing"}),"\n",(0,o.jsxs)(s.p,{children:["Pages routing are straightforward: the file paths directly map to URLs, without any other way to customize. See the ",(0,o.jsx)(s.a,{href:"/docs/creating-pages#routing",children:"pages docs"})," for more information."]}),"\n",(0,o.jsxs)(s.p,{children:["The component used for Markdown pages is ",(0,o.jsx)(s.code,{children:"@theme/MDXPage"}),". React pages are directly used as the route's component."]}),"\n",(0,o.jsx)(s.h3,{id:"blog-routing",children:"Blog routing"}),"\n",(0,o.jsx)(s.p,{children:"The blog creates the following routes:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Posts list pages"}),": ",(0,o.jsx)(s.code,{children:"/"}),", ",(0,o.jsx)(s.code,{children:"/page/2"}),", ",(0,o.jsx)(s.code,{children:"/page/3"}),"...","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["The route is customizable through the ",(0,o.jsx)(s.code,{children:"pageBasePath"})," option."]}),"\n",(0,o.jsxs)(s.li,{children:["The component is ",(0,o.jsx)(s.code,{children:"@theme/BlogListPage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Post pages"}),": ",(0,o.jsx)(s.code,{children:"/2021/11/21/algolia-docsearch-migration"}),", ",(0,o.jsx)(s.code,{children:"/2021/05/12/announcing-docusaurus-two-beta"}),"...","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Generated from each Markdown post."}),"\n",(0,o.jsxs)(s.li,{children:["The routes are fully customizable through the ",(0,o.jsx)(s.code,{children:"slug"})," front matter."]}),"\n",(0,o.jsxs)(s.li,{children:["The component is ",(0,o.jsx)(s.code,{children:"@theme/BlogPostPage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Tags list page"}),": ",(0,o.jsx)(s.code,{children:"/tags"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["The route is customizable through the ",(0,o.jsx)(s.code,{children:"tagsBasePath"})," option."]}),"\n",(0,o.jsxs)(s.li,{children:["The component is ",(0,o.jsx)(s.code,{children:"@theme/BlogTagsListPage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Tag pages"}),": ",(0,o.jsx)(s.code,{children:"/tags/adoption"}),", ",(0,o.jsx)(s.code,{children:"/tags/beta"}),"...","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Generated through the tags defined in each post's front matter."}),"\n",(0,o.jsxs)(s.li,{children:["The routes always have base defined in ",(0,o.jsx)(s.code,{children:"tagsBasePath"}),", but the subroutes are customizable through the tag's ",(0,o.jsx)(s.code,{children:"permalink"})," field."]}),"\n",(0,o.jsxs)(s.li,{children:["The component is ",(0,o.jsx)(s.code,{children:"@theme/BlogTagsPostsPage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Archive page"}),": ",(0,o.jsx)(s.code,{children:"/archive"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["The route is customizable through the ",(0,o.jsx)(s.code,{children:"archiveBasePath"})," option."]}),"\n",(0,o.jsxs)(s.li,{children:["The component is ",(0,o.jsx)(s.code,{children:"@theme/BlogArchivePage"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"docs-routing",children:"Docs routing"}),"\n",(0,o.jsxs)(s.p,{children:["The docs is the only plugin that creates ",(0,o.jsx)(s.strong,{children:"nested routes"}),". At the top, it registers ",(0,o.jsx)(s.a,{href:"/docs/versioning",children:(0,o.jsx)(s.strong,{children:"version paths"})}),": ",(0,o.jsx)(s.code,{children:"/"}),", ",(0,o.jsx)(s.code,{children:"/next"}),", ",(0,o.jsx)(s.code,{children:"/2.0.0-beta.13"}),"... which provide the version context, including the layout and sidebar. This ensures that when switching between individual docs, the sidebar's state is preserved, and that you can switch between versions through the navbar dropdown while staying on the same doc. The component used is ",(0,o.jsx)(s.code,{children:"@theme/DocPage"}),"."]}),"\n","\n","\n",(0,o.jsxs)(s.p,{children:["The individual docs are rendered in the remaining space after the navbar, footer, sidebar, etc. have all been provided by the ",(0,o.jsx)(s.code,{children:"DocPage"})," component. For example, this page, ",(0,o.jsx)(u,{}),", is generated from the file at ",(0,o.jsx)(p,{}),". The component used is ",(0,o.jsx)(s.code,{children:"@theme/DocItem"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["The doc's ",(0,o.jsx)(s.code,{children:"slug"})," front matter customizes the last part of the route, but the base route is always defined by the plugin's ",(0,o.jsx)(s.code,{children:"routeBasePath"})," and the version's ",(0,o.jsx)(s.code,{children:"path"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"file-paths-and-url-paths",children:"File paths and URL paths"}),"\n",(0,o.jsxs)(s.p,{children:["Throughout the documentation, we always try to be unambiguous about whether we are talking about file paths or URL paths. Content plugins usually map file paths directly to URL paths, for example, ",(0,o.jsx)(s.code,{children:"./docs/advanced/routing.md"})," will become ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing"}),". However, with ",(0,o.jsx)(s.code,{children:"slug"}),", you can make URLs totally decoupled from the file structure."]}),"\n",(0,o.jsxs)(s.p,{children:["When writing links in Markdown, you could either mean a ",(0,o.jsx)(s.em,{children:"file path"}),", or a ",(0,o.jsx)(s.em,{children:"URL path"}),", which Docusaurus would use several heuristics to determine."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["If the path has a ",(0,o.jsx)(s.code,{children:"@site"})," prefix, it is ",(0,o.jsx)(s.em,{children:"always"})," an asset file path."]}),"\n",(0,o.jsxs)(s.li,{children:["If the path has an ",(0,o.jsx)(s.code,{children:"http(s)://"})," prefix, it is ",(0,o.jsx)(s.em,{children:"always"})," a URL path."]}),"\n",(0,o.jsxs)(s.li,{children:["If the path doesn't have an extension, it is a URL path. For example, a link ",(0,o.jsx)(s.code,{children:"[page](../plugins)"})," on a page with URL ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing"})," will link to ",(0,o.jsx)(s.code,{children:"/docs/plugins"}),". Docusaurus will only detect broken links when building your site (when it knows the full route structure), but will make no assumptions about the existence of a file. It is exactly equivalent to writing ",(0,o.jsx)(s.code,{children:'<a href="../plugins">page</a>'})," in a JSX file."]}),"\n",(0,o.jsxs)(s.li,{children:["If the path has an ",(0,o.jsx)(s.code,{children:".md(x)"})," extension, Docusaurus would try to resolve that Markdown file to a URL, and replace the file path with a URL path."]}),"\n",(0,o.jsxs)(s.li,{children:["If the path has any other extension, Docusaurus would treat it as ",(0,o.jsx)(s.a,{href:"/docs/markdown-features/assets",children:"an asset"})," and bundle it."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"The following directory structure may help you visualize this file \u2192 URL mapping. Assume that there's no slug customization in any page."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"A sample site structure"}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 blog                            # blog plugin has routeBasePath: '/blog'\n\u2502   \u251C\u2500\u2500 2019-05-28-first-blog-post.md       # -> /blog/2019/05/28/first-blog-post\n\u2502   \u251C\u2500\u2500 2019-05-29-long-blog-post.md        # -> /blog/2019/05/29/long-blog-post\n\u2502   \u251C\u2500\u2500 2021-08-01-mdx-blog-post.mdx        # -> /blog/2021/08/01/mdx-blog-post\n\u2502   \u2514\u2500\u2500 2021-08-26-welcome\n\u2502       \u251C\u2500\u2500 docusaurus-plushie-banner.jpeg\n\u2502       \u2514\u2500\u2500 index.md                        # -> /blog/2021/08/26/welcome\n\u251C\u2500\u2500 docs                            # docs plugin has routeBasePath: '/docs'; current version has base path '/'\n\u2502   \u251C\u2500\u2500 intro.md                            # -> /docs/intro\n\u2502   \u251C\u2500\u2500 tutorial-basics\n\u2502   \u2502   \u251C\u2500\u2500 _category_.json\n\u2502   \u2502   \u251C\u2500\u2500 congratulations.md              # -> /docs/tutorial-basics/congratulations\n\u2502   \u2502   \u2514\u2500\u2500 markdown-features.mdx           # -> /docs/tutorial-basics/markdown-features\n\u2502   \u2514\u2500\u2500 tutorial-extras\n\u2502       \u251C\u2500\u2500 _category_.json\n\u2502       \u251C\u2500\u2500 manage-docs-versions.md         # -> /docs/tutorial-extras/manage-docs-versions\n\u2502       \u2514\u2500\u2500 translate-your-site.md          # -> /docs/tutorial-extras/translate-your-site\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages                       # pages plugin has routeBasePath: '/'\n\u2502       \u251C\u2500\u2500 index.module.css\n\u2502       \u251C\u2500\u2500 index.tsx                       # -> /\n\u2502       \u2514\u2500\u2500 markdown-page.md                # -> /markdown-page\n\u2514\u2500\u2500 versioned_docs\n    \u2514\u2500\u2500 version-1.0.0               # version has base path '/1.0.0'\n        \u251C\u2500\u2500 intro.md                        # -> /docs/1.0.0/intro\n        \u251C\u2500\u2500 tutorial-basics\n        \u2502   \u251C\u2500\u2500 _category_.json\n        \u2502   \u251C\u2500\u2500 congratulations.md          # -> /docs/1.0.0/tutorial-basics/congratulations\n        \u2502   \u2514\u2500\u2500 markdown-features.mdx       # -> /docs/1.0.0/tutorial-basics/markdown-features\n        \u2514\u2500\u2500 tutorial-extras\n            \u251C\u2500\u2500 _category_.json\n            \u251C\u2500\u2500 manage-docs-versions.md     # -> /docs/1.0.0/tutorial-extras/manage-docs-versions\n            \u2514\u2500\u2500 translate-your-site.md      # -> /docs/1.0.0/tutorial-extras/translate-your-site\n"})})]}),"\n",(0,o.jsx)(s.p,{children:"So much about content plugins. Let's take one step back and talk about how routing works in a Docusaurus app in general."}),"\n",(0,o.jsx)(s.h2,{id:"routes-become-html-files",children:"Routes become HTML files"}),"\n",(0,o.jsxs)(s.p,{children:["Because Docusaurus is a server-side rendering framework, all routes generated will be server-side rendered into static HTML files. If you are familiar with the behavior of HTTP servers like ",(0,o.jsx)(s.a,{href:"https://httpd.apache.org/docs/trunk/getting-started.html",children:"Apache2"}),", you will understand how this is done: when the browser sends a request to the route ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing"}),", the server interprets that as request for the HTML file ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing/index.html"}),", and returns that."]}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing"})," route can correspond to either ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing/index.html"})," or ",(0,o.jsx)(s.code,{children:"/docs/advanced/routing.html"}),". Some hosting providers differentiate between them using the presence of a trailing slash, and may or may not tolerate the other. Read more in the ",(0,o.jsx)(s.a,{href:"https://github.com/slorber/trailing-slash-guide",children:"trailing slash guide"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"For example, the build output of the directory above is (ignoring other assets and JS bundle):"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Output of the above workspace"}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"build\n\u251C\u2500\u2500 404.html                      # /404/\n\u251C\u2500\u2500 blog\n\u2502   \u251C\u2500\u2500 archive\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/archive/\n\u2502   \u251C\u2500\u2500 first-blog-post\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/first-blog-post/\n\u2502   \u251C\u2500\u2500 index.html                # /blog/\n\u2502   \u251C\u2500\u2500 long-blog-post\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/long-blog-post/\n\u2502   \u251C\u2500\u2500 mdx-blog-post\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/mdx-blog-post/\n\u2502   \u251C\u2500\u2500 tags\n\u2502   \u2502   \u251C\u2500\u2500 docusaurus\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /blog/tags/docusaurus/\n\u2502   \u2502   \u251C\u2500\u2500 hola\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /blog/tags/hola/\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /blog/tags/\n\u2502   \u2514\u2500\u2500 welcome\n\u2502       \u2514\u2500\u2500 index.html            # /blog/welcome/\n\u251C\u2500\u2500 docs\n\u2502   \u251C\u2500\u2500 1.0.0\n\u2502   \u2502   \u251C\u2500\u2500 intro\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /docs/1.0.0/intro/\n\u2502   \u2502   \u251C\u2500\u2500 tutorial-basics\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 congratulations\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-basics/congratulations/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 markdown-features\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-basics/markdown-features/\n\u2502   \u2502   \u2514\u2500\u2500 tutorial-extras\n\u2502   \u2502       \u251C\u2500\u2500 manage-docs-versions\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-extras/manage-docs-versions/\n\u2502   \u2502       \u2514\u2500\u2500 translate-your-site\n\u2502   \u2502           \u2514\u2500\u2500 index.html    # /docs/1.0.0/tutorial-extras/translate-your-site/\n\u2502   \u251C\u2500\u2500 intro\n\u2502   \u2502   \u2514\u2500\u2500 index.html            # /docs/1.0.0/intro/\n\u2502   \u251C\u2500\u2500 tutorial-basics\n\u2502   \u2502   \u251C\u2500\u2500 congratulations\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.html        # /docs/tutorial-basics/congratulations/\n\u2502   \u2502   \u2514\u2500\u2500 markdown-features\n\u2502   \u2502       \u2514\u2500\u2500 index.html        # /docs/tutorial-basics/markdown-features/\n\u2502   \u2514\u2500\u2500 tutorial-extras\n\u2502       \u251C\u2500\u2500 manage-docs-versions\n\u2502       \u2502   \u2514\u2500\u2500 index.html        # /docs/tutorial-extras/manage-docs-versions/\n\u2502       \u2514\u2500\u2500 translate-your-site\n\u2502           \u2514\u2500\u2500 index.html        # /docs/tutorial-extras/translate-your-site/\n\u251C\u2500\u2500 index.html                    # /\n\u2514\u2500\u2500 markdown-page\n    \u2514\u2500\u2500 index.html                # /markdown-page/\n"})})]}),"\n",(0,o.jsxs)(s.p,{children:["If ",(0,o.jsx)(s.code,{children:"trailingSlash"})," is set to ",(0,o.jsx)(s.code,{children:"false"}),", the build would emit ",(0,o.jsx)(s.code,{children:"intro.html"})," instead of ",(0,o.jsx)(s.code,{children:"intro/index.html"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["All HTML files will reference its JS assets using absolute URLs, so in order for the correct assets to be located, you have to configure the ",(0,o.jsx)(s.code,{children:"baseUrl"})," field. Note that ",(0,o.jsx)(s.code,{children:"baseUrl"})," doesn't affect the emitted bundle's file structure: the base URL is one level above the Docusaurus routing system. You can see the aggregate of ",(0,o.jsx)(s.code,{children:"url"})," and ",(0,o.jsx)(s.code,{children:"baseUrl"})," as the actual location of your Docusaurus site."]}),"\n",(0,o.jsxs)(s.p,{children:["For example, the emitted HTML would contain links like ",(0,o.jsx)(s.code,{children:'<link rel="preload" href="/assets/js/runtime~main.7ed5108a.js" as="script">'}),". Because absolute URLs are resolved from the host, if the bundle placed under the path ",(0,o.jsx)(s.code,{children:"https://example.com/base/"}),", the link will point to ",(0,o.jsx)(s.code,{children:"https://example.com/assets/js/runtime~main.7ed5108a.js"}),", which is, well, non-existent. By specifying ",(0,o.jsx)(s.code,{children:"/base/"})," as base URL, the link will correctly point to ",(0,o.jsx)(s.code,{children:"/base/assets/js/runtime~main.7ed5108a.js"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Localized sites have the locale as part of the base URL as well. For example, ",(0,o.jsx)(s.code,{children:"https://docusaurus.io/zh-CN/docs/advanced/routing/"})," has base URL ",(0,o.jsx)(s.code,{children:"/zh-CN/"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"generating-and-accessing-routes",children:"Generating and accessing routes"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"addRoute"})," lifecycle action is used to generate routes. It registers a piece of route config to the route tree, giving a route, a component, and props that the component needs. The props and the component are both provided as paths for the bundler to ",(0,o.jsx)(s.code,{children:"require"}),", because as explained in the ",(0,o.jsx)(s.a,{href:"/docs/advanced/architecture",children:"architecture overview"}),", server and client only communicate through temp files."]}),"\n",(0,o.jsxs)(s.p,{children:["All routes are aggregated in ",(0,o.jsx)(s.code,{children:".docusaurus/routes.js"}),", which you can view with the debug plugin's ",(0,o.jsx)(s.a,{href:"/__docusaurus/debug/routes",children:"routes panel"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["On the client side, we offer ",(0,o.jsx)(s.code,{children:"@docusaurus/router"})," to access the page's route. ",(0,o.jsx)(s.code,{children:"@docusaurus/router"})," is a re-export of the ",(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/react-router-dom/v/5.3.0",children:(0,o.jsx)(s.code,{children:"react-router-dom"})})," package. For example, you can use ",(0,o.jsx)(s.code,{children:"useLocation"})," to get the current page's ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location",children:"location"}),", and ",(0,o.jsx)(s.code,{children:"useHistory"})," to access the ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History",children:"history object"}),". (They are not the same as the browser API, although similar in functionality. Refer to the React Router documentation for specific APIs.)"]}),"\n",(0,o.jsxs)(s.p,{children:["This API is ",(0,o.jsx)(s.strong,{children:"SSR safe"}),", as opposed to the browser-only ",(0,o.jsx)(s.code,{children:"window.location"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-jsx",metastring:'title="myComponent.js"',children:"import React from 'react';\nimport {useLocation} from '@docusaurus/router';\n\nexport function PageRoute() {\n  // React router provides the current component's route, even in SSR\n  const location = useLocation();\n  return (\n    <span>\n      We are currently on <code>{location.pathname}</code>\n    </span>\n  );\n}\n"})}),"\n","\n",(0,o.jsx)(l.Z,{children:(0,o.jsx)(g,{})}),"\n",(0,o.jsx)(s.h2,{id:"escaping-from-spa-redirects",children:"Escaping from SPA redirects"}),"\n",(0,o.jsxs)(s.p,{children:["Docusaurus builds a ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/SPA",children:"single-page application"}),", where route transitions are done through the ",(0,o.jsx)(s.code,{children:"history.push()"})," method of React router. This operation is done on the client side. However, the prerequisite for a route transition to happen this way is that the target URL is known to our router. Otherwise, the router catches this path and displays a 404 page instead."]}),"\n",(0,o.jsxs)(s.p,{children:["If you put some HTML pages under the ",(0,o.jsx)(s.code,{children:"static"})," folder, they will be copied to the build output and therefore become accessible as part of your website, yet it's not part of the Docusaurus route system. We provide a ",(0,o.jsx)(s.code,{children:"pathname://"})," protocol that allows you to redirect to another part of your domain in a non-SPA fashion, as if this route is an external link."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-md",children:"- [pathname:///pure-html](pathname:///pure-html)\n"})}),"\n",(0,o.jsx)(l.Z,{children:(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"pathname:///pure-html",children:(0,o.jsx)(s.code,{children:"pathname:///pure-html"})})}),"\n"]})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"pathname://"})," protocol is useful for referencing any content in the static folder. For example, Docusaurus would convert ",(0,o.jsx)(s.a,{href:"/docs/markdown-features/assets#static-assets",children:"all Markdown static assets to require() calls"}),". You can use ",(0,o.jsx)(s.code,{children:"pathname://"})," to keep it a regular link instead of being hashed by Webpack."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-md",metastring:'title="my-doc.md"',children:"![An image from the static](pathname:///img/docusaurus.png)\n\n[An asset from the static](pathname:///files/asset.pdf)\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Docusaurus will only strip the ",(0,o.jsx)(s.code,{children:"pathname://"})," prefix without processing the content."]})]})}function j(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},14522:function(e,s,n){n.d(s,{Z:()=>a});var t=n(85893);n(67294);var o=n(90496);let r="dot_giz1",i="bar_rrRL";function a(e){let{children:s,minHeight:n,url:a="http://localhost:3000",style:l,bodyStyle:c}=e;return(0,t.jsxs)("div",{className:"browserWindow_my1Q",style:{...l,minHeight:n},children:[(0,t.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,t.jsxs)("div",{className:"buttons_uHc7",children:[(0,t.jsx)("span",{className:r,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:r,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:r,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,o.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:a}),(0,t.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:i}),(0,t.jsx)("span",{className:i}),(0,t.jsx)("span",{className:i})]})})]}),(0,t.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:s})]})}},80980:function(e,s,n){n.d(s,{Z:()=>a,a:()=>i});var t=n(67294);let o={},r=t.createContext(o);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);