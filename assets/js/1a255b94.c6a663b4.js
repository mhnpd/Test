"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4442],{2780:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var a=t(5893),o=t(1151),i=t(5305),s=t(5888);const n={},l="Radio",d={id:"components/Radio",title:"Radio",description:"Props",source:"@site/docs/components/Radio.mdx",sourceDirName:"components",slug:"/components/Radio",permalink:"/mhnpd/react-loader-spinner/docs/components/Radio",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/Radio.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/mhnpd/react-loader-spinner/docs/category/components"},next:{title:"Audio",permalink:"/mhnpd/react-loader-spinner/docs/components/audio"}},p={},c=[{value:"Props",id:"props",level:2},{value:"More Example",id:"more-example",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"radio",children:"Radio"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Radio\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="radio-loading"\n  wrapperStyle={{}}\n  wrapperClass="radio-wrapper"\n/>\n'})}),"\n",(0,a.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(i.Z,{properties:[...(0,s.oD)("radio",["colors"]),{name:"colors",type:"object",default:"[#4fa94d, #4fa94d, #4fa94d]",description:"Customize colors of the component."}]}),"\n",(0,a.jsx)(r.h2,{id:"more-example",children:"More Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:"<Radio\n  colors={['#8C5E58', '#2B061E', '#361134']}\n/>\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:"<Radio\n  colors={['#51E5FF', '#7DE2D1', '#FF7E6B']}\n/>\n"})})]})}function m(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5888:(e,r,t)=>{t.d(r,{oD:()=>s});const a=e=>({height:`Height of the ${e} SVG. For more customization, use the wrapper className.`,width:`Width of the ${e} SVG. For more customization, use the wrapper className. `,colors:`Colors of the ${e} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,color:`Color of the ${e} SVG.`,ariaLabel:`Aria label of the ${e}. It will be used for the aria-label attribute in the wrapper element.`,wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:`Specifies whether the ${e} is visible or not. If set to false, the ${e} will not be rendered.`,radius:`Radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),o={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},i=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),s=function(e,r){return void 0===r&&(r=[]),[{name:"height",type:o.height,default:i(e).height,description:a(e).height},{name:"width",type:o.width,default:i(e).width,description:a(e).width},{name:"colors",type:o.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:a(e).colors},{name:"ariaLabel",type:o.ariaLabel,default:i(e).ariaLabel,description:a(e).ariaLabel},{name:"wrapperStyle",type:o.wrapperStyle,default:i(e).wrapperStyle,description:a(e).wrapperStyle},{name:"wrapperClassName",type:o.wrapperClassName,default:i(e).wrapperClassName,description:a(e).wrapperClassName},{name:"visible",type:o.visible,default:i(e).visible,description:a(e).visible}].filter((e=>!r.includes(e.name)))}}}]);