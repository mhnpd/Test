"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6030],{203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=r(5893),i=r(1151),o=r(5305),a=r(5888);const l={},n="Blocks",c={id:"components/blocks",title:"Blocks",description:"Props",source:"@site/docs/components/blocks.mdx",sourceDirName:"components",slug:"/components/blocks",permalink:"/react-loader-spinner/docs/components/blocks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/blocks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bars",permalink:"/react-loader-spinner/docs/components/bars"},next:{title:"Circles With Bar",permalink:"/react-loader-spinner/docs/components/circles-with-bar"}},p={},d=[{value:"Props",id:"props",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"blocks",children:"Blocks"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Blocks\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="blocks-loading"\n  wrapperStyle={{}}\n  wrapperClass="blocks-wrapper"\n/>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(o.Z,{properties:[...(0,a.oD)("blocks",["colors"])]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5888:(e,t,r)=>{r.d(t,{oD:()=>a});const s=e=>({height:`Specifies the height of the ${e} SVG. For additional customization, employ the wrapper className.`,width:`Specifies the width of the ${e} SVG. For further customization, utilize the wrapper className.`,colors:`Defines the colors of the ${e} SVG. Accepts multiple color objects. If a comprehensive list of colors is not provided, defaults will be applied. Refer to the example.`,color:`Sets the color of the ${e} SVG.`,ariaLabel:`Specifies the Aria label of the ${e}. This label will be applied to the aria-label attribute in the wrapper element.`,wrapperStyle:"Applies styles to the wrapper. It should be a valid CSS object and can be used for custom styling, overriding the default style.",wrapperClass:"Assigns a className to the wrapper for custom styling, overriding the default style.",visible:`Controls the visibility of the ${e}. If set to false, the ${e} will not be rendered.`,radius:`Determines the radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),i={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClass:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},o=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClass:"undefined",visible:"true"}),a=function(e,t){return void 0===t&&(t=[]),[{name:"height",type:i.height,default:o(e).height,description:s(e).height},{name:"width",type:i.width,default:o(e).width,description:s(e).width},{name:"colors",type:i.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:s(e).colors},{name:"ariaLabel",type:i.ariaLabel,default:o(e).ariaLabel,description:s(e).ariaLabel},{name:"wrapperStyle",type:i.wrapperStyle,default:o(e).wrapperStyle,description:s(e).wrapperStyle},{name:"wrapperClass",type:i.wrapperClass,default:o(e).wrapperClass,description:s(e).wrapperClass},{name:"visible",type:i.visible,default:o(e).visible,description:s(e).visible}].filter((e=>!t.includes(e.name)))}}}]);