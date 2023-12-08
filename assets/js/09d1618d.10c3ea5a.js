"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9951],{1326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var s=a(5893),r=a(1151),i=a(5305),n=a(5888);const o={},l="MagnifyingGlass",p={id:"components/magnifying-glass",title:"MagnifyingGlass",description:"Props",source:"@site/docs/components/magnifying-glass.mdx",sourceDirName:"components",slug:"/components/magnifying-glass",permalink:"/react-loader-spinner/docs/components/magnifying-glass",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/magnifying-glass.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LineWave",permalink:"/react-loader-spinner/docs/components/line-wave"},next:{title:"Mutating Dots",permalink:"/react-loader-spinner/docs/components/mutating-dots"}},d={},c=[{value:"Props",id:"props",level:2}];function g(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"magnifyingglass",children:"MagnifyingGlass"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'<MagnifyingGlass\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="MagnifyingGlass-loading"\n  wrapperStyle={{}}\n  wrapperClass="MagnifyingGlass-wrapper"\n  glassColor = \'#c0efff\'\n  color = \'#e15b64\'\n/>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(i.Z,{properties:[...(0,n.oD)("magnifying-glass",["colors"]),{name:"glassColor",type:"string",default:"#c0efff",description:"Color of the magnifying glass lensed area"},{name:"color",type:"string",default:"#e15b64",description:"Color of the magnifying glass frame"}]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},5888:(e,t,a)=>{a.d(t,{oD:()=>n});const s=e=>({height:`Height of the ${e} SVG. For more customization, use the wrapper className.`,width:`Width of the ${e} SVG. For more customization, use the wrapper className. `,colors:`Colors of the ${e} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,color:`Color of the ${e} SVG.`,ariaLabel:`Aria label of the ${e}. It will be used for the aria-label attribute in the wrapper element.`,wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:`Specifies whether the ${e} is visible or not. If set to false, the ${e} will not be rendered.`,radius:`Radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),r={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},i=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),n=function(e,t){return void 0===t&&(t=[]),[{name:"height",type:r.height,default:i(e).height,description:s(e).height},{name:"width",type:r.width,default:i(e).width,description:s(e).width},{name:"colors",type:r.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:s(e).colors},{name:"ariaLabel",type:r.ariaLabel,default:i(e).ariaLabel,description:s(e).ariaLabel},{name:"wrapperStyle",type:r.wrapperStyle,default:i(e).wrapperStyle,description:s(e).wrapperStyle},{name:"wrapperClassName",type:r.wrapperClassName,default:i(e).wrapperClassName,description:s(e).wrapperClassName},{name:"visible",type:r.visible,default:i(e).visible,description:s(e).visible}].filter((e=>!t.includes(e.name)))}}}]);