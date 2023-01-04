import{a as X,g as Y,s as y,_ as n,u as Z,b as C,j as S,k as w,l as oo,f as eo,i as f,d as m,e as ro}from"./Typography.1e60e37c.js";import{r as b,a as no,j as L}from"./app.0b963a75.js";function ao(e){return Y("JoyLink",e)}const so=X("JoyLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","h5","h6","body1","body2","body3","startDecorator","endDecorator"]),_=so,to=["color","textColor"],io=["component","componentsProps","children","disabled","onBlur","onFocus","level","overlay","underline","variant","endDecorator","startDecorator"],lo=e=>{const{level:o,color:a,variant:r,underline:s,focusVisible:i,disabled:l}=e,t={root:["root",a&&`color${m(a)}`,l&&"disabled",i&&"focusVisible",o,s&&`underline${m(s)}`,r&&`variant${m(r)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return ro(t,ao,{})},F=y("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(e,o)=>o.startDecorator})({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"}),R=y("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(e,o)=>o.endDecorator})({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"}),V=y("a",{name:"JoyLink",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{var a,r,s,i,l,t,c;return[n({"--Icon-fontSize":"1.25em","--CircularProgress-size":"1em"},o.level&&o.level!=="inherit"&&e.typography[o.level],o.level==="inherit"&&{fontSize:"inherit",fontFamily:"inherit",lineHeight:"inherit"},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecorationLine:"underline"}},o.underline==="always"&&{textDecoration:"underline"},o.startDecorator&&{verticalAlign:"bottom"},{display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:e.vars.radius.xs,padding:0,textDecorationColor:`rgba(${(a=e.vars.palette[o.color])==null?void 0:a.mainChannel} / var(--Link-underlineOpacity, 0.72))`},o.variant?n({paddingInline:"0.25em"},!o.nested&&{marginInline:"-0.25em"}):{color:`rgba(${(r=e.vars.palette[o.color])==null?void 0:r.mainChannel} / 1)`,cursor:"pointer",[`&.${_.disabled}`]:{pointerEvents:"none",color:`rgba(${(s=e.vars.palette[o.color])==null?void 0:s.mainChannel} / 0.6)`}},{userSelect:"none",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},o.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--internal-action-radius, inherit)",margin:"var(--internal-action-margin)"},[`${e.focus.selector}`]:{"&::after":e.focus.default}}:{position:"relative",[e.focus.selector]:e.focus.default}),o.variant&&n({},(i=e.variants[o.variant])==null?void 0:i[o.color],{"&:hover":(l=e.variants[`${o.variant}Hover`])==null?void 0:l[o.color],"&:active":(t=e.variants[`${o.variant}Active`])==null?void 0:t[o.color],[`&.${_.disabled}`]:(c=e.variants[`${o.variant}Disabled`])==null?void 0:c[o.color]})]}),co=b.exports.forwardRef(function(o,a){const r=Z({props:o,name:"JoyLink"}),{color:s="primary",textColor:i}=r,l=C(r,to),t=b.exports.useContext(S),c=w(n({},l,{color:i})),{component:h="a",componentsProps:p={},children:I,disabled:J=!1,onBlur:x,onFocus:D,level:T="body1",overlay:z=!1,underline:B="hover",variant:j,endDecorator:g,startDecorator:$}=c,A=C(c,io),N=t?o.level||"inherit":T,{isFocusVisibleRef:k,onBlur:H,onFocus:U,ref:W}=oo(),[E,P]=b.exports.useState(!1),O=eo(a,W),M=d=>{H(d),k.current===!1&&P(!1),x&&x(d)},q=d=>{U(d),k.current===!0&&P(!0),D&&D(d)},u=n({},c,{color:s,component:h,disabled:J,focusVisible:E,underline:B,variant:j,level:N,overlay:z,nested:t}),v=lo(u),G=f({elementType:V,externalSlotProps:p.root,externalForwardedProps:A,additionalProps:{ref:O,as:h,onBlur:M,onFocus:q},ownerState:u,className:v.root}),K=f({elementType:F,externalSlotProps:p.startDecorator,ownerState:u,className:v.startDecorator}),Q=f({elementType:R,externalSlotProps:p.endDecorator,ownerState:u,className:v.endDecorator});return no(V,n({},G,{children:[$&&L(F,n({},K,{children:$})),I,g&&L(R,n({},Q,{children:g}))]}))}),vo=co;export{vo as J};
