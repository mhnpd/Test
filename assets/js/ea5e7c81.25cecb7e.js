"use strict";(self.webpackChunkrls_docs=self.webpackChunkrls_docs||[]).push([[963],{5888:(e,t,r)=>{r.d(t,{oD:()=>i});const s=e=>({height:"Height of the "+e+" SVG. For more customization, use the wrapper className.",width:"Width of the "+e+" SVG. For more customization, use the wrapper className. ",colors:"Colors of the "+e+" SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.",color:"Color of the "+e+" SVG.",ariaLabel:"Aria label of the "+e+". It will be used for the aria-label attribute in the wrapper element.",wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:"Specifies whether the "+e+" is visible or not. If set to false, the "+e+" will not be rendered.",radius:"Radius of the circle(s) in the "+e+" component. For further customization, use the wrapper className."}),o={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},a=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:e+"-loading",wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),i=function(e,t){return void 0===t&&(t=[]),[{name:"height",type:o.height,default:a(e).height,description:s(e).height},{name:"width",type:o.width,default:a(e).width,description:s(e).width},{name:"colors",type:o.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:s(e).colors},{name:"ariaLabel",type:o.ariaLabel,default:a(e).ariaLabel,description:s(e).ariaLabel},{name:"wrapperStyle",type:o.wrapperStyle,default:a(e).wrapperStyle,description:s(e).wrapperStyle},{name:"wrapperClassName",type:o.wrapperClassName,default:a(e).wrapperClassName,description:s(e).wrapperClassName},{name:"visible",type:o.visible,default:a(e).visible,description:s(e).visible}].filter((e=>!t.includes(e.name)))}},4357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var s=r(7462),o=(r(7294),r(3905)),a=r(2052),i=r(5888);const l={},n="Discuss",p={unversionedId:"components/discuss",id:"components/discuss",title:"Discuss",description:"Props",source:"@site/docs/components/discuss.mdx",sourceDirName:"components",slug:"/components/discuss",permalink:"/react-loader-spinner/docs/components/discuss",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Comment",permalink:"/react-loader-spinner/docs/components/comment"},next:{title:"DNA",permalink:"/react-loader-spinner/docs/components/dna"}},d={},c=[{value:"Props",id:"props",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discuss"},"Discuss"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Discuss\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="comment-loading"\n  wrapperStyle={{}}\n  wrapperClass="comment-wrapper"\n  color="#fff"\n  backgroundColor="#F4442E"\n/>\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(a.Z,{properties:[...(0,i.oD)("discuss",["colors"]),{name:"colors",type:"array",default:"['#ff727d', '#ff727d']",description:"The colors of the the rings"}],mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);