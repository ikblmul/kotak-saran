import{m as K,n as j,o as D,k as L,b as $,_ as b,c as M,f as O,p as V,q as W,r as G,C as J,t as z}from"./Typography.1e60e37c.js";import{r as a,j as A}from"./app.0b963a75.js";const Q=["className","component"];function X(C={}){const{defaultTheme:l,defaultClassName:s="MuiBox-root",generateClassName:m,styleFunctionSx:d=j}=C,F=K("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(d);return a.exports.forwardRef(function(h,e){const i=D(l),t=L(h),{className:f,component:p="div"}=t,u=$(t,Q);return A(F,b({as:p,ref:e,className:M(f,m?m(s):s),theme:i},u))})}const Y=a.exports.createContext(void 0),Z=Y;function ee(){return a.exports.useContext(Z)}function oe(C){const{defaultValue:l,disabled:s=!1,error:m=!1,onBlur:d,onChange:F,onFocus:B,required:c=!1,value:h}=C,e=ee();let i,t,f,p,u;if(e){var P,R,E;i=void 0,t=(P=e.disabled)!=null?P:!1,f=(R=e.error)!=null?R:!1,p=(E=e.required)!=null?E:!1,u=e.value}else i=l,t=s,f=m,p=c,u=h;const{current:N}=a.exports.useRef(u!=null),w=a.exports.useCallback(o=>{},[]),v=a.exports.useRef(null),S=O(v,w),[g,y]=a.exports.useState(!1);a.exports.useEffect(()=>{!e&&t&&g&&(y(!1),d==null||d())},[e,t,g,d]);const k=o=>r=>{var n;if(e!=null&&e.disabled){r.stopPropagation();return}if((n=o.onFocus)==null||n.call(o,r),e&&e.onFocus){var x;e==null||(x=e.onFocus)==null||x.call(e)}else y(!0)},q=o=>r=>{var n;(n=o.onBlur)==null||n.call(o,r),e&&e.onBlur?e.onBlur():y(!1)},H=o=>(r,...n)=>{var x,U;if(!N&&(r.target||v.current)==null)throw new Error(W(17));e==null||(x=e.onChange)==null||x.call(e,r),(U=o.onChange)==null||U.call(o,r,...n)},I=o=>r=>{var n;v.current&&r.currentTarget===r.target&&v.current.focus(),(n=o.onClick)==null||n.call(o,r)};return{disabled:t,error:f,focused:g,formControlContext:e,getInputProps:(o={})=>{const n=b({},{onBlur:d,onChange:F,onFocus:B},V(o)),x=b({},o,n,{onBlur:q(n),onChange:H(n),onFocus:k(n)});return b({},x,{"aria-invalid":f||void 0,defaultValue:i,ref:S,value:u,required:p,disabled:t})},getRootProps:(o={})=>{const r=V(C,["onBlur","onChange","onFocus"]),n=b({},r,V(o));return b({},o,n,{onClick:I(n)})},required:p,value:u}}const ne=X({defaultTheme:G,defaultClassName:"JoyBox-root",generateClassName:J.generate,styleFunctionSx:z}),de=ne,re=a.exports.createContext(void 0),te=re,ae=["aria-describedby","aria-label","aria-labelledby","autoComplete","autoFocus","className","defaultValue","disabled","error","id","name","onClick","onChange","onKeyDown","onKeyUp","onFocus","onBlur","placeholder","readOnly","required","type","value"];function ce(C,l){const s=a.exports.useContext(te),{"aria-describedby":m,"aria-label":d,"aria-labelledby":F,autoComplete:B,autoFocus:c,className:h,defaultValue:e,disabled:i,error:t,id:f,name:p,onClick:u,onChange:P,onKeyDown:R,onKeyUp:E,onFocus:N,onBlur:w,placeholder:v,readOnly:S,required:g,type:y,value:k}=C,q=$(C,ae),{getRootProps:H,getInputProps:I,focused:_,error:T,disabled:o}=oe({disabled:i!=null?i:s==null?void 0:s.disabled,defaultValue:e,error:t,onBlur:w,onClick:u,onChange:P,onFocus:N,required:g,value:k}),r={[l.disabled]:o,[l.error]:T,[l.focused]:_,[l.formControl]:Boolean(s),[h]:h},n={[l.disabled]:o};return b({formControl:s,propsToForward:{"aria-describedby":m,"aria-label":d,"aria-labelledby":F,autoComplete:B,autoFocus:c,disabled:o,id:f,onKeyDown:R,onKeyUp:E,name:p,placeholder:v,readOnly:S,type:y},rootStateClasses:r,inputStateClasses:n,getRootProps:H,getInputProps:I,focused:_,error:T,disabled:o},q)}export{de as B,te as F,ce as u};
