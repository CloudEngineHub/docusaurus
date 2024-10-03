"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99175],{80207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});let s=JSON.parse('{"id":"api/plugin-methods/lifecycle-apis","title":"Lifecycle APIs","description":"During the build, plugins are loaded in parallel to fetch their own contents and render them to routes. Plugins may also configure webpack or post-process the generated files.","source":"@site/docs/api/plugin-methods/lifecycle-apis.mdx","sourceDirName":"api/plugin-methods","slug":"/api/plugin-methods/lifecycle-apis","permalink":"/docs/api/plugin-methods/lifecycle-apis","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/lifecycle-apis.mdx","tags":[],"version":"current","lastUpdatedBy":"Flix","lastUpdatedAt":1727958179000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"toc_max_heading_level":4},"sidebar":"api","previous":{"title":"Plugin Method References","permalink":"/docs/api/plugin-methods/"},"next":{"title":"Extending infrastructure","permalink":"/docs/api/plugin-methods/extend-infrastructure"}}');var i=t(62540),o=t(43023);let r={sidebar_position:1,toc_max_heading_level:4},a="Lifecycle APIs",d={},c=[{value:"<code>async loadContent()</code>",id:"loadContent",level:2},{value:"<code>async contentLoaded({content, actions})</code>",id:"contentLoaded",level:2},{value:"<code>content</code>",id:"content",level:3},{value:"<code>actions</code>",id:"actions",level:3},{value:"<code>addRoute(config: RouteConfig): void</code>",id:"addRoute",level:4},{value:"<code>createData(name: string, data: any): Promise&lt;string&gt;</code>",id:"createData",level:4},{value:"<code>setGlobalData(data: any): void</code>",id:"setGlobalData",level:4},{value:"<code>configureWebpack(config, isServer, utils, content)</code>",id:"configureWebpack",level:2},{value:"<code>config</code>",id:"config",level:3},{value:"<code>isServer</code>",id:"isServer",level:3},{value:"<code>utils</code>",id:"utils",level:3},{value:"<code>content</code>",id:"content-1",level:3},{value:"Merge strategy",id:"merge-strategy",level:3},{value:"Configuring dev server",id:"configuring-dev-server",level:3},{value:"<code>configurePostCss(options)</code>",id:"configurePostCss",level:2},{value:"<code>postBuild(props)</code>",id:"postBuild",level:2},{value:"<code>injectHtmlTags({content})</code>",id:"injectHtmlTags",level:2},{value:"<code>getClientModules()</code>",id:"getClientModules",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"lifecycle-apis",children:"Lifecycle APIs"})}),"\n",(0,i.jsx)(n.p,{children:"During the build, plugins are loaded in parallel to fetch their own contents and render them to routes. Plugins may also configure webpack or post-process the generated files."}),"\n",(0,i.jsx)(n.h2,{id:"loadContent",children:(0,i.jsx)(n.code,{children:"async loadContent()"})}),"\n",(0,i.jsx)(n.p,{children:"Plugins should use this lifecycle to fetch from data sources (filesystem, remote API, headless CMS, etc.) or do some server processing. The return value is the content it needs."}),"\n",(0,i.jsx)(n.p,{children:"For example, this plugin below returns a random integer between 1 and 10 as content."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    async loadContent() {\n      return 1 + Math.floor(Math.random() * 10);\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"contentLoaded",children:(0,i.jsx)(n.code,{children:"async contentLoaded({content, actions})"})}),"\n",(0,i.jsxs)(n.p,{children:["The data that was loaded in ",(0,i.jsx)(n.code,{children:"loadContent"})," will be consumed in ",(0,i.jsx)(n.code,{children:"contentLoaded"}),". It can be rendered to routes, registered as global data, etc."]}),"\n",(0,i.jsx)(n.h3,{id:"content",children:(0,i.jsx)(n.code,{children:"content"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"contentLoaded"})," will be called ",(0,i.jsx)(n.em,{children:"after"})," ",(0,i.jsx)(n.code,{children:"loadContent"})," is done. The return value of ",(0,i.jsx)(n.code,{children:"loadContent()"})," will be passed to ",(0,i.jsx)(n.code,{children:"contentLoaded"})," as ",(0,i.jsx)(n.code,{children:"content"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"actions",children:(0,i.jsx)(n.code,{children:"actions"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"actions"})," contain three functions:"]}),"\n",(0,i.jsx)(n.h4,{id:"addRoute",children:(0,i.jsx)(n.code,{children:"addRoute(config: RouteConfig): void"})}),"\n",(0,i.jsx)(n.p,{children:"Create a route to add to the website."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'export type RouteConfig = {\n  /**\n   * With leading slash. Trailing slash will be normalized by config.\n   */\n  path: string;\n  /**\n   * Component used to render this route, a path that the bundler can `require`.\n   */\n  component: string;\n  /**\n   * Props. Each entry should be `[propName]: pathToPropModule` (created with\n   * `createData`)\n   */\n  modules?: RouteModules;\n  /**\n   * The route context will wrap the `component`. Use `useRouteContext` to\n   * retrieve what\'s declared here. Note that all custom route context declared\n   * here will be namespaced under {@link RouteContext.data}.\n   */\n  context?: RouteModules;\n  /**\n   * Nested routes config, useful for "layout routes" having subroutes.\n   */\n  routes?: RouteConfig[];\n  /**\n   * React router config option: `exact` routes would not match subroutes.\n   */\n  exact?: boolean;\n  /**\n   * React router config option: `strict` routes are sensitive to the presence\n   * of a trailing slash.\n   */\n  strict?: boolean;\n  /**\n   * Used to sort routes.\n   * Higher-priority routes will be matched first.\n   */\n  priority?: number;\n  /**\n   * Optional route metadata\n   */\n  metadata?: RouteMetadata;\n  /**\n   * Extra props; will be available on the client side.\n   */\n  [propName: string]: unknown;\n};\n\n/**\n * Plugin authors can assign extra metadata to the created routes\n * It is only available on the Node.js side, and not sent to the browser\n * Optional: plugin authors are encouraged but not required to provide it\n *\n * Some plugins might use this data to provide additional features.\n * This is the case of the sitemap plugin to provide support for "lastmod".\n * See also: https://github.com/facebook/docusaurus/pull/9954\n */\nexport type RouteMetadata = {\n  /**\n   * The source code file path that led to the creation of the current route\n   * In official content plugins, this is usually a Markdown or React file\n   * This path is expected to be relative to the site directory\n   */\n  sourceFilePath?: string;\n  /**\n   * The last updated date of this route\n   * This is generally read from the Git history of the sourceFilePath\n   * but can also be provided through other means (usually front matter)\n   *\n   * This has notably been introduced for adding "lastmod" support to the\n   * sitemap plugin, see https://github.com/facebook/docusaurus/pull/9954\n   */\n  lastUpdatedAt?: number;\n};\n\ntype RouteModules = {\n  [module: string]: Module | RouteModules | RouteModules[];\n};\n\ntype Module =\n  | {\n      path: string;\n      __import?: boolean;\n      query?: ParsedUrlQueryInput;\n    }\n  | string;\n'})}),"\n",(0,i.jsx)(n.h4,{id:"createData",children:(0,i.jsx)(n.code,{children:"createData(name: string, data: any): Promise<string>"})}),"\n",(0,i.jsx)(n.p,{children:"A declarative callback to create static data (generally JSON or string) which can later be provided to your routes as props. Takes the file name and data to be stored, and returns the actual data file's path."}),"\n",(0,i.jsxs)(n.p,{children:["For example, this plugin below creates a ",(0,i.jsx)(n.code,{children:"/friends"})," page which displays ",(0,i.jsx)(n.code,{children:"Your friends are: Yangshun, Sebastien"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="website/src/components/Friends.js"',children:"import React from 'react';\n\nexport default function FriendsComponent({friends}) {\n  return <div>Your friends are {friends.join(',')}</div>;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-friends-plugin/src/index.js"',children:"export default function friendsPlugin(context, options) {\n  return {\n    name: 'docusaurus-friends-plugin',\n    // highlight-start\n    async contentLoaded({content, actions}) {\n      const {createData, addRoute} = actions;\n      // Create friends.json\n      const friends = ['Yangshun', 'Sebastien'];\n      const friendsJsonPath = await createData(\n        'friends.json',\n        JSON.stringify(friends),\n      );\n\n      // Add the '/friends' routes, and ensure it receives the friends props\n      addRoute({\n        path: '/friends',\n        component: '@site/src/components/Friends.js',\n        modules: {\n          // propName -> JSON file path\n          friends: friendsJsonPath,\n        },\n        exact: true,\n      });\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"setGlobalData",children:(0,i.jsx)(n.code,{children:"setGlobalData(data: any): void"})}),"\n",(0,i.jsx)(n.p,{children:"This function permits one to create some global plugin data that can be read from any page, including the pages created by other plugins, and your theme layout."}),"\n",(0,i.jsxs)(n.p,{children:["This data becomes accessible to your client-side/theme code through the ",(0,i.jsx)(n.a,{href:"/docs/docusaurus-core#useGlobalData",children:(0,i.jsx)(n.code,{children:"useGlobalData"})})," and ",(0,i.jsx)(n.a,{href:"/docs/docusaurus-core#usePluginData",children:(0,i.jsx)(n.code,{children:"usePluginData"})})," hooks."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Global data is... global: its size affects the loading time of all pages of your site, so try to keep it small. Prefer ",(0,i.jsx)(n.code,{children:"createData"})," and page-specific data whenever possible."]})}),"\n",(0,i.jsxs)(n.p,{children:["For example, this plugin below creates a ",(0,i.jsx)(n.code,{children:"/friends"})," page which displays ",(0,i.jsx)(n.code,{children:"Your friends are: Yangshun, Sebastien"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="website/src/components/Friends.js"',children:"import React from 'react';\nimport {usePluginData} from '@docusaurus/useGlobalData';\n\nexport default function FriendsComponent() {\n  const {friends} = usePluginData('docusaurus-friends-plugin');\n  return <div>Your friends are {friends.join(',')}</div>;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-friends-plugin/src/index.js"',children:"export default function friendsPlugin(context, options) {\n  return {\n    name: 'docusaurus-friends-plugin',\n    // highlight-start\n    async contentLoaded({content, actions}) {\n      const {setGlobalData, addRoute} = actions;\n      // Create friends global data\n      setGlobalData({friends: ['Yangshun', 'Sebastien']});\n\n      // Add the '/friends' routes\n      addRoute({\n        path: '/friends',\n        component: '@site/src/components/Friends.js',\n        exact: true,\n      });\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configureWebpack",children:(0,i.jsx)(n.code,{children:"configureWebpack(config, isServer, utils, content)"})}),"\n",(0,i.jsxs)(n.p,{children:["Modifies the internal webpack config. If the return value is a JavaScript object, it will be merged into the final config using ",(0,i.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",children:(0,i.jsx)(n.code,{children:"webpack-merge"})}),". If it is a function, it will be called and receive ",(0,i.jsx)(n.code,{children:"config"})," as the first argument and an ",(0,i.jsx)(n.code,{children:"isServer"})," flag as the second argument."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The API of ",(0,i.jsx)(n.code,{children:"configureWebpack"})," will be modified in the future to accept an object (",(0,i.jsx)(n.code,{children:"configureWebpack({config, isServer, utils, content})"}),")"]})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:(0,i.jsx)(n.code,{children:"config"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"configureWebpack"})," is called with ",(0,i.jsx)(n.code,{children:"config"})," generated according to client/server build. You may treat this as the base config to be merged with."]}),"\n",(0,i.jsx)(n.h3,{id:"isServer",children:(0,i.jsx)(n.code,{children:"isServer"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"configureWebpack"})," will be called both in server build and in client build. The server build receives ",(0,i.jsx)(n.code,{children:"true"})," and the client build receives ",(0,i.jsx)(n.code,{children:"false"})," as ",(0,i.jsx)(n.code,{children:"isServer"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"utils",children:(0,i.jsx)(n.code,{children:"utils"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"configureWebpack"})," also receives an util object:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getStyleLoaders(isServer: boolean, cssOptions: {[key: string]: any}): Loader[]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getJSLoader(isServer: boolean, cacheOptions?: {}): Loader | null"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You may use them to return your webpack configuration conditionally."}),"\n",(0,i.jsxs)(n.p,{children:["For example, this plugin below modify the webpack config to transpile ",(0,i.jsx)(n.code,{children:".foo"})," files."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    // highlight-start\n    configureWebpack(config, isServer, utils) {\n      const {getJSLoader} = utils;\n      return {\n        module: {\n          rules: [\n            {\n              test: /\\.foo$/,\n              use: [getJSLoader(isServer), 'my-custom-webpack-loader'],\n            },\n          ],\n        },\n      };\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"content-1",children:(0,i.jsx)(n.code,{children:"content"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"configureWebpack"})," will be called both with the content loaded by the plugin."]}),"\n",(0,i.jsx)(n.h3,{id:"merge-strategy",children:"Merge strategy"}),"\n",(0,i.jsxs)(n.p,{children:["We merge the Webpack configuration parts of plugins into the global Webpack config using ",(0,i.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",children:"webpack-merge"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It is possible to specify the merge strategy. For example, if you want a webpack rule to be prepended instead of appended:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      return {\n        // highlight-start\n        mergeStrategy: {'module.rules': 'prepend'},\n        module: {rules: [myRuleToPrepend]},\n        // highlight-end\n      };\n    },\n  };\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Read the ",(0,i.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge#merging-with-strategies",children:"webpack-merge strategy doc"})," for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"configuring-dev-server",children:"Configuring dev server"}),"\n",(0,i.jsxs)(n.p,{children:["The dev server can be configured through returning a ",(0,i.jsx)(n.code,{children:"devServer"})," field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      return {\n        // highlight-start\n        devServer: {\n          open: '/docs', // Opens localhost:3000/docs instead of localhost:3000/\n        },\n        // highlight-end\n      };\n    },\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configurePostCss",children:(0,i.jsx)(n.code,{children:"configurePostCss(options)"})}),"\n",(0,i.jsxs)(n.p,{children:["Modifies ",(0,i.jsxs)(n.a,{href:"https://webpack.js.org/loaders/postcss-loader/#postcssoptions",children:[(0,i.jsx)(n.code,{children:"postcssOptions"})," of ",(0,i.jsx)(n.code,{children:"postcss-loader"})]})," during the generation of the client bundle."]}),"\n",(0,i.jsxs)(n.p,{children:["Should return the mutated ",(0,i.jsx)(n.code,{children:"postcssOptions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"postcssOptions"})," looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const postcssOptions = {\n  ident: 'postcss',\n  plugins: [require('autoprefixer')],\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    configurePostCss(postcssOptions) {\n      // Appends new PostCSS plugin.\n      postcssOptions.plugins.push(require('postcss-import'));\n      return postcssOptions;\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"postBuild",children:(0,i.jsx)(n.code,{children:"postBuild(props)"})}),"\n",(0,i.jsx)(n.p,{children:"Called when a (production) build finishes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface Props {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n  headTags: string;\n  preBodyTags: string;\n  postBodyTags: string;\n  routesPaths: string[];\n  plugins: Plugin<any>[];\n  content: Content;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {\n      // Print out to console all the rendered routes.\n      routesPaths.map((route) => {\n        console.log(route);\n      });\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"injectHtmlTags",children:(0,i.jsx)(n.code,{children:"injectHtmlTags({content})"})}),"\n",(0,i.jsx)(n.p,{children:"Inject head and/or body HTML tags to Docusaurus generated HTML."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"injectHtmlTags"})," will be called both with the content loaded by the plugin."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function injectHtmlTags(): {\n  headTags?: HtmlTags;\n  preBodyTags?: HtmlTags;\n  postBodyTags?: HtmlTags;\n};\n\ntype HtmlTags = string | HtmlTagObject | (string | HtmlTagObject)[];\n\ntype HtmlTagObject = {\n  /**\n   * Attributes of the HTML tag\n   * E.g. `{'disabled': true, 'value': 'demo', 'rel': 'preconnect'}`\n   */\n  attributes?: {\n    [attributeName: string]: string | boolean;\n  };\n  /**\n   * The tag name e.g. `div`, `script`, `link`, `meta`\n   */\n  tagName: string;\n  /**\n   * The inner HTML\n   */\n  innerHTML?: string;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    loadContent: async () => {\n      return {remoteHeadTags: await fetchHeadTagsFromAPI()};\n    },\n    // highlight-start\n    injectHtmlTags({content}) {\n      return {\n        headTags: [\n          {\n            tagName: 'link',\n            attributes: {\n              rel: 'preconnect',\n              href: 'https://www.github.com',\n            },\n          },\n          ...content.remoteHeadTags,\n        ],\n        preBodyTags: [\n          {\n            tagName: 'script',\n            attributes: {\n              charset: 'utf-8',\n              src: '/noflash.js',\n            },\n          },\n        ],\n        postBodyTags: [`<div> This is post body </div>`],\n      };\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Tags will be added as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headTags"})," will be inserted before the closing ",(0,i.jsx)(n.code,{children:"</head>"})," tag after scripts added by config."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"preBodyTags"})," will be inserted after the opening ",(0,i.jsx)(n.code,{children:"<body>"})," tag before any child elements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"postBodyTags"})," will be inserted before the closing ",(0,i.jsx)(n.code,{children:"</body>"})," tag after all child elements."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getClientModules",children:(0,i.jsx)(n.code,{children:"getClientModules()"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an array of paths to the ",(0,i.jsx)(n.a,{href:"/docs/advanced/client#client-modules",children:"client modules"})," that are to be imported into the client bundle."]}),"\n",(0,i.jsxs)(n.p,{children:["As an example, to make your theme load a ",(0,i.jsx)(n.code,{children:"customCss"})," or ",(0,i.jsx)(n.code,{children:"customJs"})," file path from ",(0,i.jsx)(n.code,{children:"options"})," passed in by the user:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"export default function (context, options) {\n  const {customCss, customJs} = options || {};\n  return {\n    name: 'name-of-my-theme',\n    // highlight-start\n    getClientModules() {\n      return [customCss, customJs];\n    },\n    // highlight-end\n  };\n}\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(63696);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);