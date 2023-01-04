import{_ as g,b as v,D as O,H as C,q as P,I as j,J as K,K as V,L as J,M as N,N as q}from"./Typography.1e60e37c.js";const U={black:"#000",white:"#fff"},T=U,G={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},p=G,Q={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},y=Q,X={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},$=X,Y={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},A=Y,Z={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},k=Z,e0={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},w=e0,t0={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},a0=t0;function r0(e,a){return g({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},a)}const n0=["mode","contrastThreshold","tonalOffset"],W={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:T.white,default:T.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},M={text:{primary:T.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:T.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function F(e,a,o,i){const s=i.light||i,c=i.dark||i*1.5;e[a]||(e.hasOwnProperty(o)?e[a]=e[o]:a==="light"?e.light=j(e.main,s):a==="dark"&&(e.dark=K(e.main,c)))}function i0(e="light"){return e==="dark"?{main:$[200],light:$[50],dark:$[400]}:{main:$[700],light:$[400],dark:$[800]}}function o0(e="light"){return e==="dark"?{main:y[200],light:y[50],dark:y[400]}:{main:y[500],light:y[300],dark:y[700]}}function s0(e="light"){return e==="dark"?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}function c0(e="light"){return e==="dark"?{main:A[400],light:A[300],dark:A[700]}:{main:A[700],light:A[500],dark:A[900]}}function f0(e="light"){return e==="dark"?{main:k[400],light:k[300],dark:k[700]}:{main:k[800],light:k[500],dark:k[900]}}function d0(e="light"){return e==="dark"?{main:w[400],light:w[300],dark:w[700]}:{main:"#ed6c02",light:w[500],dark:w[900]}}function u0(e){const{mode:a="light",contrastThreshold:o=3,tonalOffset:i=.2}=e,s=v(e,n0),c=e.primary||i0(a),n=e.secondary||o0(a),d=e.error||s0(a),u=e.info||c0(a),f=e.success||f0(a),x=e.warning||d0(a);function m(t){return C(t,M.text.primary)>=o?M.text.primary:W.text.primary}const l=({color:t,name:h,mainShade:b=500,lightShade:S=300,darkShade:z=700})=>{if(t=g({},t),!t.main&&t[b]&&(t.main=t[b]),!t.hasOwnProperty("main"))throw new Error(P(11,h?` (${h})`:"",b));if(typeof t.main!="string")throw new Error(P(12,h?` (${h})`:"",JSON.stringify(t.main)));return F(t,"light",S,i),F(t,"dark",z,i),t.contrastText||(t.contrastText=m(t.main)),t},D={dark:M,light:W};return O(g({common:g({},T),mode:a,primary:l({color:c,name:"primary"}),secondary:l({color:n,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:l({color:d,name:"error"}),warning:l({color:x,name:"warning"}),info:l({color:u,name:"info"}),success:l({color:f,name:"success"}),grey:a0,contrastThreshold:o,getContrastText:m,augmentColor:l,tonalOffset:i},D[a]),s)}const g0=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function l0(e){return Math.round(e*1e5)/1e5}const R={textTransform:"uppercase"},_='"Roboto", "Helvetica", "Arial", sans-serif';function h0(e,a){const o=typeof a=="function"?a(e):a,{fontFamily:i=_,fontSize:s=14,fontWeightLight:c=300,fontWeightRegular:n=400,fontWeightMedium:d=500,fontWeightBold:u=700,htmlFontSize:f=16,allVariants:x,pxToRem:m}=o,l=v(o,g0),D=s/14,I=m||(b=>`${b/f*D}rem`),t=(b,S,z,H,L)=>g({fontFamily:i,fontWeight:b,fontSize:I(S),lineHeight:z},i===_?{letterSpacing:`${l0(H/S)}em`}:{},L,x),h={h1:t(c,96,1.167,-1.5),h2:t(c,60,1.2,-.5),h3:t(n,48,1.167,0),h4:t(n,34,1.235,.25),h5:t(n,24,1.334,0),h6:t(d,20,1.6,.15),subtitle1:t(n,16,1.75,.15),subtitle2:t(d,14,1.57,.1),body1:t(n,16,1.5,.15),body2:t(n,14,1.43,.15),button:t(d,14,1.75,.4,R),caption:t(n,12,1.66,.4),overline:t(n,12,2.66,1,R)};return O(g({htmlFontSize:f,pxToRem:I,fontFamily:i,fontSize:s,fontWeightLight:c,fontWeightRegular:n,fontWeightMedium:d,fontWeightBold:u},h),l,{clone:!1})}const b0=.2,m0=.14,p0=.12;function r(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${b0})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${m0})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${p0})`].join(",")}const y0=["none",r(0,2,1,-1,0,1,1,0,0,1,3,0),r(0,3,1,-2,0,2,2,0,0,1,5,0),r(0,3,3,-2,0,3,4,0,0,1,8,0),r(0,2,4,-1,0,4,5,0,0,1,10,0),r(0,3,5,-1,0,5,8,0,0,1,14,0),r(0,3,5,-1,0,6,10,0,0,1,18,0),r(0,4,5,-2,0,7,10,1,0,2,16,1),r(0,5,5,-3,0,8,10,1,0,3,14,2),r(0,5,6,-3,0,9,12,1,0,3,16,2),r(0,6,6,-3,0,10,14,1,0,4,18,3),r(0,6,7,-4,0,11,15,1,0,4,20,3),r(0,7,8,-4,0,12,17,2,0,5,22,4),r(0,7,8,-4,0,13,19,2,0,5,24,4),r(0,7,9,-4,0,14,21,2,0,5,26,4),r(0,8,9,-5,0,15,22,2,0,6,28,5),r(0,8,10,-5,0,16,24,2,0,6,30,5),r(0,8,11,-5,0,17,26,2,0,6,32,5),r(0,9,11,-5,0,18,28,2,0,7,34,6),r(0,9,12,-6,0,19,29,2,0,7,36,6),r(0,10,13,-6,0,20,31,3,0,8,38,7),r(0,10,13,-6,0,21,33,3,0,8,40,7),r(0,10,14,-6,0,22,35,3,0,8,42,7),r(0,11,14,-7,0,23,36,3,0,9,44,8),r(0,11,15,-7,0,24,38,3,0,9,46,8)],$0=y0,A0=["duration","easing","delay"],k0={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},x0={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function B(e){return`${Math.round(e)}ms`}function w0(e){if(!e)return 0;const a=e/36;return Math.round((4+15*a**.25+a/5)*10)}function O0(e){const a=g({},k0,e.easing),o=g({},x0,e.duration);return g({getAutoHeightDuration:w0,create:(s=["all"],c={})=>{const{duration:n=o.standard,easing:d=a.easeInOut,delay:u=0}=c;return v(c,A0),(Array.isArray(s)?s:[s]).map(f=>`${f} ${typeof n=="string"?n:B(n)} ${d} ${typeof u=="string"?u:B(u)}`).join(",")}},e,{easing:a,duration:o})}const T0={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},S0=T0,v0=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function D0(e={},...a){const{mixins:o={},palette:i={},transitions:s={},typography:c={}}=e,n=v(e,v0);if(e.vars)throw new Error(P(18));const d=u0(i),u=V(e);let f=O(u,{mixins:r0(u.breakpoints,o),palette:d,shadows:$0.slice(),typography:h0(d,c),transitions:O0(s),zIndex:g({},S0)});return f=O(f,n),f=a.reduce((x,m)=>O(x,m),f),f}const I0=D0(),E=I0;function W0({props:e,name:a}){return J({props:e,name:a,defaultTheme:E})}const z0=e=>q(e)&&e!=="classes",M0=N({defaultTheme:E,rootShouldForwardProp:z0}),F0=M0;export{F0 as s,W0 as u};
