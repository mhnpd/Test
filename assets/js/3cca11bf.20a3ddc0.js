"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5612],{6077:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var o=t(5893),a=t(1151),s=t(5305),i=t(5888);const n={},l="Color Ring",p={id:"components/color-ring",title:"Color Ring",description:"Props",source:"@site/docs/components/color-ring.mdx",sourceDirName:"components",slug:"/components/color-ring",permalink:"/mhnpd/react-loader-spinner/docs/components/color-ring",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/color-ring.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Circles",permalink:"/mhnpd/react-loader-spinner/docs/components/circles"},next:{title:"Comment",permalink:"/mhnpd/react-loader-spinner/docs/components/comment"}},c={},d=[{value:"Props",id:"props",level:2},{value:"More example:",id:"more-example",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"color-ring",children:"Color Ring"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:"<ColorRing\n  visible={true}\n  height=\"80\"\n  width=\"80\"\n  ariaLabel=\"blocks-loading\"\n  wrapperStyle={{}}\n  wrapperClass=\"blocks-wrapper\"\n  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}\n/>\n"})}),"\n",(0,o.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(s.Z,{properties:[...(0,i.oD)("color-ring",["colors"]),{name:"colors",type:"array",default:'[\n      "#e15b64",\n      "#f47e60",\n      "#f8b26a",\n      "#abbd81",\n      "#849b87"\n      ]',description:"Array of colors to be used in the ring"}]}),"\n",(0,o.jsx)(r.h2,{id:"more-example",children:"More example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:"<ColorRing\n  visible={true}\n  height=\"80\"\n  width=\"80\"\n  ariaLabel=\"blocks-loading\"\n  wrapperStyle={{}}\n  wrapperClass=\"blocks-wrapper\"\n  colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}\n/>\n"})})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5888:(e,r,t)=>{t.d(r,{oD:()=>i});const o=e=>({height:`Height of the ${e} SVG. For more customization, use the wrapper className.`,width:`Width of the ${e} SVG. For more customization, use the wrapper className. `,colors:`Colors of the ${e} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,color:`Color of the ${e} SVG.`,ariaLabel:`Aria label of the ${e}. It will be used for the aria-label attribute in the wrapper element.`,wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:`Specifies whether the ${e} is visible or not. If set to false, the ${e} will not be rendered.`,radius:`Radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),a={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},s=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),i=function(e,r){return void 0===r&&(r=[]),[{name:"height",type:a.height,default:s(e).height,description:o(e).height},{name:"width",type:a.width,default:s(e).width,description:o(e).width},{name:"colors",type:a.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:o(e).colors},{name:"ariaLabel",type:a.ariaLabel,default:s(e).ariaLabel,description:o(e).ariaLabel},{name:"wrapperStyle",type:a.wrapperStyle,default:s(e).wrapperStyle,description:o(e).wrapperStyle},{name:"wrapperClassName",type:a.wrapperClassName,default:s(e).wrapperClassName,description:o(e).wrapperClassName},{name:"visible",type:a.visible,default:s(e).visible,description:o(e).visible}].filter((e=>!r.includes(e.name)))}}}]);